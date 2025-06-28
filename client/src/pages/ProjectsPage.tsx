
import React from "react";
import { Button } from "@/components/ui/button";

export const ProjectsPage = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Project", href: "/projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Artikel", href: "#articles" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] h-[810px] relative">
        {/* Navigation Bar */}
        <header className="absolute w-[1160px] h-20 top-0 left-[140px] bg-white rounded-[10px] shadow-[0px_4px_4px_#00000040]">
          <div className="absolute w-[152px] h-[50px] top-[15px] left-[848px]">
            <div className="relative w-[150px] bg-[#e56815] h-[50px] rounded-[10px]">
              <div className="absolute w-[84px] top-4 left-[33px] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                My Contact
              </div>
            </div>
          </div>
          <div className="absolute w-[115px] top-[15px] left-[1021px] bg-[#222a47] h-[50px] rounded-[10px]">
            <div className="absolute w-[94px] top-[15px] left-[11px] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Admin Panel
            </div>
          </div>
          <div className="absolute w-[148px] top-7 left-6 font-semibold text-[#e56815] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
            FianaWL
          </div>
          
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`absolute top-[30px] font-normal text-[#222a47] text-xl tracking-[0] leading-[normal] whitespace-nowrap ${
                index === 0 ? "w-[54px] left-72" :
                index === 1 ? "w-[57px] left-[385px]" :
                index === 2 ? "w-[65px] left-[485px]" :
                index === 3 ? "w-[102px] left-[593px]" :
                "w-[60px] left-[739px]"
              }`}
            >
              <a href={link.href}>{link.name}</a>
            </div>
          ))}
        </header>

        {/* Footer */}
        <div className="absolute w-[1440px] h-[147px] top-[663px] left-0 bg-[#e56815]"></div>

        {/* Main Content */}
        <div className="absolute w-[663px] top-[146px] left-[140px] font-bold text-[#222a47] text-[40px] tracking-[0] leading-[normal]">
          My Projects
        </div>
        
        <p className="absolute w-[717px] top-[202px] left-[140px] font-normal text-[#222a47cc] text-base tracking-[0] leading-[normal]">
          This is some of my projects that i have done and currently working on
        </p>

        {/* Project Images */}
        <img
          className="left-[139px] absolute w-[350px] h-[174px] top-[267px] object-cover"
          src="https://c.animaapp.com/mcfqt23fWthZPf/img/screenshot--775-.png"
          alt="Project 1"
        />
        <img
          className="left-[545px] absolute w-[350px] h-[174px] top-[267px] object-cover"
          src="https://c.animaapp.com/mcfqt23fWthZPf/img/screenshot--776-.png"
          alt="Project 2"
        />
        <div className="absolute w-[350px] h-[174px] top-[267px] left-[950px] bg-[#d9d9d9] rounded-[10px]"></div>

        {/* Search Bar */}
        <div className="absolute w-[275px] top-[173px] left-[1025px] bg-[#d9d9d9] h-[50px] rounded-[10px]">
          <img
            className="absolute w-[35px] h-[35px] top-[7px] left-[9px]"
            src="https://c.animaapp.com/mcfqt23fWthZPf/img/search.png"
            alt="Search"
          />
        </div>
      </div>
    </div>
  );
};
