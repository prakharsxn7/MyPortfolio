import React, { useState, useEffect } from 'react';
import { timeline } from '../data/mockData';
import { Card, CardContent } from './ui/card';

const Timeline = () => {
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

    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      observer.observe(timelineSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] rounded-full opacity-5 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#0d47a1] to-[#1e88e5] bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-[#0d47a1] max-w-2xl mx-auto">
            A timeline of my growth and milestones in web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0d47a1] to-[#1e88e5] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0d47a1] to-[#1e88e5] rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={item.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>

                {/* Timeline Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card 
                    className={`bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-[#0d47a1] transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <div className="text-sm font-semibold text-[#0d47a1] bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] px-3 py-1 rounded-full inline-block">
                          {item.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#0d47a1] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#1565c0] leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/50 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#0d47a1] mb-4">
                The Journey Continues
              </h3>
              <p className="text-[#1565c0] leading-relaxed">
                Every milestone has been a stepping stone to where I am today. I'm excited about 
                the future and the new challenges and opportunities that lie ahead. The journey 
                of learning and growing never stops, and I'm committed to pushing boundaries and 
                creating impactful solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;