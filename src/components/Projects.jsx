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
      role: '프론트엔드 개발 리드 (기여도 80%)',
      period: '2024.11.25 ~ 2024.12.25',
      contribution: 'AI-Powered Multi-Platform UI/UX 구현 및 REST API 연동 최적화',
      techStack: ['React', 'Flutter', 'RestAPI', 'Node.js', 'FastAPI', 'EfficientNet B0', 'Docker'],
      image: '/images/projects/project1.png', // 여기에 이미지 경로 추가
      details: [
        'AI 분석 결과 연동 및 시각화: EfficientNet B0 AI 모델의 분석 결과(폐기물 유형, 크기)를 즉시 UI에 반영하고 적합한 스티커 규격을 추천하는 사용자 플로우를 설계했습니다.',
        '멀티 플랫폼 반응형 웹/앱 개발: React를 사용하여 반응형 웹사이트 UI를 구현하고, Flutter로 Android 모바일 앱을 개발하여 사용자 접근성을 극대화했습니다.',
        '견고한 REST API 통신 환경 구축: FastAPI 백엔드와 REST API 통신 규격을 정의하고, 비동기 요청 처리, JSON 데이터 파싱, 엔드포인트 예외 처리 로직을 프론트엔드 단에서 구현했습니다.',
      ],
    },
    {
      id: 2,
      title: '스마트팜 모니터링 App/Web',
      subtitle: 'Frontend/IoT Control System',
      role: '프론트엔드 개발 및 시스템 모니터링 UI 설계 (인턴 참여)',
      period: '2025년 3월 ~ 6월 (인턴 기간)',
      contribution: '안전 제어 로직이 적용된 실시간 IoT 대시보드 및 관제 UI 설계 및 구현',
      techStack: ['React (App/Web UI)', 'Back-end: ControlNode, GlobalScheduler 등 아키텍처 이해'],
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
      role: '백엔드 마이크로서비스 및 분산 아키텍처 구현 (Spring Boot, MongoDB)',
      period: '2025.09.02 ~ 2025.10.17',
      contribution: 'MSA, Event-Driven Architecture 기반의 안정적인 생체 데이터 처리 파이프라인 구축 및 성능 최적화',
      techStack: ['Spring Boot 3.x', 'MongoDB Atlas', 'MySQL', 'Redis', 'FastAPI', 'TensorFlow', 'Saga Pattern', 'Prometheus', 'Grafana'],
      image: '/images/projects/project3.png', // 여기에 이미지 경로 추가
      details: [
        'MSA 기반 서비스 개발 및 분산 트랜잭션 처리 (Saga): 5개의 Spring Boot 마이크로서비스를 개발했습니다. 회원 탈퇴 시 데이터 정합성 문제를 해결하기 위해 Saga Orchestrator를 구현하고 Outbox 패턴을 적용하여 안전한 분산 트랜잭션을 보장했습니다.',
        '성능 최적화 및 관찰성(Observability) 확보: Prometheus를 통해 시스템 메트릭을 수집하고 Grafana 대시보드를 구축하여 실시간 부하 테스트 결과를 시각적으로 모니터링했습니다. 이를 기반으로 MongoDB 인덱싱 및 Redis 캐싱 전략을 적용하여 데이터 조회 성능을 개선했습니다.',
        'Polyglot Persistence 및 데이터 모델링: 대용량의 시계열 수면 데이터를 MongoDB에, 사용자 정보 및 분석 결과 등 관계형 데이터를 MySQL에 분리 저장하는 전략을 적용했습니다.',
        'AI 분석 및 리포트 생성 백엔드 지원: AI-Sleep Service (FastAPI)와의 API 연동을 담당하여, 뇌파 분석 및 Azure OpenAI Agent를 활용한 개인화된 리포트 생성 요청 처리 로직을 구현했습니다.',
      ],
    },
    {
      id: 4,
      title: '카카오워크 챗봇 관리 플랫폼',
      subtitle: 'Vitamin 7 (Backend/SaaS)',
      role: '백엔드 API 개발 및 멀티테넌트/보안 아키텍처 구현 (Spring Boot)',
      period: '2025.10.27 ~ 2025.12.11',
      contribution: 'SaaS형 멀티테넌트 아키텍처 설계 및 RAG 챗봇 실시간 통신 파이프라인 구축',
      techStack: ['Spring Boot 3.5.7', 'PostgreSQL', 'Redis (Spring Session)', 'gRPC', 'AWS S3 (Presigned URL)', 'WebSocket', 'Next.js', 'QueryDSL'],
      image: '/images/projects/project4.png', // 여기에 이미지 경로 추가
      details: [
        'SaaS형 멀티테넌트 데이터 격리 및 권한 관리 구현: 회사 → 그룹 계층 구조와 top_group_id 기반의 권한별 데이터 격리 로직을 구현했으며, Spring Session + Redis를 활용한 안전한 세션 관리 및 RBAC을 구현했습니다.',
        '실시간 RAG 챗봇 통신 파이프라인 구축: 사용자 요청(WebSocket)을 받아 AI 서버에 gRPC를 통해 고성능으로 전달하고 응답을 되돌려주는 WebSocket → gRPC → Webhook 실시간 메시지 처리 파이프라인을 구축했습니다.',
        '대용량 파일 처리를 위한 S3 Presigned URL 도입: 서버 부하 감소를 위해 클라이언트가 AWS S3에 직접 업로드하는 Presigned URL 발급 시스템을 백엔드에서 구현했습니다.',
        '견고한 백엔드 개발 원칙 적용: Presentation → Application → Domain 계층 구조와 UseCase 패턴을 적용하여 비즈니스 로직의 명확성을 높이고 QueryDSL로 쿼리를 최적화했습니다.',
      ],
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
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-primary-100 text-lg">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white hover:text-gray-200 transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            {/* 모달 이미지 */}
            <div className="relative h-64 overflow-hidden">
              <ProjectImage src={selectedProject.image} alt={selectedProject.title} projectId={selectedProject.id} />
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

