import { Canvas } from "@react-three/fiber";

const canvas = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <Canvas 
                shadows
                camera={{
                position: [-6, 7, 7],
                }}
            >
                
            </Canvas>
        </div>
   
    );
}

export default canvas;