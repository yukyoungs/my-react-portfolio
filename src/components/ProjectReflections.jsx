import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectReflections = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });

  const reflections = [
    {
      id: 3,
      title: 'mong (몽) - 수면 분석 플랫폼',
      subtitle: 'Backend/MSA/EDA',
      period: '2025.09.02 ~ 2025.10.17',
      reflection: '수면 분석 서비스의 백엔드 개발에 참여하면서, 단순한 기능 구현을 넘어 실제 서비스 환경의 안정적인 운영을 위한 아키텍처를 깊이 고민하는 귀중한 경험을 했습니다. Spring Boot를 주력으로 활용하여 수집된 수면 데이터를 처리하고, 이를 사용자에게 의미 있는 분석 결과로 제공하는 API를 설계 및 구현했습니다.\n\n이 프로젝트에서 가장 중요하게 다룬 부분은 MSA 환경에서의 데이터 일관성과 성능 최적화였습니다. 트래픽 패턴을 분석하여 저녁 시간대 쓰기 요청과 낮 시간대 조회 요청을 분리하여 독립적인 서비스로 구성했습니다. 이를 통해 시간대별 트래픽에 따라 쓰기/조회 서비스를 선택적으로 확장/축소하여 자원 효율성을 높이고, 데이터베이스 락 경합을 줄여 조회 성능을 안정적으로 유지할 수 있었습니다.\n\n또한 MSA 환경에서 분산 트랜잭션의 복잡성을 직접 경험하며, Saga 패턴을 통해 서비스 간 데이터 정합성을 보장하는 방법을 학습했습니다. 회원 탈퇴와 같은 복잡한 비즈니스 시나리오에서 5개의 마이크로서비스 간 데이터 일관성을 보장하기 위해 Saga Orchestrator를 구현하고, Outbox 패턴을 적용하여 이벤트 기반 통신의 신뢰성을 확보했습니다. 이 과정에서 각 서비스별 보상(Compensation) 트랜잭션을 설계하여 실패 시 롤백이 가능하도록 구현하면서, 분산 시스템에서의 데이터 일관성 관리의 중요성을 깊이 이해할 수 있었습니다.\n\nCI/CD 파이프라인을 구축한 것도 의미 있는 경험이었습니다. GitHub Actions를 통한 CI 파이프라인으로 컨테이너 이미지를 빌드하고 Container Registry에 업로드하는 자동화된 빌드 프로세스를 구축했습니다. 이를 통해 배포 프로세스의 자동화와 안정성을 확보할 수 있었습니다.\n\nAI 데이터 파이프라인과의 연동도 중요한 부분이었습니다. MNE 라이브러리를 활용하여 EEG 데이터를 전처리하고, 전이학습과 파인튜닝을 적용한 AI 모델로 수면 단계를 판별하는 과정을 백엔드에서 지원했습니다. Azure OpenAI Agent를 활용하여 수면 리포트의 분석 내용과 개선 방안을 생성하는 로직을 구현하면서, AI 서비스와의 통합 방식을 깊이 이해할 수 있었습니다.\n\n성능 최적화와 관찰성(Observability) 확보에도 중점을 두었습니다. Prometheus를 통해 시스템 메트릭을 수집하고 Grafana 대시보드를 구축하여 실시간 부하 테스트 결과를 시각적으로 모니터링했습니다. 이를 기반으로 MongoDB 인덱싱 전략을 수립하고 Redis 캐싱을 도입하여 데이터 조회 성능을 개선했습니다. Polyglot Persistence 전략을 통해 대용량 시계열 수면 데이터는 MongoDB에, 관계형 데이터는 MySQL에 분리 저장하여 각 데이터베이스의 장점을 최대한 활용했습니다.\n\n이 프로젝트를 통해 MSA 아키텍처, 분산 트랜잭션 처리, CI/CD 자동화, AI 서비스 통합 등 엔터프라이즈급 백엔드 시스템의 핵심 기술들을 종합적으로 경험할 수 있었습니다. 앞으로도 트래픽과 데이터 증가를 고려한 성능 최적화와 안정적인 데이터 처리를 중심으로, 시스템의 신뢰도를 높이는 백엔드 개발자로 성장해 나가겠습니다.',
    },
    {
      id: 4,
      title: '카카오워크 챗봇 관리 플랫폼',
      subtitle: 'Vitamin 7 (Backend/SaaS)',
      period: '2025.10.27 ~ 2025.12.11',
      reflection: '카카오워크 챗봇 관리 플랫폼(Vitamin 7)의 백엔드 개발을 통해 SaaS형 멀티테넌트 아키텍처와 실시간 통신 시스템을 구축하는 경험을 했습니다. Spring Boot를 기반으로 여러 기업이 동일한 인프라를 공유하면서도 데이터가 완전히 격리되는 안전한 멀티테넌트 시스템을 설계 및 구현했습니다.\n\n이 프로젝트에서 가장 중요하게 다룬 부분은 데이터 격리와 보안이었습니다. 회사 → 그룹 계층 구조와 top_group_id 기반의 권한별 데이터 격리 로직을 구현하여, 각 테넌트의 데이터가 절대 섞이지 않도록 보장했습니다. Spring Session과 Redis를 활용한 세션 관리 시스템을 구축하고, RBAC(Role-Based Access Control)을 구현하여 사용자별 권한에 따른 세밀한 접근 제어를 실현했습니다. 이러한 경험을 통해 단순히 기능을 구현하는 것을 넘어, 엔터프라이즈급 보안 요구사항을 만족시키는 아키텍처 설계 역량을 기를 수 있었습니다.\n\n실시간 RAG 챗봇 통신 파이프라인 구축 과정에서도 많은 것을 배웠습니다. 사용자 요청을 WebSocket으로 받아 AI 서버에 gRPC를 통해 고성능으로 전달하고, 응답을 Webhook을 통해 되돌려주는 복잡한 메시지 처리 파이프라인을 구현했습니다. 이 과정에서 WebSocket의 양방향 통신 특성과 gRPC의 고성능 RPC 통신을 결합하여, 실시간성이 중요한 챗봇 서비스의 요구사항을 효율적으로 해결할 수 있었습니다. 특히 비동기 메시지 처리와 연결 상태 관리의 복잡성을 직접 경험하며, 실시간 시스템의 안정성을 확보하는 방법을 학습했습니다.\n\n대용량 파일 처리 최적화를 위해 AWS S3 Presigned URL 시스템을 도입한 것도 의미 있는 경험이었습니다. 서버 부하를 줄이기 위해 클라이언트가 S3에 직접 업로드할 수 있는 Presigned URL 발급 로직을 구현하면서, 서버 리소스 절약과 사용자 경험 개선을 동시에 달성할 수 있었습니다. 또한 Presentation → Application → Domain 계층 구조와 UseCase 패턴을 적용하여 비즈니스 로직의 명확성을 높이고, QueryDSL을 활용한 쿼리 최적화를 통해 데이터베이스 성능을 개선했습니다.\n\n이 프로젝트를 통해 SaaS 서비스의 핵심인 멀티테넌트 아키텍처와 보안, 실시간 통신 시스템을 종합적으로 경험할 수 있었습니다. 앞으로도 확장 가능하고 안전한 엔터프라이즈급 백엔드 시스템을 설계하고 구현하는 역량을 지속적으로 발전시켜 나가겠습니다.',
    },
  ];

  return (
    <section id="reflections" className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 transition-all duration-1000 ${
            sectionVisible ? 'fade-in-down animate-visible' : 'opacity-0 -translate-y-8'
          }`}>
            프로젝트 소회
          </h2>
          <p className={`text-center text-gray-600 mb-12 text-lg transition-all duration-1000 delay-100 ${
            sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
          }`}>
            프로젝트를 통해 배우고 성장한 경험을 공유합니다
          </p>

          <div className="space-y-8">
            {reflections.map((reflection, index) => (
              <div
                key={reflection.id}
                className={`bg-white rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-500 hover:shadow-2xl ${
                  sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">📝</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {reflection.title}
                      </h3>
                      <p className="text-primary-600 font-semibold text-sm mt-1">
                        {reflection.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm ml-11">
                    {reflection.period}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {reflection.reflection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectReflections;



