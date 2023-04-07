import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import {useLoader} from "@react-three/fiber";

const Dinosaur = (props) => {
  const geom = useLoader(STLLoader, '/stego.stl');
    return (
      <mesh
        {...props}
        scale={0.5}
      >
        <primitive object={geom} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    )
  }

  export default Dinosaur;