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
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
      const baseX = Math.random() * (width * 0.8) + width * 0.1;
      const baseY = Math.random() * (height * 0.8) + height * 0.1;
      particles.push({
        baseX,
        baseY,
        yVelocity: -0.5,
        width: Math.random() * 500 + 300,
        height: Math.random() * 100 + 50,
        angle: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.0004,
        xOffsetAmplitude: Math.random() * 40 + 20,
        yOffsetAmplitude: Math.random() * 40 + 20,
        frequency: Math.random() * 0.001 + 0.0005,
        color: `rgba(0, ${100 + Math.random() * 155}, 255, 0.05)`
      });
    }

    function animate(time) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#010a0f";
      ctx.fillRect(0, 0, width, height);

      for (let p of particles) {
        p.baseY += p.yVelocity;
        if (p.baseY + p.height < 0) p.baseY = height + p.height;

        const x = p.baseX + Math.sin(time * p.frequency) * p.xOffsetAmplitude;
        const y = p.baseY + Math.cos(time * p.frequency) * p.yOffsetAmplitude;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(p.angle);

        // Use cosine for smoother transitions and normalize to [0, 1]
        const pulse = (Math.cos(time * p.frequency * 1.5) + 1) / 2;
        const alpha = 0.04 + pulse * 0.02;
        const glowAlpha = 0.2 + pulse * 0.2;

        const gradient = ctx.createLinearGradient(-p.width / 2, 0, p.width / 2, 0);
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.5, p.color.replace(/0\.05/, alpha.toFixed(3)));
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.shadowColor = p.color.replace(/0\.05/, glowAlpha.toFixed(3));
        ctx.shadowBlur = 100;

        ctx.beginPath();
        ctx.ellipse(0, 0, p.width / 2, p.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.angle += p.rotationSpeed;
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

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
