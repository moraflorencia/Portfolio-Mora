import React, { useState, useEffect } from 'react';

interface Star {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
}

const StarField: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generar estrellas una sola vez al montar el componente
    const generateStars = () => {
      const newStars: Star[] = [];
      
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 10,
          animationDuration: 2 + Math.random() * 4,
          size: 1 + Math.random() * 2
        });
      }
      return newStars;
    };

    setStars(generateStars());
  }, []); // Solo se ejecuta una vez al montar

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-60 animate-pulse pointer-events-none"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`
          }}
        />
      ))}
    </>
  );
};

export default StarField;