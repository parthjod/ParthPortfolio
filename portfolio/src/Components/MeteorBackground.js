import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function MeteorBackground() {
  const particlesInit = useCallback(async engine => {
    console.log("Initializing particles...");
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "rgba(2, 2, 2, 0.5);" },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            straight: true,
            outModes: { default: "out" },
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.8 },
          color: { value: ["#ffffff", "#ffcc00", "#00ccff"] },
          trail: {
            enable: true,
            length: 0.5,
            fillColor: "#000",
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
      }}
    />
  );
}

export default MeteorBackground;
