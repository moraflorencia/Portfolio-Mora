import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
  animationType: string;
}

const ParticleSystem: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generar partículas una sola vez al montar el componente
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const animationTypes = [
        'ultraSlowFadeInOut',
        'ultraSlowFireflyGlow',
        'ultraSlowPulse',
        'ultraSlowFloat',
        'ultraSlowSparkle',
        'ultraSlowBubble'
      ];

      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 20,
          animationDuration: 15 + Math.random() * 25,
          size: 2 + Math.random() * 4,
          animationType: animationTypes[Math.floor(Math.random() * animationTypes.length)]
        });
      }
      return newParticles;
    };

    setParticles(generateParticles());
  }, []); // Solo se ejecuta una vez al montar

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 pointer-events-none"
          style={{
            left: `${particle.left}%`,
            top: `${Math.random() * 100}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationName: particle.animationType,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out'
          }}
        />
      ))}
    </>
  );
};

export default ParticleSystem;