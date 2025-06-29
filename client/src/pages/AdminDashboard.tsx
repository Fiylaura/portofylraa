import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { PageLayout } from "../components/ui/layout";
import { Alert } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
  linkUrl?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  youtubeUrl?: string;
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

interface ProfileSettings {
  profileImage: string;
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  skills: string[];
  resume: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("articles");
  const [message, setMessage] = useState({ type: "", text: "" });

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // States for data
  const [articles, setArticles] = useState<Article[]>(() => {
    const savedArticles = localStorage.getItem("articles");
    if (savedArticles) return JSON.parse(savedArticles);
    // Default articles
    const defaults: Article[] = [
      {
        id: 1,
        title: "What Is a Product Designer? Salaries, Skills, and More",
        content: "A product designer is somebody who oversees the design process of a product from start to finish or the improvement of an existing product. A product designer might brainstorm solutions to current pain points, take input from stakeholders, act as a liaison between designers, engineers, and researchers, and help compose mock-ups through wireframes and prototypes. They have an understanding of the bigger goals of the product while being mindful of the details needed to achieve them.",
        date: "2024-01-15",
        imageUrl: "/figmaAssets/artikel1.png",
        linkUrl: "https://www.coursera.org/articles/what-is-a-product-designer"
      },
      {
        id: 2,
        title: "UI/UX: Perbedaan UI dan UX Beserta Contohnya",
        content: "Mudahnya, UI Design adalah tampilan produk yang ingin kita perlihatkan (yang visible atau bisa dilihat oleh mata). UI Designer lebih fokus pada visualisasi, coloring, dan hal-hal yang berkaitan dengan kreativitas dari interface yang akan digunakan oleh user.",
        date: "2024-01-20",
        imageUrl: "/figmaAssets/artikel2.jpg",
        linkUrl: "https://www.binar.co.id/blog/perbedaan-ui-dan-ux"
      }
    ];
    return defaults;
  });
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  // States for forms
  const [articleForm, setArticleForm] = useState({ title: "", content: "", imageUrl: "", linkUrl: "" });
  const [projectForm, setProjectForm] = useState({ title: "", description: "", image: "", technologies: "", youtubeUrl: "" });
  const [experienceForm, setExperienceForm] = useState({ company: "", position: "", duration: "", description: "" });

  // States for edit mode
  const [editingArticleId, setEditingArticleId] = useState<number | null>(null);
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [editingExperienceId, setEditingExperienceId] = useState<number | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadedProjects = localStorage.getItem("projects");
    const loadedExperiences = localStorage.getItem("experiences");

