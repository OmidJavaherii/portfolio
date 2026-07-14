"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Group, Mesh } from "three";

interface HeroSceneProps {
  reducedMotion?: boolean;
  pointer: { x: number; y: number };
}

function FloatingShape({
  position,
  scale,
  color,
  speed,
  distort,
  geometry,
  reducedMotion,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
  geometry: "sphere" | "torus" | "box";
  reducedMotion?: boolean;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || reducedMotion) return;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.12;
    meshRef.current.rotation.y += 0.0015 * speed;
  });

  return (
    <Float
      speed={reducedMotion ? 0 : speed}
      rotationIntensity={reducedMotion ? 0 : 0.25}
      floatIntensity={reducedMotion ? 0 : 0.45}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === "sphere" && <icosahedronGeometry args={[1, 1]} />}
        {geometry === "torus" && <torusGeometry args={[0.7, 0.2, 10, 20]} />}
        {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
        <MeshDistortMaterial
          color={color}
          roughness={0.35}
          metalness={0.75}
          distort={reducedMotion ? 0 : distort}
          speed={reducedMotion ? 0 : speed * 0.6}
          transparent
          opacity={0.82}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ count = 32 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return positions;
  }, [count]);

  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
            count={count}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#ff6b3d"
          transparent
          opacity={0.45}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export function HeroScene({ reducedMotion, pointer }: HeroSceneProps) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y = pointer.x * 0.12;
    groupRef.current.rotation.x = pointer.y * 0.05;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={0.9} color="#eef0f6" />
      <pointLight position={[-3, -1, 2]} intensity={0.6} color="#ff6b3d" />
      <pointLight position={[4, 2, -2]} intensity={0.4} color="#8b7cf8" />

      <FloatingShape
        position={[-2, 0.2, -1.5]}
        scale={1}
        color="#ff6b3d"
        speed={1}
        distort={0.18}
        geometry="sphere"
        reducedMotion={reducedMotion}
      />
      <FloatingShape
        position={[2.2, -0.5, -0.8]}
        scale={0.65}
        color="#8b7cf8"
        speed={0.8}
        distort={0.14}
        geometry="torus"
        reducedMotion={reducedMotion}
      />
      <FloatingShape
        position={[0.2, 1, -2]}
        scale={0.4}
        color="#eef0f6"
        speed={1.2}
        distort={0.1}
        geometry="box"
        reducedMotion={reducedMotion}
      />

      {!reducedMotion && <ParticleField count={28} />}
    </group>
  );
}
