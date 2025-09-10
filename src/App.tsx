import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, BarChart3, Database, Brain, Code, TrendingUp, BookOpen, Award, Briefcase, Send, Calendar, GraduationCap, X, ZoomIn, Moon, Sun, Menu, Globe, Star, Sparkles } from 'lucide-react';
import { Languages } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

// Hook para efecto máquina de escribir
const useTypewriter = (words: string[], speed = 100, delay = 1500) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? speed / 2 : speed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return text;
};
      
function App() {
  const [activeSection, setActiveSection] = useState('home'); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed to true for dark mode default
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => { 
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  // Translations
  const translations = {
    es: {
      nav: {
        about: "Sobre mí",
        skills: "Habilidades",
        projects: "Proyectos",
        experience: "Experiencia",
        education: "Educación",
        contact: "Contacto"
      },
      hero: {
        greeting: "¡Hola!",
        name: "Florencia Milagros Mora",
        title: "Analista de Datos",
        subtitle: "Estudiante de Ingeniería en Sistemas", 
        subtitle: "Python · SQL · Power BI · Excel",
        description: "Me entusiasma aprender, crecer en equipo y usar los datos para crear soluciones con impacto real.",
        downloadCV: "Descargar CV",
        contact: "Contactar"
      },
      about: {
        title: "Sobre mí", 
        description1: "Soy una persona curiosa y en constante aprendizaje. Me gusta entender cómo funcionan las cosas, resolver problemas y transformar ideas en proyectos que aporten valor. También disfruto del diseño, porque me permite combinar lo técnico con lo creativo.",
        description2: "Me encanta trabajar con otras personas, compartir conocimientos y seguir creciendo en cada desafío. Más allá de la tecnología, me motiva la posibilidad de aprender algo nuevo todos los días y aplicar lo que sé de forma creativa.",
        dataAnalysis: "Análisis de Datos",
        ai: "Inteligencia Artificial",
        visualization: "Visualización",
        programming: "Programación"
      },
      skills: {
        title: "Habilidades Técnicas"
      },
      projects: {
        title: "Proyectos",
        achievements: "Logros principales:"
      },
      experience: { 
        title: "Experiencia Profesional",
        skills: "Tecnologías y habilidades:"
      },
      education: {
        title: "Educación",
        formal: " ",
        complementary: "Educación Complementaria"
      },
      contact: {
        title: "Contacto",
        info: "Información de contacto",
        email: "Email",
        phone: "Whatsapp",
        linkedin: "LinkedIn",
        github: "GitHub",
        location: "Ubicación",
        locationValue: "Buenos Aires, Argentina",
        form: {
          title: "Envíame un mensaje",
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Email",
          emailPlaceholder: "tu@email.com",
          subject: "Asunto",
          subjectPlaceholder: "Asunto del mensaje",
          message: "Mensaje",
          messagePlaceholder: "Tu mensaje...",
          send: "Enviar mensaje"
        } 
      },
      footer: {
        description: "Analista de Datos | Estudiante de Ingeniería en Sistemas",
        copyright: "❤ 2025 Florencia Mora. Diseñado con amor."
      }
    },
    en: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact"
      },
      hero: {
        greeting: "Hello!",
        name: "Florencia Milagros Mora",
        title: "Data Analyst | Systems Engineering Student",
        subtitle: "Python · SQL · Power BI · Excel | Systems Engineering Student",
        description: "I'm excited to learn, grow as a team, and use data to create solutions with real impact.",
        downloadCV: "Download CV",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        description1: "I'm a curious person who's constantly learning. I like to understand how things work, solve problems, and transform ideas into projects that add value. I also enjoy design because it allows me to combine technical and creative aspects.",
        description2: "I love working with other people, sharing knowledge, and continuing to grow with each challenge. Beyond technology, I'm motivated by the possibility of learning something new every day and applying what I know creatively.",
        dataAnalysis: "Data Analysis",
        ai: "Artificial Intelligence",
        visualization: "Visualization",
        programming: "Programming"
      },
      skills: {
        title: "Technical Skills"
      },
      projects: {
        title: "Projects",
        achievements: "Key achievements:",
        viewRepo: "View repository"
      },
      experience: {
        title: "Professional Experience",
        skills: "Technologies and skills:"
      }, 
      education: {
        title: "Education",
        formal: " ",
        complementary: "Complementary Education"
      },
      contact: {
        title: "Contact",
        info: "Contact information",
        email: "Email",
        phone: "Whatsapp",
        linkedin: "LinkedIn",
        github: "GitHub",
        location: "Location",
        locationValue: "Buenos Aires, Argentina",
        form: {
          title: "Send me a message",
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          subject: "Subject",
          subjectPlaceholder: "Message subject",
          message: "Message",
          messagePlaceholder: "Your message...",
          send: "Send message"
        }
      },
      footer: {
        description: "Data Analyst | Systems Engineering Student",
        copyright: "❤ 2025 Florencia Mora. Designed with love."
      }
    }
  }; 

  const t = translations[isEnglish ? 'en' : 'es'];

  const skills = [
    { 
      name: 'Análisis de Datos', 
      icon: BarChart3, 
      items: ['SQL', 'Python', 'Numpy', 'Pandas', 'Matplotlib'],
      color: 'from-red-500 to-pink-600'
    },
    { 
      name: 'Visualización', 
      icon: TrendingUp, 
      items: ['Power BI', 'Excel', 'Dashboards', 'Datos'],
      color: 'from-yellow-500 to-orange-600'
    },
    { 
      name: 'Programación', 
      icon: Code, 
      items: ['Python', 'SQL', 'Bash', 'C'],
      color: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'IA & Tecnología', 
      icon: Brain, 
      items: ['Automatización', 'Ciberseguridad'],
      color: 'from-blue-500 to-indigo-600'
    }
  ];

