import { useState, useEffect } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // For scroll animations and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });

      // Animate elements as they come into view
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <h1 className="logo">
              Apurva
            </h1>
            
            {/* Mobile menu button */}
            <div className="mobile-menu-button">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-button"
              >
                <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="desktop-nav">
              {['home', 'about', 'projects', 'hackathons', 'achievements', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <ul className="mobile-nav-list">
              {['home', 'about', 'projects', 'hackathons', 'achievements', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`mobile-nav-link ${activeSection === item ? 'active' : ''}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Home Section */}
        <section id="home" className="home-section">
          <div className="gradient-bg">
            <div className="gradient-circle top-left"></div>
            <div className="gradient-circle bottom-right"></div>
          </div>
          
          <div className="section-container">
            <div className="home-content">
              <div className="home-text reveal">
                <h1 className="home-title">
                  Hi, I'm <span className="gradient-text">Apurva</span> 👋
                </h1>
                <p className="home-subtitle">
                  Developer, AI enthusiast, and Lifelong Learner
                </p>
                <p className="home-description">
                  with a passion for building innovative solutions
                </p>
                <div className="button-group">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="primary-button"
                  >
                    View My Work
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="secondary-button"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
              
              <div className="home-image reveal">
                <div className="profile-container">
                  {/* Profile image - replace with your actual photo */}
                  <div className="profile-image">
                    <img 
                      src="image54.jpg" 
                      alt="Apurva's Profile" 
                    />
                  </div>
                  
                  {/* Floating tech icons */}
                  <div className="floating-icon icon-top animation-float-slow">
                    <span>🚀</span>
                  </div>
                  <div className="floating-icon icon-left animation-float">
                    <span>💻</span>
                  </div>
                  <div className="floating-icon icon-bottom animation-float-fast">
                    <span>🤖</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="section-container">
            <h2 className="section-title reveal">
              About <span className="highlight">Me</span>
            </h2>
            
            <div className="about-content">
              <div className="about-text reveal">
                <p>
                  I'm Apurva, a passionate web developer and AI enthusiast currently pursuing B.Tech in Mechanical Engineering (2022–2026) at Mahatma Gandhi Shikshan Sansthan, Bihar. I love building real-world full-stack applications and exploring the intersection of AI with web development.
                </p>
              </div>
              
              <div className="skills-container">
                <div className="skill-card reveal">
                  <h3 className="skill-title">
                    <span className="skill-icon">💻</span> Technical Skills
                  </h3>
                  <ul className="skill-list">
                    <li>
                      <span className="bullet"></span>
                      <strong>Languages:</strong> Java, Python, JavaScript
                    </li>
                    <li>
                      <span className="bullet"></span>
                      <strong>Web:</strong> HTML, CSS, React, Node.js, Express, MongoDB, WebSockets
                    </li>
                    <li>
                      <span className="bullet"></span>
                      <strong>AI & ML:</strong> NLP, LLMs, Hugging Face, DeepSeek AI, Gemini Models
                    </li>
                    <li>
                      <span className="bullet"></span>
                      <strong>Tools:</strong> Flask, FastAPI, Docker, Git, Prisma, REST APIs
                    </li>
                    <li>
                      <span className="bullet"></span>
                      <strong>Coursework:</strong> OOPS, DBMS, OS, CN, ML, DL
                    </li>
                  </ul>
                </div>
                
                <div className="skill-card reveal">
                  <h3 className="skill-title">
                    <span className="skill-icon">🎯</span> Interests
                  </h3>
                  <div className="interest-tags">
                    {['Large Language Models (LLMs)', 'Natural Language Processing', 'AI-Powered Applications', 'Hackathons & Tech Events', 'Backend Development'].map((interest, index) => (
                      <span 
                        key={index}
                        className="interest-tag"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="about-cta reveal">
                <p>
                  I'm always open to collaborations and internships in AI/ML and web development. Let's build something impactful together!
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="primary-button"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-container">
            <h2 className="section-title reveal">
              My <span className="highlight">Projects</span>
            </h2>
            
            <div className="projects-grid">
              {[
                {
                  title: "RehearseAI",
                  description: "Used Whisper API & ElevenLabs for real-time rehearsal with speech-to-text, TTS, and emotion-based delivery.",
                  icon: "🎙️",
                  color: "blue"
                },
                {
                  title: "TaskLokr",
                  description: "Productivity Chrome extension with focus mode, AI analysis, Notion + Google Calendar sync.",
                  icon: "⏱️",
                  color: "purple"
                },
                {
                  title: "DeepShield",
                  description: "AI-based fake news + deepfake detector using NLP, CNNs and GANs.",
                  icon: "🛡️",
                  color: "green"
                }
              ].map((project, index) => (
                <div 
                  key={index}
                  className={`project-card ${project.color} reveal`}
                >
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-buttons">
                    <button className="demo-button">
                      Demo
                    </button>
                    <button className="source-button">
                      Source Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hackathons Section */}
        <section id="hackathons" className="hackathons-section">
  <div className="section-container">
    <h2 className="section-title reveal">
      Hackathon <span className="highlight">Accomplishments</span>
    </h2>

    <div className="hackathons-grid">
      {[
        {
          title: "Hackverse 2.0",
          award: "Winner - Medical Track",
          contribution: "Built AI-powered chatbot for healthcare with image processing, report analysis, and conversational AI.",
          image: "image2.jpg"
        },
        {
          title: "Codezen",
          award: "Top 10 Finalist",
          contribution: "Led backend development and integrated ML model for real-time classification.",
          image: "image4.jpg"
        },
        {
          title: "Technoxian World cup",
          
          contribution: "optimizing our robot's speed and efficiency using a combination of algorithms",
          image: "image1.jpg"
        },
        {
          title: "Chikitsa",
          award: "Special Mention",
          contribution: "Worked as a prompt engineer traing the chatbot to respond to user queries",
          image: "image10.jpg"
        },
         {
          title: "Vihaan 007",
          contribution: "Worked as Training the NLP",
          image: "image-2.jpg"
        },
           {
          title: "colabcube 3.0",
          contribution: "Worked as a frontend engineer",
          image: "image.png"
        }



      ].map((hackathon, index) => (
        <div key={index} className="hackathon-card reveal">
          <div className="hackathon-header">
            <div className="hackathon-title-area">
              <h3 className="hackathon-title">{hackathon.title}</h3>
              <span className="hackathon-award">{hackathon.award}</span>
            </div>
            <div className="trophy-icon">🏆</div>
          </div>

          <div className="hackathon-image">
            <img src={hackathon.image} alt={hackathon.title} />
          </div>

          <p className="hackathon-contribution">{hackathon.contribution}</p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Achievements Section */}
        <section id="achievements" className="achievements-section">
          <div className="section-container">
            <h2 className="section-title reveal">
              <span className="highlight">Achievements</span> & Certifications
            </h2>
            
            <div className="timeline-container">
              {/* Timeline line */}
              <div className="timeline-line"></div>
              
              {/* Timeline items */}
              <div className="timeline-items">
                {[
                  {
                    title: "LLM Applications Engineer",
                    organization: "Certification by DeepLearning.AI",
                    date: "March 2025",
                    description: "Specialized in building and deploying production-ready applications with Large Language Models"
                  },
                  {
                    title: "Hackathon Winner",
                    organization: "Hackverse 2.0",
                    date: "November 2024",
                    description: "First place in the Medical Track for AI-powered healthcare chatbot"
                  },
                  {
                    title: "Top Contributor",
                    organization: "Open Source Project XYZ",
                    date: "August 2024",
                    description: "Recognized for significant contributions to an open-source LLM framework"
                  },
                  {
                    title: "Web Development Bootcamp",
                    organization: "Full Stack Academy",
                    date: "May 2024",
                    description: "Completed intensive course on modern web development technologies"
                  }
                ].map((achievement, index) => (
                  <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} reveal`}>
                    {/* Circle marker */}
                    <div className="timeline-marker"></div>
                    
                    {/* Content box */}
                    <div className="timeline-content">
                      <span className="timeline-date">
                        {achievement.date}
                      </span>
                      <h3 className="timeline-title">{achievement.title}</h3>
                      <h4 className="timeline-organization">{achievement.organization}</h4>
                      <p className="timeline-description">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-container">
            <h2 className="section-title reveal">
              Get In <span className="highlight">Touch</span>
            </h2>
            
            <div className="contact-container">
              <div className="contact-info reveal">
                <h3 className="contact-heading">Let's Connect</h3>
                <p className="contact-description">
                  Feel free to reach out for collaborations, project inquiries, or just to say hello! I'll get back to you as soon as possible.
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <span>📧</span>
                    </div>
                    <div className="contact-text">
                      <p className="contact-label">Email</p>
                      <p className="contact-value">kanthapurva655@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <span>📱</span>
                    </div>
                    <div className="contact-text">
                      <p className="contact-label">Phone</p>
                      <p className="contact-value">+91 8076475232</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <span>📍</span>
                    </div>
                    <div className="contact-text">
                      <p className="contact-label">Location</p>
                      <p className="contact-value">Bihar, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <h4 className="social-heading">Follow Me:</h4>
                  <div className="social-icons">
                    {['github', 'linkedin', 'twitter', 'instagram'].map((platform) => (
                      <a 
                        key={platform}
                        href="#"
                        className="social-icon"
                      >
                        {platform === 'github'  && '👨‍💻'}
                        {platform === 'linkedin' && '🔗'}
                        {platform === 'twitter' && '🐦'}
                        {platform === 'instagram' && '📸'}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container reveal">
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Project Inquiry"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Your message here..."
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="submit-button"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2 className="logo">
                Apurva
              </h2>
              <p className="footer-tagline">Developer, Creator, and Lifelong Learner</p>
            </div>
            
            <div className="footer-copyright">
              <p>© 2025 Apurva. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
