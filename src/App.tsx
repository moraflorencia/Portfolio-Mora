import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar,
  Download,
  ExternalLink,
  Database,
  BarChart3,
  Code,
  Brain,
  TrendingUp,
  Users,
  FileSpreadsheet,
  PieChart
} from 'lucide-react';
import TypewriterEffect from './components/TypewriterEffect';
import { ContactForm } from './components/ContactForm';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'SQL', icon: Database, level: 85 },
    { name: 'Power BI', icon: BarChart3, level: 88 },
    { name: 'Excel', icon: FileSpreadsheet, level: 92 },
    { name: 'Análisis de Datos', icon: TrendingUp, level: 87 },
    { name: 'Machine Learning', icon: Brain, level: 75 },
  ];

  const projects = [
    {
      title: "Dashboard de Ventas Interactivo",
      description: "Análisis completo de ventas con visualizaciones dinámicas en Power BI, incluyendo KPIs, tendencias temporales y segmentación por regiones.",
      image: "/assets/Ventas.jpg",
      technologies: ["Power BI", "SQL", "Excel"],
      link: "#"
    },
    {
      title: "Análisis de Rendimiento de Vendedores",
      description: "Sistema de evaluación de performance de equipos de ventas con métricas personalizadas y reportes automatizados.",
      image: "/assets/Vendedores.jpg",
      technologies: ["Python", "Pandas", "Matplotlib"],
      link: "#"
    },
    {
      title: "Predicción de Demanda Turística",
      description: "Modelo predictivo para estimar la demanda turística utilizando datos históricos y variables estacionales.",
      image: "/assets/Viaje.jpg",
      technologies: ["Python", "Scikit-learn", "Power BI"],
      link: "#"
    },
    {
      title: "Glosario de Términos de Datos",
      description: "Base de conocimiento interactiva con definiciones y ejemplos de conceptos clave en análisis de datos y business intelligence.",
      image: "/assets/Glosario.jpg",
      technologies: ["Documentation", "Power BI", "SQL"],
      link: "#"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
    }`}>
      {/* Background Effects */}
      <BackgroundEffects isDarkMode={isDarkMode} />
      
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{
          backgroundImage: isDarkMode 
            ? 'url(/assets/FondoNoche.png)' 
            : 'url(/assets/FondoDia.png)'
        }}
      />

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <div className="profile-border mb-8 mx-auto">
              <img
                src="/assets/Portada.jpg"
                alt="Florencia Mora"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
              />
            </div>

            {/* Typewriter Effect */}
            <TypewriterEffect className="mb-8" />

            {/* Location and Info */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Disponible para proyectos</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail className="inline-block h-5 w-5 mr-2" />
                Contactar
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="inline-block h-5 w-5 mr-2" />
                Ver Proyectos
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/florenciamora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/florenciamora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
              </a>
              <a
                href="mailto:florencia.mora@email.com"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
              >
                <Mail className="h-6 w-6 text-green-600" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Sobre Mí
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Soy una analista de datos apasionada por transformar información en insights accionables. 
                Actualmente estudiando Ingeniería en Sistemas de Información, combino conocimientos técnicos 
                sólidos con una visión estratégica para resolver problemas complejos de negocio.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Proyectos Destacados
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Una selección de mis trabajos más representativos en análisis de datos y business intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                    >
                      Ver proyecto
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                ¡Trabajemos Juntos!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                ¿Tienes un proyecto interesante? ¿Necesitas análisis de datos o consultoría en BI? 
                Me encantaría conocer más sobre tu desafío.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">florencia.mora@email.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium">Ubicación</p>
                        <p className="text-gray-600 dark:text-gray-300">Buenos Aires, Argentina</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium">Disponibilidad</p>
                        <p className="text-gray-600 dark:text-gray-300">Disponible para proyectos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Servicios</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Dashboards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Database className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Análisis SQL</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Machine Learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Predicciones</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PieChart className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Visualización</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="text-sm">Consultoría</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/florenciamora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/florenciamora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:florencia.mora@email.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400">
              © 2024 Florencia Milagros Mora. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Hecho con ❤️ y mucho café ☕
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;