const projects = [
  {
    title: 'Asistencia al viajero - CoderHouse',
    description: 'Proyecto integral de análisis de datos en el que desarrollé un tablero interactivo en Power BI a partir de un dataset propio titulado "Asistencia al Viajero". El trabajo incluyó la transformación de una base de datos compleja en Excel, la aplicación de técnicas avanzadas de limpieza y modelado de datos, y la creación de visualizaciones interactivas para facilitar el análisis estratégico',
    tech: ['Power BI', 'Excel', 'Datos', 'Visualización'],
    images: [
      'https://raw.githubusercontent.com/moraflorencia/Portfolio-Mora/refs/heads/main/public/assets/Portada.jpg',
      '/https://raw.githubusercontent.com/moraflorencia/Portfolio-Mora/refs/heads/main/public/assets/Ventas.jpg',
      'https://raw.githubusercontent.com/moraflorencia/Portfolio-Mora/refs/heads/main/public/assets/Viaje.jpg',
      '/https://raw.githubusercontent.com/moraflorencia/Portfolio-Mora/refs/heads/main/public/assets/Vendedores.jpg'
    ],
    year: '2024',
    githubUrl: 'https://github.com/moraflorencia/Asistencia-al-Viajero-Power-BI-',
    achievements: [ 
      'Transformación completa de base de datos',
      'Dashboards interactivos para análisis de tendencias',
      'Mejora significativa en interpretación de datos'
    ]
  },
  {
    title: 'Análisis de desocupación mundial - UNQui',
    description: 'Proyecto de análisis de datos en Excel donde completé y transformé una base de datos. Utilicé funciones para integrar información de continentes, población y tasas de desempleo. Calculé totales y promedios de desocupación, además de clasificar los países según su tamaño poblacional. Finalmente, elaboré tablas dinámicas y gráficos que permitieron un análisis detallado y visual de los datos',
    tech: ['Excel', 'Datos', 'Visualización'],
    images: [
      'https://i.postimg.cc/XqTN4rvY/Captura-de-pantalla-2025-08-05-214437.png'
    ], 
    year: '2024',
    githubUrl: 'https://docs.google.com/spreadsheets/d/1zCTH3ozQg5gaMDWS8VQoLn5tUGhUDERg/edit?usp=drive_link&ouid=114417583288005504879&rtpof=true&sd=true',
    achievements: [
      'Integración eficiente de datos complejos',
      'Automatización y precisión en cálculos',
      'Visualización y análisis estratégico'
    ]
  },
  {
    title: 'Explotación y Visualización de Datos - GIDAS',
    description: 'Proyecto integral de análisis de datos donde gestioné y transformé una base de datos compleja en Excel, creé dashboards interactivos en Power BI y apliqué técnicas avanzadas de limpieza de datos.',
    tech: ['Power BI', 'Excel', 'Datos', 'Visualización'],
    images: [
      'https://i.postimg.cc/j5bzdjLv/Captura-de-pantalla-2025-08-05-213720.png',
      'https://i.postimg.cc/gjBXRckC/Captura-de-pantalla-2025-08-05-214017.png',
      'https://i.postimg.cc/cL3ggSqz/Captura-de-pantalla-2025-08-05-214105.png'
    ],
    year: '2023',
    githubUrl: 'https://github.com/moraflorencia/Proyectos-Graduados',
    achievements: [ 
      'Transformación completa de base de datos',
      'Dashboards interactivos para análisis de tendencias',
      'Mejora significativa en interpretación de datos'
    ]
  }
];
  
  const experience = [
    {
      title: 'Pasante de Desarrollo SAP',
      company: 'ARTECH | Fundación PESCAR',
      period: 'Actual',
      description: 'Formación profesional especializada en Análisis de Datos y SAP. Desarrollo intensivo en Python y SQL, complementado con el fortalecimiento de habilidades blandas para el ambiente profesional.',
      skills: ['Python', 'SQL', 'SAP', 'Análisis de Datos', 'Habilidades Blandas'],
      type: 'Pasantía de Aprendizaje'
    }
  ];

  const education = [
    {
      title: 'Ingeniería en Sistemas de Información',
      institution: 'Universidad Tecnológica Regional La Plata',
      period: '2021 - Cursando',
      type: 'Grado Universitario',
      status: 'En curso'
    },
    {
      title: 'Tecnicatura en Química',
      institution: 'E.E.S.T N°2 Paula A de Sarmiento, Bernal',
      period: '2013 - 2019',
      type: 'Educación Secundaria',
      status: 'Completado'
    }
  ];

  const complementaryEducation = [
    { course: 'Analista de Datos y Gestión de Información', institution: 'Quales Group', year: 'Actual', hours: '' },
    { course: 'Business Intelligence', institution: 'Talento Tech', year: 'Actual', hours: '' },
    { course: 'SQL Básico', institution: 'UTN FRA', year: '2025', hours: '' },
    { course: 'Ciberseguridad', institution: 'Fundación YPF', year: '2025', hours: '60hrs' },
    { course: 'Python para análisis de datos', institution: 'EducacionIT', year: '2024', hours: '18hrs' },
    { course: 'Data Analytics', institution: 'CoderHouse', year: '2024', hours: '46hrs' },
    { course: 'Excel 1', institution: 'UNQ', year: '2024', hours: '30hrs' },
    { course: 'Introducción a la IA', institution: 'UTN', year: '2024', hours: '70hrs' },
    { course: 'Automatización Industrial', institution: 'CIVET', year: '2022', hours: '40hrs' },
    { course: 'Diseño asistido por computadora (AutoCAD)', institution: 'CFP 406', year: '2021', hours: '120hrs' }
  ];

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const navigationItems = [
    { key: 'home', label: 'Inicio' },
    { key: 'about', label: t.nav.about },
    { key: 'skills', label: t.nav.skills },
    { key: 'projects', label: t.nav.projects },
    { key: 'experience', label: t.nav.experience },
    { key: 'education', label: t.nav.education },
    { key: 'contact', label: t.nav.contact }
  ];
 
  return (
    <div
  className={`min-h-screen relative transition-all duration-500 ${
    isDarkMode 
      ? 'bg-slate-900'   // respaldo si no carga la imagen
      : 'bg-rose-50'     // respaldo actualizado para modo claro
  }`}
  style={{ 
    backgroundImage: isDarkMode
      ? "url('https://raw.githubusercontent.com/moraflorencia/Portfolio-Mora/refs/heads/main/src/assets/FondoNoche.png')" // fondo oscuro
      : "url('https://raw.githubusercontent.com/moraflorencia/Portfolio-Mora/refs/heads/main/src/assets/ChatGPT%20Image%2031%20ago%202025%2C%2021_46_28.png')", // fondo claro
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}
>
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Existing Decorative Background Elements */}
        <div className={`absolute top-20 -right-20 w-72 h-72 rounded-full opacity-20 blur-3xl transition-all duration-1000 ${
          isDarkMode ? 'bg-purple-600' : 'bg-rose-400'
        }`}></div>
        <div className={`absolute bottom-20 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000 ${
          isDarkMode ? 'bg-pink-600' : 'bg-amber-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl transition-all duration-1000 ${
          isDarkMode ? 'bg-indigo-600' : 'bg-purple-300'
        }`}></div>

        {/* Animated Stars/Particles */}
        {isDarkMode ? (
          // Stars for dark mode
          <>
            {[...Array(50)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <div 
                  className="bg-white rounded-full opacity-80"
                  style={{
                    width: `${1 + Math.random() * 2}px`,
                    height: `${1 + Math.random() * 2}px`,
                    boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(255, 255, 255, 0.8)`
                  }}
                ></div>
              </div>
            ))}
            
            {/* Shooting stars */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`shooting-star-${i}`}
                className="absolute animate-shooting-star"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${10 + Math.random() * 30}%`, 
                  animationDelay: `${i * 8 + Math.random() * 5}s`,
                  animationDuration: '6s'
                }}
              >
                <div className="w-0.5 h-0.5 bg-white rounded-full shadow-lg" 
                     style={{
                       boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8), -20px 0 20px -10px rgba(255, 255, 255, 0.4)'
                     }}>
                </div>
              </div>
            ))}

            {/* Fireflies */}
{[...Array(15)].map((_, i) => (
  <div
    key={`firefly-${i}`}
    className="absolute animate-firefly"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: '9s',
    }}
  >
    <div
      className="w-0.5 h-0.5 rounded-full"
  style={{
    backgroundColor: '#FFD700',
    boxShadow: '0 0 6px 2px rgba(255, 215, 0, 0.8)',
      }}
    />
  </div>
))}

 
 
            {/* Constellation effect */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`constellation-${i}`}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <div className="w-2 h-2 bg-blue-200 rounded-full opacity-40 blur-sm"></div>
              </div>
            ))}
          </>
        ) : (
          // Floating particles for light mode
          <>
            {[...Array(30)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute animate-float-gentle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 4}s`
                }}
              >
                <div 
                  className="rounded-full opacity-30"
                  style={{
                    width: `${2 + Math.random() * 4}px`,
                    height: `${2 + Math.random() * 4}px`,
                    background: `linear-gradient(45deg, rgba(252, 165, 165, 0.6), rgba(251, 113, 133, 0.4))`,
                    filter: 'blur(0.5px)'
                  }}
                ></div>
              </div>
            ))}
            
            {/* Sparkle effects */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              >
                <div className="relative">
                  <div className="w-1 h-1 bg-rose-300 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-rose-200 opacity-40 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-3 bg-rose-200 opacity-40 rounded-full"></div>
                </div>
              </div>
            ))}

            {/* Gentle bubbles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`bubble-${i}`}
                className="absolute animate-bubble-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${80 + Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${10 + Math.random() * 5}s`
                }}
              >
                <div 
                  className="rounded-full opacity-20 blur-sm"
                  style={{
                    width: `${3 + Math.random() * 6}px`,
                    height: `${3 + Math.random() * 6}px`,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(252, 165, 165, 0.4))',
                    border: '1px solid rgba(252, 165, 165, 0.2)'
                  }}
                ></div>
              </div>
            ))}
          </>
        )}
      </div>
 
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  isScrolled ? 'backdrop-blur-xl shadow-2xl' : 'bg-transparent'
}`}>
  <div className={`absolute inset-0 transition-all duration-500 ${
    isScrolled 
      ? (isDarkMode ? 'bg-slate-900/70 border-b border-white/10' : 'bg-white/80 border-b border-rose-200/50')
      : 'bg-transparent'
  }`}></div>
         
        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`relative p-3 rounded-xl transition-all duration-500 overflow-hidden ${ 
                isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
              }`}>
                <img 
                  src="https://i.postimg.cc/xTvVcxxR/Skye-Ultimate.png" 
                  alt="Logo" 
                  className={`w-6 h-6 object-contain transition-all duration-500 ${ 
                    isDarkMode ? 'filter brightness-110 contrast-110' : 'filter brightness-90'
                  }`}
                />
              </div>
              <div className="hidden md:block">
                <h1 className={`text-xl font-bold transition-all duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  Florencia Mora
                </h1>
                <p className={`text-sm transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-800'
                }`}>
                  Data Analyst
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 overflow-hidden group ${
                    activeSection === item.key 
                      ? (isDarkMode ? 'text-white' : 'text-white')
                      : (isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-800 hover:text-white')
                  }`}
                >
                  <div className={`absolute inset-0 transition-all duration-300 rounded-xl ${
                    activeSection === item.key
                      ? (isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600 opacity-100' : 'bg-gradient-to-r from-rose-500 to-pink-500 opacity-100')
                      : (isDarkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100' : 'bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100')
                  }`}></div>
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
              
              {/* Controls */}
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={toggleLanguage}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-slate-800/80 hover:bg-slate-800 text-white'
                  }`}
                >
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5"
  fill="currentColor"
>
  <path d="m11.9 22l4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22zM4 19l-1.4-1.4l5.05-5.05q-.875-.875-1.588-2T4.75 8h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45l-.75 2.05l-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"/>
</svg>
                </button>
                 
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-yellow-500 hover:bg-yellow-400 text-yellow-900' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-slate-800/80 hover:bg-slate-700 text-white'
                }`}
              >
               <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5"
  fill="currentColor"
>
  <path d="m11.9 22l4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22zM4 19l-1.4-1.4l5.05-5.05q-.875-.875-1.588-2T4.75 8h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45l-.75 2.05l-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"/>
</svg>
              </button>
              
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-yellow-500 hover:bg-yellow-400 text-yellow-900' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-slate-800/80 hover:bg-slate-700 text-white'
                }`}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden mt-4 p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
              isDarkMode ? 'bg-slate-900/90' : 'bg-white/90 border border-rose-200/50'
            }`}>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.key
                        ? (isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white')
                        : (isDarkMode ? 'text-gray-300 hover:bg-white/10' : 'text-slate-700 hover:bg-rose-100/50')
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="container mx-auto text-center relative z-10"> 
          {/* Profile Image */}
          <div className="relative mb-8 inline-block">
            <div className={`absolute inset-0 rounded-full blur-2xl opacity-60 animate-pulse ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-400 to-pink-500'
            }`}></div>
            <div className="profile-border">
  <img
    src="https://i.postimg.cc/0NJMCbn0/Picsart-24-12-09-11-42-26-230.jpg"
              alt="Florencia Milagros Mora"    className="w-40 h-40 rounded-full object-cover"
  />
</div>
          </div>
          
          {/* Main Content */}
          <div className="mb-8 space-y-4">
            <p className={`text-lg font-medium transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-slate-800' 
            }`}>
              {t.hero.greeting}
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className={`transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}> 
                {t.hero.name}
              </span>
            </h1>
            
           <div className="relative inline-block">
  <h2
    className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent ${
      isDarkMode
        ? "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
        : "bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600"
    }`}
  >
    {useTypewriter([t.hero.title, t.hero.subtitle])}
    <span className="border-r-2 border-pink-500 animate-pulse ml-1"></span>
  </h2>

  <div
    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full ${
      isDarkMode
        ? "bg-gradient-to-r from-purple-600 to-pink-600"
        : "bg-gradient-to-r from-rose-500 to-pink-500"
    }`}
  ></div>
