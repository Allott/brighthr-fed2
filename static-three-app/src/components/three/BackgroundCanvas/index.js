import { Canvas } from "@react-three/fiber";

import { PerspectiveCamera } from "@react-three/drei";
import Box from '../Box'

const radiusMin = 10;
const extension = 5;
const scrollRate = 0.005;
const angleDown = -0.3;

const BackgroundCanvas = ({scrollY}) => {

    const modScroll = scrollY * scrollRate;

    // Zoom in
    const halfScroll = modScroll * 2;
    const halfSin = Math.abs(Math.sin(halfScroll))
    const extentionFactor = halfSin * extension
    const radius = radiusMin + extentionFactor

    // Rotation Position
    const xMod = Math.cos(modScroll);
    const yMod = Math.sin(modScroll);

    const xRotation = xMod * radius;
    const yRotation = yMod * radius;

    return (
        <div className="fixed top-0 left-0 z-0 w-full h-full">
            <Canvas 
                shadows
            >
                <PerspectiveCamera
                    makeDefault 
                    position={[yRotation, 0, xRotation]} 
                    rotation={[0,modScroll,0]}
                />
                <ambientLight intensity={0.5} />
                <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} />
                <Box position={[0, 0, 0]} scale={5} />
                <Box position={[0, 0, -5]} scale={2} />
            </Canvas>
        </div>
   
    );
}

export default BackgroundCanvas;