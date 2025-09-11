<style jsx>{`
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateX(-100px); }
    10% { opacity: 0.3; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    90% { opacity: 0.3; }
    100% { opacity: 0; transform: translateX(100px); }
  }
  
  @keyframes fireflyGlow {
    0%, 100% { opacity: 0; transform: scale(0.8); }
    25% { opacity: 0.4; transform: scale(1.1); }
    50% { opacity: 0.8; transform: scale(1.0); }
    75% { opacity: 0.6; transform: scale(1.1); }
  }
  
  @keyframes gentlePulse {
    0%, 100% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }
  
  @keyframes floatGentle {
    0% { opacity: 0; transform: translateY(0px) rotate(0deg); }
    25% { opacity: 0.3; transform: translateY(-10px) rotate(90deg); }
    50% { opacity: 0.5; transform: translateY(-20px) rotate(180deg); }
    75% { opacity: 0.3; transform: translateY(-10px) rotate(270deg); }
    100% { opacity: 0; transform: translateY(0px) rotate(360deg); }
  }
  
  @keyframes sparkleShine {
    0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
    50% { opacity: 0.8; transform: scale(1.3) rotate(180deg); }
  }
  
  @keyframes bubbleFloat {
    0% { opacity: 0; transform: translateY(20px) scale(0.8); }
    25% { opacity: 0.2; transform: translateY(-10px) scale(1.0); }
    50% { opacity: 0.3; transform: translateY(-30px) scale(1.1); }
    75% { opacity: 0.2; transform: translateY(-50px) scale(0.9); }
    100% { opacity: 0; transform: translateY(-80px) scale(0.7); }
  }
`}</style>