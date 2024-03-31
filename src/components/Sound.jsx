import { useEffect, useRef, useState } from "react";
import { soundoff, soundon } from "../assets/icons";

const SoundMutter = ({ music }) => {
  const audioRef = useRef(null);
  const [playingMusique, setPlayingMusique] = useState(false);

  // Initialiser audioRef une seule fois, lors du montage du composant
  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.volume = 0.7;
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Mettre à jour le chemin de la musique chaque fois que la prop music change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = music;
      if (playingMusique) {
        audioRef.current.play();
      }
    }
  }, [music, playingMusique]);

  const handleToggleMusic = () => {
    setPlayingMusique(!playingMusique);
    if (!playingMusique) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const hideAndShow = () => {};

  return (
    <div
      className="absolute bottom-2 right-2 z-10 cursor-pointer flex flex-col items-center justify-center"
      onClick={handleToggleMusic}
    >
      {/* <div className="bg-transparent bg-opacity-50 p-2 rounded-lg shadow-md">
        Mute
      </div> */}
      <img
        src={!playingMusique ? soundoff : soundon}
        alt="Musique mutter"
        className="w-8 h-8 object-contain"
      />
    </div>
  );
};

export default SoundMutter;
