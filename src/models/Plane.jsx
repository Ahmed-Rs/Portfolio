import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, speedFactor = 2, ...props }) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    // On démarre l'animation au chargement de la page, cet appel est idempotent, donc pas de problème à l'appeler plusieurs fois.
    actions["Take 001"].play();
    if (isRotating) {
      //  On accélère en mode isRotating
      actions["Take 001"].timeScale = speedFactor;
    } else {
      // On décélère ne mode arrêt
      actions["Take 001"].timeScale = 0.5;
    }
  }, [actions, isRotating, speedFactor]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
