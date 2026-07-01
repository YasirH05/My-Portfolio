import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code, User, GraduationCap, Briefcase, Award, FolderGit2, MapPin, Mail, Phone, ChevronDown } from 'lucide-react';
import './TechPortfolio.css';

export default function TechPortfolio() {
  
  // Smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="tech-container">
      {/* Fixed Navigation */}
      <nav className="fixed-nav">
        <div className="nav-brand">
           <RouterLink to="/" className="back-link"><ArrowLeft size={18} /> Gateway</RouterLink>
           <span className="brand-logo">Yasir.Tech</span>
        </div>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
      </nav>

      <main className="tech-main-scroll">
        
        {/* HERO SECTION */}
        <section id="hero" className="scroll-section hero-section">
          <div className="hero-content">
             <div className="hero-text">
                <div className="availability-badge">
                  <span className="pulse-dot"></span> Available for Opportunities
                </div>
                <h1><span className="text-white">Hi, I'm</span><br/><span className="gradient-text">Yasir Hasan</span></h1>
                <p className="hero-subtitle">
                  CSE (AIML) undergraduate focused on building strong fundamentals in software development and data structures.
                </p>
                <div className="hero-location">
                  <MapPin size={16} className="icon-purple" /> Ghaziabad / Lucknow
                </div>
                <div className="hero-actions">
                  <a href="#projects" className="btn-primary">View Projects</a>
                  <a href="#about" className="btn-secondary">About Me</a>
                </div>
                <div className="hero-socials">
                  <a href="#" className="social-icon"><ExternalLink size={20} /></a>
                  <a href="#" className="social-icon"><ExternalLink size={20} /></a>
                  <a href="#" className="social-icon"><Code size={20} /></a>
                </div>
             </div>
             <div className="hero-image-wrapper">
                <div className="hero-image-container">
                   <img src="/profile.jpg" alt="Yasir Hasan" />
                </div>
             </div>
          </div>
          <div className="scroll-indicator">
             <span className="scroll-text">Scroll</span>
             <div className="scroll-line"></div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-section about-section">
          <div className="section-header">
            <span className="section-badge">About Me</span>
            <h2>Crafting <span className="gradient-text">Digital Solutions</span></h2>
          </div>
          <div className="about-grid">
             <div className="about-card glass-card">
                <div className="card-title"><User size={20} className="icon-purple"/> Who I Am</div>
                <p>
                  I'm a passionate developer regularly practicing problem-solving and developing projects to strengthen my practical understanding. Currently seeking opportunities to apply my skills in real-world development environments.
                </p>
                <div className="contact-details">
                   <div><Mail size={16}/> yasirhasan1000@gmail.com</div>
                   <div><Phone size={16}/> +91 7234872340</div>
                </div>
             </div>
             <div className="about-card glass-card">
                <div className="card-title"><GraduationCap size={20} className="icon-blue"/> Education</div>
                <div className="timeline">
                  <div className="timeline-item">
                     <div className="timeline-dot blue"></div>
                     <h4>ABES Engineering College</h4>
                     <div className="timeline-meta">B.Tech in CSE (AIML) &bull; Oct 2023 - July 2027</div>
                     <p>Pre-Final Year. Relevant Coursework: Data Structures, Algorithms, Web Development, DBMS.</p>
                  </div>
                  <div className="timeline-item">
                     <div className="timeline-dot cyan"></div>
                     <h4>St. Fidelis College (ICSE)</h4>
                     <div className="timeline-meta">Class XII (91.5%) | Class X (95.8%) &bull; 2007 - 2022</div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-section skills-section">
          <div className="section-header">
            <span className="section-badge">Skills & Expertise</span>
            <h2>My Technical <span className="gradient-text">Arsenal</span></h2>
          </div>
          <div className="skills-grid">
             <div className="skill-category glass-card">
                <h3>💻 Languages</h3>
                <div className="skill-tags">
                  <span>Java</span><span>JavaScript</span><span>C</span><span>HTML</span><span>CSS</span><span>SQL</span>
                </div>
             </div>
             <div className="skill-category glass-card">
                <h3>🚀 Frameworks & Libraries</h3>
                <div className="skill-tags">
                  <span>React.js</span><span>Next.js</span><span>Express.js</span>
                </div>
             </div>
             <div className="skill-category glass-card">
                <h3>🛠️ Tools</h3>
                <div className="skill-tags">
                  <span>Git/GitHub</span><span>VS Code</span><span>Jupyter Notebook</span><span>Adobe Creative Suite</span><span>Canva</span><span>CapCut</span>
                </div>
             </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-section projects-section">
          <div className="section-header">
            <span className="section-badge">Projects</span>
            <h2>Things I've <span className="gradient-text">Built</span></h2>
          </div>
          <div className="projects-grid">
            <div className="project-card glass-card">
               <div className="project-top">
                 <h3>CareerIQ - AI Career Recommendation</h3>
                 <span className="tech-pill">MERN Stack</span>
               </div>
               <p>
                 Built a full-stack MERN application recommending careers using psychometric and skill-based analysis. Implemented Authentication, REST APIs, Backend Logic, and designed a scalable database using MongoDB.
               </p>
               <div className="project-actions">
                 <button className="btn-secondary small"><ExternalLink size={14}/> View Code</button>
               </div>
            </div>
            
            <div className="project-card glass-card">
               <div className="project-top">
                 <h3>Sentiment Analysis of Product Reviews</h3>
                 <span className="tech-pill">Machine Learning</span>
               </div>
               <p>
                 Built NLP pipeline with preprocessing (tokenization, stemming, stopword removal). Applied TF-IDF vectorization and trained Naive Bayes classifier. Achieved ~80% accuracy on Amazon reviews dataset.
               </p>
               <div className="project-actions">
                 <button className="btn-secondary small"><ExternalLink size={14}/> View Code</button>
               </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & ACHIEVEMENTS SECTION */}
        <section id="experience" className="scroll-section experience-section">
          <div className="experience-grid">
             <div className="exp-column">
                <div className="section-header align-left">
                  <span className="section-badge">Experience</span>
                  <h2>Professional <span className="gradient-text">Journey</span></h2>
                </div>
                <div className="glass-card timeline-card">
                  <div className="timeline-item">
                     <div className="timeline-dot purple"></div>
                     <h4>IBM</h4>
                     <div className="timeline-meta">Artificial Intelligence Internship &bull; Sept 2025 - Oct 2025</div>
                     <ul className="bullet-list">
                       <li>Built Sentiment Analysis Model using Naive Bayes</li>
                       <li>Collaborated Using Git-based workflows in a remote environment</li>
                     </ul>
                  </div>
                </div>
             </div>

             <div className="exp-column">
                <div className="section-header align-left">
                  <span className="section-badge">Milestones</span>
                  <h2>Key <span className="gradient-text">Achievements</span></h2>
                </div>
                <div className="glass-card achievements-card">
                   <ul className="bullet-list">
                     <li><strong>100+ DSA problems</strong> solved across platforms (Leetcode, CodeChef)</li>
                     <li>AWS Academy Cloud Foundations</li>
                     <li>AWS Academy Machine Learning Techniques</li>
                     <li>MS Excel Beginners to Advanced Course</li>
                   </ul>
                </div>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}
