import { useEffect, useRef } from 'react';

export const ParticleSwarm = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: any[] = [];
    const count = 3000; // Optimized for 2D Canvas performance
    
    // Primary Color HSL(15, 85%, 55%)

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 2000 - 1000,
        baseX: Math.random() * 2000 - 1000,
        baseY: Math.random() * 2000 - 1000,
        baseZ: Math.random() * 2000 - 1000,
        speed: Math.random() * 0.02 + 0.005,
        offset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let animationFrameId: number;

    const render = () => {
      time += 0.01;
      
      // Clear canvas with a very slight fade for trailing effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.3)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      
      // Camera perspective
      const fov = 400;

      for (let i = 0; i < count; i++) {
        const p = particles[i];

        // Complex math shaping (Tesseract / Torus feel)
        const a = time * p.speed + p.offset;
        
        // Rotate in 3D
        let rx = p.baseX * Math.cos(time * 0.2) - p.baseZ * Math.sin(time * 0.2);
        let rz = p.baseX * Math.sin(time * 0.2) + p.baseZ * Math.cos(time * 0.2);
        
        let ry = p.baseY * Math.cos(time * 0.1) - rz * Math.sin(time * 0.1);
        let finalZ = p.baseY * Math.sin(time * 0.1) + rz * Math.cos(time * 0.1);

        // Add some breathing motion
        const breathe = Math.sin(time + p.offset) * 100;
        rx += Math.cos(a) * breathe;
        ry += Math.sin(a) * breathe;

        // Perspective projection
        // Move camera back
        finalZ += 1500; 

        if (finalZ > 0) {
          const scale = fov / finalZ;
          const x2d = cx + rx * scale;
          const y2d = cy + ry * scale;

          // Only draw if on screen
          if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
            const size = Math.max(0.5, 3 * scale);
            
            // HSL 15, 85%, 55% theme with dynamic lightness
            const l = 30 + (Math.sin(a * 2) * 20);
            const alpha = Math.min(1, scale * 1.5);
            
            ctx.fillStyle = `hsla(15, 85%, ${l}%, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-5] pointer-events-none opacity-60 mix-blend-screen"
      style={{ background: '#050505' }}
    />
  );
};
