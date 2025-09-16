import * as React from "react";
import PageHeader from "@/app/components/common/pageHeader";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website & Dashboard",
    description:
      "Website and dashboard built for Rookie Ninja General Trading LLC, Dubai. Developed using the MERN stack with a focus on scalability and usability.",
    image: "/home/projects/rookie.png",
    link: "https://rookie-ninja.com/", 
  },
  {
    title: "Online Clothing Store",
    description:
      "Website and dashboard for Saanvira, an online clothing store. Built with MERN and Next.js for fast performance and smooth management.",
    image: "/home/projects/saanvira.png",
    link: "https://saanvira.com/", 
  },
  {
    title: "Kaspake App",
    description:
      "Online shopping and offer redemption app with delivery features. Built using ReactNative and SQL.",
    image: "/home/projects/kaspake.png",
    link: "https://kaspake.mu/", 
  },
  {
    title: "HRMS Software",
    description:
      "Human Resource Management System to streamline HR operations in a company. Built with the MERN stack.",
    image: "/home/projects/26.png",
    link: "#", 
  },
  {
    title: "LoopMea Website",
    description:
      "Event booking and showcase website built in WordPress. Designed for simplicity and easy content management.",
    image: "/home/projects/loop.png",
    link: "https://www.loopmea.com/",
  },
  {
    title: "ICL Website",
    description:
      "A Next.js website for booking and handling operations with a user-friendly interface.",
    image: "/home/projects/icl.png",
    link: "https://www.iclfincorp.ae/", 
  },
  {
    title: "CareHome Website",
    description:
      "Service showcase website for a UK-based care home client. Built with responsive design for accessibility.",
    image: "/home/projects/carehome.png",
    link: "https://www.jubileecarehome.uk/", 
  },
   {
    title: "WorksiteLabs",
    description:
      "COVID-19 test slot booking and results delivery system. Designed for reliability and efficiency.",
    image: "/home/projects/wsl.png",
    link: "https://www.discoverlosangeles.com/business-services/worksite-labss", 
  },
  
];

const Projects: React.FunctionComponent = () => {
  return (
    <div className="max-w-screen">
      <PageHeader
        title="What I Built"
        subTitle="A collection of things I’ve built and loved"
      />

      <section className="white-dot-bg py-12">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
                  >
                    <span>Live Link</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
