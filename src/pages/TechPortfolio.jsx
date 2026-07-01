import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Sun, Moon, ExternalLink, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaBrain, FaDatabase, FaChartLine, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma, FaAws, FaDocker, FaUserGraduate, FaCode, FaCompass, FaCamera, FaEnvelope } from 'react-icons/fa';
import { SiPython, SiPandas, SiNumpy, SiScikitlearn, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import './TechPortfolio.css';

const skillsData = {
  Python: { name: "Python", category: "Languages", tagline: "Machine Learning toolkit", projects: ["Sentiment Analysis"], comfort: ["NumPy", "Pandas", "Scikit-learn", "Automation"], favorite: "Building AI/ML predictive models.", since: "2025" },
  Java: { name: "Java", category: "Languages", tagline: "Robust Enterprise Backend", projects: ["Object-Oriented Applications"], comfort: ["OOP", "Data Structures", "Algorithms"], favorite: "Strongly typed architecture.", since: "2023" },
  JavaScript: { name: "JavaScript", category: "Languages", tagline: "Web Interactivity Core", projects: ["Personal Portfolio", "CareerIQ", "Rail Compass"], comfort: ["ES6+", "Asynchronous Programming", "DOM Manipulation"], favorite: "Building dynamic user experiences.", since: "2025" },
  React: { name: "React", category: "Frontend", tagline: "Primary Frontend Framework", projects: ["Rail Compass", "Personal Portfolio", "Movie Recommendation App"], comfort: ["Functional Components", "Hooks", "React Router", "Context API", "Responsive Design"], favorite: "Building reusable UI components.", since: "2025" },
  Tailwind: { name: "Tailwind", category: "Frontend", tagline: "Utility-First Styling", projects: ["Personal Portfolio", "Rail Compass"], comfort: ["Responsive Utility Classes", "Flexbox/Grid", "Custom Configurations"], favorite: "Rapid prototyping and custom styling.", since: "2025" },
  HTML: { name: "HTML", category: "Frontend", tagline: "Semantic Web Structure", projects: ["All Web Projects"], comfort: ["Semantic Elements", "Accessibility (a11y)", "SEO Basics"], favorite: "Structuring clean, accessible content.", since: "2023" },
  CSS: { name: "CSS", category: "Frontend", tagline: "Advanced Styling & Animations", projects: ["Personal Portfolio", "Rail Compass"], comfort: ["CSS Grid", "Flexbox", "Animations & Transitions", "Custom Variables"], favorite: "Crafting beautiful micro-interactions.", since: "2023" },
  "Node.js": { name: "Node.js", category: "Backend", tagline: "Scalable JavaScript Runtime", projects: ["Rail Compass", "CareerIQ"], comfort: ["RESTful APIs", "Asynchronous I/O", "File System Operations"], favorite: "Using a unified language across the stack.", since: "2025" },
  Express: { name: "Express", category: "Backend", tagline: "Minimalist Web Framework", projects: ["Rail Compass", "CareerIQ"], comfort: ["Routing", "Middleware", "Error Handling", "API Development"], favorite: "Building lightweight, scalable APIs.", since: "2026" },
  MongoDB: { name: "MongoDB", category: "Backend", tagline: "Database", projects: ["Rail Compass", "CareerIQ"], comfort: ["CRUD Operations", "Collections", "Aggregation Basics", "Mongoose"], favorite: "Flexible document schemas.", since: "2026" },
  Pandas: { name: "Pandas", category: "AI & ML", tagline: "Data Manipulation Library", projects: ["Sentiment Analysis"], comfort: ["DataFrames", "Data Cleaning", "Data Analysis"], favorite: "Wrangling messy data.", since: "2025" },
  NumPy: { name: "NumPy", category: "AI & ML", tagline: "Numerical Computing", projects: ["Sentiment Analysis"], comfort: ["N-dimensional Arrays", "Mathematical Functions"], favorite: "High-performance scientific computing.", since: "2025" },
  "Scikit-learn": { name: "Scikit-learn", category: "AI & ML", tagline: "Machine Learning Library", projects: ["Sentiment Analysis"], comfort: ["Classification Models", "Regression", "Clustering", "Model Evaluation"], favorite: "Implementing machine learning algorithms.", since: "2025" },
  Git: { name: "Git", category: "Tools", tagline: "Version Control", projects: ["15+ Repositories"], comfort: ["Branching", "Commits", "Pull Requests", "Merge Conflict Resolution"], favorite: "Safe experimentation with branching.", since: "2024" },
  GitHub: { name: "GitHub", category: "Tools", tagline: "Code Hosting & Collaboration", projects: ["15+ Repositories"], comfort: ["Repository Management", "Actions/CI Basics", "Issues & PRs"], favorite: "Showcasing projects to the world.", since: "2024" },
  "VS Code": { name: "VS Code", category: "Tools", tagline: "Primary Code Editor", projects: ["All Projects"], comfort: ["Integrated Terminal", "Extensions", "Debugging"], favorite: "Highly customizable workspace.", since: "2023" },
  Figma: { name: "Figma", category: "Tools", tagline: "UI/UX Design Tool", projects: ["Personal Portfolio"], comfort: ["Wireframing", "Prototyping", "Component Libraries"], favorite: "Visually planning out interfaces.", since: "2024" },
  AWS: { name: "AWS", category: "Currently Exploring", tagline: "Cloud Infrastructure", projects: ["Learning"], comfort: ["EC2 Basics", "S3 Storage", "Deployment Concepts"], favorite: "Scaling applications globally.", since: "2025" },
  Docker: { name: "Docker", category: "Currently Exploring", tagline: "Containerization", projects: ["Learning"], comfort: ["Dockerfiles", "Containers vs VMs", "Local Environments"], favorite: "Consistent environments everywhere.", since: "2026" },
  "Next.js": { name: "Next.js", category: "Currently Exploring", tagline: "React Framework", projects: ["Learning"], comfort: ["Server-Side Rendering", "Static Site Generation", "App Router"], favorite: "SEO-friendly React applications.", since: "2026" }
};

const blueprintData = {
  "Who I Am": {
    id: "Who I Am",
    title: "WHO I AM",
    items: [
      { label: "Degree", value: "Computer Science (AI & ML)" },
      { label: "Institution", value: "ABES Engineering College" },
      { label: "Status", value: "4th Year Student" }
    ]
  },
  "Currently Building": {
    id: "Currently Building",
    title: "CURRENTLY BUILDING",
    items: [
      { label: "Project", value: "Rail Compass" },
      { label: "Description", value: "An AI-powered railway journey recommendation platform." }
    ]
  },
  "Interests": {
    id: "Interests",
    title: "INTERESTS",
    items: [
      { label: "Domain", value: "Full-Stack Development" },
      { label: "Domain", value: "Backend Engineering" },
      { label: "Domain", value: "Artificial Intelligence" },
      { label: "Domain", value: "Product Design" }
    ]
  },
  "Core Principles": {
    id: "Core Principles",
    title: "CORE PRINCIPLES",
    items: [
      { label: "Principle", value: "Write maintainable code" },
      { label: "Principle", value: "Build for real users" },
      { label: "Principle", value: "Learn continuously" },
      { label: "Principle", value: "Iterate relentlessly" }
    ]
  },
  "Beyond The Screen": {
    id: "Beyond The Screen",
    title: "BEYOND THE SCREEN",
    items: [
      { label: "Things I like to do", value: "Travel" },
      { label: "", value: "Video Editing (Go visit my other side)" },
      { label: "", value: "FIFA" },
      { label: "", value: "Photography" }
    ]
  }
};


export default function TechPortfolio() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [formStatus, setFormStatus] = useState('');
  const [activeSkill, setActiveSkill] = useState(skillsData['React']);
  const [activeBlueprint, setActiveBlueprint] = useState(blueprintData['Who I Am']);

  const getBlueprintIcon = (id) => {
    switch (id) {
       case 'Who I Am': return <FaUserGraduate />;
       case 'Currently Building': return <FaCode />;
       case 'Interests': return <FaBrain />;
       case 'Core Principles': return <FaCompass />;
       case 'Beyond The Screen': return <FaCamera />;
       default: return null;
    }
  };

  const getSkillIcon = (skillName) => {
    const icons = {
      Python: <SiPython />,
      Java: <FaJava />,
      JavaScript: <SiJavascript />,
      React: <FaReact />,
      Tailwind: <SiTailwindcss />,
      HTML: <FaHtml5 />,
      CSS: <FaCss3Alt />,
      "Node.js": <FaNodeJs />,
      Express: <SiExpress />,
      MongoDB: <SiMongodb />,
      Pandas: <SiPandas />,
      NumPy: <SiNumpy />,
      "Scikit-learn": <SiScikitlearn />,
      Git: <FaGitAlt />,
      GitHub: <FaGithub />,
      "VS Code": <VscCode />,
      Figma: <FaFigma />,
      AWS: <FaAws />,
      Docker: <FaDocker />,
      "Next.js": <SiNextdotjs />
    };
    return icons[skillName] || null;
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="tech-layout-container">
      {/* Navigation */}
      <nav className="tech-nav">
        <div className="nav-brand">
           <RouterLink to="/" className="back-link"><ArrowLeft size={18} /> Gateway</RouterLink>
           <span className="brand-logo">Tech Portfolio</span>
        </div>
        <div className="nav-links-center">
           <a href="#about">About</a>
           <a href="#projects">Projects</a>
           <a href="#experience">Experience</a>
           <a href="#skills">Skills</a>
           <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      <main className="tech-main-content">
        
        {/* HERO SECTION */}
        <section id="hero" className="section-block hero-minimal">
          <div className="hero-minimal-content">
             <h1 className="hero-massive-heading">
                I build thoughtful software with <span className="hero-highlight">curiosity, logic and purpose</span>.
             </h1>
             <p className="hero-minimal-bio">
                I'm Yasir Hasan — a developer focused on responsive interfaces, full-stack products, and real-time experiences with stronger visual clarity, usability, and backend precision.
             </p>
             <div className="hero-action-buttons">
                <a href="#about" className="btn-primary-hero">About Me</a>
                <a href="/resume.pdf.pdf" target="_blank" rel="noreferrer" className="btn-secondary-outline">Resume</a>
             </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-block spacing-top">
           <div className="section-header-left">
             <span className="about-badge">Selected Work</span>
             <h2 className="projects-heading">Projects with practical implementations</h2>
           </div>
           
           <div className="project-category">
             <h3 className="category-title">Personal Projects</h3>
             <div className="projects-grid-new">
               <div className="project-card-new">
                  <div className="project-top-new">
                    <h3>Rail Compass: Smart Train Recommender</h3>
                    <span className="tech-pill-new">React, Node.js, MongoDB, Vite</span>
                  </div>
                  <p>
                    Built a personalized railway recommendation platform that ranks trains based on duration, budget, comfort, and reliability. Designed a high-performance frontend using React 19 and Vite with a modern, responsive Glassmorphism UI. Created a RESTful Node.js/Express backend with MongoDB, using custom scripts to ingest large-scale real-world datasets from Kaggle.
                  </p>
                  <div className="project-actions-new">
                    <a href="https://railcompass.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary-new small"><ExternalLink size={14}/> Visit Website</a>
                    <a href="https://github.com/YasirH05/railcompass" target="_blank" rel="noreferrer" className="btn-secondary-new small"><FaGithub size={14}/> GitHub</a>
                  </div>
               </div>

               <div className="project-card-new">
                  <div className="project-top-new">
                    <h3>Sentiment Analysis of E-commerce Reviews</h3>
                    <span className="tech-pill-new">Python, Scikit-learn, NLP</span>
                  </div>
                  <p>
                    Built an NLP pipeline with full preprocessing including tokenization, stemming, and stopword removal. Applied TF-IDF vectorization and trained a Naive Bayes classifier for review sentiment classification. Achieved approximately 80% accuracy on an Amazon reviews dataset.
                  </p>
                  <div className="project-actions-new">
                    <a href="https://yasir-sentiment-analysis.streamlit.app/" target="_blank" rel="noreferrer" className="btn-secondary-new small"><ExternalLink size={14}/> Visit Website</a>
                    <a href="https://github.com/YasirH05/sentiment-analysis-nlp" target="_blank" rel="noreferrer" className="btn-secondary-new small"><FaGithub size={14}/> GitHub</a>
                  </div>
               </div>
             </div>
           </div>

           <div className="project-category">
             <h3 className="category-title">Collaborative Projects</h3>
             <div className="projects-grid-new">
               <div className="project-card-new">
                  <div className="project-top-new">
                    <h3>CareerIQ: AI Based Career Recommendation</h3>
                    <span className="tech-pill-new">MERN Stack, REST APIs</span>
                  </div>
                  <p>
                    Built a full-stack MERN application that recommends careers using psychometric and skill-based analysis. Implemented user authentication, REST APIs, and backend logic for data processing and recommendations. Designed a scalable database schema using MongoDB to handle user profiles and career data efficiently.
                  </p>
                  <div className="project-actions-new">
                    <a href="https://careeriq-vert.vercel.app/" target="_blank" rel="noreferrer" className="btn-secondary-new small"><ExternalLink size={14}/> Visit Website</a>
                    <a href="https://github.com/ZainabShujat/CareerIQ" target="_blank" rel="noreferrer" className="btn-secondary-new small"><FaGithub size={14}/> GitHub</a>
                  </div>
               </div>
             </div>
           </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-block spacing-top">
           <div className="section-header-left" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
             <div>
               <span className="about-badge">Professional Experience</span>
               <h2 className="projects-heading">PBEL Virtual Internship</h2>
             </div>
             <span className="experience-date" style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '0.9rem', padding: '0.4rem 1rem', border: '1px solid var(--accent-primary)', borderRadius: '20px', backgroundColor: 'var(--bg-surface)' }}>Sept 2025 - Oct 2025</span>
           </div>
           
           <div className="experience-flow">
             <div className="experience-timeline">
                <div className="flow-step">
                   <h4 className="flow-label">MISSION</h4>
                   <p className="flow-text">Learn practical AI development.</p>
                </div>

                <div className="flow-step">
                   <h4 className="flow-label">TIMELINE</h4>
                   <div className="timeline-nodes">
                      <span className="timeline-node">Week 1</span>
                      <span className="node-arrow">→</span>
                      <span className="timeline-node">Week 2</span>
                      <span className="node-arrow">→</span>
                      <span className="timeline-node">Week 3</span>
                      <span className="node-arrow">→</span>
                      <a href="https://yasir-sentiment-analysis.streamlit.app/" target="_blank" rel="noreferrer" className="timeline-link">Project (Sentiment Analysis of E-Commerce Reviews)</a>
                   </div>
                </div>

                <div className="flow-step">
                   <h4 className="flow-label">ARSENAL UPDATED</h4>
                   <div className="arsenal-grid">
                      <span className="tech-pill-new arsenal-pill"><SiPython size={14}/> Python</span>
                      <span className="tech-pill-new arsenal-pill"><SiPandas size={14}/> Pandas</span>
                      <span className="tech-pill-new arsenal-pill"><SiNumpy size={14}/> NumPy</span>
                      <span className="tech-pill-new arsenal-pill"><SiScikitlearn size={14}/> Scikit-learn</span>
                      <span className="tech-pill-new arsenal-pill"><FaBrain size={14}/> Machine Learning</span>
                      <span className="tech-pill-new arsenal-pill"><FaDatabase size={14}/> Data Preprocessing</span>
                      <span className="tech-pill-new arsenal-pill"><FaChartLine size={14}/> Model Evaluation</span>
                   </div>
                </div>

                <div className="flow-step">
                   <h4 className="flow-label">KEY TAKEAWAY</h4>
                   <blockquote className="flow-quote">
                      "Understanding the complete machine learning pipeline—from preparing data and training models to evaluating performance and interpreting results."
                   </blockquote>
                </div>
             </div>
           </div>
        </section>

        {/* DEVELOPER'S DESK SECTION */}
        <section id="skills" className="section-block spacing-top">
           <div className="section-header-left">
             <span className="about-badge">Inside My Workspace</span>
             <h2 className="projects-heading">Developer's Desk</h2>
             <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', marginTop: '0.5rem' }}>The languages, frameworks, and tools I use to turn ideas into products.</p>
           </div>
           
           <div className="desk-container">
              {/* Left Panel: Lists */}
              <div className="desk-sidebar">
                 <div className="desk-category-group">
                    <div className="desk-category">
                       <h4>Languages</h4>
                       {['Python', 'Java', 'JavaScript'].map(skill => (
                          <div key={skill} className={`desk-skill-item ${activeSkill.name === skill ? 'active' : ''}`} onMouseEnter={() => setActiveSkill(skillsData[skill])} onClick={() => setActiveSkill(skillsData[skill])}>
                             <span className="skill-icon-wrapper">{getSkillIcon(skill)}</span>
                             {skill}
                             {activeSkill.name === skill && <span className="active-arrow"></span>}
                          </div>
                       ))}
                    </div>
                    <div className="desk-category">
                       <h4>Frontend</h4>
                       {['React', 'Tailwind', 'HTML', 'CSS'].map(skill => (
                          <div key={skill} className={`desk-skill-item ${activeSkill.name === skill ? 'active' : ''}`} onMouseEnter={() => setActiveSkill(skillsData[skill])} onClick={() => setActiveSkill(skillsData[skill])}>
                             <span className="skill-icon-wrapper">{getSkillIcon(skill)}</span>
                             {skill}
                             {activeSkill.name === skill && <span className="active-arrow"></span>}
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="desk-category-group">
                    <div className="desk-category">
                       <h4>Backend</h4>
                       {['Node.js', 'Express', 'MongoDB'].map(skill => (
                          <div key={skill} className={`desk-skill-item ${activeSkill.name === skill ? 'active' : ''}`} onMouseEnter={() => setActiveSkill(skillsData[skill])} onClick={() => setActiveSkill(skillsData[skill])}>
                             <span className="skill-icon-wrapper">{getSkillIcon(skill)}</span>
                             {skill}
                             {activeSkill.name === skill && <span className="active-arrow"></span>}
                          </div>
                       ))}
                    </div>
                    <div className="desk-category">
                       <h4>AI & ML</h4>
                       {['Pandas', 'NumPy', 'Scikit-learn'].map(skill => (
                          <div key={skill} className={`desk-skill-item ${activeSkill.name === skill ? 'active' : ''}`} onMouseEnter={() => setActiveSkill(skillsData[skill])} onClick={() => setActiveSkill(skillsData[skill])}>
                             <span className="skill-icon-wrapper">{getSkillIcon(skill)}</span>
                             {skill}
                             {activeSkill.name === skill && <span className="active-arrow"></span>}
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="desk-category-group">
                    <div className="desk-category">
                       <h4>Tools</h4>
                       {['Git', 'GitHub', 'VS Code', 'Figma'].map(skill => (
                          <div key={skill} className={`desk-skill-item ${activeSkill.name === skill ? 'active' : ''}`} onMouseEnter={() => setActiveSkill(skillsData[skill])} onClick={() => setActiveSkill(skillsData[skill])}>
                             <span className="skill-icon-wrapper">{getSkillIcon(skill)}</span>
                             {skill}
                             {activeSkill.name === skill && <span className="active-arrow"></span>}
                          </div>
                       ))}
                    </div>
                    <div className="desk-category">
                       <h4>Currently Exploring</h4>
                       {['AWS', 'Docker', 'Next.js'].map(skill => (
                          <div key={skill} className={`desk-skill-item ${activeSkill.name === skill ? 'active' : ''}`} onMouseEnter={() => setActiveSkill(skillsData[skill])} onClick={() => setActiveSkill(skillsData[skill])}>
                             <span className="skill-icon-wrapper">{getSkillIcon(skill)}</span>
                             {skill}
                             {activeSkill.name === skill && <span className="active-arrow"></span>}
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Right Panel: Active Documentation */}
              <div className="desk-content" key={activeSkill.name}>
                 <div className="desk-content-header">
                    <h3>{activeSkill.name}</h3>
                    <p className="desk-tagline">{activeSkill.tagline}</p>
                 </div>
                 
                 <div className="desk-divider"></div>

                 <div className="desk-details-grid">
                    <div className="desk-column">
                       <h5 className="desk-section-title">Projects Used In</h5>
                       <ul className="desk-list unstyled">
                          {activeSkill.projects.map(p => (
                             <li key={p}>• {p}</li>
                          ))}
                       </ul>
                    </div>

                    <div className="desk-column">
                       <h5 className="desk-section-title">Comfortable With</h5>
                       <ul className="desk-list">
                          {activeSkill.comfort.map(c => (
                             <li key={c}><CheckCircle size={14} className="check-icon" /> {c}</li>
                          ))}
                       </ul>
                    </div>
                 </div>

                 <div className="desk-divider"></div>

                 <div className="desk-footer">
                    <div>
                       <span className="desk-footer-label">Favorite Part</span>
                       <p className="desk-footer-text">"{activeSkill.favorite}"</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                       <span className="desk-footer-label">Usage</span>
                       <p className="desk-footer-text">Used since {activeSkill.since}</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ABOUT & BLUEPRINT SECTION */}
        <section id="about" className="section-block spacing-top">
           <div className="about-header-main">
              <h2 className="projects-heading">Designing experiences. Engineering solutions. Always learning.</h2>
           </div>
           
           <div className="blueprint-container">
              {/* Left Side: Photo & Bio */}
              <div className="blueprint-bio-panel">
                 <div className="blueprint-image-wrapper">
                    <img src="/profile.jpg" alt="Yasir Hasan" className="blueprint-img" />
                 </div>
                 <p className="blueprint-desc">
                    I'm Yasir Hasan, a Computer Science student specializing in Artificial Intelligence & Machine Learning at ABES Engineering College. I enjoy building full-stack applications that combine clean engineering, practical AI, and intuitive user experiences. Whether it's solving real-world problems through code or refining the details of a product, I'm always focused on building software that's reliable, purposeful, and enjoyable to use.
                 </p>
              </div>

              {/* Right Side: Interactive Blueprint */}
              <div className="blueprint-interactive-panel">
                 <div className="blueprint-sidebar">
                    <h4 className="blueprint-sidebar-title">ABOUT ME</h4>
                    <div className="blueprint-divider"></div>
                    {Object.keys(blueprintData).map(key => (
                       <div 
                          key={key} 
                          className={`blueprint-nav-item ${activeBlueprint.id === key ? 'active' : ''}`}
                          onMouseEnter={() => setActiveBlueprint(blueprintData[key])}
                          onClick={() => setActiveBlueprint(blueprintData[key])}
                       >
                          <span className="bp-icon">{getBlueprintIcon(key)}</span>
                          {key.toUpperCase()}
                       </div>
                    ))}
                 </div>
                 <div className="blueprint-content-area" key={activeBlueprint.id}>
                    <h3 className="bp-content-title">{activeBlueprint.title}</h3>
                    <div className="bp-content-list">
                       {activeBlueprint.items.map((item, idx) => (
                          <div key={idx} className="bp-item-row">
                             {item.label && <span className="bp-item-label">{item.label}</span>}
                             <span className="bp-item-value">{item.value}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section-block spacing-top">
           <div className="contact-shell">
              <div className="contact-grid">
                 
                 {/* Contact Info */}
                 <div className="tech-contact-info">
                    <span className="about-badge">Contact</span>
                    <h2 className="projects-heading">Building software that solves real problems</h2>
                    <p className="contact-lead">
                       I enjoy designing full-stack applications, exploring machine learning, and turning ideas into practical products. Whether it's developing intuitive interfaces or implementing efficient backend logic, I'm always looking to create software that's reliable, scalable, and meaningful.
                    </p>
                    
                    <div className="contact-cards">
                       <div className="contact-mini-card">
                          <span className="contact-label">Email</span>
                          <a href="mailto:yasirhasan1000@gmail.com" className="contact-link">yasirhasan1000@gmail.com</a>
                       </div>
                       <div className="contact-mini-card">
                          <span className="contact-label">Phone</span>
                          <a href="tel:+917234872340" className="contact-link">+91 7234872340</a>
                       </div>
                    </div>

                    <div className="availability-status">
                       <span className="availability-dot"></span> Available for opportunities
                    </div>

                    <div className="social-links-new">
                       <a href="https://www.linkedin.com/in/yasir-hasan-softwareengineer/" target="_blank" rel="noreferrer" className="social-circle"><FaLinkedin size={18} /></a>
                       <a href="https://github.com/YasirH05" target="_blank" rel="noreferrer" className="social-circle"><FaGithub size={18} /></a>
                       <a href="https://www.instagram.com/yasir05_._/" target="_blank" rel="noreferrer" className="social-circle"><FaInstagram size={18} /></a>
                       <a href="https://x.com/Yasir_Hasan786" target="_blank" rel="noreferrer" className="social-circle"><FaTwitter size={18} /></a>
                    </div>
                 </div>

                 {/* Contact Form */}
                 <div className="contact-form-container">
                    <div className="form-header">
                       <span className="about-badge">Send a message</span>
                       <h3>Let's create impactful solutions together</h3>
                    </div>
                    <form className="modern-form" onSubmit={(e) => { e.preventDefault(); setFormStatus('Message sent successfully!'); setTimeout(() => setFormStatus(''), 3000); }}>
                       <input type="text" placeholder="Your name" className="form-input" required />
                       <input type="email" placeholder="Your email" className="form-input" required />
                       <textarea placeholder="Pitch your idea." className="form-textarea" rows="5" required></textarea>
                       <button type="submit" className="btn-primary-new">Send Message</button>
                       {formStatus && <p className="form-success-msg" style={{color: 'var(--accent-primary)', marginTop: '0.5rem', fontWeight: 500}}>{formStatus}</p>}
                    </form>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <footer className="tech-footer-global">
        <div className="footer-top">
           <div className="footer-col brand-col">
              <div className="footer-brand">
                 <span className="footer-name" style={{ fontSize: '1.5rem' }}>Yasir Hasan</span>
              </div>
              <p className="footer-bio">
                 Computer Science Student & Full Stack Developer building scalable applications and intelligent systems.
              </p>
              <div className="footer-availability">
                 <span className="availability-dot-green"></span>
                 Let's Build Something Great
              </div>
           </div>

           <div className="footer-col nav-col">
              <h4 className="footer-heading">Navigation</h4>
              <div className="footer-links">
                 <a href="#about">About</a>
                 <a href="#skills">Skills</a>
                 <a href="#projects">Projects</a>
                 <a href="#experience">Experience</a>
                 <a href="#contact">Contact</a>
              </div>
           </div>

           <div className="footer-col contact-col">
              <h4 className="footer-heading">Get in Touch</h4>
              <div className="footer-contact-links">
                 <a href="mailto:yasirhasan1000@gmail.com"><FaEnvelope /> yasirhasan1000@gmail.com</a>
                 <a href="https://www.linkedin.com/in/yasir-hasan-softwareengineer/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
                 <a href="https://github.com/YasirH05" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                 <a href="https://www.instagram.com/yasir05_._/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
              </div>
           </div>
        </div>
        
        <div className="footer-bottom">
           <p>© 2026 Yasir Hasan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
