import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechStack = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });
  
  const techData = [
    {
      category: 'Backend',
      core: 'Spring Boot 3.x (Java 17), REST API, JPA, QueryDSL, Spring Security, gRPC',
      skilled: 'Node.js, FastAPI',
      experienced: '',
    },
    {
      category: 'Architecture',
      core: 'MSA (Microservice Architecture), Event-Driven Architecture (EDA), Saga Pattern (분산 트랜잭션), DDD (Domain-Driven Design)',
      skilled: '',
      experienced: '',
    },
    {
      category: 'Data & DB',
      core: 'MongoDB (대용량/비정형 데이터), MySQL (Cloud SQL), PostgreSQL, Redis (Cache/Session), TSID',
      skilled: '',
      experienced: '',
    },
    {
      category: 'Frontend',
      core: 'React (웹), Flutter (앱), TypeScript, Next.js 16 (App Router)',
      skilled: 'React Query, Zustand, Tailwind CSS, Recharts, HTML/CSS',
      experienced: '',
    },
    {
      category: 'AI/ML',
      core: 'FastAPI (AI 서버 연동), TensorFlow 2.x, EfficientNet B0, YAMNet, Azure OpenAI (GPT-4)',
      skilled: '',
      experienced: '',
    },
    {
      category: 'DevOps & Infra',
      core: 'Docker, Kubernetes (GKE), Prometheus, Grafana, Terraform (IaC), ArgoCD (GitOps), AWS S3 (Presigned URL)',
      skilled: 'GCP (Cloud SQL, Memorystore, GKE), Jenkins, Sentry',
      experienced: '',
    },
  ];

  return (
    <section id="tech-stack" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 transition-all duration-1000 ${
            sectionVisible ? 'fade-in-down animate-visible' : 'opacity-0 -translate-y-8'
          }`}>
            Tech Stack
          </h2>
          <p className={`text-center text-gray-600 mb-12 text-lg transition-all duration-1000 delay-100 ${
            sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
          }`}>
            보유한 기술 스택을 분야별로 정리했습니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techData.map((tech, index) => (
              <div
                key={tech.category}
                className={`bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-all duration-500 hover:shadow-xl hover-lift ${
                  sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-primary-600">
                  {tech.category}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary-700 mb-2 uppercase tracking-wide">
                      핵심 기술 (Core)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.core && tech.core.trim() ? (
                        tech.core.split(', ').map((item, i) => (
                          <span
                            key={i}
                            className="inline-block bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-110 hover:shadow-md hover:bg-blue-700 border border-blue-700"
                            style={{ backgroundColor: '#0284c7', color: '#ffffff' }}
                          >
                            {item.trim()}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400 text-sm">-</span>
                      )}
                    </div>
                  </div>
                  
                  {tech.skilled && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        숙련 기술 (Skilled)
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.skilled.split(', ').map((item, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-110 hover:shadow-md"
                            style={{ backgroundColor: '#e5e7eb', color: '#1f2937' }}
                          >
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

