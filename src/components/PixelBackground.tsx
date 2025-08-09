import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  pulse: number;
  pulseSpeed: number;
}

const PixelBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);

      for (let i = 0; i < particleCount; i++) {
        const colors = ['#ff0000', '#ff3333', '#ff6666', '#00ff00', '#33ff33', '#0066ff'];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.01
        });
      }
      
      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position with wave motion
        particle.x += particle.speedX + Math.sin(Date.now() * 0.001 + particle.pulse) * 0.3;
        particle.y += particle.speedY + Math.cos(Date.now() * 0.001 + particle.pulse) * 0.3;
        
        // Update rotation and pulse
        particle.rotation += particle.rotationSpeed;
        particle.pulse += particle.pulseSpeed;

        // Wrap around screen
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

        // Calculate dynamic opacity with pulse
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2;

        // Draw particle with rotation
        ctx.save();
        ctx.translate(particle.x + particle.size / 2, particle.y + particle.size / 2);
        ctx.rotate(particle.rotation);
        ctx.globalAlpha = Math.max(0.1, pulseOpacity);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 15 + Math.sin(particle.pulse) * 5;
        ctx.shadowColor = particle.color;
        
        // Draw diamond shape for variety
        if (Math.random() > 0.7) {
          ctx.beginPath();
          ctx.moveTo(0, -particle.size / 2);
          ctx.lineTo(particle.size / 2, 0);
          ctx.lineTo(0, particle.size / 2);
          ctx.lineTo(-particle.size / 2, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        }
        
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <div className="pixel-grid" />
      <canvas
        ref={canvasRef}
        className="pixel-particles"
        style={{ imageRendering: 'pixelated' }}
      />
    </>
  );
};

export default PixelBackground;