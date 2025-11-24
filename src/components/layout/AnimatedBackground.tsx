"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const { theme } = useTheme();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Memoize particles to prevent regeneration on each render
  const particles = useMemo(() => 
    new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      factor: Math.random() * 10 + 5,
      speed: Math.random() * 0.01 + 0.001,
    })),
    [count]
  );

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { position, factor, speed } = particle;
      const t = state.clock.getElapsedTime();
      
      // Update position with some wave motion
      position[1] += Math.sin(t * speed + factor) * 0.005;
      position[0] += Math.cos(t * speed + factor) * 0.005;

      dummy.position.set(position[0], position[1], position[2]);
      dummy.scale.setScalar(Math.max(0.2, Math.cos(t * speed + factor)));
      dummy.rotation.set(t * 0.2, t * 0.1, 0);
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  const color = theme === "dark" ? "#8B4513" : "#A0522D"; // Saddle Brown variations

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshPhongMaterial color={color} transparent opacity={0.6} />
    </instancedMesh>
  );
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Particles />
      </Canvas>
    </div>
  );
}
