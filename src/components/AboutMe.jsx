const AboutMe = () => {
  return (
    <section id="about-me" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            복잡한 시스템을 견고하게 설계하고 운영하는
            <span className="block text-primary-600 mt-2">풀스택 지향 백엔드 엔지니어</span>
          </h1>
          
          <div className="mt-12 space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p className="text-left">
              저는 <strong className="text-gray-900">마이크로서비스 아키텍처(MSA)</strong>와{' '}
              <strong className="text-gray-900">이벤트 주도 아키텍처(EDA)</strong> 기반으로 
              고가용성 서비스를 구축하는 데 특화된 백엔드 엔지니어입니다.
            </p>
            
            <p className="text-left">
              <strong className="text-gray-900">Spring Boot</strong>를 주력으로 활용하여{' '}
              <strong className="text-gray-900">분산 트랜잭션(Saga Pattern)</strong> 관리, 
              대용량 실시간 데이터 파이프라인 연동, <strong className="text-gray-900">FastAPI</strong>를 통한 
              AI 모델(TensorFlow, Azure OpenAI) 연동 경험을 보유하고 있습니다.
            </p>
            
            <p className="text-left">
              또한, React와 Flutter를 활용하여 사용자 친화적인 웹/모바일 UI를 직접 구현할 수 있는 
              풀스택 역량을 바탕으로, 시스템의{' '}
              <strong className="text-gray-900">프론트엔드부터 인프라, 백엔드 로직까지</strong> 깊이 있게 이해하고 문제를 해결합니다.
            </p>
          </div>

          <div className="mt-12">
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
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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

