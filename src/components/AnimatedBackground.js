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
        swayAmplitude: Math.random() * 50 + 20,
        swayFrequency: Math.random() * 0.0003 + 0.0001,
        frequency: Math.random() * 0.001 + 0.0005,
        color: `rgba(0, ${100 + Math.random() * 100}, 180, 0.03)` // softer ocean blue
      });
    }

    function animate(time) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#010a0f"; // deep navy background
      ctx.fillRect(0, 0, width, height);

      for (let p of particles) {
        p.baseY += p.yVelocity;
        if (p.baseY + p.height < 0) p.baseY = height + p.height;

        const sway = Math.cos(time * p.swayFrequency) * p.swayAmplitude;

        const x = p.baseX + sway + Math.sin(time * p.frequency) * p.xOffsetAmplitude;
        const y = p.baseY + Math.cos(time * p.frequency) * p.yOffsetAmplitude;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(p.angle);

        const pulse = (Math.cos(time * p.frequency * 1.5) + 1) / 2;
        const alpha = 0.025 + pulse * 0.015;     // softer fill
        const glowAlpha = 0.05 + pulse * 0.1;    // low intensity glow

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.width / 2);
        gradient.addColorStop(0, p.color.replace(/0\.03/, alpha.toFixed(3)));
        gradient.addColorStop(1, "rgba(1, 10, 15, 0)"); // fade to background navy

        ctx.fillStyle = gradient;
        ctx.shadowColor = p.color.replace(/0\.03/, glowAlpha.toFixed(3));
        ctx.shadowBlur = 50; // less sharp glow

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
