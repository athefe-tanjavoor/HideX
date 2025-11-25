"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

type PrismProps = {
  animationType?: "rotate"; // future extensions
  timeScale?: number; // speed multiplier
  height?: number; // prism height
  baseWidth?: number; // radius of base
  scale?: number; // overall scale
  hueShift?: number; // not used now
  colorFrequency?: number; // not used now
  noise?: number; // not used now
  glow?: number; // not used now
  pulse?: boolean; // enable "coming and going" animation
};

// Rotating prism using CylinderGeometry (hexagonal base)
function RotatingPrism({
  timeScale = 1,
  height = 3,
  baseWidth = 2,
  scale = 1,
  pulse = false,
}: PrismProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * timeScale * 0.2;
      meshRef.current.rotation.x += delta * timeScale * 0.1;

      if (pulse) {
        // "Coming and going" effect: sine wave scale
        // Oscillate between scale * 0.8 and scale * 1.2
        const t = clock.getElapsedTime();
        const pulseFactor = 1 + Math.sin(t * timeScale) * 0.1;
        const currentScale = scale * pulseFactor;
        meshRef.current.scale.set(currentScale, currentScale, currentScale);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={scale} castShadow receiveShadow>
        {/* 3-sided prism (triangle) for better refraction effects */}
        <cylinderGeometry args={[baseWidth, baseWidth, height, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={1}
          roughness={0.0}
          thickness={3.5}
          ior={1.5}
          chromaticAberration={1}
          anisotropy={8}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.2}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#c0c0c0"
          background={new THREE.Color("#000000")}
        />
      </mesh>
    </Float>
  );
}

export default function Prism(props: PrismProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 35 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="white" />
      <spotLight position={[-5, 5, 5]} intensity={2} color="#ff0000" />
      <spotLight position={[5, -5, 5]} intensity={2} color="#0000ff" />
      <Environment preset="city" />
      <RotatingPrism {...props} />
    </Canvas>
  );
}
