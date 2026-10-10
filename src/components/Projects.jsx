import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// 이미지 로드 실패 시 placeholder를 보여주는 컴포넌트
const ProjectImage = ({ src, alt, projectId }) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold" style={{ background: 'linear-gradient(to bottom right, #0ea5e9, #0369a1)' }}>
        #{projectId}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });

  // 모달이 열릴 때 body 스크롤 잠금 및 ESC 키로 닫기
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: 'MONG (몽) — EEG 기반 수면 분석 MSA 플랫폼',
      subtitle: 'Backend / MSA / 분산 트랜잭션 · 🏆 SW아카데미 우수 표창',
      description: '뇌파(EEG)와 소리 데이터를 실시간으로 수집·분석해 수면 패턴을 측정하고 개인화된 개선 방안을 제공하는 AI 헬스케어 플랫폼입니다. Auth · User · Sleep · Analysis · Saga 5개 서비스로 분리한 MSA 구조입니다.',
      role: '백엔드 — MSA·분산 아키텍처 구현, 회원 탈퇴 로직 주도',
      period: '2025.09.02 ~ 2025.10.17 · 8인 팀',
      highlights: [
        '5개 서비스에 걸친 회원 탈퇴를 Saga Orchestrator + Outbox 패턴으로 설계, 서비스별 보상 트랜잭션 정의',
        '인덱싱 → 프로젝션 → 캐싱(Caffeine L1 + Redis L2 + ETag) 단계적 적용, Ngrinder 1,000 Vusers 기준 TPS 56.2 → 1,767.9 (31.5배), 평균 응답 9,365ms → 105.6ms (98.9% 감소)',
        '시계열 데이터는 MongoDB, 관계형 데이터는 MySQL로 분리하는 Polyglot Persistence 설계',
      ],
      techStack: ['Spring Boot 3.x', 'MongoDB Atlas', 'MySQL', 'Redis', 'FastAPI', 'Prometheus', 'Grafana', 'Docker'],
      image: '/images/projects/project3.png', // 여기에 이미지 경로 추가
      architectureImage: '/images/projects/project3-architecture.png', // 시스템 아키텍처 다이어그램
      performanceTable: {
        note: '측정 조건: Ngrinder 부하테스트, Total Vusers 1,000, 3분 기준, 로컬 환경, Prometheus + Grafana 모니터링',
        rows: [
          { metric: 'TPS', before: '56.2', after: '1,767.9', change: '31.5배 증가' },
          { metric: 'Peak TPS', before: '342.0', after: '3,195.0', change: '9.3배 증가' },
          { metric: 'Mean Test Time', before: '9,365.33 ms', after: '105.60 ms', change: '98.9% 감소' },
          { metric: 'Errors', before: '0', after: '0', change: '오류 없음 유지' },
        ],
      },
      details: [
        '회원 탈퇴 로직 구현 및 분산 트랜잭션 처리 (Saga Pattern): 회원 탈퇴 기능을 주도적으로 담당하며 MSA 환경에서의 데이터 정합성 문제를 깊이 고민했습니다. 5개의 마이크로서비스에 걸친 복잡한 탈퇴 프로세스에서 Saga Orchestrator를 제안하고 협의하여, Outbox 패턴을 적용하여 이벤트 기반 통신의 신뢰성을 확보했습니다. 각 서비스별 보상(Compensation) 트랜잭션을 설계하여 실패 시 롤백이 가능하도록 구현했습니다.',
        '데이터 모델링 및 스키마 설계: 시계열 수면 데이터를 효율적으로 저장하기 위해 MongoDB의 컬렉션 구조와 인덱스 전략을 설계했습니다. MySQL에서는 사용자 정보, 분석 결과 등 관계형 데이터의 정규화 및 외래키 관계를 고려한 스키마를 설계하여 데이터 정합성을 보장했습니다.',
        '성능 최적화 및 관찰성(Observability) 확보: Prometheus를 통해 시스템 메트릭을 수집하고 Grafana 대시보드를 구축하여 실시간 부하 테스트 결과를 시각적으로 모니터링했습니다. 이를 기반으로 MongoDB 인덱싱 전략 수립 및 Redis 캐싱을 적용하여 부하 테스트 환경에서 안정적인 데이터 조회 성능을 확보했습니다.',
        'Polyglot Persistence 전략 적용: 시계열 수면 데이터를 MongoDB에, 사용자 정보 및 분석 결과 등 관계형 데이터를 MySQL에 분리 저장하는 전략을 적용하여 각 데이터베이스의 장점을 최대한 활용했습니다.',
        '(AI 파트, 팀원 담당) 뇌파 센서로 수집한 EEG 데이터를 MNE 라이브러리로 전처리하고, 전이학습(Transfer Learning)과 파인튜닝(Fine-tuning)을 적용한 AI 모델로 수면 단계(깊은 수면, 얕은 수면, REM)를 판별합니다.',
        'AI 분석 및 리포트 생성 백엔드 지원: AI-Sleep Service (FastAPI)와의 RESTful API 연동을 담당하여, 뇌파 분석 및 Azure OpenAI Agent를 활용한 개인화된 리포트 생성 요청 처리 로직을 구현했습니다.',
      ],
    },
    {
      id: 2,
      title: 'VIBOT (Vitamin 7) — 카카오워크 AI 챗봇 관리 플랫폼',
      subtitle: 'Backend / 인증·인가 / 멀티테넌트 SaaS',
      description: '카카오워크와 연동되는 기업용 AI 챗봇 관리 플랫폼입니다. 그룹·부서별로 독립적인 챗봇을 운영하는 멀티테넌트 SaaS로, 그룹 단위로 데이터를 격리하며 문서 임베딩 기반 RAG 챗봇을 제공합니다.',
      role: '백엔드 — 인증·보안 아키텍처 전담',
      period: '2025.10.27 ~ 2025.12.11 · 7인 팀 · DKTechin 기업실무 연계',
      highlights: [
        '관리자 권한 즉시 회수 요구사항 때문에 JWT 대신 Spring Session + Redis 세션 인증 설계',
        'HttpOnly · SameSite 쿠키, CSRF 토큰 검증 적용',
        '회사 → 그룹 계층과 top_group_id 기반 데이터 격리 및 RBAC 구현',
        'WebSocket → gRPC → Webhook RAG 챗봇 통신 파이프라인 구축 참여, QueryDSL로 N+1 문제 해결',
      ],
      techStack: ['Spring Boot 3.5.7', 'Java 17', 'PostgreSQL', 'Redis (Spring Session)', 'gRPC', 'WebSocket', 'QueryDSL', 'AWS S3'],
      image: '/images/projects/project4.png',
      architectureImage: '/images/projects/project4-architecture.png',
      details: [
        '인증(Auth) 및 보안 아키텍처 전면 담당: 인증 로직 전반을 전담하여 개발하며, 인증의 중요성과 보안 메커니즘의 복잡성을 깊이 이해하게 되었습니다. Spring Session + Redis를 활용한 세션 관리 시스템을 구축하고, 세션 보안을 위해 HttpOnly 쿠키, SameSite 속성, CSRF 토큰 검증 등을 적용했습니다. 오류 발생 시 하나하나 디버깅하며 해결하는 과정을 통해 보안 로직 구현의 세밀함과 중요성을 실무적으로 체득했습니다.',
        'SaaS형 멀티테넌트 데이터 격리 및 권한 관리 구현: 회사 → 그룹 계층 구조와 top_group_id 기반의 권한별 데이터 격리 로직을 구현했으며, RBAC(Role-Based Access Control)을 구현하여 사용자별 권한에 따른 세밀한 접근 제어를 실현했습니다.',
        'RESTful API 설계 및 서비스 연동: 프론트엔드와의 REST API 등 다양한 외부 서비스와의 연동을 담당했습니다. API 설계 시 확장성과 유지보수성을 고려한 엔드포인트 구조를 설계했습니다.',
        '실시간 RAG 챗봇 통신 파이프라인 구축: 사용자 요청(WebSocket)을 받아 AI 서버에 gRPC를 통해 고성능으로 전달하고 응답을 되돌려주는 WebSocket → gRPC → Webhook 실시간 메시지 처리 파이프라인 팀원들과 함께 구축했습니다.',
        '견고한 백엔드 개발 원칙 적용: Presentation → Application → Domain 계층 구조와 UseCase 패턴을 적용하여 비즈니스 로직의 명확성을 높이고 QueryDSL로 쿼리를 최적화했습니다.',
        'CI/CD 파이프라인 구축 및 코드 리뷰: GitHub Actions를 활용한 자동화된 빌드 및 배포 파이프라인을 구축하고, Pull Request 기반 코드 리뷰 프로세스를 통해 팀원들과 협업하며 코드 품질을 향상시켰습니다.',
        'ORM/SQL Mapper를 활용한 Persistence Layer 최적화: JPA와 QueryDSL을 활용하여 복잡한 쿼리를 타입 안전하게 작성하고, N+1 문제 해결 및 쿼리 성능 최적화를 수행했습니다.',
      ],
    },
    {
      id: 3,
      title: '우리동네국민상회 (litmers 인턴) — 운영 중인 주문 자동화 SaaS 안정화',
      subtitle: '실무 / 운영 서비스 / QA·리팩토링',
      description: '카카오톡 공동구매 단톡방 주문을 자동으로 수집하고, AI 기반으로 주문 메시지를 해석해 자동승인까지 처리하는 본사–지점 멀티테넌트 SaaS입니다. 실사용자 주문이 실시간으로 오가는 운영 서비스에 단독 투입되어 리팩토링과 안정화를 전담했습니다.',
      role: 'QA/개발(리팩토링) 인턴 — 단독 수행',
      period: '2026.08 ~ 2026.09 (6주)',
      highlights: [
        '운영 데이터를 읽기 전용으로 실측해 7일간 9,622건의 홍보성 메시지가 주문으로 자동승인된 것(사람 직접 승인 0건)을 발견, 메시지 형태 기반 방어 게이트 설계·구현 (테스트 51개)',
        '마감 상품이 다음 회차 다른 상품으로 자동 교체·승인되던 전 지점 공통 버그 발견 → 첫 가설(매칭 점수)을 실측으로 폐기하고 픽업일(회차) 기준으로 재설계',
        '두 게이트 모두 기본값 off로 배포 후 규모를 관측해 활성화 → 코드 롤백 없이 즉시 원복 가능한 구조',
        '운영 DB와 분리된 QA 검증 환경 구축, 예약 매칭을 행 ID 기준으로 전환하며 268,102건 백필',
      ],
      techStack: ['Next.js 14', 'TypeScript', 'Supabase (PostgreSQL)', 'Vercel', 'TanStack Query', 'Zustand'],
    },
    {
      id: 4,
      title: 'Job.is (잡이즈) — AI 커리어 큐레이션 플랫폼',
      subtitle: 'Backend / AWS 인프라 / 장애 대응 · 🏆 Leets 7기 최우수상',
      description: '사용자 프로필·행동 데이터와 채용 공고를 AI로 매칭해 매일 아침 맞춤형 추천 공고를 제공하는 플랫폼입니다. Python 임베딩 매칭엔진과 OpenAI를 연동해 추천 이유까지 제공합니다.',
      role: '백엔드 — 인프라 설계·구축, 배포 자동화, 프로덕션 장애 대응 전담',
      period: '2026.07.01 ~ 2026.08.06 · 9인 팀 · Leets 7기',
      highlights: [
        'dev/prod EC2 · RDS · S3 분리 구성, 도메인 연결부터 HTTPS · 인증서 자동 갱신까지 인프라 전 과정 담당',
        'GitHub Actions 브랜치별 자동 배포(테스트 → 빌드 → GHCR push → EC2), 테스트 실패 시 이후 단계 중단, prod 필수 리뷰어 승인',
        '첫 prod 배포 버그 3건(GHCR 미인증, 컨테이너 크래시 루프, nginx DNS 캐싱 502)과 매칭엔진 미동작 원인 3가지(Python 런타임 누락, Flyway–Hibernate DDL 충돌, S3 설정 누락)를 분리해 해결',
        'CPU 코어 대비 과다 생성된 스레드 경합(오버서브스크립션)을 해결해 임베딩 연산 11분대 → 1분 22초',
      ],
      techStack: ['Spring Boot 4.x', 'PostgreSQL (RDS)', 'Redis', 'AWS (EC2 · S3)', 'Docker Compose', 'Nginx', 'GitHub Actions'],
    },
  ];

  const otherProjects = [
    {
      title: '쓰담쓰담',
      description: 'AI 대형 폐기물 수수료 측정 서비스 · 프론트엔드 리드',
      period: '2024.11 ~ 2024.12',
    },
    {
      title: '스마트팜 모니터링 App/Web',
      description: 'rowain 인턴 · React · Flutter 실시간 대시보드, 위치 기반 안전 제어 UI',
      period: '2025.03 ~ 2025.06',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 transition-all duration-1000 ${
            sectionVisible ? 'fade-in-down animate-visible' : 'opacity-0 -translate-y-8'
          }`}>
            Projects
          </h2>
          <p className={`text-center text-gray-600 mb-12 text-lg transition-all duration-1000 delay-100 ${
            sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
          }`}>
            주요 프로젝트 경험을 소개합니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 hover-lift ${
                  sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* 프로젝트 이미지 */}
                <div className="relative h-48 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <ProjectImage src={project.image} alt={project.title} projectId={project.id} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transition-transform group-hover:scale-110 z-20">
                    <span className="text-primary-600 font-bold text-sm">#{project.id}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">역할:</span> {project.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">기간:</span> {project.period}
                  </p>
                </div>

                {project.highlights ? (
                  <ul className="mb-4 space-y-1.5">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700 leading-relaxed">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {project.contribution}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-xs font-medium">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">기타 프로젝트</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((project) => (
                <div key={project.title} className="bg-white rounded-xl shadow p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900">{project.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{project.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setSelectedProject(null)}
          style={{ 
            animation: 'fadeIn 0.3s ease-out forwards',
          }}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ 
              animation: 'scaleIn 0.3s ease-out forwards',
            }}
          >
            {/* 모달 이미지 with 제목 오버레이 */}
            <div className="relative h-80 md:h-96 overflow-hidden">
              <ProjectImage src={selectedProject.image} alt={selectedProject.title} projectId={selectedProject.id} />
              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              {/* 제목 및 닫기 버튼 */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{selectedProject.title}</h3>
                    <p className="text-white/90 text-lg font-semibold drop-shadow-md mb-3">{selectedProject.subtitle}</p>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed drop-shadow-md">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white hover:text-gray-200 transition-colors text-3xl font-bold bg-black/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">역할</h4>
                  <p className="text-gray-700">{selectedProject.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">기간</h4>
                  <p className="text-gray-700">{selectedProject.period}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{selectedProject.highlights ? '핵심 성과' : '핵심 기여'}</h4>
                {selectedProject.highlights ? (
                  <ul className="text-gray-700 bg-primary-50 p-4 rounded-lg space-y-2">
                    {selectedProject.highlights.map((item, i) => (
                      <li key={i} className="flex items-start leading-relaxed">
                        <span className="text-primary-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 bg-primary-50 p-4 rounded-lg">
                    {selectedProject.contribution}
                  </p>
                )}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.details && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">세부 역할 및 기술적 성과</h4>
                <ul className="space-y-3">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              )}

              {selectedProject.performanceTable && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">성능 개선 결과</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-primary-50">
                        <tr>
                          <th className="px-4 py-2 font-semibold text-gray-900 border-b border-gray-200">지표</th>
                          <th className="px-4 py-2 font-semibold text-gray-900 border-b border-gray-200">Before</th>
                          <th className="px-4 py-2 font-semibold text-gray-900 border-b border-gray-200">After Caching</th>
                          <th className="px-4 py-2 font-semibold text-gray-900 border-b border-gray-200">변화</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProject.performanceTable.rows.map((row, index) => (
                          <tr key={index} className="odd:bg-white even:bg-gray-50">
                            <td className="px-4 py-2 font-medium text-gray-900 border-b border-gray-100">{row.metric}</td>
                            <td className="px-4 py-2 text-gray-700 border-b border-gray-100">{row.before}</td>
                            <td className="px-4 py-2 text-gray-700 border-b border-gray-100">{row.after}</td>
                            <td className="px-4 py-2 text-primary-700 font-semibold border-b border-gray-100">{row.change}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{selectedProject.performanceTable.note}</p>
                </div>
              )}

              {selectedProject.architectureImage && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">시스템 아키텍처</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img 
                      src={selectedProject.architectureImage} 
                      alt={`${selectedProject.title} 시스템 아키텍처`}
                      className="w-full h-auto rounded-lg shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

