import React, { useState, useEffect } from 'react';
import { personalInfo } from "../data/mockData";
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact', 'certifications'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-screen-lg w-[85%] rounded-full px-11 ${ // Changed w-[96%] to w-[98%] and removed px-6
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-[#e3f2fd]' 
        : 'bg-white/65 backdrop-blur-md shadow-lg border-b border-transparent'
    }`}>
      <div className="container mx-auto py-4"> {/* Removed px-6 */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-[#0d47a1]'
                    : isScrolled
                    ? 'text-[#1565c0] hover:text-[#0d47a1]'
                    : 'text-white hover:text-[#bbdefb]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-10 h-10 flex flex-col justify-center space-y-2">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              } ${isScrolled ? 'bg-[#0d47a1]' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled ? 'bg-[#0d47a1]' : 'bg-white'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              } ${isScrolled ? 'bg-[#0d47a1]' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#e3f2fd] rounded-b-xl">
            <div className="flex flex-col space-y-2 mt-4 w-full"> {/* Removed px-6 from here */}
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.id
                      ? 'bg-[#e3f2fd] text-[#0d47a1]'
                      : 'text-[#1565c0] hover:bg-[#e3f2fd] hover:text-[#0d47a1]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;