    if (loadedProjects) setProjects(JSON.parse(loadedProjects));
    if (loadedExperiences) setExperiences(JSON.parse(loadedExperiences));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    console.log("Saving articles to localStorage:", articles);
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences));
  }, [experiences]);

  // Show success/error message
  const showMessage = (type: string, text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  // CRUD Functions for Articles
  const handleArticleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleForm.title || !articleForm.content) {
      showMessage("error", "Please fill all required fields");
      return;
    }

    if (editingArticleId) {
      setArticles(articles.map(article => 
        article.id === editingArticleId 
          ? { ...article, ...articleForm }
          : article
      ));
      showMessage("success", "Article updated successfully");
    } else {
      const newArticle: Article = {
        id: Date.now(),
        ...articleForm,
        date: new Date().toISOString().split('T')[0]
      };
      setArticles([...articles, newArticle]);
      showMessage("success", "Article added successfully");
    }
    
    setArticleForm({ title: "", content: "", imageUrl: "", linkUrl: "" });
    setEditingArticleId(null);
  };

  const editArticle = (article: Article) => {
    setArticleForm({
      title: article.title,
      content: article.content,
      imageUrl: article.imageUrl || "",
      linkUrl: article.linkUrl || ""
    });
    setEditingArticleId(article.id);
  };

  const deleteArticle = (id: number) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
    setArticles(articles.filter(article => article.id !== id));
      showMessage("success", "Article deleted successfully");
    }
  };

  // CRUD Functions for Projects
  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.description) {
      showMessage("error", "Please fill all required fields");
      return;
    }

    if (editingProjectId) {
      setProjects(projects.map(project => 
        project.id === editingProjectId 
          ? { 
              ...project, 
              ...projectForm,
              technologies: projectForm.technologies.split(',').map(tech => tech.trim()),
              youtubeUrl: projectForm.youtubeUrl
            }
          : project
      ));
      showMessage("success", "Project updated successfully");
    } else {
      const newProject: Project = {
        id: Date.now(),
        ...projectForm,
        technologies: projectForm.technologies.split(',').map(tech => tech.trim()),
        youtubeUrl: projectForm.youtubeUrl
      };
      setProjects([...projects, newProject]);
      showMessage("success", "Project added successfully");
    }
    
      setProjectForm({ title: "", description: "", image: "", technologies: "", youtubeUrl: "" });
    setEditingProjectId(null);
  };

  const editProject = (project: Project) => {
    setProjectForm({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(", "),
      youtubeUrl: project.youtubeUrl || ""
    });
    setEditingProjectId(project.id);
  };

  const deleteProject = (id: number) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
    setProjects(projects.filter(project => project.id !== id));
      showMessage("success", "Project deleted successfully");
    }
  };

  // CRUD Functions for Experience
  const handleExperienceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!experienceForm.company || !experienceForm.position) {
      showMessage("error", "Please fill all required fields");
      return;
    }

    if (editingExperienceId) {
      setExperiences(experiences.map(experience => 
        experience.id === editingExperienceId 
          ? { ...experience, ...experienceForm }
          : experience
      ));
      showMessage("success", "Experience updated successfully");
    } else {
      const newExperience: Experience = {
        id: Date.now(),
        ...experienceForm
      };
      setExperiences([...experiences, newExperience]);
      showMessage("success", "Experience added successfully");
    }
    
      setExperienceForm({ company: "", position: "", duration: "", description: "" });
    setEditingExperienceId(null);
  };

  const editExperience = (experience: Experience) => {
    setExperienceForm({
      company: experience.company,
      position: experience.position,
      duration: experience.duration,
      description: experience.description
    });
    setEditingExperienceId(experience.id);
  };

  const deleteExperience = (id: number) => {
    if (window.confirm("Are you sure you want to delete this experience?")) {
    setExperiences(experiences.filter(experience => experience.id !== id));
      showMessage("success", "Experience deleted successfully");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate("/");
  };

  return (
    <PageLayout>
      <div className="w-full max-w-[1160px] mx-auto px-4 md:px-6">
        <div className="py-8 md:py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-[#222a47]">
            Admin Dashboard
          </h1>
            <Button 
              onClick={handleLogout}
              className="bg-[#e56815] hover:bg-[#d55a12] text-white"
            >
              Logout
            </Button>
            </div>

          {message.text && (
            <Alert 
              variant={message.type === "error" ? "destructive" : "default"} 
              className="mb-6"
            >
              {message.text}
            </Alert>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-white rounded-[12px] p-1 space-x-2">
              <TabsTrigger value="articles" className="rounded-[8px] px-4 py-2">Articles</TabsTrigger>
              <TabsTrigger value="projects" className="rounded-[8px] px-4 py-2">Projects</TabsTrigger>
              <TabsTrigger value="experience" className="rounded-[8px] px-4 py-2">Experience</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add/Edit Article</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleArticleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={articleForm.title}
                        onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                        className="mt-1"
                        placeholder="Article title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={articleForm.content}
                        onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                        className="mt-1"
                        placeholder="Article content"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="imageUrl">Image URL</Label>
                      <Input
                        id="imageUrl"
                        value={articleForm.imageUrl}
                        onChange={(e) => setArticleForm({ ...articleForm, imageUrl: e.target.value })}
                        className="mt-1"
                        placeholder="Image URL"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkUrl">Article Link</Label>
                      <Input
                        id="linkUrl"
                        value={articleForm.linkUrl}
                        onChange={(e) => setArticleForm({ ...articleForm, linkUrl: e.target.value })}
                        className="mt-1"
                        placeholder="Article URL"
                      />
                    </div>
                    <Button type="submit" className="bg-[#e56815] hover:bg-[#d55a12] text-white">
                      {editingArticleId ? "Update Article" : "Add Article"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {articles.map(article => (
                  <Card key={article.id}>
                    <CardHeader>
                      <CardTitle>{article.title}</CardTitle>
                      <p className="text-sm text-gray-500">{article.date}</p>
                    </CardHeader>
                    <CardContent>
                      {article.imageUrl && (
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      <p className="mb-4">{article.content}</p>
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => editArticle(article)}
                          variant="outline"
                        >
                          Edit
                        </Button>
                        <Button 
                          onClick={() => deleteArticle(article.id)}
                          variant="destructive"
                        >
                          Delete
                        </Button>
                        {article.linkUrl && (
                          <Button 
                            onClick={() => window.open(article.linkUrl, '_blank')}
                            variant="link"
                            className="text-[#e56815]"
                          >
                            Read More
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add/Edit Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProjectSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="projectTitle">Title</Label>
                      <Input
                        id="projectTitle"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                        className="mt-1"
                        placeholder="Project title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectDescription">Description</Label>
                      <Textarea
                        id="projectDescription"
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        className="mt-1"
                        placeholder="Project description"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectImage">Image URL</Label>
                      <Input
                        id="projectImage"
                        value={projectForm.image}
                        onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                        className="mt-1"
                        placeholder="Image URL"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectTechnologies">Technologies (comma-separated)</Label>
                      <Input
                        id="projectTechnologies"
                        value={projectForm.technologies}
                        onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                        className="mt-1"
                        placeholder="React, TypeScript, Tailwind"
                      />
                    </div>
                    <div>
                      <Label htmlFor="youtubeUrl">YouTube Link</Label>
                      <Input
                        id="youtubeUrl"
                        type="text"
                        value={projectForm.youtubeUrl}
                        onChange={(e) => setProjectForm({ ...projectForm, youtubeUrl: e.target.value })}
                        className="mt-1"
                        placeholder="YouTube video URL"
                      />
                    </div>
                    <Button type="submit" className="bg-[#e56815] hover:bg-[#d55a12] text-white">
                      {editingProjectId ? "Update Project" : "Add Project"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {projects.map(project => (
                  <Card key={project.id}>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{project.description}</p>
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-48 object-cover rounded-lg mb-2"
                        />
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-[#fbebe3] text-[#e56815] rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.youtubeUrl && (
                        <div className="mb-4">
                          <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-[#e56815] font-semibold hover:underline">
                            Watch on YouTube
                          </a>
                        </div>
                      )}
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => editProject(project)}
                          variant="outline"
                        >
                          Edit
                        </Button>
                        <Button 
                          onClick={() => deleteProject(project.id)}
                          variant="destructive"
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add/Edit Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleExperienceSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={experienceForm.company}
                        onChange={(e) => setExperienceForm({ ...experienceForm, company: e.target.value })}
                        className="mt-1"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        value={experienceForm.position}
                        onChange={(e) => setExperienceForm({ ...experienceForm, position: e.target.value })}
                        className="mt-1"
                        placeholder="Job position"
                      />
                    </div>
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={experienceForm.duration}
                        onChange={(e) => setExperienceForm({ ...experienceForm, duration: e.target.value })}
                        className="mt-1"
                        placeholder="e.g., 2023-2024"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expDescription">Description</Label>
                      <Textarea
                        id="expDescription"
                        value={experienceForm.description}
                        onChange={(e) => setExperienceForm({ ...experienceForm, description: e.target.value })}
                        className="mt-1"
                        placeholder="Job description"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="bg-[#e56815] hover:bg-[#d55a12] text-white">
                      {editingExperienceId ? "Update Experience" : "Add Experience"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {experiences.map(experience => (
                  <Card key={experience.id}>
                    <CardHeader>
                      <CardTitle>{experience.position}</CardTitle>
                      <p className="text-[#e56815] font-medium">{experience.company}</p>
                      <p className="text-sm text-gray-500">{experience.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{experience.description}</p>
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => editExperience(experience)}
                          variant="outline"
                        >
                          Edit
                        </Button>
                        <Button 
                          onClick={() => deleteExperience(experience.id)}
                          variant="destructive"
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                  </div>
            </TabsContent>
          </Tabs>
                </div>
    </div>
    </PageLayout>
  );
}
