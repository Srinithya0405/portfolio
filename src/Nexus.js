import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, Moon, Sun, ChevronDown, Award, Zap, Code2 } from 'lucide-react';
import profilePic from './img/blazerpic.jpeg';
import pic from './img/pic.png';
import p1 from './img/p1.png';
import p2 from './img/p2.png';
import p3 from './img/p3.png';


const Nexus = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const roles = [
    "Aspiring Front-End Developer",
    "MERN Stack Enthusiast", 
    "Patent Holder",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tags: ["Django", "PostgreSQL", "Payment Gateway", "Performance Optimization"],
      description: "A scalable grocery e-commerce platform with optimized performance. Built core modules and enhanced website speed through efficient architecture and database optimization.",
      image: p1
    },
    {
      id: 2,
      title: "Leaf Disease Detection Web App",
      tags: ["React.js", "Node.js", "Image Classification", "Farmers"],
      description: "Helping farmers monitor plant health with a custom, intuitive tool. Developed a custom algorithm for accurate disease detection, enabling early intervention and crop protection.",
      image: p2
    },
    {
      id: 3,
      title: "Matrimony Platform",
      tags: ["MERN Stack", "User Auth", "UI/UX", "Collaboration"],
      description: "Built registration, profile management, and matchmaking features during internship. Boosted engagement and accessibility across devices with responsive design.",
      image: p3
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "C/C++", "JavaScript"],
    "Front-End": ["React.js", "HTML", "CSS", "Responsive Design"],
    "Back-End": ["Node.js", "Django", "RESTful APIs"],
    "Databases": ["PostgreSQL", "MongoDB"],
    "Tools & Core": ["Git", "GitHub", "User Authentication", "Payment Gateway", "Debugging"]
  };

  const awards = [
    {
      icon: Award,
      title: "Design Patent",
      description: "Wireless Touch Laser Presenter - Innovative hardware solution for seamless presentations"
    },
    {
      icon: Zap,
      title: "Best Project Award",
      description: "Toycathon - 'Mini Roomba' Autonomous Cleaning Robot"
    },
    {
      icon: Code2,
      title: "National Hackathon",
      description: "iTech Hackfest 2023 Participant"
    }
  ];

  const handleContactSubmit = () => {
    if (contactForm.name && contactForm.email && contactForm.message) {
      const subject = encodeURIComponent(`Message from ${contactForm.name}`);
      const body = encodeURIComponent(`${contactForm.message}\n\nFrom: ${contactForm.email}`);
      window.open(`mailto:nithya.manoharan45@gmail.com?subject=${subject}&body=${body}`);
      setContactForm({ name: '', email: '', message: '' });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const theme = isDark ? {
    bg: 'bg-slate-900',
    text: 'text-slate-100',
    secondary: 'text-slate-300',
    card: 'bg-slate-800/50 backdrop-blur-sm',
    accent: 'bg-purple-300',
    accentText: 'text-purple-300',
    border: 'border-slate-700',
    hover: 'hover:bg-slate-700'
  } : {
    bg: 'bg-rose-50',
    text: 'text-slate-800',
    secondary: 'text-slate-600',
    card: 'bg-white/70 backdrop-blur-sm',
    accent: 'bg-purple-400',
    accentText: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:bg-purple-100'
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? `${theme.card} shadow-lg` : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-bold ${theme.accentText}`}>Portfolio</div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('home')} className={`${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors cursor-pointer`}>Home</button>
              <button onClick={() => scrollToSection('projects')} className={`${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors cursor-pointer`}>Projects</button>
              <button onClick={() => scrollToSection('about')} className={`${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors cursor-pointer`}>About</button>
              <button onClick={() => scrollToSection('contact')} className={`${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors cursor-pointer`}>Contact</button>
              <button onClick={() => setIsDark(!isDark)} className={`${theme.card} p-2 rounded-lg ${theme.hover} transition-colors`}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button onClick={() => setIsDark(!isDark)} className={`${theme.card} p-2 rounded-lg`}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${theme.card} p-2 rounded-lg`}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${theme.card} border-t ${theme.border}`}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className={`block w-full text-left ${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors`}>Home</button>
              <button onClick={() => scrollToSection('projects')} className={`block w-full text-left ${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors`}>Projects</button>
              <button onClick={() => scrollToSection('about')} className={`block w-full text-left ${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors`}>About</button>
              <button onClick={() => scrollToSection('contact')} className={`block w-full text-left ${theme.secondary} ${theme.hover} px-3 py-2 rounded-lg transition-colors`}>Contact</button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block relative">
            <div className={`w-32 h-32 mx-auto rounded-full ${theme.accent} opacity-20 blur-3xl absolute`}></div>
            <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full mx-auto relative border-4 border-purple-300 object-cover" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className={theme.accentText}>Srinithya</span>
          </h1>
          
          <div className="h-16 mb-6">
            <p className={`text-xl sm:text-2xl ${theme.secondary} transition-all duration-500`}>
              {roles[currentRole]}
            </p>
          </div>
          
          <p className={`text-lg sm:text-xl ${theme.secondary} mb-8 max-w-2xl mx-auto`}>
            Building bridges between innovative ideas and functional, user-centric code
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('projects')} className={`${theme.accent} text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer`}>
              View My Projects
            </button>
            <button onClick={() => scrollToSection('about')} className={`${theme.card} px-8 py-3 rounded-lg font-semibold ${theme.hover} transition-colors ${theme.border} border cursor-pointer`}>
              See My Journey
            </button>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className={`w-8 h-8 mx-auto ${theme.secondary}`} />
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className={`${theme.secondary} text-center mb-12 max-w-2xl mx-auto`}>
            Showcasing solutions that bridge digital interfaces with real-world impact
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className={`${theme.card} rounded-xl overflow-hidden border ${theme.border} hover:scale-105 transition-transform duration-300 cursor-pointer`} onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`text-xs px-3 py-1 rounded-full ${theme.card} border ${theme.border}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className={`${theme.card} rounded-xl max-w-2xl w-full p-6 sm:p-8 border ${theme.border}`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className={`${theme.hover} p-2 rounded-lg transition-colors`}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className={`${theme.secondary} mb-4`}>{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className={`text-sm px-3 py-1 rounded-full ${theme.accent} text-white`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <section id="about" className={`py-20 px-4 ${theme.card}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About & Skills</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex justify-center items-start">
              <img src= {pic} alt="Srinithya" className="rounded-2xl shadow-2xl w-full max-w-md object-cover" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Hello! I'm Srinithya</h3>
              <p className={`${theme.secondary} mb-4 leading-relaxed`}>
                I'm a Computer Science undergraduate passionate about creating digital solutions that have a real-world impact, from e-commerce platforms to agricultural tech and even a patented hardware device.
              </p>
              <p className={`${theme.secondary} leading-relaxed`}>
                My journey spans across full-stack development, innovative hardware design, and problem-solving through code. I believe in building technology that bridges the gap between digital experiences and tangible outcomes.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className={`${theme.card} border ${theme.border} p-6 rounded-xl`}>
                  <h4 className={`font-bold mb-4 ${theme.accentText}`}>{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, i) => {
                const Icon = award.icon;
                return (
                  <div key={i} className={`${theme.card} border ${theme.border} p-6 rounded-xl text-center hover:scale-105 transition-transform`}>
                    <div className={`inline-block p-4 rounded-full ${theme.accent} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-2">{award.title}</h4>
                    <p className={`text-sm ${theme.secondary}`}>{award.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className={`${theme.secondary} text-center mb-12`}>
            Let's collaborate on your next project
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <a href="mailto:srinithya.0405@gmail.com" className={`flex items-center gap-4 ${theme.card} p-4 rounded-xl border ${theme.border} ${theme.hover} transition-colors`}>
                <Mail className={theme.accentText} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className={`text-sm ${theme.secondary}`}>nithya.manoharan45@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+919566533382" className={`flex items-center gap-4 ${theme.card} p-4 rounded-xl border ${theme.border} ${theme.hover} transition-colors`}>
                <Phone className={theme.accentText} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className={`text-sm ${theme.secondary}`}>+91 9566533382</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/srinithya-manoharan" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 ${theme.card} p-4 rounded-xl border ${theme.border} ${theme.hover} transition-colors`}>
                <Linkedin className={theme.accentText} />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className={`text-sm ${theme.secondary}`}>linkedin.com/in/srinithya-manoharan</p>
                </div>
              </a>
              
              <a href="https://github.com/srinithya" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 ${theme.card} p-4 rounded-xl border ${theme.border} ${theme.hover} transition-colors`}>
                <Github className={theme.accentText} />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className={`text-sm ${theme.secondary}`}>github.com/srinithya</p>
                </div>
              </a>
            </div>
            
            <div className={`${theme.card} p-6 rounded-xl border ${theme.border} transition-colors`}>
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`p-3 rounded-lg border ${theme.border} ${theme.card} focus:outline-none`}
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`p-3 rounded-lg border ${theme.border} ${theme.card} focus:outline-none`}
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className={`p-3 rounded-lg border ${theme.border} ${theme.card} focus:outline-none`}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
                <button
                  onClick={handleContactSubmit}
                  className={`${theme.accent} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nexus;
