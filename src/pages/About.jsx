import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../data";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, c'est{" "}
        <span className="blue-gradient_text font-semibold">Ahmed</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Développeur Web Fullstack basé à Paris, autodidacte depuis le collège
          et le lycée scientifique, je suis passionné par le développement web
          et les nouvelles technologies. J'ai une expérience de plus de 2 ans
          dans le développement web, je suis spécialisé dans la création de
          sites et applications. Je suis également passionné par le design et
          l'ergonomie des sites web, je suis toujours à la recherche de
          nouvelles idées et de nouvelles technologies pour améliorer mes
          compétences et mes connaissances.
        </p>
      </div>
      <div className="flex flex-col py-10">
        <h3 className="subhead-text">Mes Skills</h3>
        <div className="flex flex-wrap justify-center items-center mt-16 gap-12 ">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="block-container w-20 h-20 cursor-pointer"
            >
              <div className="btn-back" />
              <div
                // key={skill.id}
                className="btn-front flex flex-col items-center gap-2"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <h4 className="text-sm font-semibold">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 ">
        <h3 className="subhead-text">Expériences</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Développeur Web Fullstack basé à Paris, autodidacte depuis le
            collège et le lycée scientifique, je suis passionné par le
            développement web et les nouvelles technologies. J'ai une expérience
            de plus de 2 ans dans le développement web, je suis spécialisé dans
            la création de sites et applications. Je suis également passionné
            par le design et l'ergonomie des sites web et toujours à la
            recherche de nouvelles idées et de nouvelles technologies pour
            améliorer mes compétences et mes connaissances.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain "
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins">
                    {experience.title}
                  </h3>
                  <h4 className="text-black font-medium font-base m-0">
                    {experience.company_name}
                  </h4>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/70 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
