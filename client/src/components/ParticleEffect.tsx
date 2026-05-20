import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface Props {
  energy: number;
}

export default function ParticleEffect({ energy }: Props) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  const speed = energy < 0.3 ? 1 : energy < 0.6 ? 3 : 6;
  const count = energy < 0.3 ? 20 : energy < 0.6 ? 40 : 80;
  const size = energy < 0.3 ? 4 : energy < 0.6 ? 3 : 2;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: count },
          color: { value: '#ffffff' },
          opacity: { value: 0.3 },
          size: { value: size },
          move: { enable: true, speed },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
