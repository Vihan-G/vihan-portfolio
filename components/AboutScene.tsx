"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TorusKnot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 16]} />
      <meshBasicMaterial color="#00A8FF" wireframe opacity={0.25} transparent />
    </mesh>
  );
}

export default function AboutScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: false, alpha: true }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
    >
      <TorusKnot />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#00A8FF" intensity={2} />
    </Canvas>
  );
}
