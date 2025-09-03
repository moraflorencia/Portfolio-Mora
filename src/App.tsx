import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, ChevronDown, Moon, Sun, Database, BarChart3, Code, FileSpreadsheet } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Typewriter effect for hero subtitle
  const subtitle = "Analista de Datos | Python · SQL · Power BI · Excel | Estudiante de Ingeniería en Sistemas de Información";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (charIndex < subtitle.length) {
          setDisplayedText(subtitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pausa antes de empezar a borrar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Borrando
        if (charIndex > 0) {
          setDisplayedText(subtitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Reiniciar el ciclo
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, subtitle]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Análisis de Ventas - Dashboard Interactivo",
      description: "Dashboard completo desarrollado en Power BI para análisis de ventas con métricas KPI, tendencias temporales y segmentación por productos.",
      image: "/assets/Ventas.jpg",
      technologies: ["Power BI", "SQL", "Excel"],
      link: "#"
    },
    {
      title: "Análisis de Rendimiento de Vendedores",
      description: "Sistema de análisis para evaluar el rendimiento de equipos de ventas con visualizaciones interactivas y reportes automatizados.",
      image: "/assets/Vendedores.jpg",
      technologies: ["Python", "Pandas", "Matplotlib"],
      link: "#"
    },
    {
      title: "Glosario de Términos de Datos",
      description: "Documentación completa de términos técnicos y metodologías utilizadas en análisis de datos y business intelligence.",
      image: "/assets/Glosario.jpg",
      technologies: ["Documentation", "Data Analysis"],
      link: "#"
    },
    {
      title: "Análisis de Datos de Viajes",
      description: "Estudio estadístico de patrones de viaje con visualizaciones geográficas y análisis de tendencias estacionales.",
      image: "/assets/Viaje.jpg",
      technologies: ["Python", "SQL", "Tableau"],
      link: "#"
    }
  ];

  const skills = [
    { name: "Python", level: 85, icon: Code },
    { name: "SQL", level: 90, icon: Database },
    { name: "Power BI", level: 88, icon: BarChart3 },
    { name: "Excel", level: 92, icon: FileSpreadsheet }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: `url(${isDarkMode ? '/assets/FondoNoche.png' : '/assets/FondoDia.png'})`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        
        {/* Navigation */}
        <nav className="relative z-10 p-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            FM
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
            </button>
            <div className="hidden md:flex space-x-6 text-white">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-300 transition-colors">Sobre mí</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-300 transition-colors">Habilidades</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-300 transition-colors">Proyectos</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-300 transition-colors">Contacto</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
          {/* Profile Image */}
          <div className="profile-border mb-8">
            <img 
              src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="Florencia Mora" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Florencia Milagros Mora
          </h1>

          {/* Typewriter Subtitle */}
          <div className="min-h-[80px] flex items-center justify-center mb-8">
            <h2 className="text-lg md:text-xl lg:text-2xl text-white font-medium max-w-4xl">
              {displayedText}
              <span className="animate-pulse text-purple-400">|</span>
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contactar
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre mí</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Soy una apasionada analista de datos con sólida experiencia en Python, SQL, Power BI y Excel. 
                Actualmente cursando Ingeniería en Sistemas de Información, combino conocimientos técnicos 
                con visión estratégica para transformar datos en insights accionables.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Mi enfoque se centra en crear soluciones de business intelligence que impulsen la toma de 
                decisiones basada en datos, optimizando procesos y generando valor para las organizaciones.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span>Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>Disponible para proyectos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Workspace" 
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 mx-auto">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400 font-medium">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-semibold transition-colors">
                    <span>Ver proyecto</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">¡Conectemos!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Estoy siempre abierta a nuevas oportunidades y colaboraciones. 
                Si tienes un proyecto interesante o simplemente quieres charlar sobre datos, 
                no dudes en contactarme.
              </p>
              <div className="space-y-4">
                <a href="mailto:florencia.mora@email.com" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>florencia.mora@email.com</span>
                </a>
                <a href="tel:+5491123456789" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+54 9 11 2345-6789</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Buenos Aires, Argentina</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Florencia Mora</h3>
              <p className="text-gray-400">Analista de Datos & Futura Ingeniera</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/florencia-mora" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/florencia-mora" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:florencia.mora@email.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Florencia Mora. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;