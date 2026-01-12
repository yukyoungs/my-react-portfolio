import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutMe = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [buttonRef, buttonVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about-me" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 ${
              titleVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
            }`}
          >
            복잡한 시스템을 견고하게 설계하고 운영하는
            <span className="block text-primary-600 mt-2">풀스택 지향 백엔드 엔지니어</span>
          </h1>
          
          <div 
            ref={contentRef}
            className={`mt-12 space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-1000 delay-200 ${
              contentVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-left">
              저는 <strong className="text-gray-900">마이크로서비스 아키텍처(MSA)</strong>와{' '}
              <strong className="text-gray-900">이벤트 주도 아키텍처(EDA)</strong> 기반으로 
              고가용성 서비스를 구축하는 데 특화된 백엔드 엔지니어입니다.
            </p>
            
            <p className="text-left">
              <strong className="text-gray-900">Spring Boot</strong>를 주력으로 활용하여{' '}
              <strong className="text-gray-900">MSA 기반 서비스 개발</strong>, 
              데이터 저장 전략 설계(Polyglot Persistence),{' '}
              <strong className="text-gray-900">성능 최적화(인덱싱, 캐싱)</strong>, 
              <strong className="text-gray-900">RDB(MySQL, PostgreSQL)</strong>와{' '}
              <strong className="text-gray-900">NoSQL(MongoDB, Redis)</strong>을 활용한 데이터 모델링 및 개발,{' '}
              <strong className="text-gray-900">RESTful API 설계 및 서비스 연동</strong>,{' '}
              <strong className="text-gray-900">대용량 데이터 처리</strong> 경험을 보유하고 있습니다.
            </p>
            
            <p className="text-left">
              <strong className="text-gray-900">CI/CD 파이프라인 구축</strong>(GitHub Actions)과{' '}
              <strong className="text-gray-900">코드 리뷰</strong>(GitHub Pull Request),{' '}
              <strong className="text-gray-900">협업 도구</strong>(Jira) 활용 경험을 바탕으로, 
              안정성과 확장성을 고려한 아키텍처 설계 및 비즈니스 변화에 민첩하게 대응할 수 있습니다.
            </p>
            
            <p className="text-left">
              또한, React를 활용한 백오피스 시스템 개발 경험을 보유하여, 
              반복적인 업무를 자동화하고 생산성을 높이는 다양한 백오피스 시스템을 개발할 수 있습니다.
            </p>
          </div>

          <div 
            ref={buttonRef}
            className={`mt-12 transition-all duration-1000 delay-300 ${
              buttonVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-110 shadow-xl hover:shadow-2xl border-2"
              style={{ backgroundColor: '#4b5563', color: '#ffffff', borderColor: '#374151' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#374151';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563';
              }}
            >
              연락하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

