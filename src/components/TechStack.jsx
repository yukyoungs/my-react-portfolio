import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechStack = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });
  
  const techData = [
    {
      category: 'Backend',
      core: 'Java 17, Spring Boot 3.x, Spring Security, Spring Session, JPA, QueryDSL, REST API',
      skilled: 'gRPC, WebSocket, FastAPI (AI 서버 연동), Node.js, Azure OpenAI',
      experienced: '',
    },
    {
      category: 'Architecture',
      core: 'MSA, Saga Pattern (Orchestrator), Outbox Pattern, DDD + UseCase',
      skilled: '',
      experienced: '',
    },
    {
      category: 'Data & DB',
      core: 'MySQL, PostgreSQL, MongoDB, Redis (Cache / Session)',
      skilled: '',
      experienced: '',
    },
    {
      category: 'DevOps & Infra',
      core: 'Docker, GitHub Actions (CI/CD), AWS (EC2 · RDS · S3), Nginx, Prometheus, Grafana',
      skilled: '',
      experienced: '',
      note: '팀 프로젝트 인프라 경험 (팀원 구축): Kubernetes (GKE), Terraform, ArgoCD, Kafka · Debezium',
    },
    {
      category: 'Frontend',
      core: '',
      skilled: '',
      experienced: 'React, Flutter, TypeScript, Next.js, TanStack Query, Zustand, Tailwind CSS',
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
                  {tech.core && (
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
                  )}
                  
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

                  {tech.experienced && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        경험 있음 (Experienced)
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.experienced.split(', ').map((item, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-110 hover:shadow-md border"
                            style={{ backgroundColor: '#ffffff', color: '#374151', borderColor: '#d1d5db' }}
                          >
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {tech.note && (
                    <p className="text-xs text-gray-500">{tech.note}</p>
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

