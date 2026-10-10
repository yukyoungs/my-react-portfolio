import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });

  const groups = [
    {
      category: '수상',
      items: [
        { title: '카카오엔터프라이즈 SW아카데미 우수 표창', meta: '과학기술정보통신부 · 2025.12', note: 'MONG' },
        { title: 'Leets 7기 프로젝트 최우수상', meta: '2026.08', note: 'Job.is' },
      ],
    },
    {
      category: '경력',
      items: [
        { title: 'litmers', meta: 'QA/개발(리팩토링) 인턴 · 2026.08 – 2026.09 (6주)' },
        { title: 'rowain', meta: '프론트엔드 인턴 · 2025.03 – 2025.06 (4개월)' },
      ],
    },
    {
      category: '활동',
      items: [
        { title: 'Leets 8기 운영진', meta: '2026.09 – 현재' },
        { title: 'Leets 7기 · Backend', meta: '2026.03 – 2026.08' },
        { title: 'Kakao Enterprise SW Academy 7기 수료', meta: '2025.09 – 2025.12' },
        { title: 'DKTechin 기업실무 연계 과정 수료', meta: '2025.10 – 2025.12' },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4 transition-all duration-1000 ${
            sectionVisible ? 'fade-in-down animate-visible' : 'opacity-0 -translate-y-8'
          }`}>
            Awards & Experience
          </h2>
          <p className={`text-center text-gray-600 mb-12 text-lg transition-all duration-1000 delay-100 ${
            sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-8'
          }`}>
            수상 · 경력 · 활동
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups.map((group, index) => (
              <div
                key={group.category}
                className={`bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition-all duration-500 hover:shadow-xl hover-lift ${
                  sectionVisible ? 'fade-in-up animate-visible' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2" style={{ borderColor: '#0284c7' }}>
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <p className="font-semibold text-gray-900">
                        {item.title}
                        {item.note && (
                          <span
                            className="ml-2 inline-block px-2 py-0.5 rounded-md text-xs font-medium align-middle"
                            style={{ backgroundColor: '#e0f2fe', color: '#075985' }}
                          >
                            {item.note}
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{item.meta}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
