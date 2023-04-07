import { useRef } from 'react'
import { useFrame } from "@react-three/fiber";

const Box = (props) => {   
    const ref = useRef()
    // useFrame((state, delta) => (ref.current.rotation.x += delta))
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