import React from 'react';
import FluidSimulation from 'fluid-simulation-react';

const FluidBackground = () => {
    return (
        <div 
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: 0,
                pointerEvents: 'auto' // Allow interaction
            }}
        >
            <FluidSimulation 
                config={{
                    textureDownsample: 1,
                    densityDissipation: 0.98,
                    velocityDissipation: 0.99,
                    pressureDissipation: 0.8,
                    pressureIterations: 25,
                    curl: 30, // Vorticity
                    splatRadius: 0.005,
                    colorPalette: ['#ffffff', '#00ffff', '#ff00ff', '#111111'] // Cyber colors
                }}
            />
        </div>
    );
};

export default FluidBackground;
