import React from "react";
import Link from "next/link";
import Contact from "./contact";
export default function Footer() {
  return (
    <>
      <Contact />
      <footer className="bg-gray-950 text-gray-400 text-center">
        <div className="max-w-screen-xl  xl:mx-auto mx-5  ">
          <div className="w-full flex flex-col md:flex-row justify-between p-4 text-gray-400 ">
            <div className="text-[12px] hidden md:block">
              <p>
               Copyright © 2024 Vinsha Vijayan. All rights reserved.
              </p>
            </div>
            <div className="text-[12px]">
              Built with <span className="text-red-500">❤</span> by myself
            </div>
            <div className="text-[12px] hidden md:block">
              <p>
                *AI generated content. All the content is genarated with the
                help of GPT-4
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
