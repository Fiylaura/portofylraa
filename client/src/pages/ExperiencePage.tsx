import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/ui/layout";
import { Separator } from "@/components/ui/separator";

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const loadedExperiences = localStorage.getItem("experiences");
    if (loadedExperiences) {
      setExperiences(JSON.parse(loadedExperiences));
    }
  }, []);

  const technicalSkills = [
    { name: "UI Design", percentage: "90%" },
    { name: "UX Design", percentage: "85%" },
    { name: "Web Development", percentage: "75%" },
    { name: "Mobile Design", percentage: "80%" }
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      description: "Ability to identify, analyze, and solve complex design challenges effectively."
    },
    {
      name: "Communication",
      description: "Strong verbal and written communication skills for collaborating with teams and stakeholders."
    },
    {
      name: "Time Management",
      description: "Excellent organizational skills and ability to manage multiple projects simultaneously."
    }
  ];

  const tools = [
    { name: "Figma", imgSrc: "/figmaAssets/figma.png" },
    { name: "Visual Studio", imgSrc: "/figmaAssets/visual-studio.png" },
    { name: "Canva", imgSrc: "/figmaAssets/canva.png" },
    { name: "Framer", imgSrc: "/figmaAssets/framer-logo.png" },
    { name: "GitHub", imgSrc: "/figmaAssets/github.png" }
  ];

  return (
    <PageLayout>
      <div className="w-full max-w-[1160px] mx-auto px-4 md:px-6">
        {/* Header */}
        <section className="py-8 md:py-16">
          <h1 className="font-bold text-[#222a47] text-3xl md:text-[40px] mb-8">
            My Experience
          </h1>
          
          <p className="font-normal text-[#222a47cc] text-base mb-8">
            Here's my professional journey and experience in the field of digital product design
          </p>
        </section>

        {/* Experience Timeline */}
        <section className="py-8">
          {experiences.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-[#222a47] mb-2">No experience entries found</h3>
              <p className="text-[#222a47cc]">Experience entries will appear here once added</p>
            </div>
          ) : (
          <div className="space-y-12">
            {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 md:left-10 top-16 bottom-0 w-0.5 bg-[#e56815]" />
                )}
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline dot */}
                  <div className="flex items-start">
                    <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-[#e56815] flex items-center justify-center shrink-0">
                        <span className="text-white font-semibold text-center text-sm px-2">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-[10px] shadow-lg p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#222a47] mb-2">
                        {exp.position}
                    </h3>
                    <h4 className="text-lg md:text-xl font-semibold text-[#e56815] mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-base md:text-lg text-[#222a47] mb-6">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-[20px] shadow-lg py-12 md:py-16 px-6 md:px-12 max-w-[1160px] mx-auto">
          <h2 className="font-bold text-[#222a47] text-3xl md:text-[40px] mb-12 text-center">
            Background Skills & Accomplishment
            </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
            <div className="w-full h-full">
              <div className="bg-[#fbebe3] rounded-[20px] p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-[#222a47] mb-8">Technical Skills</h3>
                <div className="space-y-8 flex-1">
                {technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-lg text-[#222a47]">
                        {skill.name}
                        </h4>
                        <span className="font-medium text-[#e56815]">
                        {skill.percentage}
                      </span>
                    </div>
                      <div className="relative h-2 bg-white rounded-full overflow-hidden">
                      <div 
                          className="absolute h-full left-0 bg-[#e56815] rounded-full transition-all duration-1000"
                        style={{ width: skill.percentage }}
                      />
                      </div>
                    </div>
                  ))}
                  </div>
              </div>
            </div>

              {/* Soft Skills */}
            <div className="w-full h-full">
              <div className="bg-[#fbebe3] rounded-[20px] p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-[#222a47] mb-8">Soft Skills</h3>
                <div className="space-y-6 flex-1">
                {softSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-[15px] p-6 hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-semibold text-[#e56815] text-lg mb-2">
                      {skill.name}
                      </h4>
                      <p className="text-[#222a47]">
                      {skill.description}
                    </p>
                  </div>
                ))}
                </div>
              </div>
              </div>
            </div>

          {/* Tools Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-[#222a47] mb-8 text-center">Tools I Use</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center max-w-[900px] mx-auto">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="group relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#fbebe3] rounded-[15px] shadow-sm hover:shadow-md transition-all p-4 flex items-center justify-center"
                >
                  <img
                    className="w-full h-full object-contain transition-transform group-hover:scale-110"
                    alt={tool.name}
                    src={tool.imgSrc}
                  />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#222a47] text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}