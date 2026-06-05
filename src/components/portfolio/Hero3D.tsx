import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Octahedron, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.6 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y * 0.4 - group.current.rotation.x) * 0.04;
  });
  return <group ref={group}>{children}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} color="#5eead4" />
      <pointLight position={[-6, -2, -4]} intensity={3} color="#a78bfa" />
      <pointLight position={[4, -4, 2]} intensity={2.4} color="#f472b6" />

      <Rig>
        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
          <Icosahedron args={[1.4, 4]}>
            <MeshDistortMaterial
              color="#7c3aed"
              emissive="#22d3ee"
              emissiveIntensity={0.25}
              roughness={0.15}
              metalness={0.85}
              distort={0.38}
              speed={1.6}
            />
          </Icosahedron>
        </Float>

        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Torus args={[0.5, 0.18, 24, 80]} position={[2.6, 1.2, -1]}>
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.9}
            />
          </Torus>
        </Float>

        <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2.2}>
          <Octahedron args={[0.55]} position={[-2.7, -1.1, -0.5]}>
            <meshStandardMaterial
              color="#f472b6"
              emissive="#f472b6"
              emissiveIntensity={0.35}
              roughness={0.25}
              metalness={0.8}
            />
          </Octahedron>
        </Float>

        <Float speed={2.4} rotationIntensity={1} floatIntensity={1.6}>
          <Icosahedron args={[0.32, 0]} position={[2, -1.6, 0.5]}>
            <meshStandardMaterial
              color="#a78bfa"
              emissive="#a78bfa"
              emissiveIntensity={0.5}
              roughness={0.2}
              metalness={0.9}
            />
          </Icosahedron>
        </Float>
      </Rig>
    </>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Scene />
    </Canvas>
  );
}
