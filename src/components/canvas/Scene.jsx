import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei'
import { Suspense, lazy } from 'react'
import Hero3D from './Hero3D'

// Lazy load SplineScene to improve initial performance
const SplineScene = lazy(() => import('./SplineScene'))

const Scene = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-primary">
            {/* Option 1: Spline Scene (Active) */}
            <Suspense fallback={<div className="w-full h-full bg-primary" />}>
                <SplineScene />
            </Suspense>

            {/* Option 2: React Three Fiber Scene (Fallback/Custom) */}
            {/* 
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#8b5cf6" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#3b82f6" />
                <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={3} color="#ec4899" />

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                <Suspense fallback={null}>
                    <Hero3D />
                </Suspense>
            </Canvas>
            */}
        </div>
    )
}

export default Scene
