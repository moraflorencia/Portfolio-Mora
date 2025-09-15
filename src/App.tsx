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
                      <img src={project.images[0]} alt={project.title} className="w-full h-64 md:h-full object-cover transition-all duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <ExternalLink className="text-white" size={32} />
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
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border ${
                        isDarkMode ? 'bg-white/10 hover:bg-white/20 border-white/20 text-gray-300 hover:text-white' : 'bg-slate-800/80 hover:bg-slate-700 border-slate-600 text-white hover:text-white'
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
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isDarkMode ? 'bg-purple-600/30 text-purple-200' : 'bg-rose-500/20 text-rose-600'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className={`font-semibold text-sm transition-all duration-300 ${
                        isDarkMode ? 'text-white' : 'text-slate-800'
                      }`}>{t.projects.achievements}</h4>
                      <ul className={`list-inside list-disc text-sm space-y-1 transition-all duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-slate-600'
                      }`}>
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/70">
              <div className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden bg-slate-800/90 border border-white/10 shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="relative h-full overflow-y-auto">
                  {/* Image Carousel */}
                  <div className="relative">
                    <img
                      src={selectedProject.images[selectedImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-80 md:h-[500px] object-contain"
                    />
                    {/* Carousel Controls */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_: any, index: React.Key | null | undefined) => (
                        <span
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === selectedImageIndex ? 'bg-white' : 'bg-gray-400'
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>
                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">{selectedProject.title}</h3>
                    <p className="text-lg text-gray-300 mb-4">{selectedProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tech.map((tech: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, techIndex: React.Key | null | undefined) => (
                        <span key={techIndex} className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/30 text-purple-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-white">{t.projects.achievements}</h4>
                      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                        {selectedProject.achievements.map((achievement: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, achievementIndex: React.Key | null | undefined) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors"
                      >
                        <Github size={20} />
                        <span>{t.projects.viewRepo}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
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
          <div className="grid lg:grid-cols-2 gap-12">
            {experience.map((exp, index) => (
              <div key={index} className={`group relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
              }`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>{exp.title}</h3>
                <h4 className={`text-lg font-medium mb-1 transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-700'
                }`}>{exp.company}</h4>
                <p className={`text-sm font-light mb-4 transition-all duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-slate-600'
                }`}>{exp.period} - {exp.type}</p>
                <p className={`leading-relaxed mb-4 transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-800'
                }`}>{exp.description}</p>
                <h5 className={`font-semibold text-sm mb-2 transition-all duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>{t.experience.skills}</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isDarkMode ? 'bg-blue-600/30 text-blue-200' : 'bg-indigo-500/20 text-indigo-600'
                    }`}>
                      {skill}
                    </span>
                  ))}
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formal Education */}
            <div className={`group p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
              isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
            }`}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>{education[0].title}</h3>
              <p className={`text-lg font-medium mb-1 transition-all duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-slate-700'
              }`}>{education[0].institution}</p>
              <p className={`text-sm font-light mb-1 transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-slate-600'
              }`}>{education[0].period}</p>
              <p className={`text-sm font-light transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-slate-600'
              }`}>{education[0].type} - {education[0].status}</p>
            </div>
            {/* Complementary Education */}
            <div className={`group p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
              isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
            }`}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>{t.education.complementary}</h3>
              <ul className="space-y-4">
                {complementaryEducation.map((cert, index) => (
                  <li key={index} className={`relative flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                    isDarkMode ? 'bg-white/5 text-gray-300 hover:bg-white/10' : 'bg-rose-100/50 text-slate-800 hover:bg-rose-100'
                  }`}>
                    <Award size={24} className={isDarkMode ? 'text-yellow-400' : 'text-amber-600'} />
                    <div>
                      <h4 className="font-medium">{cert.course}</h4>
                      <p className="text-sm">{cert.institution} ({cert.year})</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {t.certifications.title}
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              isDarkMode ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-rose-500 to-pink-500'
            }`}></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={prevCertification}
              className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-700/80 text-white hover:bg-slate-700'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <div className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
              isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
            } w-full max-w-2xl`}>
              <div className="relative">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt={`Certificación de ${complementaryEducation[currentCertIndex].course}`}
                  className="w-full rounded-2xl mb-6 shadow-lg"
                />
              </div>
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-800'
                }`}>{complementaryEducation[currentCertIndex].course}</h3>
                <p className={`text-lg font-medium mb-1 transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-slate-700'
                }`}>{complementaryEducation[currentCertIndex].institution}</p>
                <p className={`text-sm font-light transition-all duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-slate-600'
                }`}>{complementaryEducation[currentCertIndex].year}</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors`}
                >
                  <ExternalLink size={20} />
                  <span>{t.certifications.viewDrive}</span>
                </a>
              </div>
            </div>
            <button
              onClick={nextCertification}
              className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-700/80 text-white hover:bg-slate-700'}`}
            >
              <ChevronRight size={24} />
            </button>
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>{t.contact.info}</h3>
              <div className="space-y-6">
                <div className={`flex items-center space-x-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
                }`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center`}>
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>{t.contact.email}</h4>
                    <p className={`text-sm transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-600'
                    }`}>mora.florencia.m@gmail.com</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
                }`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center`}>
                    <FaWhatsapp size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>{t.contact.phone}</h4>
                    <p className={`text-sm transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-600'
                    }`}>+54 9 11 6018-4046</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
                }`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center`}>
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>{t.contact.linkedin}</h4>
                    <p className={`text-sm transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-600'
                    }`}>florm01</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
                }`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-gray-700 to-slate-800 flex items-center justify-center`}>
                    <Github size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-all duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}>{t.contact.github}</h4>
                    <p className={`text-sm transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-600'
                    }`}>moraflorencia</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className={`group p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
              isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/70 border-rose-200/40 hover:bg-white/80'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-800'
              }`}>{t.contact.form.title}</h3>
              <FormEmail isDarkMode={isDarkMode} translations={t.contact.form} />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className={`py-12 px-6 transition-all duration-300 ${
        isDarkMode ? 'bg-slate-900/50 text-gray-400 border-t border-white/10' : 'bg-white/50 text-slate-800 border-t border-rose-200/50'
      }`}>
        <div className="container mx-auto max-w-6xl text-center">
          <p className="font-semibold mb-2">{t.footer.description}</p>
          <div className={`flex justify-center space-x-6 mb-4 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/florm01", color: "hover:text-blue-400" },
              { icon: Github, href: "https://github.com/moraflorencia", color: "hover:text-purple-400" },
              { icon: Mail, href: "mailto:mora.florencia.m@gmail.com", color: "hover:text-green-400" },
              { icon: FaWhatsapp, href: "https://wa.me/+5491160184046", color: "hover:text-green-400" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/20 ${color}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/florm01", color: isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600" },
              { icon: Github, href: "https://github.com/moraflorencia", color: isDarkMode ? "hover:text-gray-700" : "hover:text-slate-700" },
              { icon: Mail, href: "mailto:mora.florencia.m@gmail.com", color: isDarkMode ? "hover:text-green-400" : "hover:text-emerald-600" },
              { icon: Phone, href: "tel:+5491160184046", color: isDarkMode ? "hover:text-yellow-400" : "hover:text-amber-600" }
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
          <p className={`text-sm font-light transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-slate-600'
          }`}>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;