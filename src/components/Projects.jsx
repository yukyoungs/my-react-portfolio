import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// 이미지 로드 실패 시 placeholder를 보여주는 컴포넌트
const ProjectImage = ({ src, alt, projectId }) => {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold bg-gradient-to-br from-primary-500 to-primary-700">
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
      title: '쓰담쓰담 앱/웹',
      subtitle: 'AI 기반 대형 폐기물 수수료 측정 서비스 (Frontend)',
      description: '대형 폐기물을 사진으로 촬영하면 AI가 자동으로 폐기물 유형과 크기를 분석하여 적절한 스티커 규격을 추천해주는 서비스입니다. 웹과 모바일 앱을 통해 사용자가 쉽게 폐기물 수수료를 확인하고 처리할 수 있습니다.',
      role: '프론트엔드 개발 리드',
      period: '2024.11.25 ~ 2024.12.25',
      contribution: 'AI-Powered Multi-Platform UI/UX 구현 및 RESTful API 설계 및 연동 최적화',
      techStack: ['React', 'Flutter', 'RestAPI', 'Node.js', 'FastAPI', 'EfficientNet B0', 'Docker'],
      image: '/images/projects/project1.png', // 여기에 이미지 경로 추가
      details: [
        'AI 분석 결과 연동 및 시각화: EfficientNet B0 AI 모델의 분석 결과(폐기물 유형, 크기)를 즉시 UI에 반영하고 적합한 스티커 규격을 추천하는 사용자 플로우를 설계했습니다.',
        '멀티 플랫폼 반응형 웹/앱 개발: React를 사용하여 반응형 웹사이트 UI를 구현하고, Flutter로 Android 모바일 앱을 개발하여 사용자 접근성을 극대화했습니다.',
        'RESTful API 설계 및 서비스 연동: FastAPI 백엔드와의 REST API 통신 규격을 정의하고 설계했습니다. 비동기 요청 처리, JSON 데이터 파싱, 엔드포인트 예외 처리 로직을 프론트엔드 단에서 구현하여 안정적인 API 연동 환경을 구축했습니다.',
      ],
    },
    {
      id: 2,
      title: '스마트팜 모니터링 App/Web',
      subtitle: 'Frontend/IoT Control System',
      description: '스마트 농장의 온도, 습도, CO₂ 등 환경 데이터를 실시간으로 모니터링하고, 농장 내 설비(환기, 난방, 급수 등)를 원격으로 제어할 수 있는 IoT 기반 농장 관리 플랫폼입니다. 위치 기반 안전 제어 기능으로 사용자 안전을 보장합니다.',
      role: '프론트엔드 개발 및 시스템 모니터링 UI 설계 (인턴 참여)',
      period: '2025년 3월 ~ 6월 (인턴 기간)',
      contribution: '안전 제어 로직이 적용된 실시간 IoT 대시보드 및 관제 UI 설계 및 구현',
      techStack: ['Front-end: Flutter(App/Web UI)', 'Back-end: ControlNode, GlobalScheduler 등 아키텍처 이해'],
      image: '/images/projects/project2.png', // 여기에 이미지 경로 추가
      details: [
        '실시간 데이터 시각화 및 대시보드 구축: 스마트 농장의 온도, 습도, CO₂ 등 핵심 지표를 그래프, 차트, 게이지 형태의 위젯 기반 UI로 구현하여 실시간 상태 모니터링을 지원했습니다.',
        '안전 기반 환경/설비 제어 UI 설계: 주요 설비 제어 시 주사용자 재실 여부(위치 기반) 정보를 확인하고, 외부에 있을 경우 제어 기능을 제한/경고하는 안전 제어 로직이 반영된 UI/UX를 설계했습니다.',
        '유연한 위젯 기반 대시보드 커스터마이징: 관리자가 위젯 레이아웃을 Drag & Drop으로 변경하거나, 사용하지 않는 기능은 숨길 수 있는 모듈화된 UI 구조를 설계했습니다.',
      ],
    },
    {
      id: 3,
      title: 'mong (몽) - 수면 분석 플랫폼',
      subtitle: 'Backend/MSA/EDA',
      description: '뇌파 데이터를 수집하고 AI를 활용하여 개인의 수면 패턴을 분석하는 헬스케어 플랫폼입니다. 사용자의 수면 데이터를 분석하여 개인화된 수면 리포트와 개선 방안을 제공합니다.',
      role: '백엔드 마이크로서비스 및 분산 아키텍처 구현 (Spring Boot)',
      period: '2025.09.02 ~ 2025.10.17',
      contribution: '회원 탈퇴 로직 주도 구현, MSA 기반 분산 트랜잭션 처리 및 성능 최적화',
      techStack: ['Spring Boot 3.x', 'MongoDB Atlas', 'MySQL', 'Redis', 'FastAPI', 'TensorFlow', 'Saga Pattern', 'Prometheus', 'Grafana', 'GitHub Actions', 'Docker'],
      image: '/images/projects/project3.png', // 여기에 이미지 경로 추가
      details: [
        '회원 탈퇴 로직 구현 및 분산 트랜잭션 처리 (Saga Pattern): 회원 탈퇴 기능을 주도적으로 담당하며 MSA 환경에서의 데이터 정합성 문제를 깊이 고민했습니다. 5개의 마이크로서비스에 걸친 복잡한 탈퇴 프로세스에서 Saga Orchestrator를 설계·구현하고, Outbox 패턴을 적용하여 이벤트 기반 통신의 신뢰성을 확보했습니다. 각 서비스별 보상(Compensation) 트랜잭션을 설계하여 실패 시 롤백이 가능하도록 구현했습니다.',
        '데이터 모델링 및 스키마 설계: 대용량 시계열 수면 데이터를 효율적으로 저장하기 위해 MongoDB의 컬렉션 구조와 인덱스 전략을 설계했습니다. MySQL에서는 사용자 정보, 분석 결과 등 관계형 데이터의 정규화 및 외래키 관계를 고려한 스키마를 설계하여 데이터 정합성을 보장했습니다.',
        '성능 최적화 및 관찰성(Observability) 확보: Prometheus를 통해 시스템 메트릭을 수집하고 Grafana 대시보드를 구축하여 실시간 부하 테스트 결과를 시각적으로 모니터링했습니다. 이를 기반으로 MongoDB 인덱싱 전략 수립 및 Redis 캐싱을 적용하여 대용량 트래픽 환경에서도 안정적인 데이터 조회 성능을 확보했습니다.',
        'CI/CD 파이프라인 구축 및 자동화: GitHub Actions를 활용하여 코드 빌드, 테스트, Docker 이미지 빌드 및 배포를 자동화했습니다. 코드 리뷰 프로세스를 통해 팀원들과 협업하며 코드 품질을 향상시켰습니다.',
        'Polyglot Persistence 전략 적용: 대용량의 시계열 수면 데이터를 MongoDB에, 사용자 정보 및 분석 결과 등 관계형 데이터를 MySQL에 분리 저장하는 전략을 적용하여 각 데이터베이스의 장점을 최대한 활용했습니다.',
        'AI 분석 및 리포트 생성 백엔드 지원: AI-Sleep Service (FastAPI)와의 RESTful API 연동을 담당하여, 뇌파 분석 및 Azure OpenAI Agent를 활용한 개인화된 리포트 생성 요청 처리 로직을 구현했습니다.',
      ],
      reflection: '수면 분석 서비스의 백엔드 개발에 참여하면서, 단순한 기능 구현을 넘어 실제 서비스 환경의 안정적인 운영을 위한 아키텍처를 깊이 고민하는 귀중한 경험을 했습니다. Spring Boot를 주력으로 활용하여 수집된 수면 데이터를 처리하고, 이를 사용자에게 의미 있는 분석 결과로 제공하는 API를 설계 및 구현했습니다.\n\n이 과정에서 가장 크게 깨달은 점은 데이터 처리 파이프라인의 견고성 확보였습니다. 특히 AWS 환경에서 오브젝트 스토리지(S3)에 저장된 파일을 RAG 시스템의 Knowledge Base로 연동할 때, 일반적인 트리거의 부재를 인지하고 Outbox 패턴을 대안으로 검토했습니다. 이는 시스템 신뢰성을 높이기 위해 백엔드 개발자가 비동기 처리와 데이터 일관성을 어떻게 관리해야 하는지를 실무적으로 이해하는 계기가 되었습니다.\n\n또한 MSA 환경에서 분산 트랜잭션의 복잡성을 직접 경험하며, Saga 패턴을 통해 서비스 간 데이터 정합성을 보장하는 방법을 학습했습니다. 회원 탈퇴와 같은 복잡한 비즈니스 시나리오에서 5개의 마이크로서비스 간 데이터 일관성을 보장하기 위해 Saga Orchestrator를 구현하고, Outbox 패턴을 적용하여 이벤트 기반 통신의 신뢰성을 확보했습니다.\n\n성능 최적화와 관찰성(Observability) 확보에도 중점을 두었습니다. Prometheus를 통해 시스템 메트릭을 수집하고 Grafana 대시보드를 구축하여 실시간 부하 테스트 결과를 시각적으로 모니터링했습니다. 이를 기반으로 MongoDB 인덱싱 전략을 수립하고 Redis 캐싱을 도입하여 데이터 조회 성능을 개선했습니다. Polyglot Persistence 전략을 통해 대용량 시계열 수면 데이터는 MongoDB에, 관계형 데이터는 MySQL에 분리 저장하여 각 데이터베이스의 장점을 최대한 활용했습니다.\n\n앞으로도 트래픽과 데이터 증가를 고려한 성능 최적화와 안정적인 데이터 처리를 중심으로, 시스템의 신뢰도를 높이는 백엔드 개발자로 성장해 나가겠습니다.',
    },
    {
      id: 4,
      title: '카카오워크 챗봇 관리 플랫폼',
      subtitle: 'Vitamin 7 (Backend/SaaS)',
      description: '카카오워크와 연동되는 기업용 챗봇 관리 SaaS 플랫폼입니다. 여러 기업이 동일한 인프라를 사용하면서도 데이터가 완전히 격리되며, RAG(Retrieval-Augmented Generation) 기술을 활용한 지식 기반 챗봇을 구축하고 관리할 수 있습니다.',
      role: '백엔드 API 개발 및 멀티테넌트/보안 아키텍처 구현 (Spring Boot)',
      period: '2025.10.27 ~ 2025.12.11',
      contribution: '인증(Auth) 및 보안 아키텍처 전면 담당, SaaS형 멀티테넌트 아키텍처 설계 및 RAG 챗봇 실시간 통신 파이프라인 구축',
      techStack: ['Spring Boot 3.5.7', 'PostgreSQL', 'Redis (Spring Session)', 'gRPC', 'AWS S3 (Presigned URL)', 'WebSocket', 'Next.js', 'QueryDSL', 'JPA', 'React', 'GitHub Actions', 'Docker'],
      image: '/images/projects/project4.png', // 여기에 이미지 경로 추가
      details: [
        '인증(Auth) 및 보안 아키텍처 전면 담당: 인증 로직 전반을 전담하여 개발하며, 인증의 중요성과 보안 메커니즘의 복잡성을 깊이 이해하게 되었습니다. Spring Session + Redis를 활용한 세션 관리 시스템을 구축하고, 세션 보안을 위해 HttpOnly 쿠키, SameSite 속성, CSRF 토큰 검증 등을 적용했습니다. 오류 발생 시 하나하나 디버깅하며 해결하는 과정을 통해 보안 로직 구현의 세밀함과 중요성을 실무적으로 체득했습니다.',
        'SaaS형 멀티테넌트 데이터 격리 및 권한 관리 구현: 회사 → 그룹 계층 구조와 top_group_id 기반의 권한별 데이터 격리 로직을 구현했으며, RBAC(Role-Based Access Control)을 구현하여 사용자별 권한에 따른 세밀한 접근 제어를 실현했습니다.',
        'RESTful API 설계 및 서비스 연동: 카카오워크 Webhook API, AI 서버와의 gRPC 통신, 프론트엔드와의 REST API 등 다양한 외부 서비스와의 연동을 담당했습니다. API 설계 시 확장성과 유지보수성을 고려한 엔드포인트 구조를 설계했습니다.',
        '실시간 RAG 챗봇 통신 파이프라인 구축: 사용자 요청(WebSocket)을 받아 AI 서버에 gRPC를 통해 고성능으로 전달하고 응답을 되돌려주는 WebSocket → gRPC → Webhook 실시간 메시지 처리 파이프라인을 구축했습니다.',
        '대용량 파일 처리를 위한 S3 Presigned URL 도입: 서버 부하 감소를 위해 클라이언트가 AWS S3에 직접 업로드하는 Presigned URL 발급 시스템을 백엔드에서 구현했습니다.',
        '견고한 백엔드 개발 원칙 적용: Presentation → Application → Domain 계층 구조와 UseCase 패턴을 적용하여 비즈니스 로직의 명확성을 높이고 QueryDSL로 쿼리를 최적화했습니다.',
        'CI/CD 파이프라인 구축 및 코드 리뷰: GitHub Actions를 활용한 자동화된 빌드 및 배포 파이프라인을 구축하고, Pull Request 기반 코드 리뷰 프로세스를 통해 팀원들과 협업하며 코드 품질을 향상시켰습니다.',
        'ORM/SQL Mapper를 활용한 Persistence Layer 최적화: JPA와 QueryDSL을 활용하여 복잡한 쿼리를 타입 안전하게 작성하고, N+1 문제 해결 및 쿼리 성능 최적화를 수행했습니다.',
      ],
      reflection: '카카오워크 챗봇 관리 플랫폼(Vitamin 7)의 백엔드 개발을 통해 SaaS형 멀티테넌트 아키텍처와 실시간 통신 시스템을 구축하는 경험을 했습니다. Spring Boot를 기반으로 여러 기업이 동일한 인프라를 공유하면서도 데이터가 완전히 격리되는 안전한 멀티테넌트 시스템을 설계 및 구현했습니다.\n\n이 프로젝트에서 가장 중요하게 다룬 부분은 데이터 격리와 보안이었습니다. 회사 → 그룹 계층 구조와 top_group_id 기반의 권한별 데이터 격리 로직을 구현하여, 각 테넌트의 데이터가 절대 섞이지 않도록 보장했습니다. Spring Session과 Redis를 활용한 세션 관리 시스템을 구축하고, RBAC(Role-Based Access Control)을 구현하여 사용자별 권한에 따른 세밀한 접근 제어를 실현했습니다. 이러한 경험을 통해 단순히 기능을 구현하는 것을 넘어, 엔터프라이즈급 보안 요구사항을 만족시키는 아키텍처 설계 역량을 기를 수 있었습니다.\n\n실시간 RAG 챗봇 통신 파이프라인 구축 과정에서도 많은 것을 배웠습니다. 사용자 요청을 WebSocket으로 받아 AI 서버에 gRPC를 통해 고성능으로 전달하고, 응답을 Webhook을 통해 되돌려주는 복잡한 메시지 처리 파이프라인을 구현했습니다. 이 과정에서 WebSocket의 양방향 통신 특성과 gRPC의 고성능 RPC 통신을 결합하여, 실시간성이 중요한 챗봇 서비스의 요구사항을 효율적으로 해결할 수 있었습니다. 특히 비동기 메시지 처리와 연결 상태 관리의 복잡성을 직접 경험하며, 실시간 시스템의 안정성을 확보하는 방법을 학습했습니다.\n\n대용량 파일 처리 최적화를 위해 AWS S3 Presigned URL 시스템을 도입한 것도 의미 있는 경험이었습니다. 서버 부하를 줄이기 위해 클라이언트가 S3에 직접 업로드할 수 있는 Presigned URL 발급 로직을 구현하면서, 서버 리소스 절약과 사용자 경험 개선을 동시에 달성할 수 있었습니다. 또한 Presentation → Application → Domain 계층 구조와 UseCase 패턴을 적용하여 비즈니스 로직의 명확성을 높이고, QueryDSL을 활용한 쿼리 최적화를 통해 데이터베이스 성능을 개선했습니다.\n\n이 프로젝트를 통해 SaaS 서비스의 핵심인 멀티테넌트 아키텍처와 보안, 실시간 통신 시스템을 종합적으로 경험할 수 있었습니다. 앞으로도 확장 가능하고 안전한 엔터프라이즈급 백엔드 시스템을 설계하고 구현하는 역량을 지속적으로 발전시켜 나가겠습니다.',
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

                <p className="text-gray-700 mb-4 line-clamp-2">
                  {project.contribution}
                </p>

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
                <h4 className="font-semibold text-gray-900 mb-2">핵심 기여</h4>
                <p className="text-gray-700 bg-primary-50 p-4 rounded-lg">
                  {selectedProject.contribution}
                </p>
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

