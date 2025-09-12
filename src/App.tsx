import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  Database,
  BarChart3,
  Code,
  Brain,
  Sun,
  Moon,
  ChevronDown,
  User,
  Briefcase,
  GraduationCap,
  Award,
  MessageCircle
} from 'lucide-react';
import TypewriterEffect from './components/TypewriterEffect';
import { ContactForm } from './components/ContactForm';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    { name: 'Python', level: 90, icon: Code },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'Power BI', level: 88, icon: BarChart3 },
    { name: 'Excel Avanzado', level: 92, icon: BarChart3 },
    { name: 'Machine Learning', level: 75, icon: Brain },
    { name: 'Análisis Estadístico', level: 80, icon: BarChart3 }
  ];

  const projects = [
    {
      title: "Dashboard de Ventas Interactivo",
      description: "Análisis completo de datos de ventas con visualizaciones dinámicas en Power BI, incluyendo KPIs, tendencias temporales y segmentación por regiones.",
      image: "/assets/Ventas.jpg",
      technologies: ["Power BI", "SQL", "Excel"],
      link: "#"
    },
    {
      title: "Análisis de Datos de Viajes",
      description: "Estudio estadístico de patrones de viaje utilizando Python y bibliotecas de análisis de datos para identificar tendencias y optimizar rutas.",
      image: "/assets/Viaje.jpg",
      technologies: ["Python", "Pandas", "Matplotlib"],
      link: "#"
    },
    {
      title: "Sistema de Gestión de Vendedores",
      description: "Dashboard para monitoreo de performance de equipos de ventas con métricas de productividad y análisis comparativo.",
      image: "/assets/Vendedores.jpg",
      technologies: ["Power BI", "SQL Server", "DAX"],
      link: "#"
    },
    {
      title: "Glosario de Términos Técnicos",
      description: "Base de datos interactiva con definiciones y ejemplos de términos técnicos del área de análisis de datos y business intelligence.",
      image: "/assets/Glosario.jpg",
      technologies: ["SQL", "Power BI", "Excel"],
      link: "#"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      {/* Background Effects */}
      <BackgroundEffects isDarkMode={isDarkMode} />
      
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 z-0"
        style={{
          backgroundImage: isDarkMode 
            ? 'url(/assets/FondoNoche.png)' 
            : 'url(/assets/FondoDia.png)'
        }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/20 dark:bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FM
                </h1>
                <div className="hidden md:flex space-x-6">
                  {[
                    { id: 'inicio', label: 'Inicio', icon: User },
                    { id: 'sobre-mi', label: 'Sobre Mí', icon: User },
                    { id: 'habilidades', label: 'Habilidades', icon: Award },
                    { id: 'proyectos', label: 'Proyectos', icon: Briefcase },
                    { id: 'educacion', label: 'Educación', icon: GraduationCap },
                    { id: 'contacto', label: 'Contacto', icon: MessageCircle }
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                        activeSection === id
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                          : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="profile-border mb-8 mx-auto">
              <img
                src="/assets/Portada.jpg"
                alt="Florencia Mora"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
              />
            </div>
            
            <TypewriterEffect className="mb-8" />
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:florenciamilagrosmora@gmail.com"
                className="flex items-center space-x-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                <span>Contactar</span>
              </a>
              <a
                href="https://linkedin.com/in/florencia-milagros-mora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/florenciamilagrosmora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
            
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="animate-bounce text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Sobre Mí
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    Soy una analista de datos apasionada por transformar información en insights valiosos. 
                    Actualmente curso el 4° año de Ingeniería en Sistemas de Información en la UTN FRBA, 
                    combinando mi formación académica con experiencia práctica en análisis de datos.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Me especializo en Python, SQL, Power BI y Excel avanzado, con un enfoque particular 
                    en la visualización de datos y el desarrollo de dashboards interactivos que faciliten 
                    la toma de decisiones estratégicas.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>Buenos Aires, Argentina</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Phone className="h-4 w-4" />
                      <span>+54 11 1234-5678</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experiencia</h3>
                    <p className="text-gray-600 dark:text-gray-300">2+ años en análisis de datos</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Proyectos</h3>
                    <p className="text-gray-600 dark:text-gray-300">15+ dashboards desarrollados</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Educación</h3>
                    <p className="text-gray-600 dark:text-gray-300">Ing. en Sistemas - UTN FRBA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Habilidades Técnicas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-right">
                      {skill.level}%
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Proyectos Destacados
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200"
                    >
                      <span>Ver proyecto</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="educacion" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Educación y Certificaciones
            </h2>
            <div className="space-y-6">
              <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Ingeniería en Sistemas de Información
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      Universidad Tecnológica Nacional - FRBA
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      4° año en curso • 2021 - Presente
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Especialización en análisis de sistemas, bases de datos y desarrollo de software.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Certificación en Power BI
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      Microsoft Learn
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      2023
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Desarrollo de dashboards interactivos y análisis de datos empresariales.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-green-600 dark:text-green-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Python para Análisis de Datos
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                      Coursera - IBM
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      2022
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Pandas, NumPy, Matplotlib y técnicas de machine learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Contacto
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      florenciamilagrosmora@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      +54 11 1234-5678
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Buenos Aires, Argentina
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <a
                      href="https://linkedin.com/in/florencia-milagros-mora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      linkedin.com/in/florencia-milagros-mora
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <a
                      href="https://github.com/florenciamilagrosmora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      github.com/florenciamilagrosmora
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="/cv-florencia-mora.pdf"
                    download
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Download className="h-5 w-5" />
                    <span>Descargar CV</span>
                  </a>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/90 dark:bg-gray-800/90 py-8 px-4 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Florencia Milagros Mora. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Desarrollado con React, TypeScript y Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;