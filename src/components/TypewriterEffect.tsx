import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ className = '' }) => {
  const subtitles = [
    "Analista de Datos | Python · SQL · Power BI · Excel | Estudiante de Ingeniería en Sistemas de Información"
  ]; 
  
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullSubtitle = subtitles[currentSubtitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (charIndex < currentFullSubtitle.length) {
          setCurrentSubtitle(currentFullSubtitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pausa antes de empezar a borrar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Borrando
        if (charIndex > 0) {
          setCurrentSubtitle(currentFullSubtitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Cambiar al siguiente subtítulo
          setIsDeleting(false);
          setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        }
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentSubtitleIndex, subtitles]);
  
  return (
    <div className={`${className} text-center`}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
        Florencia Milagros Mora
      </h1>
      <div className="min-h-[60px] flex items-center justify-center">
        <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
          {currentSubtitle}
          <span className="animate-pulse text-purple-600">|</span>
        </h2>
      </div>
    </div>
  );
};

export default TypewriterEffect;