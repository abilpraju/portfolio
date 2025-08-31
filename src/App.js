import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />
          
          {/* About Section */}
          <AboutSection />
          
          {/* Skills Section */}
          <SkillsSection />
          
          {/* Projects Section */}
          <ProjectsSection />
          
          {/* Experience Section */}
          <ExperienceSection />
          
          {/* Contact Section */}
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

