import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Icosahedron, Float, Sparkles, Torus, Sphere } from '@react-three/drei'

const Hero3D = () => {
    const meshRef = useRef()
    const ringRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.4
            meshRef.current.rotation.y = t * 0.5
        }
        if (ringRef.current) {
            ringRef.current.rotation.x = t * 0.2
            ringRef.current.rotation.y = t * 0.2
        }
    })

    return (
        <group>
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                {/* Central Geometric Shape - Solid & Wireframe Mix */}
                <Icosahedron args={[1.8, 0]} ref={meshRef}>
                    <meshStandardMaterial
                        color="#6366f1" // Indigo-500
                        roughness={0.3}
                        metalness={0.8}
                    />
                </Icosahedron>

                {/* Wireframe Overlay */}
                <Icosahedron args={[1.81, 0]}>
                    <meshStandardMaterial
                        color="#a855f7" // Purple-500
                        wireframe
                        transparent
                        opacity={0.5}
                    />
                </Icosahedron>

                {/* Orbiting Ring */}
                <Torus args={[3, 0.1, 16, 100]} ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={1} />
                </Torus>

                {/* Floating Particles - More visible */}
                <Sparkles count={200} scale={8} size={6} speed={0.6} opacity={0.8} color="#3b82f6" />
            </Float>
        </group>
    )
}

export default Hero3D
