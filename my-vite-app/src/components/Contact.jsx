import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://formspree.io/f/mdkzvyeg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });
  
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    });
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#bbdefb] via-[#e3f2fd] to-[#f8fbff] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] rounded-full opacity-5 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#0d47a1] to-[#1e88e5] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          {/* <p className="text-xl text-[#0d47a1] max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p> */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#0d47a1] to-[#1e88e5] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-[#0d47a1] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#0d47a1] flex items-center gap-2">
                <span>📧</span>
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0d47a1] font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-[#bbdefb] focus:border-[#0d47a1] focus:ring-[#0d47a1]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0d47a1] font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#bbdefb] focus:border-[#0d47a1] focus:ring-[#0d47a1]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#0d47a1] font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-[#bbdefb] focus:border-[#0d47a1] focus:ring-[#0d47a1]"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#0d47a1] font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-[#bbdefb] focus:border-[#0d47a1] focus:ring-[#0d47a1]"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white hover:from-[#1565c0] hover:to-[#1e88e5] transition-all duration-300 shadow-lg hover:shadow-xl py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">🚀</span>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Direct Contact */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-[#0d47a1] transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#0d47a1] flex items-center gap-2">
                  <span>📞</span>
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] hover:from-[#bbdefb] hover:to-[#90caf9] transition-all duration-300">
                    <span className="text-xl">📧</span>
                    <div className="flex-1">
                      <p className="font-medium text-[#0d47a1]">Email</p>
                      <p className="text-sm text-[#1565c0]">{personalInfo.email}</p>
                    </div>
                    <Button
                      onClick={handleCopyEmail}
                      variant="outline"
                      size="sm"
                      className="border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white"
                    >
                      Copy
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb]">
                    <span className="text-xl">📱</span>
                    <div>
                      <p className="font-medium text-[#0d47a1]">Phone</p>
                      <p className="text-sm text-[#1565c0]">{personalInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb]">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-medium text-[#0d47a1]">Location</p>
                      <p className="text-sm text-[#1565c0]">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-[#0d47a1] transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#0d47a1] flex items-center gap-2">
                  <span>🌐</span>
                  Connect Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <Button
                    onClick={() => handleSocialClick(personalInfo.linkedin)}
                    variant="outline"
                    className="w-full justify-start border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white transition-all duration-300"
                  >
                    <span className="mr-3">💼</span>
                    LinkedIn
                  </Button>
                  
                  <Button
                    onClick={() => handleSocialClick(personalInfo.github)}
                    variant="outline"
                    className="w-full justify-start border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white transition-all duration-300"
                  >
                    <span className="mr-3">💻</span>
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-lg font-bold mb-2">Quick Response</h3>
                <p className="text-sm text-blue-100">
                  I typically respond to messages within 24 hours. 
                  Looking forward to hearing from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;