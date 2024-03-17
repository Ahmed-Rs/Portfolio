import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const PopupLink = ({ text, link, btn }) => {
  return (
    <div className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-800 drop-shadow-lg p-5 bg-white/70 rounded-lg">
      <p>{text}</p>
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
        "Salut, je m'appelle Ahmed, je suis développeur web fullstack JS. Je vais te montrer mes projets et mes compétences. Débarque sur l'îlot..."
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
  return <div>{popupContent[currentStage]}</div>;
};

export default PopupInfo;
