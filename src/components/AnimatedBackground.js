"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 7; // fewer, larger particles

    for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          width: Math.random() * 800 + 600,
          height: Math.random() * 250 + 150,
          dx: (Math.random() - 0.5) * 0.1,
          dy: (Math.random() - 0.5) * 0.1,
          color: `rgba(0, ${150 + Math.random() * 100}, 255, 0.08)` // ⬅️ higher alpha
        });
      }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      for (let p of particles) {
        // Apply glow effect
        ctx.shadowColor = p.color.replace("0.08", "0.5");
        ctx.shadowBlur = 150;

        // Create long, wispy ellipse
        const gradient = ctx.createLinearGradient(p.x - p.width / 2, p.y, p.x + p.width / 2, p.y);
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.5, p.color.replace("0.08", "0.2"));
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.width / 2, p.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Move particle slightly (drift)
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off edges softly
        if (p.x <= -p.width || p.x >= width + p.width) p.dx *= -1;
        if (p.y <= -p.height || p.y >= height + p.height) p.dy *= -1;
      }

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
