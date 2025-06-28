import React from "react";
import { Button } from "@/components/ui/button";

export const ExperiencePage = (): JSX.Element => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Project", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Articles", href: "/articles" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] min-h-screen relative">
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
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <Button 
                className="h-[40px] w-[120px] md:h-[50px] md:w-[150px] bg-[#e56815] hover:bg-[#d55a12] rounded-[10px] text-white font-semibold transition-colors text-sm md:text-base"
                onClick={() => window.location.href = "/#contact"}
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

        {/* Experience Content */}
        <main className="max-w-[1160px] mx-auto px-4 md:px-0 py-8 md:py-16">
          <h1 className="font-bold text-[#222a47] text-3xl md:text-5xl mb-8 text-center">
            My Experience
          </h1>

          <div className="space-y-6">
            {/* Experience timeline will be populated from admin data */}
            <div className="bg-[#fbebe3] rounded-[15px] p-6 text-center">
              <h3 className="font-semibold text-[#222a47] text-xl mb-4">Experience management coming soon</h3>
              <p className="text-[#222a47] opacity-80">
                Work experience will be managed through the admin panel
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};