import * as React from "react";
import Link from "next/link";

const JourneySec: React.FunctionComponent = () => {
  return (
    <section className="white-dot-bg">
      <div className="max-w-screen-xl  xl:mx-auto mx-5 grid place-items-center min-h-[90vh] ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] ">
            <h4 className="bg-gray-800 w-fit px-4 py-1 rounded-2xl my-4 ">
              <span className="text-[#32fcd7]   ">My Journey </span>
            </h4>
            <h2 className="font-extrabold text-5xl leading-tight  text-black">
              Fixing bugs,<br /> since 2020
            </h2>
            <p className="text-lg leading-normal my-5 font-semibold ">
             Since beginning my career in 2020 as a self-taught developer, I’ve been dedicated to building robust and visually compelling web solutions. Through continuous learning and hands-on experience, I have developed expertise in both frontend and backend development, with a strong focus on creating seamless user experiences and efficient system architectures.
            </p>
          </div>
          <div className="w-full md:w-[50%] hidden md:block ">
            <img
              src="/assets/new.jpg"
              alt="my journy "
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* <div className="w-full grid place-items-center my-12 ">
          <Link href="/journey">
            <div className="w-fit px-10 py-4 font-bold link-btn text-black transition-all text-center rounded-2xl">
              View My Complete Journey
            </div>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default JourneySec;
