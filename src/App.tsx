import React, { useEffect, useState } from "react";
import {
  Github,
  Send,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronDown,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  Briefcase,
} from "lucide-react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Enhanced Intersection Observer for aggressive scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const skills = [
    {
      name: "React & Next.js",
      level: 60,
      icon: Globe,
      description: "Modern frontend development",
    },
    {
      name: "Python & Django",
      level: 60,
      icon: Database,
      description: "Backend development & APIs",
    },
    {
      name: "JavaScript/TypeScript",
      level: 85,
      icon: Code,
      description: "Core programming languages",
    },
    {
      name: "Full Stack Development",
      level: 50,
      icon: Smartphone,
      description: "End-to-end solutions",
    },
  ];

  const projects = [
    {
      title: "My Shop",
      description:
        "E-commerce platform with modern UI/UX, product catalog, shopping cart functionality, and responsive design.",
      url: "https://my-shop-phi-mauve.vercel.app/",
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "WB Clone",
      description:
        "Wildberries marketplace clone with product listings, search functionality, and modern interface design.",
      url: "https://wb-isa.vercel.app/",
      tech: ["React", "Next.js", "CSS Modules", "Vercel"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Shop Texnika",
      description:
        "Electronics store with product categories, detailed product pages, and optimized user experience.",
      url: "https://shop-texnika.vercel.app/",
      tech: ["React", "Next.js", "Responsive Design", "Vercel"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
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
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl shadow-blue-500/25 animate-float-gentle hover:animate-wiggle transition-all duration-300 cursor-pointer">
              Islam
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-20"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Islam Abdikalilov
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Frontend Developer
          </p>

          <div
            className="flex items-center justify-center gap-4 mb-8 text-gray-400 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Calendar className="w-4 h-4 animate-pulse" />
              <span>1 год в IT</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Briefcase className="w-4 h-4 animate-pulse" />
              <span>3+ законченых проектов</span>
            </div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <AiOutlineFundProjectionScreen className="flex items-center gap-2 hover:text-purple-400 transition-colors" />
              <span>2 комерчиских проекта</span>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://t.me/Abdikalilov_Islam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-glow"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
              Contact via Telegram
            </a>

            <a
              href="https://github.com/isa851"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View GitHub
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hover:animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
        </button>
      </section>

      <section
        id="about"
        className="py-20 px-4 bg-gray-800/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.about
                ? "animate-explosive-entry"
                : "opacity-0 translate-y-20 scale-75"
            }`}
          >
            Обо мне
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isVisible.about
                  ? "animate-slide-in-left-hard"
                  : "opacity-0 -translate-x-20 rotate-12"
              }`}
            >
              <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                Frontend разработчик с 1 годом опыта в IT-сфере. Специализируюсь
                на создании современных веб-приложений с использованием React,
                Next.js, Python и Django.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                За последнюю неделю активно изучаю Django и Python для
                backend-разработки и зделал га Django 1 стр , а также углубляюсь
                в Next.js для создания полноценных full-stack решений. Имею опыт
                деплоя проектов на Vercel.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Доступен для удаленной работы</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group">
                  <Code className="w-5 h-5 group-hover:animate-spin" />
                  <span>3 готовых проекта на Vercel</span>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-500 ${
                isVisible.about
                  ? "animate-slide-in-right-hard"
                  : "opacity-0 translate-x-20 rotate-12"
              }`}
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                  Технологии
                </h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-400 animate-pulse">
                      Frontend
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">
                        • React
                      </li>
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">
                        • Next.js
                      </li>
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">
                        • TypeScript
                      </li>
                      <li className="hover:text-blue-300 transition-colors hover:translate-x-2 transform duration-200">
                        • Tailwind CSS
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-400 animate-pulse">
                      Backend
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li className="hover:text-purple-300 transition-colors hover:translate-x-2 transform duration-200">
                        • Python
                      </li>
                      <li className="hover:text-purple-300 transition-colors hover:translate-x-2 transform duration-200">
                        • Django
                      </li>
                      <li className="hover:text-purple-300 transition-colors hover:translate-x-2 transform duration-200">
                        • Vercel Deploy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/10 to-blue-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-gradient-x"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.projects
                ? "animate-explosive-entry"
                : "opacity-0 translate-y-20 scale-75"
            }`}
          >
            Мои проекты
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 cursor-pointer ${
                  isVisible.projects
                    ? "animate-explosive-card-entry"
                    : "opacity-0 translate-y-20 rotate-12 scale-75"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} animate-gradient-x`}
                ></div>

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
              isVisible.projects
                ? "animate-explosive-entry"
                : "opacity-0 translate-y-20 scale-75"
            }`}
          >
            <a
              href="https://github.com/isa851"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <Github className="w-5 h-5 group-hover:rotate-360 transition-transform duration-700" />
              Больше проектов на GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gray-800/50 relative overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.skills
                ? "animate-explosive-entry"
                : "opacity-0 translate-y-20 scale-75"
            }`}
          >
            Навыки и экспертиза
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-rotate-1 cursor-pointer ${
                    isVisible.skills
                      ? "animate-explosive-skill-entry"
                      : "opacity-0 translate-y-20 rotate-12 scale-75"
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
                          width: isVisible.skills ? `${skill.level}%` : "0%",
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
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-gradient-x"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className={`text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.contact
                ? "animate-explosive-entry"
                : "opacity-0 translate-y-20 scale-75"
            }`}
          >
            Давайте работать вместе
          </h2>

          <p
            className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible.contact
                ? "animate-slide-in-up-hard"
                : "opacity-0 translate-y-20 rotate-6"
            }`}
          >
            Готов воплотить ваши идеи в жизнь! Обсудим ваш следующий проект и
            создадим что-то удивительное вместе.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-400 ${
              isVisible.contact
                ? "animate-explosive-buttons"
                : "opacity-0 translate-y-20 scale-75"
            }`}
          >
            <a
              href="https://t.me/Abdikalilov_Islam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 animate-glow"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">@Abdikalilov_Islam</span>
            </a>

            <a
              href="https://github.com/isa851"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/25"
            >
              <Github className="w-5 h-5 group-hover:rotate-360 transition-transform duration-700" />
              <span className="font-semibold">isa851</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 hover:text-white transition-colors duration-300 animate-pulse">
            © 2024 Islam Abdikalilov. Создано с passion и кодом.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
