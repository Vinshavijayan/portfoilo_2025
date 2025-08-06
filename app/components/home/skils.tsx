import * as React from "react";
import Link from "next/link";

const FrontEndSkills = [
  {
    title: "HTML",
    logo: "/assets/logo/html.svg",
    level: 3,
  },
  {
    title: "CSS",
    logo: "/assets/logo/css.svg",
    level: 3,
  },
  {
    title: "Javascript",
    logo: "/assets/logo/js.svg",
    level: 3,
  },
   {
    title: "Typescript",
    logo: "/assets/logo/ts.webp",
    level: 2,
  },
  {
    title: "React",
    logo: "/assets/logo/react.svg",
    level: 3,
  },
  {
    title: "NextJS",
    logo: "/assets/logo/nextjs.svg",
    level: 3,
  },
  {
    title: "TailwindCSS",
    logo: "/assets/logo/tailwind.svg",
    level: 3,
  },
  {
    title: "Redux",
    logo: "/assets/logo/redux.svg",
    level: 2,
  },
   {
    title: "Zustand",
    logo: "/assets/logo/zustand.webp",
    level: 3,
  },
  {
    title: "Wordpress",
    logo: "/assets/logo/wordpress.svg",
    level: 2,
  },
  {
    title: "Three JS",
    logo: "/assets/logo/3js.svg",
    level: 1,
  },
  {
    title: "Figma",
    logo: "/assets/logo/figma.svg",
    level: 2,
  },
  {
    title: "Material UI",
    logo: "/assets/logo/mui.png",
    level: 3,
  },
 {
    title: "Bootstrap",
    logo: "/assets/logo/bootstrap.png",
    level: 3,
  },
];

const BackEndSkills = [
  {
    title: "NodeJS",
    logo: "/assets/logo/nodejs.svg",
    level: 3,
  },
  {
    title: "Express JS",
    logo: "/assets/logo/expressjs.svg",
    level: 3,
  },
  {
    title: "MongoDB",
    logo: "/assets/logo/mongodb.svg",
    level: 3,
  },
  {
    title: "Redis",
    logo: "/assets/logo/redis.svg",
    level: 1,
  },
  {
    title: "MySql",
    logo: "/assets/logo/mysql.svg",
    level: 2,
  },
  {
    title: "Firebase",
    logo: "/assets/logo/firebase.svg",
    level: 2,
  },
];



const SkillSec: React.FunctionComponent = () => {
  return (
    <section className="white-dot-bg relative">
      <div className="max-w-screen-xl  xl:mx-auto mx-5   ">
        <div className="w-full text-center mt-16 ">
          <h4 className="bg-gray-800 w-fit px-4 py-1 rounded-2xl mx-auto  my-4 ">
            <span className="text-[#32fcd7]   ">Skills</span>
          </h4>
          <h2 className="font-extrabold text-5xl leading-tight  text-black">
            My Superpowers
            {/* <br /> My portfolio */}
          </h2>
        </div>
        {/* Frnt end skill */}
        <div className="relaive  mt-16 mb-16">
          <h2 className="font-bold text-xl bg-sky-100/50 w-fit p-2 px-4 rounded-t-2xl ">
            <span className="  ">Frontend</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-8 place-items-center gap-5 bg-sky-100/50 py-4 rounded-2xl rounded-tl-none ">
            {FrontEndSkills.map((skill, index) => (
              <div
                key={index}
                className=" skill-card aspect-square grid place-items-center text-sm  text-gray-800  hover:bg-white/50 p-4 rounded-2xl transition-all"
              >
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className=" w-12 aspect-square object-fit mb-3 skill-img"
                />
                <h2 className="text-center">{skill.title}</h2>
                <div className="">
                  <img
                    src={`/assets/rating${skill.level}.svg`}
                    alt={`${skill.level} out of 3`}
                    className="h-4 mb-1 text-start"
                  />
                  {skill.level === 1 ? (
                    <p className="text-center skill-lvl-text text-xs text-gray-500">
                      Beginner
                    </p>
                  ) : skill.level === 2 ? (
                    <p className="text-center skill-lvl-text text-xs text-gray-500">
                      Intermediate
                    </p>
                  ) : (
                    <p className="text-center skill-lvl-text text-xs text-gray-500">
                      Expert
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Back end */}
        <div className="relaive  mt-16 mb-16">
          <h2 className="font-bold text-xl bg-purple-100/50 w-fit p-2 px-4 rounded-t-2xl ">
            <span className="  ">Backend</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-8 place-items-center gap-5 bg-purple-100/50 py-4 rounded-2xl rounded-tl-none ">
            {BackEndSkills.map((skill, index) => (
              <div
                key={index}
                className=" skill-card aspect-square grid place-items-center text-sm  text-gray-800 hover:bg-white/50 p-4 rounded-2xl transition-all"
              >
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className=" w-12 aspect-square object-fit mb-3 skill-img"
                />
                <h2 className="text-center">{skill.title}</h2>
                <div className="">
                  <img
                    src={`/assets/rating${skill.level}.svg`}
                    alt={`${skill.level} out of 3`}
                    className="h-4 mb-1 text-start"
                  />
                  {skill.level === 1 ? (
                    <p className="text-center skill-lvl-text text-xs text-gray-500">
                      Beginner
                    </p>
                  ) : skill.level === 2 ? (
                    <p className="text-center skill-lvl-text text-xs text-gray-500">
                      Intermediate
                    </p>
                  ) : (
                    <p className="text-center skill-lvl-text text-xs text-gray-500">
                      Expert
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default SkillSec;
