import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function SplineScene() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        console.log('✅ Spline scene loaded successfully!');
        setIsLoading(false);
    };

    const handleError = (error) => {
        console.error('❌ Error loading Spline scene:', error);
        setHasError(true);
        setIsLoading(false);
    };

    return (
        <div className="w-full h-screen fixed top-0 left-0 z-0">
            {/* Loading indicator */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary z-10">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent mx-auto mb-4"></div>
                        <p className="text-text-secondary">Chargement du robot 3D...</p>
                    </div>
                </div>
            )}

            {/* Error message */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary z-10">
                    <div className="text-center text-text-secondary">
                        <p className="text-xl mb-2">⚠️ Erreur de chargement</p>
                        <p className="text-sm">Impossible de charger la scène Spline</p>
                    </div>
                </div>
            )}

            {/* Spline Scene */}
            <Spline
                scene="https://prod.spline.design/UE9wJBSoV4mMM7BX/scene.splinecode"
                onLoad={handleLoad}
                onError={handleError}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
            />
        </div>
    );
}
