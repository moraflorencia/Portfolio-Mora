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
  TrendingUp,
  FileSpreadsheet,
  Sun,
  Moon
} from 'lucide-react';
import TypewriterEffect from './components/TypewriterEffect';
import ParticleSystem from './components/ParticleSystem';
import StarField from './components/StarField';
import { ContactForm } from './components/ContactForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const skills = [
    { name: 'Python', icon: Code, level: 90, color: 'from-blue-500 to-green-500' },
    { name: 'SQL', icon: Database, level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Power BI', icon: BarChart3, level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'Excel', icon: FileSpreadsheet, level: 92, color: 'from-green-500 to-teal-500' },
    { name: 'Machine Learning', icon: Brain, level: 75, color: 'from-red-500 to-purple-500' },
    { name: 'Data Analysis', icon: TrendingUp, level: 90, color: 'from-indigo-500 to-blue-500' }
  ];

  const projects = [
    {
      title: "Dashboard de Ventas Interactivo",
      description: "Análisis completo de datos de ventas con visualizaciones dinámicas en Power BI, incluyendo métricas de rendimiento por región y producto.",
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
      description: "Aplicación para el seguimiento y análisis del rendimiento de equipos de ventas con dashboards personalizados y reportes automatizados.",
      image: "/assets/Vendedores.jpg",
      technologies: ["Power BI", "SQL Server", "Excel"],
      link: "#"
    },
    {
      title: "Glosario de Términos Técnicos",
      description: "Base de datos interactiva con definiciones y explicaciones de términos técnicos del análisis de datos y business intelligence.",
      image: "/assets/Glosario.jpg",
      technologies: ["SQL", "Power BI", "Documentation"],
      link: "#"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Fondo dinámico */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: darkMode 
              ? 'url("/src/assets/FondoNoche.png")' 
              : 'url("/src/assets/FondoDia.png")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-pink-900/40" />
        
        {/* Sistema de partículas */}
        <ParticleSystem />
        
        {/* Campo de estrellas */}
        <StarField />
      </div>

      {/* Botón de modo oscuro */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full 
                   border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 
                   transition-all duration-300 group"
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="h-6 w-6 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
        )}
      </button>

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Imagen de perfil con borde animado */}
            <div className="profile-border mx-auto mb-8 w-48 h-48">
              <img
                src="/assets/Portada.jpg"
                alt="Florencia Mora"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <TypewriterEffect className="mb-8" />

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:florenciamilagrosmora@gmail.com"
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md 
                          rounded-full border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 
                          transition-all duration-300 text-gray-800 dark:text-white group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Contacto</span>
              </a>
              <a
                href="https://linkedin.com/in/florencia-mora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md 
                          rounded-full border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 
                          transition-all duration-300 text-gray-800 dark:text-white group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/florencia-mora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md 
                          rounded-full border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 
                          transition-all duration-300 text-gray-800 dark:text-white group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+54 11 1234-5678</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Sobre Mí
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Mi Pasión por los Datos
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Soy una analista de datos apasionada por transformar información compleja en insights accionables. 
                    Actualmente cursando Ingeniería en Sistemas de Información, combino conocimientos técnicos sólidos 
                    con una perspectiva analítica para resolver problemas empresariales.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Mi experiencia abarca desde el análisis estadístico hasta la creación de dashboards interactivos, 
                    siempre enfocándome en generar valor a través de los datos.
                  </p>
                </div>

                <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Educación y Crecimiento
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Ingeniería en Sistemas de Información</h4>
                        <p className="text-gray-600 dark:text-gray-400">Universidad Tecnológica Nacional (En curso)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Certificaciones en Data Science</h4>
                        <p className="text-gray-600 dark:text-gray-400">Python, SQL, Power BI, Machine Learning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Habilidades Técnicas</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                Proyectos Destacados
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Una selección de mis trabajos más representativos en análisis de datos y business intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium group-hover:translate-x-2 transition-all duration-300"
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Trabajemos Juntos
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                ¿Tienes un proyecto interesante? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20 dark:border-gray-700/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Florencia Milagros Mora</h3>
                <p className="text-gray-600 dark:text-gray-300">Analista de Datos • Buenos Aires, Argentina</p>
              </div>
              
              <div className="flex space-x-6">
                <a href="mailto:florenciamilagrosmora@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/florencia-mora" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/florencia-mora" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 dark:border-gray-700/10 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                © 2024 Florencia Milagros Mora. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;