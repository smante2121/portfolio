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
            value: 0.9,
            random: true,
          },
          size: {
            value: {min:1, max:3},
            random: true,
          },
          move: {
            enable: true,
            speed: 0.25,
            direction: "top",
            random: true,
            straight: true,
            outModes:{
                default: "bounce"
            }
          },
          collisions: {
            enable: true,
            mode: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 60,
              duration: 0.5,
              speed: 1,
              factor: 1,
              easing: "ease-out-quad",
            },
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
