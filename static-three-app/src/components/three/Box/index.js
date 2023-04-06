import { useRef } from 'react'
import { useFrame } from "@react-three/fiber";

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

  export default Box;