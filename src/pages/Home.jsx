import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island.jsx";
import Sky from "../models/Sky.jsx";
import Plane from "../models/Plane.jsx";
import Plane2 from "../models/Plane2.jsx";
import PopupInfo from "../components/PopupInfo";
import sakura from "../assets/song/sakura.mp3";
import SoundMutter from "../components/Sound";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandToScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -10.5, -45];
    let rotation = [0.5, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneToScreen = () => {
    let screenScale, screenPosition;
    // let rotation = [0.3, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [-1, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandToScreen();
  const [planeScale, planePosition] = adjustPlaneToScreen();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-16 md:top-16 lg:top-24 left-0 right-0 z-10">
        {currentStage && <PopupInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentStage={currentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 1.6, -0.1]}
          />
          <Plane2 isRotating={isRotating} />
        </Suspense>
      </Canvas>
      <SoundMutter music={sakura} />
    </section>
  );
};

export default Home;
