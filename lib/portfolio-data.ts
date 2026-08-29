// ============================================================================
// EDIT ALL PERSONAL INFORMATION HERE
// Replace the placeholder URLs (in ALL_CAPS) with your real links.
// ============================================================================

export const GITHUB_PROFILE_URL = "GITHUB_PROFILE_URL"
export const LINKEDIN_URL = "LINKEDIN_URL"
export const EMAIL_ADDRESS = "EMAIL_ADDRESS"
export const RESUME_URL = "RESUME_URL"

export const GITHUB_PROJECT_1_URL = "GITHUB_PROJECT_1_URL"
export const GITHUB_PROJECT_2_URL = "GITHUB_PROJECT_2_URL"
export const GITHUB_PROJECT_3_URL = "GITHUB_PROJECT_3_URL"

export const profile = {
  name: "Ayush Raj",
  role: "AI/ML Student & Aspiring Software Engineer",
  roleLong: "B.Tech CSE – AI & ML Student | Aspiring AI/ML Engineer",
  university: "Lovely Professional University",
  education: "B.Tech Computer Science Engineering – Artificial Intelligence & Machine Learning",
  academicPeriod: "2025–2029",
  cgpa: "7.0",
  location: "India",
  statusBadge: "Open to Learning & Opportunities",
  intro:
    "Hi, I'm Ayush Raj — a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning. I enjoy building practical technology projects, solving problems with code, and continuously improving my skills to become a strong software and AI engineer.",
}

export const about = {
  paragraph:
    "I'm a B.Tech Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at Lovely Professional University. I focus on building practical projects, strengthening my fundamentals, and learning the tools that turn ideas into working software.",
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "IoT",
    "Problem Solving",
    "Data Structures & Algorithms",
    "Web Development",
  ],
  stats: [
    { value: "2025–2029", label: "B.Tech Journey" },
    { value: "3+", label: "Projects" },
    { value: "AI & ML", label: "Specialization" },
    { value: "Always Learning", label: "Mindset" },
  ],
}

export const educationTimeline = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech – Computer Science Engineering (AI & ML)",
    period: "2025–2029",
    detail: "Current CGPA: 7.0",
    type: "education" as const,
  },
  {
    institution: "Dean's List",
    degree: "Academic Recognition",
    period: "2025",
    detail: "Recognized for academic performance.",
    type: "achievement" as const,
  },
]

export const skillGroups = [
  {
    category: "Programming",
    skills: ["C++", "C", "Python", "JavaScript"],
  },
  {
    category: "AI & ML",
    skills: ["Machine Learning", "Artificial Intelligence", "Data Analysis", "Python for AI/ML"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "IoT"],
  },
]

export const projects = [
  {
    title: "IoT Home Automation Voice Control System",
    description:
      "An IoT-based home automation project that allows users to control connected home appliances using voice commands. The project focuses on combining IoT concepts with voice-based interaction to create a convenient smart-home experience.",
    features: ["Voice-based appliance control", "IoT integration", "Smart home automation", "Real-time device interaction"],
    technologies: ["IoT", "Python", "Voice Recognition"],
    github: GITHUB_PROJECT_1_URL,
    demo: null as string | null,
  },
  {
    title: "Fake News Detection System",
    description:
      "A machine-learning-based project designed to analyze news content and classify information as potentially fake or genuine. The project explores text processing, machine learning concepts and automated classification.",
    features: ["Text analysis", "Machine learning classification", "Fake-news detection", "Data preprocessing"],
    technologies: ["Python", "Machine Learning", "NLP"],
    github: GITHUB_PROJECT_2_URL,
    demo: null as string | null,
  },
  {
    title: "Collaborative Online Notepad",
    description:
      "A collaborative online notepad project designed to allow users to create and work with notes through a web-based interface. The project demonstrates web development, collaboration concepts and GitHub-based development.",
    features: ["Web-based interface", "Collaborative notes", "Real-time editing", "GitHub-based development"],
    technologies: ["JavaScript", "HTML", "CSS"],
    github: GITHUB_PROJECT_3_URL,
    demo: null as string | null,
  },
]

export const learning = [
  "Building practical AI/ML projects",
  "Developing IoT-based applications",
  "Practicing programming and DSA",
  "Learning Git and GitHub",
  "Developing web applications",
  "Preparing for software engineering and AI/ML opportunities",
]

export const achievements = [
  {
    title: "Dean's List",
    year: "2025",
    description: "Recognized for strong academic performance in the first year of the B.Tech program.",
  },
]

// Add your real activities here later — placeholders provided.
export const extraCurricular = [
  { title: "Activity Placeholder", description: "Add one of your extra-curricular activities here." },
  { title: "Activity Placeholder", description: "Add one of your extra-curricular activities here." },
  { title: "Activity Placeholder", description: "Add one of your extra-curricular activities here." },
]

export const certifications = [
  {
    name: "Introduction to Cyber Security",
    issuer: "Infosys Springboard",
    year: "2026",
    file: "/certificates/intro-to-cyber-security.pdf",
  },
  {
    name: "CyberSmart",
    issuer: "Cyber Security Program",
    year: "2026",
    file: "/certificates/cybersmart.pdf",
  },
  {
    name: "Cyber Security Certification",
    issuer: "Cyber Security Program",
    year: "2026",
    file: "/certificates/certificate-3.pdf",
  },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]
