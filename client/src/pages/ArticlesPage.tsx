
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

export const ArticlesPage = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  // Navigation links data
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Project", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Articles", href: "/articles" },
  ];

  // Sample articles data - you can replace this with real data
  const articles = [
    {
      id: 1,
      title: "Understanding UI/UX Design Principles",
      excerpt: "A comprehensive guide to modern design principles...",
      image: "/figmaAssets/image.png",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "The Future of Digital Product Design",
      excerpt: "Exploring emerging trends in digital design...",
      image: "/figmaAssets/image.png",
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "Designing for Accessibility",
      excerpt: "Best practices for inclusive design solutions...",
      image: "/figmaAssets/image.png",
      date: "2024-01-05",
    },
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] h-[810px] relative">
        {/* Navigation Bar */}
        <header className="absolute w-[1160px] h-20 top-0 left-[140px] bg-white rounded-[10px] shadow-[0px_4px_4px_#00000040] z-10">
          <div className="flex items-center justify-between px-6 h-full">
            <div className="font-semibold text-[#e56815] text-2xl">FianaWL</div>

            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-normal text-[#222a47] text-xl"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                className="h-[50px] w-[150px] bg-[#e56815] hover:bg-[#d55a12] rounded-[10px] text-white font-semibold transition-colors"
                onClick={() => window.location.href = "/#contact"}
              >
                My Contact
              </Button>
              <Button 
                className="h-[50px] w-[115px] bg-[#222a47] hover:bg-[#1a1f39] rounded-[10px] text-white font-semibold transition-colors"
                onClick={() => window.location.href = "/admin/login"}
              >
                Admin Panel
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-[100px] px-[140px]">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="font-bold text-[#222a47] text-[40px] mb-4">
                Articles
              </h1>
              <p className="font-normal text-[#222a47cc] text-base max-w-[717px]">
                here are some articles
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-[275px]">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-[50px] bg-[#d9d9d9] border-none rounded-[10px] pl-12 pr-4 placeholder:text-[#00000080]"
                placeholder="Search articles..."
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00000080]" />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-3 gap-[56px] mt-[41px]">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="w-[350px] h-[174px] bg-[#d9d9d9] border-none rounded-[10px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0 h-full">
                  <div className="h-full flex flex-col justify-center items-center text-center p-6">
                    <h3 className="font-semibold text-[#222a47] text-lg mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="font-normal text-[#222a47cc] text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto">
                      <span className="font-normal text-[#222a47cc] text-xs">
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredArticles.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="font-normal text-[#222a47cc] text-lg">
                No articles found matching "{searchQuery}"
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="absolute w-full h-[147px] top-[663px] left-0 bg-[#e56815]">
          {/* Footer content can be added here */}
        </footer>
      </div>
    </div>
  );
};
