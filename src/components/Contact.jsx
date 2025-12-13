const Contact = () => {
  const contactInfo = [
    {
      name: 'GitHub',
      link: 'https://github.com/yukyoungs',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      link: 'mailto:syk9848@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Blog',
      link: 'https://yuuu0.tistory.com/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            함께 일할 수 있는 기회를 기다리고 있습니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact) => (
              <a
                key={contact.name}
                href={contact.link}
                target={contact.name !== 'Email' ? '_blank' : '_self'}
                rel={contact.name !== 'Email' ? 'noopener noreferrer' : ''}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-primary-600 p-4 rounded-full">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{contact.name}</h3>
                  <p className="text-gray-300 text-sm break-all">
                    {contact.name === 'Email' 
                      ? 'syk9848@gmail.com'
                      : contact.link.replace('https://', '')}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-white/20 pt-12">
            <p className="text-gray-400">
              © {new Date().getFullYear()} 송유경. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

