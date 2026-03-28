// Site Configuration
// Varun Teja Portfolio - AI & ML Student

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Varun Teja | AI & ML Student",
  siteDescription: "Portfolio of AILI VARUN TEJA - B.Tech student specializing in Artificial Intelligence & Machine Learning at Kamala Institute of Technology and Science.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "AI & ML",
  heroImage: "/profile-photo.png",
  heroImageAlt: "Varun Teja - AI & ML Student",
  overlayText: "Building the Future with Code",
  brandName: "VARUN TEJA",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section (About Me)
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Passionate About",
  titleLine2: "AI & Innovation",
  description: "Highly motivated B.Tech student specializing in Artificial Intelligence and Machine Learning, seeking internship or entry-level opportunities to apply skills in Python, AI, and Web Development. Passionate about solving real-world problems and contributing to innovative projects.",
  portfolioImages: [
    { src: "/portfolio-1.jpg", alt: "AI Neural Network Visualization" },
    { src: "/portfolio-2.jpg", alt: "Python Programming" },
    { src: "/portfolio-3.jpg", alt: "Web Development Workspace" },
    { src: "/portfolio-4.jpg", alt: "Hackathon Collaboration" },
    { src: "/portfolio-5.jpg", alt: "Data Visualization Dashboard" },
  ],
  accentText: "B.Tech AIML Student - 2024",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Work",
  titleRegular: "My",
  titleItalic: "Projects",
  viewAllText: "View All Projects",
  viewAllHref: "https://github.com/0varunsunny0",
  viewProjectText: "View Project",
  projects: [
    {
      id: 1,
      title: "College Academic Project",
      category: "Academic",
      year: "2024",
      image: "/project-1.jpg",
      description: "Developed an academic project applying programming concepts and logical problem-solving techniques. Demonstrated strong understanding of software development principles and collaborative teamwork.",
    },
    {
      id: 2,
      title: "Hackathon Web Solution",
      category: "Hackathon",
      year: "2024",
      image: "/project-2.jpg",
      description: "Built a web-based solution using AI-assisted development tools in a team environment. Leveraged modern web technologies and AI tools to create an innovative solution under time constraints.",
    },
  ],
};

// Services Section (Skills)
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What I Offer",
  titleLine1: "Technical",
  titleLine2Italic: "Skills",
  description: "A comprehensive skill set in AI, Machine Learning, and Web Development with hands-on experience in modern technologies and tools.",
  services: [
    {
      iconName: "Sparkles",
      title: "AI & Machine Learning",
      description: "Fundamentals of Artificial Intelligence and Machine Learning algorithms, neural networks, and data analysis techniques.",
    },
    {
      iconName: "Diamond",
      title: "Python Programming",
      description: "Proficient in Python with experience in data processing, automation, and building AI-powered applications.",
    },
    {
      iconName: "Camera",
      title: "Web Development",
      description: "HTML, CSS, JavaScript for building responsive and interactive web applications with modern best practices.",
    },
    {
      iconName: "Users",
      title: "Problem Solving",
      description: "Strong analytical thinking and team collaboration skills with experience in agile development environments.",
    },
  ],
};

// Why Choose Me Section (Education & Stats)
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Education & Experience",
  titleRegular: "Why Choose",
  titleItalic: "Me",
  statsLabel: "By The Numbers",
  stats: [
    { value: 2, suffix: "+", label: "Projects Completed" },
    { value: 1, suffix: "", label: "Hackathon Participated" },
    { value: 5, suffix: "+", label: "Technical Skills" },
    { value: 100, suffix: "%", label: "Commitment" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "AI Machine Learning",
      title: "AI & ML Expertise",
      description: "Strong foundation in artificial intelligence and machine learning concepts with practical project experience.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "Web Development",
      title: "Full-Stack Capabilities",
      description: "Proficient in modern web development technologies including HTML, CSS, JavaScript, and AI-assisted tools.",
    },
  ],
  wideImage: "/wide-image.jpg",
  wideImageAlt: "Modern Tech Workspace",
  wideTitle: "Continuous Learning",
  wideDescription: "Always exploring new technologies and staying updated with the latest trends in AI and software development.",
};

// Testimonials Section (Achievements)
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Achievements",
  titleRegular: "My",
  titleItalic: "Journey",
  testimonials: [
    {
      id: 1,
      name: "Technical Hackathon",
      role: "Participant",
      image: "/testimonial-1.jpg",
      quote: "Participated in a Technical Hackathon where I collaborated with a team to build an innovative web-based solution using AI-assisted development tools. This experience enhanced my problem-solving skills and ability to work under pressure.",
    },
    {
      id: 2,
      name: "AI-Assisted Development",
      role: "Hands-on Experience",
      image: "/portfolio-3.jpg",
      quote: "Gained hands-on experience in AI-assisted Web Development tools, learning how to leverage modern AI technologies to accelerate development workflows and create more efficient solutions.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently Asked",
  titleItalic: "Questions",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "1",
      question: "What is your educational background?",
      answer: "I am currently pursuing B.Tech in Artificial Intelligence & Machine Learning (AIML) at Kamala Institute of Technology and Science. My coursework includes programming, data structures, algorithms, machine learning, and web development.",
    },
    {
      id: "2",
      question: "What programming languages do you know?",
      answer: "I am proficient in Python, which I use for AI/ML projects and automation. I also have strong skills in HTML, CSS, and JavaScript for web development. I'm continuously learning new technologies and frameworks.",
    },
    {
      id: "3",
      question: "What kind of projects have you worked on?",
      answer: "I have worked on academic projects applying programming concepts and logical problem-solving techniques. I also participated in a hackathon where I built a web-based solution using AI-assisted development tools in a collaborative team environment.",
    },
    {
      id: "4",
      question: "Are you looking for internship opportunities?",
      answer: "Yes! I am actively seeking internship or entry-level opportunities where I can apply my skills in Python, AI, and Web Development. I'm passionate about solving real-world problems and contributing to innovative projects.",
    },
    {
      id: "5",
      question: "How can I contact you?",
      answer: "You can reach me via email at varuntejsunny075@gmail.com or call me at +91 9347987004. You can also connect with me on LinkedIn or check out my projects on GitHub.",
    },
  ],
};

// Footer Section (Contact)
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "VARUN",
  contactLabel: "Get in Touch",
  email: "varuntejsunny075@gmail.com",
  locationText: "Kamala Institute of Technology and Science\nTelangana, India",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],
  socialLabel: "Connect With Me",
  socialLinks: [
    { iconName: "Linkedin", href: "https://linkedin.com/in/varun-tej-sunny-018969352", label: "LinkedIn" },
    { iconName: "Twitter", href: "https://github.com/0varunsunny0", label: "GitHub" },
    { iconName: "Mail", href: "mailto:varuntejsunny075@gmail.com", label: "Email" },
  ],
  tagline: "Building the future with AI & Code\nLet's create something amazing together",
  copyright: "© 2024 Varun Teja. All rights reserved.",
  bottomLinks: [
    { label: "GitHub", href: "https://github.com/0varunsunny0" },
    { label: "LinkedIn", href: "https://linkedin.com/in/varun-tej-sunny-018969352" },
  ],
};
