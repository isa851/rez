import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Github, Send, Code, Database, Globe, Smartphone, ChevronDown, ChevronUp, 
  MapPin, ExternalLink, Calendar, Briefcase 
} from 'lucide-react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CgVercel } from 'react-icons/cg';
import my from './img/photo_2025-06-10_16-34-12.jpg';
import ru from './img/flag.svg';
import en from './img/en.svg';

const AuthorPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
        });
      },
      { threshold: 0.2, rootMargin: '-50px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: t('skills.react'), level: 80, icon: Globe, description: t('skills.reactDesc') },
    { name: t('skills.python'), level: 60, icon: Database, description: t('skills.pythonDesc') },
    { name: t('skills.js'), level: 90, icon: Code, description: t('skills.jsDesc') },
    { name: t('skills.fullStack'), level: 70, icon: Smartphone, description: t('skills.fullStackDesc') },
  ];

  const projects = [
    {
      title: t('projects.myShop.title'),
      description: t('projects.myShop.description'),
      url: 'https://my-shop-phi-mauve.vercel.app/',
      tech: [t('tech.react'), t('tech.nextjs'), t('tech.tailwind'), t('tech.vercel')],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('projects.wbClone.title'),
      description: t('projects.wbClone.description'),
      url: 'https://wb-isa.vercel.app/',
      tech: [t('tech.react'), t('tech.nextjs'), t('tech.cssModules'), t('tech.vercel')],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: t('projects.amazonClone.title'),
      description: t('projects.amazonClone.description'),
      url: 'https://shop-texnika.vercel.app/',
      tech: [t('tech.react'), t('tech.nextjs'), t('tech.responsive'), t('tech.vercel')],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: t('projects.CristianoRonaldo.title'),
      description: t('projects.CristianoRonaldo.description'),
      url: 'https://cr7-five.vercel.app/',
      tech: [t('tech.react'), t('tech.nextjs'), t('tech.responsive')],
      gradient: 'from-red-500 to-yellow-500',
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺', flagImage: ru },
    { code: 'en', name: 'English', flag: '🇺🇸', flagImage: en },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{ left: mousePosition.x - 8, top: mousePosition.y - 8 }}
      />
      {/* Header Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-pink-500/40 animate-bounce-slow"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 border border-cyan-500/30 rounded-full animate-ping-slow"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <div className={`absolute ${isMobile ? 'top-4 right-4' : 'top-6 left-6'} z-20`}>
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className={`flex items-center gap-2 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 ${
                    isMobile ? 'p-2' : 'px-4 py-2'
                  } rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 border border-gray-600/50 ${
                    isMobile ? 'min-w-[auto]' : 'min-w-[140px]'
                  }`}
                >
                  <img
                    src={currentLanguage.flagImage}
                    alt={`${currentLanguage.name} flag`}
                    className={`${isMobile ? 'w-5 h-3' : 'w-6 h-4'} rounded-sm object-cover`}
                  />
                  {!isMobile && (
                    <span className="text-white font-medium text-sm flex-1 text-left">
                      {currentLanguage.name}
                    </span>
                  )}
                  {isLanguageDropdownOpen ? (
                    <ChevronUp className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-white`} />
                  ) : (
                    <ChevronDown className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-white`} />
                  )}
                </button>
                <div
                  className={`absolute ${isMobile ? 'right-0' : 'left-0'} top-full mt-2 w-full ${
                    isMobile ? 'min-w-[120px]' : ''
                  } bg-gray-800 rounded-lg shadow-xl border border-gray-600/50 overflow-hidden transition-all duration-300 transform origin-top ${
                    isLanguageDropdownOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-700 transition-all duration-200 relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
                      <img
                        src={language.flagImage}
                        alt={`${language.name} flag`}
                        className={`${isMobile ? 'w-5 h-3' : 'w-6 h-4'} rounded-sm object-cover z-10`}
                      />
                      <span className="text-white text-sm z-10">{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl shadow-blue-500/25 animate-float-gentle hover:animate-wiggle transition-all duration-300 cursor-pointer">
              <img
                className="rounded-full w-[100px] h-[100px] object-cover"
                src={my}
                alt={t('profileImageAlt')}
              />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            {t('name')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            {t('title')}
          </p>
          <div
            className="flex items-center justify-center gap-4 mb-8 text-gray-400 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Calendar className="w-4 h-4 animate-pulse" />
              <span>{t('experience.years')}</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Briefcase className="w-4 h-4 animate-pulse" />
              <span>{t('experience.projects')}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <AiOutlineFundProjectionScreen className="w-4 h-4" />
              <span>{t('experience.commercial')}</span>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="https://t.me/Abdikalilov_Islam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-glow"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
              {t('contact.telegram')}
            </a>
            <a
              href="https://github.com/isa851"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              {t('contact.github')}
            </a>
            <a
              href="https://vercel.com/isa851s-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25"
            >
              <CgVercel className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              {t('contact.vercel')}
            </a>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hover:animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
        </button>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.about ? 'animate-explosive-entry' : 'opacity-0 translate-y-20 scale-75'
            }`}
          >
            {t('about.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isVisible.about ? 'animate-slide-in-left-hard' : 'opacity-0 -translate-x-20 rotate-12'
              }`}
            >
              <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                {t('about.description2')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  <span>{t('about.remote')}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group">
                  <Code className="w-5 h-5 group-hover:animate-spin" />
                  <span>{t('about.projects')}</span>
                </div>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-500 ${
                isVisible.about ? 'animate-slide-in-right-hard' : 'opacity-0 translate-x-20 rotate-12'
              }`}
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                  {t('about.technologies')}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-400 animate-pulse">{t('about.frontend')}</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">• {t('tech.react')}</li>
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">• {t('tech.nextjs')}</li>
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">• {t('tech.typescript')}</li>
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">• {t('tech.tailwind')}</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-400 animate-pulse">{t('about.backend')}</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="hover:text-purple-300 transition-colors hover:translate-x-2 transform duration-200">• {t('tech.python')}</li>
                      <li className="hover:text-purple-300 transition-colors hover:translate-x-2 transform duration-200">• {t('tech.django')}</li>
                      <li className="hover:text-purple-300 transition-colors hover:translate-x-2 transform duration-200">• {t('tech.vercelDeploy')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/10 to-blue-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-gradient-x"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.projects ? 'animate-explosive-entry' : 'opacity-0 translate-y-20 scale-75'
            }`}
          >
            {t('projects.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 cursor-pointer ${
                  isVisible.projects
                    ? 'animate-explosive-card-entry'
                    : 'opacity-0 translate-y-20 rotate-12 scale-75'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient} animate-gradient-x`}></div>
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-blue-600 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 transform cursor-pointer"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-800 ${
              isVisible.projects ? 'animate-explosive-entry' : 'opacity-0 translate-y-20 scale-75'
            }`}
          >
            <a
              href="https://github.com/isa851"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <Github className="w-5 h-5 group-hover:rotate-360 transition-transform duration-700" />
              {t('projects.more')}
            </a>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.skills ? 'animate-explosive-entry' : 'opacity-0 translate-y-20 scale-75'
            }`}
          >
            {t('skills.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1 cursor-pointer ${
                    isVisible.skills
                      ? 'animate-explosive-skill-entry'
                      : 'opacity-0 translate-y-20 rotate-12 scale-75'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:rotate-12 transform">
                      <Icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1500 ease-out animate-gradient-x group-hover:animate-pulse"
                        style={{
                          width: isVisible.skills ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 300}ms`,
                        }}
                      />
                    </div>
                    <span className="absolute right-0 -top-6 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-gradient-x"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className={`text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.contact ? 'animate-explosive-entry' : 'opacity-0 translate-y-20 scale-75'
            }`}
          >
            {t('contact.title')}
          </h2>
          <p
            className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible.contact ? 'animate-slide-in-up-hard' : 'opacity-0 translate-y-20 rotate-6'
            }`}
          >
            {t('contact.description')}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-400 ${
              isVisible.contact ? 'animate-explosive-buttons' : 'opacity-0 translate-y-20 scale-75'
            }`}
          >
            <a
              href="https://t.me/Abdikalilov_Islam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-glow"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">{t('contact.telegramHandle')}</span>
            </a>
            <a
              href="https://github.com/isa851"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25"
            >
              <Github className="w-5 h-5 group-hover:rotate-360 transition-transform duration-700" />
              <span className="font-semibold">{t('contact.githubHandle')}</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 hover:text-white transition-colors duration-300 animate-pulse">
            © 2025 {t('footer.author')}. {t('footer.created')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuthorPage;