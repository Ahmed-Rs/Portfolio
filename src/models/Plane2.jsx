import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane2.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Plane2 = ({ isRotating }) => {
  const plane2Ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, plane2Ref);
  useEffect(() => {
    //   // if (isRotating) {
    actions["Take 001"].play();
    //   // } else {
    //   //   actions["Take 001"].stop();
    // }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    // Mouvement sinusoïdal sur l'axe Y
    plane2Ref.current.position.y = Math.sin(clock.elapsedTime) * 5.2 + 60;
    // Encadrement dans l'écran sur l'axe X par rapport à la position de la caméra

    if (plane2Ref.current.position.x > camera.position.x + 10) {
      // L'avion fait demi-tour une fois arrivé à la fin de l'écran
      plane2Ref.current.rotation.y = 2 * Math.PI;
    } else if (plane2Ref.current.position.x < camera.position.x - 180) {
      // L'avion fait demi-tour une fois arrivé au début de l'écran
      plane2Ref.current.rotation.y = Math.PI;
    }

    // Mouvement de l'avion sur les axes X et Z
    //si la rotation sur l'axe Y est entre 0 et PI (avancer)
    if (
      plane2Ref.current.rotation.y >= 0 &&
      plane2Ref.current.rotation.y <= Math.PI
    ) {
      plane2Ref.current.position.x += 0.1;
      plane2Ref.current.position.z -= 0.1;
    }
    // Sinon, si la rotation sur l'axe Y est entre PI et 2*PI (reculer)
    else if (
      plane2Ref.current.rotation.y > Math.PI &&
      plane2Ref.current.rotation.y <= 2 * Math.PI
    ) {
      plane2Ref.current.position.x -= 0.1;
      plane2Ref.current.position.z += 0.1;
    }
  });
  // console.log(
  //   "plane2Ref",
  //   plane2Ref.current.position.x,
  //   plane2Ref.current.position.y,
  //   plane2Ref.current.position.z
  // );

  return (
    <mesh
      scale={[3.5, 3.5, 3.5]}
      position={[0, 0, -490]}
      rotation={[0, Math.PI, 0]}
      ref={plane2Ref}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane2;
