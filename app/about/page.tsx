import * as React from "react";
import PageHeader from "@/app/components/common/pageHeader";
import Iconify from "@/app/components/common/iconfy";
import { ExternalLink } from 'lucide-react';


const About: React.FunctionComponent = () => {
  return (
    <div className="max-w-screen ">
      <PageHeader
        title="Personal Profile"
        subTitle="A Closer Look at My Professional Pathway"
      />
      <section className="white-dot-bg">
        <div className="max-w-screen-xl xl:mx-auto mx-5 grid place-items-center py-12">
  <div className="flex flex-col md:flex-row gap-5">
    <div className="w-full md:w-1/2 grid place-items-center">
      <img
        src="/assets/vinsha.jpg"
        alt="my journy"
        className="w-full max-h-[600px] object-cover rounded-2xl mt-5 shadow-sky-700/30"
      />
    </div>
    <div className="w-full md:w-1/2 p-2">
      <p className="text-lg leading-normal my-5 font-semibold">
        I started my journey in technology as a B.Tech student in Information Technology at Kerala University. Though I couldn’t complete my formal education, my passion for software development led me to carve my own path. With a self-driven mindset, I immersed myself in learning and hands-on practice, focusing on modern web development technologies like Node.js and React.js.
      </p>
      <p className="text-lg leading-normal my-5 font-semibold">
Over the past 4+ years, I have worked on diverse projects, building real-world solutions that enhanced my problem-solving and technical skills. Alongside my professional experience, I also collaborate with clients as a freelancer, taking on challenging projects that keep me constantly evolving.</p>      <p className="text-lg leading-normal my-5 font-semibold">
Today, as a self-taught software engineer, I continue to evolve by exploring new technologies and taking on challenging projects that push my limits. My journey is a testament to my belief that consistent learning and real-world problem-solving are the true pathways to professional growth.  </p>    <div>
        <a href="/vinsha_kv_25.pdf" target="_blank" className="">
          <div className="flex justify-center items-center px-10 py-4 font-bold link-btn text-black transition-all rounded-2xl w-fit hover:text-white gap-4">
            <h2 className="mt-2">Download My CV</h2>
            <Iconify icon="ph:download-bold" className="w-7 h-7" />
          </div>
        </a>
      </div>
    </div>
  </div>
</div>





 {/* timeline line */}
        <div className="py-12 light-dot-bg">
  <div className="relative text-center mb-12">
    <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-black">
      Career Timeline
    </h2>
    <h4 className="text-lg mt-4">Professional journey and experience timeline.</h4>
  </div>

  <div className="container mx-auto px-4">
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute h-full w-1 bg-indigo-500 left-1/2 transform -translate-x-1/2"></div>
      
      {/* Timeline items */}
      <div className="space-y-8">
        {/* Item 1 */}
        <div className="relative flex w-full">
          <div className="hidden md:flex md:w-1/2"></div>
          <div className="w-full md:w-1/2 pl-8 md:pl-12">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 top-6 border-2 border-white"></div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">Full Stack Engineer</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Dec 2024 - Present</span>
              </div>
<div className="flex items-center gap-2 text-gray-600 mb-2">
  <span>Infar Technologies, Thrissur</span>
  <a href="https://www.infartechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
    <ExternalLink className="w-4 h-4" />
  </a>
</div>
              <p className="text-gray-700">Built and enhanced an online booking website along with its dashboard and admin panels for a clothing store, focusing on efficient management and user experience. Developed multiple care home websites for a UK-based client, ensuring responsive design and accessibility. Created a food delivery application and its admin dashboard for a Canada-based client, integrating features like order management and real-time tracking.</p>
               {/* Skills - Improved Design */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Node.js", "React Js","Next JS", "MongoDB", "Redis","Zustand"].map((skill) => (
          <span 
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex w-full flex-row-reverse">
          <div className="hidden md:flex md:w-1/2"></div>
          <div className="w-full md:w-1/2 pr-8 md:pr-12">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -right-2 top-6 border-2 border-white"></div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">Software Engineer</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">July 2022 - Dec 2023</span>
              </div>
              {/* <span className="text-gray-600 block mb-2">Rookie Ninja General Trading LLC, Dubai</span> */}

<div className="flex items-center gap-2 text-gray-600 mb-2">
  <span>Rookie Ninja General Trading LLC, Dubai</span>
  <a href="https://rookie-ninja.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
    <ExternalLink className="w-4 h-4" />
  </a>
</div>


              <p className="text-gray-700">Developed websites for the requirements of our internal team as well as external
clients. Design and developed an in-house Human Resource Management System
(HRMS) to streamline HR processes. Developed a multi-seller E-commerce platform
for improved business operations. Additionally, created a Document Management
System for internal use to enhance workflow.</p>
 {/* Skills - Improved Design */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Node.js", "React Js","Next JS", "MongoDB", "Redis","Wordpress"].map((skill) => (
          <span 
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative flex w-full">
          <div className="hidden md:flex md:w-1/2"></div>
          <div className="w-full md:w-1/2 pl-8 md:pl-12">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 top-6 border-2 border-white"></div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">Junior Software Engineer</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">May 2021 - Oct 2021</span>
              </div>
              {/* <span className="text-gray-600 block mb-2">Paripoorna Software Solutions, Chennai</span> */}
              <div className="flex items-center gap-2 text-gray-600 mb-2">
  <span>Paripoorna Software Solutions, Chennai</span>
  <a href="https://paripoorna.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
    <ExternalLink className="w-4 h-4" />
  </a>
</div>
              <p className="text-gray-700">Conceptualized and developed a comprehensive COVID-19 test lab report tracking system and an airline flight booking software. Additionally, created a shopping e-commerce application with offer redemption features. Also contributed to multiple service-based projects, delivering tailored solutions for diverse client needs. </p>
               {/* Skills - Improved Design */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Node.js", "React Js", "MongoDB", "MySql","Firebase"].map((skill) => (
          <span 
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
            </div>
          </div>
        </div>

         {/* Item 4 */}
      <div className="relative flex w-full flex-row-reverse">
  <div className="hidden md:flex md:w-1/2"></div>
  <div className="w-full md:w-1/2 pr-8 md:pr-12">
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      {/* Timeline dot */}
      <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -right-2 top-6 border-2 border-white"></div>

      {/* Job title and date */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-lg">Trainee Software Engineer</span>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">2020 - 2021</span>
      </div>

      {/* Company */}
      {/* <span className="text-gray-600 block mb-2">Packapeer Academy, Calicut</span> */}
              <div className="flex items-center gap-2 text-gray-600 mb-2">
  <span>Packapeer Academy, Calicut</span>
  <a href="https://www.brototype.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
    <ExternalLink className="w-4 h-4" />
  </a>
</div>

      {/* Description */}
      <p className="text-gray-700">
        Built and enhanced online booking platforms and e-commerce applications, 
        sharpening my skills in user interface design, API integrations, 
        and scalable architecture.
      </p>

      {/* Skills - Improved Design */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["Node.js", "Express.js", "MongoDB", "Stripe", "Handlebars", "Bootstrap"].map((skill) => (
          <span 
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  </div>
</div>





      </section>
     
    </div>
  );
};

export default About;
