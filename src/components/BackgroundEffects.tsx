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
      size: Math.random() * 8 + 6, // 6-14px (más grandes)
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 8, // 8-14 segundos
    }));
    setFireflies(generatedFireflies);

    // Generar estrellas para modo oscuro
    const generatedStars = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2-6px (más grandes)
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 6, // 6-14 segundos
    }));
    setStars(generatedStars);

    // Generar destellos para modo claro
    const generatedSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4, // 4-10px (más grandes)
      delay: Math.random() * 12,
      duration: Math.random() * 10 + 8, // 8-18 segundos
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
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
                boxShadow: '0 0 15px rgba(253, 224, 71, 0.8), 0 0 30px rgba(253, 224, 71, 0.5)',
                filter: 'blur(0.5px)', // Efecto de brillo suave
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
                boxShadow: '0 0 12px rgba(255, 255, 255, 0.9), 0 0 24px rgba(255, 255, 255, 0.6)',
                filter: 'blur(0.3px)', // Efecto de brillo suave
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
              className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
              style={{
                width: `${s.size}px`,
                height: `${s.size}px`,
                top: `${s.y}%`,
                left: `${s.x}%`,
                animation: `ultraSlowSparkle ${s.duration}s ease-in-out infinite`,
                animationDelay: `${s.delay}s`,
                boxShadow: '0 0 10px rgba(147, 197, 253, 0.7), 0 0 20px rgba(168, 85, 247, 0.5)',
                filter: 'blur(0.4px)', // Efecto de brillo suave
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}