import React, { useState, useEffect } from 'react';
import { personalInfo, currentlyExploring } from "../data/mockData";
import { Card, CardContent } from './ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#1565c0] via-[#1e88e5] to-[#42a5f5] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-[#bbdefb] to-[#e3f2fd] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-[#90caf9] to-[#bbdefb] rounded-full opacity-10 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#bbdefb] to-[#90caf9] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#90caf9] to-[#bbdefb] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#90caf9] transform group-hover:scale-105 transition-all duration-500">
                  <img 
                    src={personalInfo.avatar1} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#90caf9] to-[#bbdefb] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#bbdefb] to-[#e3f2fd] rounded-full opacity-30 animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Hi there! I'm Prakhar Saxena
                </h3>
                <p className="text-lg text-[#e3f2fd] leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Fun Fact */}
              <Card className="bg-white/10 backdrop-blur-sm border-[#90caf9] hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🎉</span>
                    <h4 className="text-xl font-semibold text-white">Fun Fact</h4>
                  </div>
                  <p className="text-[#bbdefb]">{personalInfo.funFact}</p>
                </CardContent>
              </Card>

              {/* Currently Exploring */}
              <Card className="bg-white/10 backdrop-blur-sm border-[#90caf9] hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🚀</span>
                    <h4 className="text-xl font-semibold text-white">Currently Exploring</h4>
                  </div>
                  <div className="space-y-3">
                    {currentlyExploring.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="w-2 h-2 bg-[#90caf9] rounded-full animate-pulse"></div>
                        <span className="text-[#bbdefb]">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <p className="text-sm text-[#bbdefb]">Email</p>
                      <p className="text-white font-medium">{personalInfo.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="text-sm text-[#bbdefb]">Location</p>
                      <p className="text-white font-medium">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;