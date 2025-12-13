const TechStack = () => {
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
      core: 'MongoDB (대용량/비정형 데이터), MySQL (Cloud SQL), PostgreSQL, Redis (Cache, Session), TSID',
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
    <section id="tech-stack" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            보유한 기술 스택을 분야별로 정리했습니다
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold text-lg border-r border-primary-500">
                    분야
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-lg border-r border-primary-500">
                    핵심 기술 (Core)
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-lg">
                    숙련 기술 (Skilled)
                  </th>
                </tr>
              </thead>
              <tbody>
                {techData.map((tech, index) => (
                  <tr
                    key={tech.category}
                    className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-5 font-semibold text-gray-900 border-r border-gray-200 align-top w-32">
                      {tech.category}
                    </td>
                    <td className="px-6 py-5 text-gray-700 border-r border-gray-200 align-top">
                      {tech.core.split(', ').map((item, i) => (
                        <span
                          key={i}
                          className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-md text-sm font-medium mr-2 mb-2"
                        >
                          {item}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-5 text-gray-700 align-top">
                      {tech.skilled ? (
                        tech.skilled.split(', ').map((item, i) => (
                          <span
                            key={i}
                            className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm font-medium mr-2 mb-2"
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

