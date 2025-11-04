import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Database,
  BarChart3,
  Code,
  FileSpreadsheet,
  TrendingUp,
  Users,
  Calendar,
  Award,
  BookOpen,
  Target,
  Briefcase,
  GraduationCap,
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import TypewriterEffect from './components/TypewriterEffect';
import BackgroundEffects from './components/BackgroundEffects';
import { FormEmail } from './components/FormEmail';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'educacion', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre Mí',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      educacion: 'Educación',
      contacto: 'Contacto'
    },
    hero: {
      downloadCV: 'Descargar CV',
      scrollDown: 'Desplázate hacia abajo'
    },
    about: {
      title: 'Sobre Mí',
      description: 'Soy una analista de datos apasionada por transformar información en insights accionables. Con sólida experiencia en Python, SQL, Power BI y Excel, me especializo en crear soluciones que impulsan la toma de decisiones estratégicas.',
      currentlyStudying: 'Actualmente cursando Ingeniería en Sistemas de Información en la UTN, combinando mi pasión por los datos con fundamentos sólidos en desarrollo de software.',
      location: 'Buenos Aires, Argentina',
      experience: '2+ años de experiencia',
      projects: '10+ proyectos completados'
    },
    skills: {
      title: 'Habilidades Técnicas',
      categories: {
        programming: 'Programación',
        dataAnalysis: 'Análisis de Datos',
        databases: 'Bases de Datos',
        tools: 'Herramientas'
      }
    },
    projects: {
      title: 'Proyectos Destacados',
      viewProject: 'Ver Proyecto',
      technologies: 'Tecnologías:',
      projects: [
        {
          title: 'Dashboard de Análisis de Ventas',
          description: 'Dashboard interactivo desarrollado en Power BI para análisis de ventas, con visualizaciones dinámicas y KPIs clave que permiten identificar tendencias y oportunidades de negocio.',
          image: '/assets/Portada.jpg',
          technologies: ['Power BI', 'DAX', 'SQL', 'Excel'],
          link: '#'
        },
        {
          title: 'Sistema de Análisis de Viajes',
          description: 'Análisis completo de datos de viajes utilizando Python y SQL, con visualizaciones que revelan patrones de comportamiento y optimización de rutas.',
          image: '/assets/Viaje.jpg',
          technologies: ['Python', 'Pandas', 'SQL', 'Matplotlib'],
          link: '#'
        },
        {
          title: 'Automatización de Reportes',
          description: 'Sistema automatizado para generación de reportes mensuales utilizando Excel y VBA, reduciendo el tiempo de procesamiento en un 70%.',
          image: '/assets/Glosario.jpg',
          technologies: ['Excel', 'VBA', 'Power Query', 'SQL'],
          link: '#'
        }
      ]
    },
    education: {
      title: 'Educación y Certificaciones',
      items: [
        {
          title: 'Ingeniería en Sistemas de Información',
          institution: 'Universidad Tecnológica Nacional (UTN)',
          period: '2022 - En curso',
          description: 'Cursando actualmente con enfoque en desarrollo de software y análisis de sistemas.'
        },
        {
          title: 'Certificación en Power BI',
          institution: 'Microsoft',
          period: '2023',
          description: 'Certificación oficial en Microsoft Power BI para análisis de datos y business intelligence.'
        },
        {
          title: 'Python para Análisis de Datos',
          institution: 'Coursera',
          period: '2023',
          description: 'Especialización en Python aplicado al análisis de datos con Pandas, NumPy y Matplotlib.'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre completo',
      email: 'Email',
      emailPlaceholder: 'tu.email@ejemplo.com',
      subject: 'Asunto',
      subjectPlaceholder: 'Selecciona un asunto',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto o consulta...',
      send: 'Enviar Mensaje',
      info: {
        email: 'florenciamilagrosmora@gmail.com',
        phone: '+54 11 1234-5678',
        location: 'Buenos Aires, Argentina'
      }
    }
  };

  const skills = [
    { name: 'Python', level: 90, category: 'programming', icon: Code },
    { name: 'SQL', level: 85, category: 'databases', icon: Database },
    { name: 'Power BI', level: 95, category: 'dataAnalysis', icon: BarChart3 },
    { name: 'Excel', level: 90, category: 'tools', icon: FileSpreadsheet },
    { name: 'Pandas', level: 85, category: 'programming', icon: Code },
    { name: 'MySQL', level: 80, category: 'databases', icon: Database },
    { name: 'Tableau', level: 75, category: 'dataAnalysis', icon: TrendingUp },
    { name: 'Git', level: 70, category: 'tools', icon: Code }
  ];

  const skillCategories = {
    programming: { name: translations.skills.categories.programming, color: 'from-blue-500 to-purple-600' },
    dataAnalysis: { name: translations.skills.categories.dataAnalysis, color: 'from-green-500 to-teal-600' },
    databases: { name: translations.skills.categories.databases, color: 'from-orange-500 to-red-600' },
    tools: { name: translations.skills.categories.tools, color: 'from-pink-500 to-rose-600' }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-rose-50 via-pink-50 to-blue-50'
    }`}>
      <BackgroundEffects isDarkMode={isDarkMode} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'
      } backdrop-blur-md border-b ${
        isDarkMode ? 'border-white/10' : 'border-rose-200/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-xl font-bold transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              FM
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {Object.entries(translations.nav).map(([key, label]) => {
                const sectionId = key === 'sobreMi' ? 'sobre-mi' : key.toLowerCase();
                return (
                  <button
                    key={key}
                    onClick={() => scrollToSection(sectionId)}
                    className={`transition-all duration-300 hover:scale-105 ${
                      activeSection === sectionId
                        ? isDarkMode ? 'text-purple-400' : 'text-rose-600'
                        : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-white/10 text-yellow-400 hover:bg-white/20' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${
              isDarkMode ? 'border-white/10' : 'border-rose-200/30'
            }`}>
              {Object.entries(translations.nav).map(([key, label]) => {
                const sectionId = key === 'sobreMi' ? 'sobre-mi' : key.toLowerCase();
                return (
                  <button
                    key={key}
                    onClick={() => scrollToSection(sectionId)}
                    className={`block w-full text-left py-2 transition-all duration-300 ${
                      activeSection === sectionId
                        ? isDarkMode ? 'text-purple-400' : 'text-rose-600'
                        : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="profile-border mx-auto w-32 h-32 mb-8">
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Florencia Mora" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <TypewriterEffect className="mb-12" />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/assets/CV_Florencia_Mora.pdf"
              download
              className={`group flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-pink-600 hover:to-purple-600 hover:shadow-purple-500/25' 
                  : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-pink-500 hover:to-rose-500 hover:shadow-rose-500/25'
              }`}
            >
              <Download size={20} />
              <span>{translations.hero.downloadCV}</span>
            </a>
            
            <div className="flex space-x-4">
              <a
                href="mailto:florenciamilagrosmora@gmail.com"
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20 hover:shadow-white/10' 
                    : 'bg-white/70 text-slate-600 hover:bg-white hover:shadow-slate-200/50'
                }`}
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/florencia-mora"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20 hover:shadow-white/10' 
                    : 'bg-white/70 text-slate-600 hover:bg-white hover:shadow-slate-200/50'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/florencia-mora"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-white/10 text-white hover:bg-white/20 hover:shadow-white/10' 
                    : 'bg-white/70 text-slate-600 hover:bg-white hover:shadow-slate-200/50'
                }`}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className={`mx-auto transition-all duration-300 ${
              isDarkMode ? 'text-white/60' : 'text-slate-400'
            }`} size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {translations.about.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`text-lg mb-6 leading-relaxed transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  {translations.about.description}
                </p>
                <p className={`text-lg mb-8 leading-relaxed transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  {translations.about.currentlyStudying}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className={`text-center p-4 rounded-2xl transition-all duration-300 ${
                    isDarkMode ? 'bg-white/5' : 'bg-white/50'
                  }`}>
                    <MapPin className={`mx-auto mb-2 transition-all duration-300 ${
                      isDarkMode ? 'text-purple-400' : 'text-rose-500'
                    }`} size={24} />
                    <p className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Ubicación
                    </p>
                    <p className={`text-sm transition-all duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {translations.about.location}
                    </p>
                  </div>
                  
                  <div className={`text-center p-4 rounded-2xl transition-all duration-300 ${
                    isDarkMode ? 'bg-white/5' : 'bg-white/50'
                  }`}>
                    <Briefcase className={`mx-auto mb-2 transition-all duration-300 ${
                      isDarkMode ? 'text-purple-400' : 'text-rose-500'
                    }`} size={24} />
                    <p className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Experiencia
                    </p>
                    <p className={`text-sm transition-all duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {translations.about.experience}
                    </p>
                  </div>
                  
                  <div className={`text-center p-4 rounded-2xl transition-all duration-300 ${
                    isDarkMode ? 'bg-white/5' : 'bg-white/50'
                  }`}>
                    <Target className={`mx-auto mb-2 transition-all duration-300 ${
                      isDarkMode ? 'text-purple-400' : 'text-rose-500'
                    }`} size={24} />
                    <p className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Proyectos
                    </p>
                    <p className={`text-sm transition-all duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                      {translations.about.projects}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className={`aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 ${
                  isDarkMode ? 'shadow-purple-500/20' : 'shadow-rose-500/20'
                }`}>
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {translations.skills.title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skillCategories).map(([categoryKey, category]) => (
                <div key={categoryKey} className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 transition-all duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {skills
                      .filter(skill => skill.category === categoryKey)
                      .map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <IconComponent size={16} className={`transition-all duration-300 ${
                                  isDarkMode ? 'text-purple-400' : 'text-rose-500'
                                }`} />
                                <span className={`font-medium transition-all duration-300 ${
                                  isDarkMode ? 'text-gray-300' : 'text-slate-700'
                                }`}>
                                  {skill.name}
                                </span>
                              </div>
                              <span className={`text-sm font-semibold transition-all duration-300 ${
                                isDarkMode ? 'text-gray-400' : 'text-slate-600'
                              }`}>
                                {skill.level}%
                              </span>
                            </div>
                            <div className={`h-2 rounded-full overflow-hidden ${
                              isDarkMode ? 'bg-white/10' : 'bg-slate-200'
                            }`}>
                              <div 
                                className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {translations.projects.title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {translations.projects.projects.map((project, index) => (
                <div key={index} className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode ? 'bg-white/5 hover:shadow-purple-500/20' : 'bg-white/50 hover:shadow-rose-500/20'
                }`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 leading-relaxed transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <p className={`text-sm font-semibold mb-2 transition-all duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-slate-600'
                      }`}>
                        {translations.projects.technologies}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                              isDarkMode 
                                ? 'bg-purple-500/20 text-purple-300' 
                                : 'bg-rose-100 text-rose-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className={`flex items-center space-x-2 font-semibold transition-all duration-300 hover:scale-105 ${
                      isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-rose-600 hover:text-rose-500'
                    }`}>
                      <span>{translations.projects.viewProject}</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
          }`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {translations.education.title}
            </h2>
            
            <div className="space-y-8">
              {translations.education.items.map((item, index) => (
                <div key={index} className={`flex items-start space-x-6 p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-white/5' : 'bg-white/50'
                }`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isDarkMode ? 'bg-purple-500/20' : 'bg-rose-100'
                  }`}>
                    {index === 0 ? (
                      <GraduationCap className={`transition-all duration-300 ${
                        isDarkMode ? 'text-purple-400' : 'text-rose-600'
                      }`} size={24} />
                    ) : (
                      <Award className={`transition-all duration-300 ${
                        isDarkMode ? 'text-purple-400' : 'text-rose-600'
                      }`} size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      {item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                      <p className={`font-semibold transition-all duration-300 ${
                        isDarkMode ? 'text-purple-400' : 'text-rose-600'
                      }`}>
                        {item.institution}
                      </p>
                      <span className={`text-sm transition-all duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-slate-600'
                      }`}>
                        {item.period}
                      </span>
                    </div>
                    <p className={`leading-relaxed transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>
            {translations.contact.title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${
              isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
            }`}>
              <h3 className={`text-2xl font-bold mb-8 transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode ? 'bg-purple-500/20' : 'bg-rose-100'
                  }`}>
                    <Mail className={`transition-all duration-300 ${
                      isDarkMode ? 'text-purple-400' : 'text-rose-600'
                    }`} size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Email
                    </p>
                    <a 
                      href={`mailto:${translations.contact.info.email}`}
                      className={`transition-all duration-300 hover:underline ${
                        isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-slate-700 hover:text-rose-600'
                      }`}
                    >
                      {translations.contact.info.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode ? 'bg-purple-500/20' : 'bg-rose-100'
                  }`}>
                    <Phone className={`transition-all duration-300 ${
                      isDarkMode ? 'text-purple-400' : 'text-rose-600'
                    }`} size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Teléfono
                    </p>
                    <p className={`transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                      {translations.contact.info.phone}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    isDarkMode ? 'bg-purple-500/20' : 'bg-rose-100'
                  }`}>
                    <MapPin className={`transition-all duration-300 ${
                      isDarkMode ? 'text-purple-400' : 'text-rose-600'
                    }`} size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Ubicación
                    </p>
                    <p className={`transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                      {translations.contact.info.location}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/florencia-mora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-white/70 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/florencia-mora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-white/70 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <FormEmail isDarkMode={isDarkMode} translations={translations.contact} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t transition-all duration-300 ${
        isDarkMode ? 'border-white/10 bg-slate-900/50' : 'border-rose-200/30 bg-white/30'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-slate-600'
          }`}>
            © 2024 Florencia Milagros Mora. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;