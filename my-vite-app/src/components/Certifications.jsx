import React, { useState, useEffect } from 'react';
import { certifications } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Certifications = () => {
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

    const certificationsSection = document.getElementById('certifications');
    if (certificationsSection) {
      observer.observe(certificationsSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewCredential = (cert) => {
    if (cert.link) {
      window.open(cert.link, '_blank');
    } else {
      alert(`No link available for credential: ${cert.name}`);
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#f8fbff] to-[#e3f2fd] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] rounded-full opacity-5 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-[#0d47a1] max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id}
              className={`group bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-[#0d47a1] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {cert.verified && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white border-none">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-[#0d47a1] mb-3 group-hover:text-[#1565c0] transition-colors duration-300">
                  {cert.name}
                </CardTitle>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[#1565c0]">
                    <span className="text-sm">🏢</span>
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#1565c0]">
                    <span className="text-sm">📅</span>
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#1565c0]">
                    <span className="text-sm">🆔</span>
                    <span className="text-sm font-mono">{cert.credentialId}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleViewCredential(cert)}
                  className="w-full bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white hover:from-[#1565c0] hover:to-[#1e88e5] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  🔗 View Credential
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Summary */}
        {/* <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-[#0d47a1] mb-4">
                  Commitment to Excellence
                </h3>
                <p className="text-lg text-[#1565c0] max-w-2xl mx-auto">
                  These certifications represent my dedication to continuous learning and staying 
                  current with industry best practices and emerging technologies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#0d47a1]">
                    {certifications.length}
                  </div>
                  <div className="text-sm text-[#1565c0]">
                    Certifications Earned
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#0d47a1]">
                    100%
                  </div>
                  <div className="text-sm text-[#1565c0]">
                    Verified Credentials
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#0d47a1]">
                    2024
                  </div>
                  <div className="text-sm text-[#1565c0]">
                    Latest Certification
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Certifications;