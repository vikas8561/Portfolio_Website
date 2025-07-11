import React, { useState, useEffect } from "react";
import "./App.css";
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Referral Management System",
    description: "A comprehensive system for managing referrals with advanced tracking and analytics features. Built with modern web technologies for seamless user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://referral-management-system-6x2a.vercel.app/",
    github: "https://github.com/vikas8561/referral-management-system",
    icon: <Database className="project-icon" />,
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "StoreFlick (Ecommerce Application)",
    description: "A full-featured ecommerce platform with product catalog, shopping cart, payment integration, and admin dashboard for complete online store management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://store-flick-6qkr.vercel.app/",
    github: "https://github.com/vikas8561/StoreFlick",
    icon: <Globe className="project-icon" />,
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "ZEESH (Restaurant Reservation)",
    description: "An elegant restaurant reservation system with table management, booking calendar, and customer management features for modern dining establishments.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://restaurant-reservation-5ky4.vercel.app/",
    github: "https://github.com/vikas8561/restaurantReservation",
    icon: <Code className="project-icon" />,
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
];

const skills = [
  { name: "React", level: 90, color: "#61dafb" },
  { name: "Node.js", level: 85, color: "#68a063" },
  { name: "Express.js", level: 80, color: "#000000" },
  { name: "MongoDB", level: 85, color: "#4db33d" },
  { name: "JavaScript", level: 90, color: "#f7df1e" },
  { name: "TypeScript", level: 75, color: "#3178c6" },
  { name: "HTML", level: 95, color: "#e34f26" },
  { name: "CSS", level: 90, color: "#1572b6" },
  { name: "Java", level: 80, color: "#ed8b00" },
  { name: "Git", level: 85, color: "#f05032" },
  { name: "API Development", level: 85, color: "#6c757d" },
  { name: "Data Structures", level: 80, color: "#17a2b8" },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Poornima College Of Engineering",
    year: "2019-2023",
    description: "Graduated with strong foundation in computer science fundamentals"
  },
  {
    degree: "Software Development",
    institution: "Masai School",
    year: "2024-2025",
    description: "Intensive full-stack development bootcamp with industry projects"
  },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Sticky Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="logo-text">VK</span>
          </motion.div>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${menuOpen ? "active" : ""}`}></span>
          </div>
          
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "education", label: "Education" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <motion.li key={item.id} whileHover={{ scale: 1.1 }}>
                <a
                  href={`#${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={activeSection === item.id ? "active" : ""}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
            
            <motion.li whileHover={{ scale: 1.1 }}>
              <a
                href="https://drive.google.com/file/d/190UkCRZRWlgfx7jD7kMidyIRACJATrgB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.nav>

      <div className="container">
        {/* Hero Section */}
        <motion.section 
          id="home" 
          className="hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content">
            <motion.div
              className="profile-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/vikas.jpg" alt="Vikas Kumar" className="profile-pic" />
              <div className="profile-glow"></div>
            </motion.div>
            
            <motion.h1
              className="hero-title"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 12,
                damping: 12,
                duration: 2,
              }}
            >
              Hi, I'm <span className="highlight">Vikas Kumar</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 12,
                damping: 12,
                duration: 2,
                delay: 0.3,
              }}
            >
              Full Stack Developer & Software Engineer
            </motion.p>
            
            <motion.div
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p>
                Passionate about creating innovative web applications and turning ideas into reality through code.
                Specialized in MERN stack development with a keen eye for user experience and modern design.
              </p>
            </motion.div>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </motion.button>
              <motion.button
                className="cta-button secondary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="about-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I am a software developer with a growing passion for web development and hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js). I've also worked with Angular and .NET Core, building and learning through projects that have helped me strengthen my understanding of both front-end and back-end development.
              </p>
              <p>
                I'm eager to grow, learn from seasoned professionals, and contribute to meaningful projects. I enjoy tackling challenges, improving my coding skills, and building applications that make a difference.
              </p>
            </motion.div>
            
            <motion.div
              className="about-stats"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="stat-item">
                <h3>3+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>6+</h3>
                <p>Months Experience</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="skills-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education" 
          className="education-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          
          <div className="education-timeline">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="education-card"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="education-icon">
                  <div className="icon-circle">🎓</div>
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="projects-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="project-card"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div 
                  className="project-header"
                  style={{ background: project.color }}
                >
                  <div className="project-icon-container">
                    {project.icon}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="contact-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
            </p>
            
            <div className="social-links">
              <motion.a
                href="https://github.com/vikas8561"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
                <span>GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/vikas-kumar-2304a92a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="mailto:vikas12252@gmail.com"
                className="social-link email"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
                <span>Email</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Vikas Kumar. All rights reserved.</p>
        </motion.footer>
      </div>
    </>
  );
};

export default App;
