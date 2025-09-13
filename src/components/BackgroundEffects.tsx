import React, { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function BackgroundEffects({ isDarkMode }: { isDarkMode: boolean }) {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generar luciérnagas para modo oscuro
    const generatedFireflies = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 4, // 6-14px
      delay: Math.random() * 8,
      duration: Math.random() * 8 + 10, // 8-14 segundos
    }));
    setFireflies(generatedFireflies);

    // Generar estrellas para modo oscuro
    const generatedStars = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1 + 2, // 2-6px
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 10, // 6-14 segundos
    }));
    setStars(generatedStars);

    // Generar destellos para modo claro
    const generatedSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4, // 4-10px
      delay: Math.random() * 12,
      duration: Math.random() * 10 + 8, // 8-18 segundos
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {isDarkMode ? (
        // 🔥 MODO OSCURO: Luciérnagas y estrellas
        <>
          {/* Luciérnagas amarillas */}
          {fireflies.map((f) => (
            <div
              key={`firefly-${f.id}`}
              className="absolute rounded-full bg-yellow-300 shadow-lg"
              style={{
                width: `${f.size}px`,
               height: `${f.size}px`,
               top: `${f.y}%`,
               left: `${f.x}%`,
               animation: `ultraSlowFireflyGlow ${f.duration}s ease-in-out infinite`,
               animationDelay: `${f.delay}s`,
               boxShadow: "0 0 20px rgba(253, 224, 71, 0.9), 0 0 40px rgba(253, 224, 71, 0.6)",
               filter: "blur(0.5px)",
              }}
            />
          ))}
          
          {/* Estrellas blancas */}
          {stars.map((s) => (
            <div
              key={`star-${s.id}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${s.size}px`,
                height: `${s.size}px`,
                top: `${s.y}%`,
                left: `${s.x}%`,
                animation: `ultraSlowPulse ${s.duration}s ease-in-out infinite`,
                animationDelay: `${s.delay}s`,
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.6)',
                filter: 'blur(0.3px)',
              }}
            />
          ))}
        </>
      ) : (
         // ✨ MODO CLARO: Destellos suaves
        <>
          {sparkles.map((s) => (
            <div
              key={`sparkle-${s.id}`}
              className="absolute"
              style={{
                top: `${s.y}%`,
                left: `${s.x}%`,
                animation: `ultraSlowSparkle ${s.duration}s ease-in-out infinite`,
                animationDelay: `${s.delay}s`,
              }}
            >
              {/* Destello en forma de estrella de 4 puntas */}
              <div className="relative">
                {/* Línea horizontal */}
                <div 
                  className="absolute bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  style={{
                    width: `${s.size * 2}px`,
                    height: '2px',
                    left: `${-s.size}px`,
                    top: '0px',
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
                  }}
                />
                {/* Línea vertical */}
                <div 
                  className="absolute bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                  style={{
                    width: '2px',
                    height: `${s.size * 2}px`,
                    left: '0px',
                    top: `${-s.size}px`,
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)',
                  }}
                />
                {/* Centro brillante */}
                <div 
                  className="absolute bg-white rounded-full"
                  style={{
                    width: '3px',
                    height: '3px',
                    left: '-1.5px',
                    top: '-1.5px',
                    boxShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(196, 172, 150, 0.6)',
                  }}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}