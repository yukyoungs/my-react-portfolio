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
            운영 데이터로 검증하며,
            <span className="block text-primary-600 mt-2">안정적인 서비스를 만드는 개발자</span>
          </h1>
          
          <div 
            ref={contentRef}
            className={`mt-12 space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-1000 delay-200 ${
              contentVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-left">
              인증·인가, 분산 트랜잭션, 성능 최적화처럼 겉으로 드러나지 않지만 서비스의 신뢰를 떠받치는 영역에 집중해 왔습니다.
            </p>
            <p className="text-left">
              실제 운영 중인 서비스에서는 운영 데이터를 직접 실측해 <strong className="text-gray-900">7일간 9,622건</strong> 규모의 자동승인 오탐 원인을 찾아 방어 게이트를 설계했고,
              수면 분석 MSA 프로젝트에서는 인덱싱 → 프로젝션 → 캐싱을 단계별로 측정하며 <strong className="text-gray-900">TPS를 31.5배</strong> 개선했습니다.
            </p>
            <p className="text-left">
              "동작하는 코드"를 넘어 "왜 그렇게 동작하는지"를 끝까지 확인하는 방식으로 일합니다.
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