</div>
          </div>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-medium ${
            isDarkMode ? 'text-gray-200' : 'text-slate-800'
          }`}>
            {t.hero.description}
          </p>
          
          {/* Stats */}
          <div className={`flex flex-wrap justify-center gap-8 mb-12 ${
            isDarkMode ? 'text-gray-300' : 'text-slate-800'
          }`}>
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <MapPin size={20} className={isDarkMode ? "text-purple-500" : "text-rose-500"} />
              <span>{t.contact.locationValue}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <Mail size={20} className={isDarkMode ? "text-blue-500" : "text-pink-500"} />
              <span>mora.florencia.m@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <Star size={20} className={isDarkMode ? "text-yellow-500" : "text-amber-500"} />
              <span>Disponible para proyectos</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className={`group relative px-8 py-4 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/25' 
                  : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-rose-500/25'
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                isDarkMode ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-pink-500 to-rose-500'
              }`}></div>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Ver mis proyectos</span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className={`group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                isDarkMode 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-slate-600 text-slate-700 hover:bg-slate-600 hover:text-white'
              }`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>{t.hero.contact}</span>
              </span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6"> 
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/florm01", color: isDarkMode ? "hover:text-blue-500" : "hover:text-blue-600" },
              { icon: Github, href: "https://github.com/moraflorencia", color: isDarkMode ? "hover:text-gray-700" : "hover:text-slate-700" },
              { icon: Mail, href: "mailto:mora.florencia.m@gmail.com", color: isDarkMode ? "hover:text-green-500" : "hover:text-emerald-600" },
              { icon: Phone, href: "tel:+5491160184046", color: isDarkMode ? "hover:text-yellow-500" : "hover:text-amber-600" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  isDarkMode ? 'bg-white/10 text-gray-400 hover:bg-white/20' : 'bg-slate-800/80 text-white hover:bg-slate-700'
                } ${color}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.about.title}
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}></div>
          </div> 
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className={`absolute inset-0 rounded-3xl blur-3xl opacity-30 ${
                isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-400 to-pink-400'
              }`}></div>
              <div className={`relative backdrop-blur-sm border rounded-3xl overflow-hidden shadow-2xl ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/30'
              }`}>
                <img 
                  src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Data Analysis" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-800'
                }`}>
                  {t.about.description1}
                </p>
                
                <p className={`text-lg leading-relaxed transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-800'
                }`}>
                  {t.about.description2}
                </p>
              </div>
              
              {/* Specialties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: BarChart3, title: t.about.dataAnalysis, color: 'from-red-500 to-pink-600' },
                  { icon: Brain, title: t.about.ai, color: 'from-blue-500 to-indigo-600' },
                  { icon: TrendingUp, title: t.about.visualization, color: 'from-yellow-500 to-orange-600' },
                  { icon: Code, title: t.about.programming, color: 'from-green-500 to-emerald-600' }
                ].map((item, index) => (
                  <div key={index} className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
                    isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-rose-200/30 hover:bg-white/70'
                  }`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.skills.title}
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`group relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${ 
                isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/60 border-rose-200/40 hover:bg-white/80'
              }`}>
                {/* Background Gradient */} 
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative text-center">
                  <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {skill.name}
                  </h3>
                  
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={`text-sm font-medium transition-all duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-slate-600'
                      }`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.projects.title}
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}></div>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className={`group relative rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
              }`}>
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-2/5 relative">
                    <div className="relative overflow-hidden rounded-l-3xl md:rounded-l-3xl md:rounded-r-none cursor-pointer" onClick={() => openProjectModal(project)}>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <ZoomIn className="text-white" size={32} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg ${
                        isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
                      }`}>
                        {project.year}
                      </div>
                    </div>

                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5 p-8 md:p-12">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                        isDarkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {project.title}
                      </h3>
                      
                      {/* Desktop GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border ${
                          isDarkMode 
                            ? 'bg-white/10 hover:bg-white/20 border-white/20 text-gray-300 hover:text-white' 
                            : 'bg-slate-800/80 hover:bg-slate-700 border-slate-600 text-white hover:text-white'
                        }`}
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">{t.projects.viewRepo}</span>
                      </a>
                    </div>
                    
                    <p className={`text-lg leading-relaxed mb-6 transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-4 text-lg transition-all duration-300 ${
                        isDarkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {t.projects.achievements}
                      </h4>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className={`flex items-start space-x-3 transition-all duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-slate-700'
                          }`}>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                            isDarkMode ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-white/60 border-rose-200/40 text-slate-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mobile GitHub Button */}
                    <div className="md:hidden mt-6">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 hover:shadow-lg ${
                          isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-rose-800 text-white' : 'bg-rose-400 hover:bg-rose-700 text-white'
                        }`}
                      >
                        <Github size={20} />
                        <span>{t.projects.viewRepo}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`relative w-full max-w-6xl max-h-[90vh] rounded-3xl backdrop-blur-xl border overflow-hidden transition-all duration-500 ${
            isDarkMode ? 'bg-slate-900/90 border-white/20' : 'bg-white/90 border-rose-200/30'
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between p-6 border-b ${
              isDarkMode ? 'border-white/10' : 'border-rose-200/30'
            }`}>
              <div className="flex items-center space-x-4">
                <h3 className={`text-2xl font-bold transition-all duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  {selectedProject.title}
                </h3>
                
                {/* GitHub Button in Modal Header */}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 border-white/20 text-gray-300 hover:text-white' 
                      : 'bg-slate-800/80 hover:bg-slate-700 border-slate-600 text-white hover:text-white'
                  }`}
                > 
                  <Github size={18} />
                  <span className="text-sm font-medium">{t.projects.viewRepo}</span> 
                </a>
              </div>
              
              <button
                onClick={closeProjectModal}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-rose-100 text-slate-600'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              {/* Image Gallery */}
              <div className="relative mb-8 group">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={selectedProject.images[selectedImageIndex]}
                    alt={`${selectedProject.title} - Imagen ${selectedImageIndex + 1}`}
                    className={`w-full h-96 object-contain transition-all duration-500 ${
                      isDarkMode ? 'bg-slate-800' : 'bg-rose-50'
                    }`}
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronDown className="rotate-90" size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronDown className="-rotate-90" size={20} />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center space-x-2 mt-4">
                    {selectedProject.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === selectedImageIndex 
                            ? (isDarkMode ? 'bg-purple-600' : 'bg-rose-500')
                            : (isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-slate-400 hover:bg-slate-500')
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Project Details */}
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-700' 
                }`}>
                  {selectedProject.description}
                </p>
                
                <div>
                  <h4 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {t.projects.achievements}
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.achievements.map((achievement: string, achIndex: number) => (
                      <li key={achIndex} className={`flex items-start space-x-3 transition-all duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-slate-700'
                      }`}>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className={`px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                        isDarkMode ? 'bg-white/10 border-white/20 text-gray-200' : 'bg-white/60 border-rose-200/40 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
 
      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.experience.title}
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`group relative p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  isDarkMode ? 'bg-gradient-to-br from-purple-600/10 to-pink-600/10' : 'bg-gradient-to-br from-rose-500/10 to-pink-500/10'
                }`}></div>
                
                <div className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 ${
                        isDarkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                          isDarkMode ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
                        }`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className={`text-lg font-semibold transition-all duration-300 ${
                            isDarkMode ? 'text-gray-200' : 'text-slate-700'
                          }`}>
                            {exp.company}
                          </h4>
                          <p className={`text-sm transition-all duration-300 ${
                            isDarkMode ? 'text-gray-400' : 'text-slate-600'
                          }`}>
                            {exp.type}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:text-right">
                      <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-lg leading-relaxed mb-8 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-slate-700'
                  }`}>
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {t.experience.skills}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                            isDarkMode ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' : 'bg-rose-100/80 border-rose-300/50 text-rose-800'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.education.title}
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}></div>
          </div>
          
          <div className="space-y-12">
            {/* Formal Education */}
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                {t.education.formal}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <div key={index} className={`group p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
                  }`}>
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${
                        isDarkMode ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
                      }`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                          isDarkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                          {edu.title}
                        </h4>
                        <p className={`text-lg font-medium mb-2 transition-all duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-slate-700'
                        }`}>
                          {edu.institution}
                        </p>
                        <p className={`text-sm mb-3 transition-all duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                          {edu.period}
                        </p>
                        <div className="flex items-center space-x-3">
                          <span className={`text-xs px-3 py-1 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                            isDarkMode ? 'bg-white/10 border-white/20 text-gray-300' : 'bg-white/60 border-rose-200/40 text-slate-700'
                          }`}>
                            {edu.type}
                          </span>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                            edu.status === 'En curso' 
                              ? (isDarkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white')
                              : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complementary Education */}
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                {t.education.complementary}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complementaryEducation.map((course, index) => (
                  <div key={index} className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/60 border-rose-200/40 hover:bg-white/80'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                        isDarkMode ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'
                      }`}>
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold text-sm mb-2 line-clamp-2 transition-all duration-300 ${
                          isDarkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                          {course.course}
                        </h4>
                        <p className={`text-xs mb-2 transition-all duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-slate-600'
                        }`}>
                          {course.institution}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-medium transition-all duration-300 ${
                            isDarkMode ? 'text-gray-400' : 'text-slate-500'
                          }`}>
                            {course.year}
                          </span>
                          {course.hours && (
                            <span className={`text-white text-xs px-2 py-1 rounded-lg font-medium ${
                              isDarkMode ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'
                            }`}>
                              {course.hours}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.contact.title}
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  {t.contact.info}
                </h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: t.contact.email, value: "mora.florencia.m@gmail.com", href: "mailto:mora.florencia.m@gmail.com", color: "from-yellow-500 to-orange-600" },
                    { icon: FaWhatsapp, label: t.contact.phone, value: "+54 9 11 6018-4046", href: "tel:+5491160184046", color: "from-green-500 to-emerald-600" },
                    { icon: Linkedin, label: t.contact.linkedin, value: "linkedin.com/in/florm01", href: "https://linkedin.com/in/florm01", color: "from-blue-500 to-indigo-600" },
                    { icon: Github, label: t.contact.github, value: "github.com/moraflorencia", href: "https://github.com/moraflorencia", color: "from-purple-500 to-pink-600" },
                    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue, href: "", color: "from-red-500 to-pink-600" }
                  ].map((item, index) => (
                    <div key={index} className={`group flex items-center space-x-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      item.href ? 'cursor-pointer' : ''
                    } ${
                      isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/60 border-rose-200/40 hover:bg-white/80'
                    }`}>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`font-semibold text-lg mb-1 transition-all duration-300 ${
                          isDarkMode ? 'text-white' : 'text-slate-800'
                        }`}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`transition-all duration-300 hover:scale-105 ${
                              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-800'
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={`transition-all duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-slate-700'
                          }`}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
            }`}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                {t.contact.form.title}
              </h3>
              
              <form 
                action="https://formspree.io/f/movnaoly" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
                      isDarkMode ? 'text-gray-200' : 'text-slate-700'
                    }`}>
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 backdrop-blur-sm ${
                        isDarkMode 
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                          : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
                      }`}
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  
                  <div>
                    <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
                      isDarkMode ? 'text-gray-200' : 'text-slate-700'
                    }`}>
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 backdrop-blur-sm ${
                        isDarkMode 
                          ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                          : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
                      }`}
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-slate-700'
                  }`}>
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 backdrop-blur-sm ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                        : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
                    }`}
                    placeholder={t.contact.form.subjectPlaceholder}
                  />
                </div>
                
                <div>
                  <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-slate-700'
                  }`}>
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    required
                    className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 resize-none backdrop-blur-sm ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                        : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
                    }`}
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>
                
                <input type="hidden" name="_next" value="https://florenciamilagrosmora.netlify.app/#contact" />
                <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
                
                <button
                  type="submit"
                  className={`group w-full text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 hover:shadow-purple-500/25' 
                      : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-500 hover:shadow-rose-500/25'
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isDarkMode ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-pink-500 to-rose-500'
                  }`}></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <Send size={20} />
                    <span>{t.contact.form.send}</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-20 px-6 ${
        isDarkMode ? 'bg-slate-900/50' : 'bg-slate-900/90'
      }`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Florencia Milagros Mora
            </h3>
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-200">
            {t.footer.description}
          </p>
        </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/florm01", color: "hover:text-blue-400" },
                { icon: Github, href: "https://github.com/moraflorencia", color: "hover:text-purple-400" },
                { icon: Mail, href: "mailto:mora.florencia.m@gmail.com", color: "hover:text-green-400" },
                { icon: Phone, href: "tel:+5491160184046", color: "hover:text-yellow-400" }
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/20 ${color}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-gray-300 text-lg">
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 