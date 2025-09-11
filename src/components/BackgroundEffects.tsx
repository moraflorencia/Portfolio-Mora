import React, { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function BackgroundEffects({ isDarkMode }: { isDarkMode: boolean }) {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    }));
    setFireflies(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {isDarkMode ? (
        // 🔥 LUCES EN MODO OSCURO (luciérnagas)
        fireflies.map((f) => (
          <div
            key={f.id}
            className="absolute rounded-full bg-yellow-300 opacity-70 animate-fly"
            style={{
              width: `${f.size}px`,
              height: `${f.size}px`,
              top: `${f.y}%`,
              left: `${f.x}%`,
              animationDelay: `${f.delay}s`,
            }}
          />
        ))
      ) : (
        // ✨ DESTELLOS EN MODO CLARO
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
 