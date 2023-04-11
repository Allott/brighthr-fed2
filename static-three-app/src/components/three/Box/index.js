// Remove comments for basic animation :>
// import { useRef } from 'react'
// import { useFrame } from "@react-three/fiber";

const Box = (props) => {   
    // const ref = useRef()
    // useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
      <mesh
        {...props}
        // ref={ref}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    )
  }

  export default Box;