import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const PopupLink = ({ text, link, btn }) => {
  return (
    <div
      className="w-full md:max-w-[55%] lg:max
    -w-[35%] sm:mx-auto text-sm md:text-lg lg:text-lg 2xl:text-2xl font-bold text-gray-800 drop-shadow-lg p-5 bg-white/70 rounded-lg"
    >
      <p className="text-center">{text}</p>
      <Link to={link} className="flex justify-center items-center gap-3">
        {btn}
        <img src={arrow} className="w-4 h-4 object-contain" alt="" />
      </Link>
    </div>
  );
};

const popupContent = {
  1: (
    <PopupLink
      text={
        "Salut, je m'appelle Ahmed, je suis développeur web fullstack JS. Je vais te montrer mes projets et mes compétences."
      }
      link={"/about"}
      btn={"En savoir plus"}
    />
  ),
  2: (
    <PopupLink
      text={
        "Besoin d'un dev ou d'un freelance ? Je suis là pour toi, à quelques cliques."
      }
      link={"/contact"}
      btn={"Contacte moi !"}
    />
  ),
  3: (
    <PopupLink
      text={"Ici mon deuxième projet"}
      link={"/about"}
      btn={"Visiter le projet"}
    />
  ),
  4: (
    <PopupLink
      text={"Ici mon troisième projet"}
      link={"/about"}
      btn={"Dive into it !"}
    />
  ),
};

const PopupInfo = ({ currentStage }) => {
  return <>{popupContent[currentStage]}</>;
};

export default PopupInfo;
