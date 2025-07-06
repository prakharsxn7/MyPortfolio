import React, { useState, useEffect } from 'react';
import { projects } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleViewLive = (url) => {
    window.open(url, '_blank');
  };

  const handleViewGithub = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#1e88e5] via-[#42a5f5] to-[#64b5f6] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#90caf9] to-[#e3f2fd] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#bbdefb] to-[#e3f2fd] rounded-full opacity-10 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#90caf9] to-[#e3f2fd] bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#90caf9] to-[#e3f2fd] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-[#90caf9] to-[#bbdefb] text-[#0d47a1] shadow-lg' 
                  : 'border-[#90caf9] text-[#90caf9] hover:bg-[#90caf9] hover:text-[#0d47a1]'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group bg-white/10 backdrop-blur-sm border-[#90caf9] hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#90caf9] to-[#bbdefb] text-[#0d47a1] border-none">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-[#90caf9] transition-colors duration-300">
                  {project.name}
                </CardTitle>
                
                <p className="text-[#bbdefb] mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-[#90caf9] text-[#90caf9] hover:bg-[#90caf9] hover:text-[#0d47a1] transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleViewLive(project.liveDemo)}
                    className="flex-1 bg-gradient-to-r from-[#90caf9] to-[#bbdefb] text-[#0d47a1] hover:from-[#bbdefb] hover:to-[#e3f2fd] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    🚀 Live Demo
                  </Button>
                  
                  <Button 
                    onClick={() => handleViewGithub(project.github)}
                    variant="outline"
                    className="flex-1 border-[#90caf9] text-[#90caf9] hover:bg-[#90caf9] hover:text-[#0d47a1] transition-all duration-300"
                  >
                    📋 GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-[#90caf9]">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-[#bbdefb] mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#90caf9] to-[#bbdefb] text-[#0d47a1] hover:from-[#bbdefb] hover:to-[#e3f2fd] font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;