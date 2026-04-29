import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleName = () => {
  const count = 8000; // Increased density slightly as requested
  const mesh = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Spread particles across a full-screen volume rather than clumping them into a word
  const basePositions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 350,
        y: (Math.random() - 0.5) * 200,
        // Keep Z distribution narrow and pushed back so they don't fly into the camera lens!
        z: -20 + (Math.random() - 0.5) * 40,
        r1: Math.random(),
        r2: Math.random(),
        r3: Math.random()
      });
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();
    const speed = 0.8;
    const chaos = 1.15;
    const t = time * speed;
    const tau = 6.28318530718;

    for (let i = 0; i < count; i++) {
      let { x, y, z, r1, r2, r3 } = basePositions[i];
      const f = i / count;

      // Apply the exact chaotic liquid bloom math from your snippet
      const swarm = Math.sin(f * 120.0 + t * 3.0) * Math.cos(f * 37.0 - t * 2.2);
      const liquid = Math.sin(y * 0.05 + t * 2.4 + r1 * tau);
      const glitch = Math.sin(t * 4.0 + r3 * tau);

      const stroke = 5.0;
      let dx = (r1 - 0.5) * stroke * 1.7 * chaos;
      let dy = (r2 - 0.5) * stroke * 1.4 * chaos;

      dx += liquid * 5.0 * chaos;
      dy += Math.cos(x * 0.04 - t * 1.8 + r2 * tau) * 4.0 * chaos;
      let dz = Math.sin(x * 0.045 + y * 0.035 + t * 2.0) * 12.0;
      dz += swarm * 8.0 * chaos;

      const burst = Math.pow(Math.abs(glitch), 8.0) * chaos;
      dx += Math.cos(r1 * tau + t) * burst * 12.0;
      dy += Math.sin(r2 * tau - t * 0.7) * burst * 8.0;
      dz += Math.sin(r3 * tau + t * 1.3) * burst * 18.0;

      const breath = 1.0 + Math.sin(t * 1.1 + f * 5.0) * 0.055;

      const px = (x + dx) * breath;
      const py = (y + dy) * breath;
      const pz = (z + dz) * breath;

      dummy.position.set(px, py, pz);
      // We removed scale and color variation so all particles exactly match the cursor dot
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;

    // Slow camera drift
    mesh.current.rotation.y = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      {/* Reduced radius to 0.12 to make them smaller */}
      <sphereGeometry args={[0.12, 8, 8]} />
      {/* Increased opacity to 1.0 (100%) to make them pop and be fully visible */}
      <meshBasicMaterial color="hsl(15, 85%, 55%)" transparent={true} opacity={1.0} depthWrite={false} />
    </instancedMesh>
  );
};

export const WebcracySwarm = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-100 mix-blend-screen"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
      }}
    >
      <Canvas camera={{ position: [0, 0, 130], fov: 60 }}>
        <fog attach="fog" args={['#000000', 50, 180]} />
        <ParticleName />
      </Canvas>
    </div>
  );
};
