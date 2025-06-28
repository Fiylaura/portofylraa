import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const LandingPage = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Articles", href: "/articles" },
  ];

  // Technical skills data
  const technicalSkills = [
    {
      name: "UI Design",
      percentage: "90%",
      width: "w-[440px]",
      dotPosition: "left-[431px]",
    },
    {
      name: "UX Research",
      percentage: "85%",
      width: "w-[400px]",
      dotPosition: "left-[391px]",
    },
    {
      name: "Product Design",
      percentage: "80%",
      width: "w-[365px]",
      dotPosition: "left-[351px]",
    },
    {
      name: "No Code Tools",
      percentage: "70%",
      width: "w-[310px]",
      dotPosition: "left-[304px]",
    },
    {
      name: "Basic HTML/CSS",
      percentage: "60%",
      width: "w-[270px]",
      dotPosition: "left-[253px]",
    },
  ];

  // Soft skills data
  const softSkills = [
    {
      name: "Communication",
      description: "Explaining design ideas clearly & effectively",
    },
    {
      name: "Empathy",
      description: "Focused on user needs",
    },
    {
      name: "Problem-solving",
      description: "Solution-oriented when facing design constraints",
    },
    {
      name: "Critical Thinking",
      description: "Thinks logically when structuring product flow",
    },
    {
      name: "Adaptability",
      description: "Quick to learn new tools/methodologies",
    },
  ];

  // Tools data
  const tools = [
    { name: "Figma", bgImage: "bg-[url(/figmaAssets/figma.png)]" },
    { name: "Framer", bgImage: "bg-[url(/figmaAssets/framer-logo.png)]" },
    { name: "Image", imgSrc: "/figmaAssets/image.png" },
    { name: "Canva", bgImage: "bg-[url(/figmaAssets/canva.png)]" },
    {
      name: "Visual Studio",
      bgImage: "bg-[url(/figmaAssets/visual-studio.png)]",
    },
  ];

  // Social media links
  const socialLinks = [
    { name: "LinkedIn", bgImage: "bg-[url(/figmaAssets/linkedin.png)]" },
    { name: "Instagram", bgImage: "bg-[url(/figmaAssets/instagram.png)]" },
    { name: "GitHub", bgImage: "bg-[url(/figmaAssets/github.png)]" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50">
          <nav className="relative w-full max-w-[1160px] h-20 mx-auto bg-white rounded-[10px] shadow-[0px_4px_4px_#00000040] flex items-center justify-between px-4 md:px-6">
            <div className="font-semibold text-[#e56815] text-xl md:text-2xl">FianaWL</div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-normal text-[#222a47] text-lg md:text-xl hover:text-[#e56815] transition-colors"
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <Button 
                className="h-[40px] w-[120px] md:h-[50px] md:w-[150px] bg-[#e56815] hover:bg-[#d55a12] rounded-[10px] text-white font-semibold transition-colors text-sm md:text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                My Contact
              </Button>
              <Button 
                className="h-[40px] w-[100px] md:h-[50px] md:w-[115px] bg-[#222a47] hover:bg-[#1a1f39] rounded-[10px] text-white font-semibold transition-colors text-sm md:text-base"
                onClick={() => window.location.href = "/admin/login"}
              >
                Admin Panel
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="w-full min-h-[600px] md:h-[800px] bg-[#fbebe3]">
          <div className="max-w-[1160px] mx-auto pt-8 md:pt-[131px] px-4 md:px-0 flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-[663px] mb-8 md:mb-0">
              <h2 className="font-semibold text-[#e56815] text-2xl md:text-[32px]">
                Hello Everyone 👋, I am
              </h2>
              <h1 className="font-bold text-[#222a47] text-4xl md:text-[64px] mt-4">
                Fiana Wahyu Laura
              </h1>
              <h3 className="font-semibold text-[#222a47] text-xl md:text-[32px] mt-4">
                Digital Product Designer
              </h3>
              <p className="font-normal text-[#222a47cc] text-sm md:text-base mt-6 max-w-[505px]">
                I&apos;m a Product Digital Designer passionate about crafting
                user-friendly and impactful digital experiences. With a strong
                foundation in UI/UX design and an eye for detail, I turn ideas
                into intuitive products that truly resonate with real users.
              </p>
              <Button 
                className="mt-6 md:mt-10 h-[40px] w-[120px] md:h-[50px] md:w-[150px] bg-[#e56815] hover:bg-[#d55a12] rounded-[10px] text-white font-semibold transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                My Contact
              </Button>
            </div>

            <div className="relative w-[300px] h-[400px] md:w-[444px] md:h-[527px]">
              <img
                className="absolute w-[260px] h-[350px] md:w-[400px] md:h-[500px] top-0 left-5 md:left-11 object-cover"
                alt="Fiana profile"
                src="/figmaAssets/pia-edit.png"
              />
              <div className="absolute w-[240px] h-[50px] md:w-[280px] md:h-[60px] top-[350px] md:top-[467px] left-0 bg-[#e56815] rounded-[10px] flex items-center">
                <img
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] ml-1.5 object-cover"
                  alt="Blue soda"
                  src="/figmaAssets/blue-soda.png"
                />
                <img
                  className="w-4 h-4 md:w-5 md:h-5 ml-3 md:ml-5"
                  alt="Play button"
                  src="/figmaAssets/circled-play-button.png"
                />
                <span className="text-white text-[8px] md:text-[10px] font-semibold ml-1">
                  0:00
                </span>
                <img
                  className="w-[70px] md:w-[90px] h-px ml-1"
                  alt="Progress line"
                  src="/figmaAssets/line-2.svg"
                />
                <img
                  className="w-4 h-4 md:w-5 md:h-5 ml-auto mr-3 md:mr-4"
                  alt="Speaker"
                  src="/figmaAssets/speaker.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-8 md:py-16">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col md:flex-row">
            <div className="relative w-full max-w-[300px] md:w-[339px] h-[350px] md:h-[464px] mx-auto md:mx-0 mb-8 md:mb-0">
              <div className="absolute top-0 left-0 bg-[#e56815] rounded-[15px] w-full h-[300px] md:w-[300px] md:h-[421px]" />
              <img
                className="absolute top-[30px] left-[30px] md:top-[43px] md:left-[39px] w-full max-w-[240px] h-[300px] md:w-[300px] md:h-[421px] object-cover"
                alt="Fiana portrait"
                src="/figmaAssets/whatsapp-image-2025-05-03-at-20-20-29.png"
              />
            </div>

            <div className="md:ml-[104px] max-w-[719px]">
              <h2 className="font-bold text-[#222a47] text-2xl md:text-[40px]">About me</h2>
              <p className="font-normal text-[#222a47cc] text-sm md:text-base mt-5 max-w-[717px]">
                I&apos;m a Product Digital Designer passionate about crafting
                user-friendly and impactful digital experiences. With a strong
                foundation in UI/UX design and an eye for detail, I turn ideas
                into intuitive products that truly resonate with real users.
              </p>

              <h2 className="font-bold text-[#222a47] text-2xl md:text-[40px] mt-6 md:mt-10">
                Education
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8 md:mt-[65px] space-y-8 md:space-y-0">
                <div className="relative flex flex-col items-center md:w-[280px]">
                  <img
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                    alt="School building"
                    src="/figmaAssets/school-building.png"
                  />
                  <p className="font-normal text-[#222a47] text-lg md:text-xl text-center mt-2">
                    SMA Negeri 1 Toapaya
                    <br />
                    2020-2023
                  </p>
                </div>

                <div className="hidden md:flex items-center mx-4">
                  <div className="w-[25px] h-[25px] bg-[#222a47] rounded-[12.5px]" />
                  <img
                    className="w-[120px] md:w-[195px] h-[5px] mx-2"
                    alt="Timeline"
                    src="/figmaAssets/line-1.svg"
                  />
                  <div className="w-[25px] h-[25px] bg-[#222a47] rounded-[12.5px]" />
                </div>

                <div className="flex flex-col items-center md:w-[280px]">
                  <img
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                    alt="University building"
                    src="/figmaAssets/university-building.png"
                  />
                  <p className="font-normal text-[#222a47] text-lg md:text-xl text-center mt-2 md:mt-7">
                    Universitas Maritim Raja Ali Haji
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-[#fbebe3] py-8 md:py-11">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0">
            <h2 className="font-semibold text-[#222a47] text-2xl md:text-[40px] mb-6 md:mb-10">
              Background skills and accomplishment
            </h2>

            <div className="flex flex-col lg:flex-row">
              {/* Technical Skills */}
              <div className="w-full lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="mb-6 md:mb-10">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-[#222a47] text-lg md:text-2xl">
                        {skill.name}
                      </h3>
                      <span className="font-semibold text-[#222a47] text-lg md:text-2xl">
                        {skill.percentage}
                      </span>
                    </div>
                    <div className="relative h-[17px] mt-2">
                      <div className="absolute w-full max-w-[500px] h-[3px] top-[7px] left-0 bg-gray-300 rounded-full" />
                      <div 
                        className="absolute h-[3px] top-[7px] left-0 bg-[#e56815] rounded-full transition-all duration-1000"
                        style={{ width: skill.percentage }}
                      />
                      <div
                        className="absolute w-[17px] h-[17px] top-0 bg-[#e56815] rounded-[8.5px] transition-all duration-1000"
                        style={{ left: `calc(${skill.percentage} - 8.5px)` }}
                      >
                        <div className="relative w-[15px] h-[15px] top-px left-px bg-[#222a47] rounded-[7.5px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <Separator
                orientation="vertical"
                className="hidden lg:block mx-4 h-[500px] w-[3px] bg-[#222a47]"
              />

              {/* Soft Skills */}
              <div className="w-full lg:w-1/2 lg:pl-10">
                {softSkills.map((skill, index) => (
                  <div key={index} className="mb-6 md:mb-10">
                    <h3 className="font-semibold text-[#222a47] text-lg md:text-2xl mb-2">
                      {skill.name}
                    </h3>
                    <p className="font-normal text-[#222a47] text-base md:text-xl">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-10 justify-items-center mt-8 md:mt-16">
              {tools.map((tool, index) => (
                <div key={index} className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                  {tool.imgSrc ? (
                    <img
                      className="w-full h-full object-cover rounded-[10px]"
                      alt={tool.name}
                      src={tool.imgSrc}
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-white rounded-[10px] ${tool.bgImage} bg-center bg-contain bg-no-repeat`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 bg-white">
          <div className="max-w-[1160px] mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between">
            <div className="max-w-[645px] mb-8 md:mb-0">
              <h2 className="font-semibold text-[#222a47] text-2xl md:text-[40px] mb-4">
                Get In Touch
              </h2>
              <p className="font-normal text-[#222a47] text-sm md:text-base mb-6">
                Feel free to contact me if you have any questions or just want
                to say hi
              </p>
              <p className="font-normal text-[#222a47] text-sm md:text-base mb-6">
                fianawahyulaura@gmail.com
              </p>

              <div className="flex space-x-4 md:space-x-6 mb-6 md:mb-10">
                {socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white rounded-[10px] border-[0.5px] border-solid border-[#e56815] ${link.bgImage} bg-center bg-contain bg-no-repeat cursor-pointer hover:shadow-lg transition-shadow`}
                  />
                ))}
              </div>

              <Card className="w-full bg-[#fbebe3] rounded-[10px] border-none">
                <CardContent className="p-6 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="md:col-span-1">
                      <label className="font-normal text-[#e56815] text-sm md:text-base block mb-2">
                        Name
                      </label>
                      <Input
                        className="h-[35px] bg-[#d9d9d9] rounded-[10px] border-none"
                        placeholder="Name"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="font-normal text-[#e56815] text-sm md:text-base block mb-2">
                        Email
                      </label>
                      <Input
                        className="h-[35px] bg-[#d9d9d9] rounded-[10px] border-none"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <Textarea
                        className="h-[106px] bg-[#d9d9d9] rounded-[10px] border-none resize-none"
                        placeholder="Mail Box"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button 
                      className="w-[102px] h-[39px] bg-[#e56815] hover:bg-[#d55a12] rounded-[10px] font-semibold text-white transition-colors"
                      onClick={() => {
                        // Add form submission logic here
                        console.log('Form submitted');
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative w-full max-w-[300px] md:w-[338px] h-[350px] md:h-[463px] mx-auto md:mx-0">
              <div className="absolute w-[260px] h-[320px] md:w-[300px] md:h-[421px] top-0 left-[20px] md:left-[38px] bg-[#e56815] rounded-[15px]" />
              <img
                className="absolute w-[260px] h-[320px] md:w-[300px] md:h-[421px] top-[30px] md:top-[42px] left-0 object-cover rounded-[15px]"
                alt="Fiana portrait"
                src="/figmaAssets/whatsapp-image-2025-06-27-at-10-17-52.png"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full h-[147px] bg-[#e56815]">
          {/* Footer content can be added here */}
        </footer>
      </div>
    </div>
  );
};
