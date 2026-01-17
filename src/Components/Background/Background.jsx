import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // আপনার মেইন CSS এর ব্যাকগ্রাউন্ড যাতে দেখা যায়
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#DF8908" }, // আপনার থিম কালার (অরেঞ্জ)
        links: {
          color: "#8415FF", // লিঙ্কের কালার (পার্পল)
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80, // কতগুলো পার্টিকেল থাকবে
        },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "fixed",
          zIndex: -1, // যাতে এটি সবকিছুর নিচে থাকে
          top: 0,
          left: 0,
        }}
      />
    );
  }

  return null;
};

export default Background;