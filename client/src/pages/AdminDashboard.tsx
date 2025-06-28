
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

  const [profileSettings, setProfileSettings] = useState<ProfileSettings>({
    profileImage: "/figmaAssets/whatsapp-image-2025-05-03-at-20-20-29.png",
    name: "Fiana",
    title: "Product Digital Designer",
    description: "I'm a Product Digital Designer passionate about crafting user-friendly and impactful digital experiences. With a strong foundation in UI/UX design and an eye for detail, I turn ideas into intuitive products that truly resonate with real users.",
    email: "fiana@example.com",
    phone: "+62 123 456 789",
    location: "Indonesia",
    socialLinks: {
      linkedin: "https://linkedin.com/in/fiana",
      github: "https://github.com/fiana",
      instagram: "https://instagram.com/fiana"
    },
    skills: ["UI Design", "UX Research", "Product Design", "No Code Tools", "Basic HTML/CSS"],
    resume: ""
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
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
          </TabsList>

          {/* Profile Management Tab */}
          <TabsContent value="profile" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="profile-image">Profile Image URL</Label>
                    <Input
                      id="profile-image"
                      value={profileSettings.profileImage}
                      onChange={(e) => setProfileSettings({...profileSettings, profileImage: e.target.value})}
                      placeholder="Image URL"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileSettings.name}
                        onChange={(e) => setProfileSettings({...profileSettings, name: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={profileSettings.title}
                        onChange={(e) => setProfileSettings({...profileSettings, title: e.target.value})}
                        placeholder="Your job title"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">About Description</Label>
                    <Textarea
                      id="description"
                      value={profileSettings.description}
                      onChange={(e) => setProfileSettings({...profileSettings, description: e.target.value})}
                      placeholder="Brief description about yourself"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileSettings.email}
                      onChange={(e) => setProfileSettings({...profileSettings, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileSettings.phone}
                      onChange={(e) => setProfileSettings({...profileSettings, phone: e.target.value})}
                      placeholder="+62 123 456 789"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileSettings.location}
                      onChange={(e) => setProfileSettings({...profileSettings, location: e.target.value})}
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <Label htmlFor="resume">Resume/CV URL</Label>
                    <Input
                      id="resume"
                      value={profileSettings.resume}
                      onChange={(e) => setProfileSettings({...profileSettings, resume: e.target.value})}
                      placeholder="Link to your resume"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={profileSettings.socialLinks.linkedin}
                      onChange={(e) => setProfileSettings({
                        ...profileSettings, 
                        socialLinks: {...profileSettings.socialLinks, linkedin: e.target.value}
                      })}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      value={profileSettings.socialLinks.github}
                      onChange={(e) => setProfileSettings({
                        ...profileSettings, 
                        socialLinks: {...profileSettings.socialLinks, github: e.target.value}
                      })}
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      value={profileSettings.socialLinks.instagram}
                      onChange={(e) => setProfileSettings({
                        ...profileSettings, 
                        socialLinks: {...profileSettings.socialLinks, instagram: e.target.value}
                      })}
                      placeholder="https://instagram.com/yourusername"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Skills Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="skills">Skills (comma separated)</Label>
                    <Textarea
                      id="skills"
                      value={profileSettings.skills.join(', ')}
                      onChange={(e) => setProfileSettings({
                        ...profileSettings, 
                        skills: e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill)
                      })}
                      placeholder="UI Design, UX Research, Product Design"
                      rows={3}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profileSettings.skills.map((skill, index) => (
                      <span key={index} className="bg-[#e56815] text-white px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6 p-4 bg-[#fbebe3] rounded-lg">
                  <div className="relative w-32 h-32 mx-auto md:mx-0">
                    <div className="absolute top-0 left-0 bg-[#e56815] rounded-lg w-full h-full" />
                    <img
                      className="absolute top-2 left-2 w-28 h-28 object-cover rounded-lg"
                      alt="Profile preview"
                      src={profileSettings.profileImage}
                      onError={(e) => {
                        e.currentTarget.src = "/figmaAssets/whatsapp-image-2025-05-03-at-20-20-29.png";
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#222a47] text-xl">{profileSettings.name}</h3>
                    <p className="text-[#e56815] font-semibold">{profileSettings.title}</p>
                    <p className="text-[#222a47cc] mt-2 text-sm">{profileSettings.description}</p>
                    <div className="mt-3 space-y-1 text-sm text-[#222a47]">
                      <p>📧 {profileSettings.email}</p>
                      <p>📱 {profileSettings.phone}</p>
                      <p>📍 {profileSettings.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button 
                onClick={() => alert('Profile settings saved!')}
                className="bg-[#e56815] hover:bg-[#d55a12]"
              >
                Save Profile Settings
              </Button>
            </div>
          </TabsContent>

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
