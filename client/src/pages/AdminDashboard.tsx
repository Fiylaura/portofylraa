
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

interface Article {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

export const AdminDashboard = (): JSX.Element => {
  // Sample data
  const [articles, setArticles] = useState<Article[]>([
    { id: 1, title: "Sample Article", content: "This is a sample article content.", date: "2024-01-01" }
  ]);
  
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: "Sample Project", description: "A sample project description", image: "", technologies: ["React", "TypeScript"] }
  ]);
  
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: 1, company: "Sample Company", position: "UI/UX Designer", duration: "2023-2024", description: "Sample work experience" }
  ]);

  const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
    primaryColor: "#e56815",
    secondaryColor: "#222a47",
    backgroundColor: "#fbebe3"
  });

  // Form states
  const [articleForm, setArticleForm] = useState({ title: "", content: "" });
  const [projectForm, setProjectForm] = useState({ title: "", description: "", image: "", technologies: "" });
  const [experienceForm, setExperienceForm] = useState({ company: "", position: "", duration: "", description: "" });

  // CRUD Functions for Articles
  const addArticle = () => {
    if (articleForm.title && articleForm.content) {
      const newArticle: Article = {
        id: Date.now(),
        title: articleForm.title,
        content: articleForm.content,
        date: new Date().toISOString().split('T')[0]
      };
      setArticles([...articles, newArticle]);
      setArticleForm({ title: "", content: "" });
    }
  };

  const deleteArticle = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  // CRUD Functions for Projects
  const addProject = () => {
    if (projectForm.title && projectForm.description) {
      const newProject: Project = {
        id: Date.now(),
        title: projectForm.title,
        description: projectForm.description,
        image: projectForm.image,
        technologies: projectForm.technologies.split(',').map(tech => tech.trim())
      };
      setProjects([...projects, newProject]);
      setProjectForm({ title: "", description: "", image: "", technologies: "" });
    }
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  // CRUD Functions for Experience
  const addExperience = () => {
    if (experienceForm.company && experienceForm.position) {
      const newExperience: Experience = {
        id: Date.now(),
        company: experienceForm.company,
        position: experienceForm.position,
        duration: experienceForm.duration,
        description: experienceForm.description
      };
      setExperiences([...experiences, newExperience]);
      setExperienceForm({ company: "", position: "", duration: "", description: "" });
    }
  };

  const deleteExperience = (id: number) => {
    setExperiences(experiences.filter(experience => experience.id !== id));
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="articles" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="theme">Theme Settings</TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="article-title">Title</Label>
                    <Input
                      id="article-title"
                      value={articleForm.title}
                      onChange={(e) => setArticleForm({...articleForm, title: e.target.value})}
                      placeholder="Article title"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="article-content">Content</Label>
                    <Textarea
                      id="article-content"
                      value={articleForm.content}
                      onChange={(e) => setArticleForm({...articleForm, content: e.target.value})}
                      placeholder="Article content"
                      rows={4}
                    />
                  </div>
                </div>
                <Button onClick={addArticle}>Add Article</Button>

                <div className="space-y-2">
                  {articles.map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.date}</p>
                      </div>
                      <Button onClick={() => deleteArticle(article.id)} variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="project-title">Title</Label>
                    <Input
                      id="project-title"
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                      placeholder="Project title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="project-image">Image URL</Label>
                    <Input
                      id="project-image"
                      value={projectForm.image}
                      onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                      placeholder="Image URL"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-description">Description</Label>
                    <Textarea
                      id="project-description"
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                      placeholder="Project description"
                      rows={3}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-technologies">Technologies (comma separated)</Label>
                    <Input
                      id="project-technologies"
                      value={projectForm.technologies}
                      onChange={(e) => setProjectForm({...projectForm, technologies: e.target.value})}
                      placeholder="React, TypeScript, Node.js"
                    />
                  </div>
                </div>
                <Button onClick={addProject}>Add Project</Button>

                <div className="space-y-2">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.technologies.join(', ')}</p>
                      </div>
                      <Button onClick={() => deleteProject(project.id)} variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manage Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience-company">Company</Label>
                    <Input
                      id="experience-company"
                      value={experienceForm.company}
                      onChange={(e) => setExperienceForm({...experienceForm, company: e.target.value})}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience-position">Position</Label>
                    <Input
                      id="experience-position"
                      value={experienceForm.position}
                      onChange={(e) => setExperienceForm({...experienceForm, position: e.target.value})}
                      placeholder="Job position"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience-duration">Duration</Label>
                    <Input
                      id="experience-duration"
                      value={experienceForm.duration}
                      onChange={(e) => setExperienceForm({...experienceForm, duration: e.target.value})}
                      placeholder="2023-2024"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="experience-description">Description</Label>
                    <Textarea
                      id="experience-description"
                      value={experienceForm.description}
                      onChange={(e) => setExperienceForm({...experienceForm, description: e.target.value})}
                      placeholder="Job description"
                      rows={3}
                    />
                  </div>
                </div>
                <Button onClick={addExperience}>Add Experience</Button>

                <div className="space-y-2">
                  {experiences.map((experience) => (
                    <div key={experience.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{experience.position} at {experience.company}</h3>
                        <p className="text-sm text-gray-600">{experience.duration}</p>
                      </div>
                      <Button onClick={() => deleteExperience(experience.id)} variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Theme Settings Tab */}
          <TabsContent value="theme" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primary-color"
                        type="color"
                        value={themeSettings.primaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, primaryColor: e.target.value})}
                        className="w-16 h-10"
                      />
                      <Input
                        value={themeSettings.primaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, primaryColor: e.target.value})}
                        placeholder="#e56815"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="secondary-color"
                        type="color"
                        value={themeSettings.secondaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, secondaryColor: e.target.value})}
                        className="w-16 h-10"
                      />
                      <Input
                        value={themeSettings.secondaryColor}
                        onChange={(e) => setThemeSettings({...themeSettings, secondaryColor: e.target.value})}
                        placeholder="#222a47"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="background-color">Background Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="background-color"
                        type="color"
                        value={themeSettings.backgroundColor}
                        onChange={(e) => setThemeSettings({...themeSettings, backgroundColor: e.target.value})}
                        className="w-16 h-10"
                      />
                      <Input
                        value={themeSettings.backgroundColor}
                        onChange={(e) => setThemeSettings({...themeSettings, backgroundColor: e.target.value})}
                        placeholder="#fbebe3"
                      />
                    </div>
                  </div>
                </div>
                <Button onClick={() => alert('Theme settings saved!')}>
                  Save Theme Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};
