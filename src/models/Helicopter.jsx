/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Catholomew (https://sketchfab.com/Catholomew)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/shinra-helicopter-crisis-core-63baf81581b749baa82def69241c14f4
Title: Shinra Helicopter - Crisis Core
*/

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../assets/3d/helicopter.glb";
import { useFrame } from "@react-three/fiber";

const Helicopter = ({
  currentAnimation,
  filledInputs,
  flight,
  setFlight,
  ...props
}) => {
  const helicopterRef = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, helicopterRef);
  const timeScaleValues = [0.05, 0.1, 0.2, 5];

  useEffect(() => {
    if (currentAnimation === "Idle") {
      actions[currentAnimation].play();
      actions[currentAnimation].timeScale = timeScaleValues[filledInputs];
    } else {
      actions["Idle"].stop();
    }
  }, [actions, currentAnimation, filledInputs, flight, setFlight]);

  console.log("flight", flight);
  useFrame(() => {
    // Prise/perte d'altitude progressive si les 3 inputs sont remplis/ou pas
    // Plafonnement entre -1.7 et -0.54
    if (!flight) {
      helicopterRef.current.position.z -= 0.03;
      if (helicopterRef.current.position.z < 0) {
        helicopterRef.current.position.z = 0;
      }
      if (filledInputs === 3) {
        helicopterRef.current.position.y += 0.01;
        if (helicopterRef.current.position.y > -0.54) {
          helicopterRef.current.position.y = -0.54;
        }
      } else {
        helicopterRef.current.position.y -= 0.01;
        if (helicopterRef.current.position.y < -1.7) {
          helicopterRef.current.position.y = -1.7;
        }
      }
    } else {
      // Travailler sur le mouvement de l'hélicoptère après l'envoi du formulaire
      helicopterRef.current.position.z -= 0.03;
      helicopterRef.current.rotation.z += 0.02;
      if (helicopterRef.current.position.z > 1) {
        helicopterRef.current.position.z = 1;
      }

      helicopterRef.current.position.y += 0.05;
      helicopterRef.current.rotation.y += 0.008;
      if (helicopterRef.current.position.y > 10) {
        helicopterRef.current.position.y = 10;
      }

      helicopterRef.current.position.x += 0.05;
      helicopterRef.current.rotation.x -= 0.0001;
      if (helicopterRef.current.position.x > 11) {
        helicopterRef.current.position.x = 11;
      }

      // Retour à la position initiale après 5 secondes suviant l'envoi du formulaire
      setTimeout(() => {
        helicopterRef.current.position.x = 0;
        helicopterRef.current.position.y = 1;
        helicopterRef.current.position.z = 0.03;
        helicopterRef.current.rotation.x = 10.8;
        helicopterRef.current.rotation.y = 41;
        helicopterRef.current.rotation.z = 17.2;
      }, 5000);
    }
  });

  return (
    <group ref={helicopterRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          // rotation={[-Math.PI / 2, 0, 0]}
          // scale={1.631}
        >
          <group name="root">
            <group
              name="GLTF_SceneRootNode"
              //  rotation={[Math.PI / 2, 0, 0]}
            >
              <group
                name="b0_31"
                // position={[0, -0.24, -0.126]}
                // rotation={[1.7, 0, 1.9]}
                // scale={0.005}
              >
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.ffccdif_0}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.ffccdif_1}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.ffccdif_0}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.ffccdif_1}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.ffccdif_0}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.ffccdif_1}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.ffccdif_0}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <group name="mesh0_24" />
                  <group name="mesh1_25" />
                  <group name="mesh2_26" />
                  <group name="mesh3_27" />
                  <group name="mesh4_28" />
                  <group name="mesh5_29" />
                  <group name="mesh6_30" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Helicopter;
