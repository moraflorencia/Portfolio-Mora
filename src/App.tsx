import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Database,
  BarChart3,
  Code,
  Brain
} from 'lucide-react';
import TypewriterEffect from './components/TypewriterEffect';
import StarField from './components/StarField';
import ParticleSystem from './components/ParticleSystem';
import { ContactForm } from './components/ContactForm';

function App() {
  const projects = [
    {
      title: "Dashboard de Ventas Interactivo",
      description: "Análisis completo de datos de ventas con visualizaciones dinámicas en Power BI. Incluye métricas de rendimiento, tendencias temporales y segmentación por regiones.",
      image: "/assets/Ventas.jpg",
      technologies: ["Power BI", "SQL", "Excel", "DAX"],
      link: "#",
      category: "Business Intelligence"
    },
    {
      title: "Análisis de Datos de Viajes",
      description: "Estudio estadístico de patrones de viaje utilizando Python. Análisis de correlaciones, predicciones y visualizaciones interactivas.",
      image: "/assets/Viaje.jpg",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "#",
      category: "Data Analysis"
    },
    {
      title: "Sistema de Gestión de Vendedores",
      description: "Dashboard para monitoreo de performance de equipos de ventas con KPIs automatizados y reportes personalizados.",
      image: "/assets/Vendedores.jpg",
      technologies: ["Power BI", "SQL Server", "Excel", "Power Query"],
      link: "#",
      category: "Business Intelligence"
    },
    {
      title: "Glosario Técnico Interactivo",
      description: "Base de datos de términos técnicos con funcionalidades de búsqueda avanzada y categorización automática.",
      image: "/assets/Glosario.jpg",
      technologies: ["SQL", "Python", "Streamlit", "SQLite"],
      link: "#",
      category: "Data Management"
    }
  ];

  const skills = [
    { name: "Python", level: 90, icon: Code, color: "from-blue-500 to-blue-600" },
    { name: "SQL", level: 85, icon: Database, color: "from-green-500 to-green-600" },
    { name: "Power BI", level: 88, icon: BarChart3, color: "from-yellow-500 to-yellow-600" },
    { name: "Excel", level: 92, icon: BarChart3, color: "from-emerald-500 to-emerald-600" },
    { name: "Machine Learning", level: 75, icon: Brain, color: "from-purple-500 to-purple-600" },
    { name: "Data Analysis", level: 90, icon: BarChart3, color: "from-pink-500 to-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Efectos de fondo */}
      <div className="fixed inset-0 pointer-events-none">
        <StarField />
        <ParticleSystem />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Foto de perfil con borde animado */}
          <div className="profile-border mx-auto mb-8 w-48 h-48">
            <img 
              src="/assets/Portada.jpg" 
              alt="Florencia Mora" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <TypewriterEffect className="mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-4 w-4 text-purple-400" />
              <span className="text-sm">Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mail className="h-4 w-4 text-purple-400" />
              <span className="text-sm">florenciamilagrosmora@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/florencia-mora" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/florencia-mora" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <button className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110">
              <Download className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy una analista de datos apasionada por transformar información compleja en insights accionables. 
                Actualmente cursando Ingeniería en Sistemas de Información, combino conocimientos técnicos sólidos 
                con una perspectiva analítica para resolver problemas empresariales.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi experiencia abarca desde el análisis estadístico con Python hasta la creación de dashboards 
                interactivos en Power BI. Me especializo en encontrar patrones ocultos en los datos y comunicar 
                hallazgos de manera clara y efectiva.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Análisis de Datos", "Business Intelligence", "Visualización", "SQL", "Python", "Power BI"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-purple-600/20 rounded-full text-sm border border-purple-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-purple-400" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700/50 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <span>Ver proyecto</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">¡Trabajemos juntos!</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Estoy siempre abierta a nuevas oportunidades y proyectos interesantes. 
                  Si tienes una idea o necesitas ayuda con análisis de datos, no dudes en contactarme.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-600/20 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">florenciamilagrosmora@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-600/20 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-400">Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-600/20 rounded-full">
                    <Linkedin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://linkedin.com/in/florencia-mora" className="text-purple-400 hover:text-purple-300 transition-colors">
                      /in/florencia-mora
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Florencia Milagros Mora. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;