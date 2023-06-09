import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Box from '../Box'

const radius = 15;
const scrollRate = 0.005;
const getX = (i) => Math.cos(i) * radius;
const getY = (i) => Math.sin(i) * radius;

const BackgroundCanvas = ({scrollY}) => {
    const modScroll = scrollY * scrollRate
    return (
        <div className="fixed top-0 left-0 z-0 w-full h-full">
            <Canvas 
                shadows
            >
                <PerspectiveCamera 
                    makeDefault 
                    position={[getY(modScroll), 0, getX(modScroll)]} 
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