import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "../components/ui/layout";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  youtubeUrl?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Default projects when localStorage is empty
  const defaultProjects: Project[] = [
    {
      id: 1,
      title: "Animasi Edukasi",
      description: "Animasi edukasi bertemakan anti korupsi",
      image: "/figmaAssets/Screenshot (776).png",
      technologies: [
        "Adobe Podcast",
        "Adobe Illustrator",
        "Power Point",
        "Canva",
        "CapCut"
      ],
      youtubeUrl: "https://youtu.be/vlfTRao_LTA?si=vLbrGsNpPVX7bvtk"
    },
    {
      id: 2,
      title: "Animasi Edukasi",
      description: "Animasi edukasi bertemakan anti korupsi",
      image: "/figmaAssets/Screenshot (775).png",
      technologies: [
        "Adobe Podcast",
        "Adobe Illustrator",
        "Power Point",
        "Canva",
        "CapCut"
      ],
      youtubeUrl: "https://youtu.be/B2Q7j_-3G14?si=IntGeS3BdWbernTg"
    }
  ];

  // Load projects from localStorage or use defaults
  useEffect(() => {
    const loadedStr = localStorage.getItem("projects");
    let parsed: Project[] | null = null;
    if (loadedStr) {
      try {
        parsed = JSON.parse(loadedStr);
      } catch {
        parsed = null;
      }
    }
    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
      // Merge youtubeUrl from defaultProjects if missing
      const merged = parsed.map(p => {
        const dp = defaultProjects.find(dp => dp.id === p.id);
        return {
          ...p,
          youtubeUrl: p.youtubeUrl || dp?.youtubeUrl
        };
      });
      setProjects(merged);
      localStorage.setItem("projects", JSON.stringify(merged));
    } else {
      setProjects(defaultProjects);
      localStorage.setItem("projects", JSON.stringify(defaultProjects));
    }
  }, []);

  return (
    <PageLayout>
      <div className="w-full max-w-[1160px] mx-auto px-4 md:px-6">
        {/* Header */}
        <section className="py-8 md:py-16">
          <h1 className="font-bold text-[#222a47] text-3xl md:text-[40px] mb-8">
            My Projects
          </h1>
          <p className="font-normal text-[#222a47cc] text-base mb-8">
            Here are some of my selected projects that showcase my skills and experience
          </p>
        </section>

        {/* Projects Grid */}
        <section className="py-8">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-[#222a47] mb-2">No projects found</h3>
              <p className="text-[#222a47cc]">Projects will appear here once added</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="block"
              >
                <div
                  className="bg-[#fbebe3] rounded-[15px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => project.youtubeUrl && window.open(project.youtubeUrl, '_blank')}
                >
                  {project.image && (
                    <div className="relative h-[200px] md:h-[250px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold text-[#222a47] text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#222a47cc] text-base mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-[#e56815] rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="py-8 md:py-16 text-center bg-[#fbebe3] rounded-[15px] px-4 md:px-8">
          <h2 className="font-semibold text-[#222a47] text-2xl md:text-3xl mb-4">
            Want to work together?
          </h2>
          <p className="text-[#222a47cc] text-base md:text-lg mb-8">
            I'm always open for new opportunities and interesting projects.
          </p>
          <a href="/#contact">
            <button className="h-[40px] md:h-[50px] px-8 bg-[#e56815] hover:bg-[#d55a12] text-white rounded-[10px] font-semibold transition-colors">
              Get in Touch
            </button>
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
