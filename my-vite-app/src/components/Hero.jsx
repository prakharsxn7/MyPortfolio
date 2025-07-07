import React, { useState, useEffect } from 'react';
import { personalInfo } from "../data/mockData";
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Full Stack Developer",
    "AI Enthusiast", 
    "Problem Solver",
    "Tech Explorer"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Improved typewriter effect
    const typewriterEffect = () => {
      const fullText = texts[textIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typewriterEffect, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentText, textIndex, isDeleting, texts]);

  const handleDownloadResume = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'PrakharSaxena_Resume.pdf';
    link.click();
  };

  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#0d47a1] via-[#1565c0] to-[#1e88e5] overflow-hidden">
      {/* Animated Background Elements */}
     

      {/* Floating Tech Icons */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {['⚛️', '🟨', '🟢', '🐍', '🔷', '🎨', '🚀', '☁️'].map((icon, index) => (
          <div
            key={index}
            className={`absolute text-4xl opacity-30 animate-float`}
            style={{
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 70}%`,
              animationDelay: `${index * 0.75}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="mb-6">
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-[#e3f2fd] to-[#90caf9] bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            <div className="h-16 mb-6">
              <h2 className="text-2xl lg:text-3xl font-medium text-[#bbdefb] min-h-[1.5em]">
                {currentText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            
            <p className="text-xl text-[#e3f2fd] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build responsive, dynamic web applications using the MERN stack, 
              creating seamless user experiences with clean, scalable code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={handleViewProjects}
              className="bg-gradient-to-r from-[#90caf9] to-[#bbdefb] text-[#0d47a1] hover:from-[#bbdefb] hover:to-[#e3f2fd] font-semibold px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Button>
            
            <Button 
              onClick={handleDownloadResume}
              variant="outline"
              className="bg-gradient-to-r from-[#90caf9] to-[#bbdefb] text-[#0d47a1] hover:from-[#bbdefb] hover:to-[#e3f2fd] font-semibold px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download Resume
            </Button>
            
            <Button 
              onClick={handleContactMe}
              variant="ghost"
              className="text-[#bbdefb] hover:text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right Content - Hero Illustration */}
        <div className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="relative">
            {/* Main Avatar */}
            <div className="relative z-10 w-[24rem] h-[24rem] mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-[#90caf9] transform hover:scale-105 transition-all duration-300">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#90caf9] to-[#bbdefb] rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-[#bbdefb] to-[#e3f2fd] rounded-full opacity-60 animate-bounce"></div>
            
            {/* Floating Code Elements */}
            <div className="absolute top-20 -left-8 bg-white/25 backdrop-blur-sm rounded-lg p-3 text-white text-sm font-mono animate-float border border-white/30">
              &lt;/&gt; Code
            </div>
            <div className="absolute bottom-20 -right-8 bg-white/25 backdrop-blur-sm rounded-lg p-3 text-white text-sm font-mono animate-float border border-white/30" style={{animationDelay: '1s'}}>
              { } Node
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;