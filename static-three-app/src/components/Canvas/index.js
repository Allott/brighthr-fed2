import { useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";


const Box = (props) => {   
    // Subscribe this component to the render-loop, rotate the mesh every frame
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={5}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    )
  }

const canvas = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <Canvas 
                shadows
                camera={{
                position: [-6, 7, 7],
                }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Box position={[-1.2, 0, 0]} />
            </Canvas>
        </div>
   
    );
}

export default canvas;