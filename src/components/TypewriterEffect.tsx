import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ className = '' }) => {
  const texts = [
    "Florencia Milagros Mora",
    "Analista de Datos | Python · SQL · Power BI · Excel | Estudiante de Ingeniería en Sistemas de Información"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (charIndex < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pausa antes de empezar a borrar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Borrando
        if (charIndex > 0) {
          setCurrentText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Cambiar al siguiente texto
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : currentTextIndex === 0 ? 100 : 60); // Velocidad diferente para nombre vs subtítulo

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  const isNameText = currentTextIndex === 0;
  
  return (
    <div className={`${className} min-h-[120px] flex items-center justify-center`}>
      <h1 className={`text-center leading-tight ${
        isNameText 
          ? 'text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'
          : 'text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-4xl'
      }`}>
        {currentText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
};

export default TypewriterEffect;