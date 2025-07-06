import React from 'react';
import { personalInfo } from "../data/mockData";
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] border-t border-[#90caf9] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] rounded-full opacity-5 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#0d47a1] mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-[#1565c0] mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional web experiences. 
              Always eager to take on new challenges and learn emerging technologies.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => handleSocialClick(personalInfo.linkedin)}
                variant="outline"
                size="sm"
                className="border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white transition-all duration-300"
              >
                💼 LinkedIn
              </Button>
              <Button
                onClick={() => handleSocialClick(personalInfo.github)}
                variant="outline"
                size="sm"
                className="border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white transition-all duration-300"
              >
                💻 GitHub
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#0d47a1] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-[#1565c0] hover:text-[#0d47a1] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact"> {/* Add id="contact" here */}
            <h4 className="text-lg font-semibold text-[#0d47a1] mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-[#1565c0] text-sm flex items-center gap-2">
                <span>📧</span>
                {personalInfo.email}
              </p>
              <p className="text-[#1565c0] text-sm flex items-center gap-2">
                <span>📱</span>
                {personalInfo.phone}
              </p>
              <p className="text-[#1565c0] text-sm flex items-center gap-2">
                <span>📍</span>
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#90caf9] to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#1565c0] text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[#1565c0] text-sm mt-1">
              Made with ❤️ using React & Tailwind CSS
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={handleScrollToTop}
            variant="outline"
            size="sm"
            className="border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">⬆️</span>
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;