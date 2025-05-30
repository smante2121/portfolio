"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function StarBackground() {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 2.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outMode: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 30,
              duration: 1.5,
              easing: "ease-out",
            },
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
