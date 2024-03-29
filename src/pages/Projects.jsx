import React from "react";
import { projects } from "../data";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Mes <span className="blue-gradient_text font-semibold">Projets</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Voici certains de mes projets, ceux qui me tiennent le plus à coeur et
          que je voudrais partager avec vous. J'espère que vous les apprécierez
          autant que moi, et à ce titre ils sont open source, alors si vous avez
          des suggestions ou des améliorations, n'hésitez pas à apporter votre
          contribution. Merci pour votre visite et à bientôt !
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div key={project.name} className="lg:w-[400px] w-full ">
            <div className="block-container w-12 h-12 cursor-pointer">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w1/2 h1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="flex items-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener norefferer"
                  className="text-blue-600 font-semibold"
                >
                  Visiter
                </Link>
                <img
                  src={arrow}
                  alt="Vistit arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-500" />
      <CTA />
    </section>
  );
};

export default Projects;
