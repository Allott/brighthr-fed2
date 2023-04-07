import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Box from '../Box'

const BackgroundCanvas = ({scrollY}) => {
    return (
        <div className="fixed top-0 left-0 z-0 w-full h-full">
            <Canvas 
                shadows
            >
                <PerspectiveCamera makeDefault position={[0, 3, scrollY]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Box position={[-1.2, 0, 0]} />
            </Canvas>
        </div>
   
    );
}

export default BackgroundCanvas;