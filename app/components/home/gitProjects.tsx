import * as React from "react";

const projectList: string[] = [
  "saanvira_website",
  "Vinshavijayan/kaaspake",
  "Vinshavijayan/dashbord",
  "ecom-dashbord-vkv",
  "rn-vinsha/ecom-dashbord-kv",
  "worksitelabs",
  "Vinshavijayan/rookieninja_website",
  "Vinshavijayan/rn_frontend",
  "rn_backend",
  "Vinshavijayan/rn_dashboard",
  "kaaspake",
  "Vinshavijayan/matrimony",
  "matrimony_frontend",
  "hr_software_system",
  "Vinshavijayan/hr_software_system",
  "Vinshavijayan/Portfolio-site",
  "backtobetter",
  "Vinshavijayan/backtobetter",
];

const githubUrl: string = "https://github.com";
const gitAvatar: string = "https://avatars.githubusercontent.com/u/60886719";

const GitProjects: React.FunctionComponent = () => {
  return (
    <>
      <div className=" grid  grid-cols-1 md:grid-cols-6">
        {projectList.map((name, index) => (
          <div
            key={index}
            className="flex  gap-2 justify-start font-mono transition-all hover:bg-gradient-to-br from-[#35fddb] to-[#00c3ff] shadow-2xl shadow-[#a6c7f2] items-center  w-[200px] h-[50px] overflow-hidden truncate bg-white m-2 p-2 rounded-xl "
          >
            <img
              src={gitAvatar}
              alt="vinsha git avatar"
              className="w-6 h-6 rounded-full"
            />
            <a
              href={`${githubUrl}/${name}`}
              target="_blank"
              rel="noreferrer"
              className="truncate text-sm"
            >
              {name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default GitProjects;
