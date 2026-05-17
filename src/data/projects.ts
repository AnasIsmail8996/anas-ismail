export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  githubRepo: string;
  features: string[];
  category: "E-commerce" | "Post Shered App" | "Banking System" | "AI App" | "Dashboard" | "Furniture Website" | "Complaint System" | "Healthcare";
}

export const projects: Project[] = [
  {
    id: "0",
    title: "Social Media App",
    description: "A powerful Object-Relational Mapping system for advanced e-commerce data management and synchronization.",
    image: "/images/projects/social-media-.jpg",
    techStack: ["React", "Node.js", "Material UI", "Redux"],
    liveDemo: "https://armsoft-front-end.vercel.app/",
    githubRepo: "https://github.com/AnasIsmail8996/armsoft-front-end",
    features: ["Data Mapping", "Inventory Sync", "Advanced Filtering", "Performance Optimized"],

    category: "Post Shered App",
  },
  {
    id: "1",
    title: "E-commerce ORM System",
    description: "A powerful Object-Relational Mapping system for advanced e-commerce data management and synchronization.",
    image: "/images/projects/hero_section_image.png",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveDemo: "https://orm-system-gamma.vercel.app/",
    githubRepo: "https://github.com/AnasIsmail8996/ORM_Systems",
    features: ["Data Mapping", "Inventory Sync", "Advanced Filtering", "Performance Optimized"],
    category: "E-commerce",
  },
  {
    id: "2",
    title: "MediCal  App",
    description: "A specialized healthcare platform designed for efficient patient data management and medical service coordination.",
    image: "/images/projects/medicam-img.avif",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://medical-alpha-nine.vercel.app/",
    githubRepo: "https://github.com/AnasIsmail8996/hacktheon",
    features: ["Patient Records", "Appointment Scheduling", "Medical Inventory", "Secure Data Handling"],
    category: "Healthcare",
  },
  {
    id: "4",
    title: "AI Smart Dashboard",
    description: "An advanced administrative panel featuring AI-driven analytics and real-time data visualization.",
    image: "/images/projects/dashboard.jpg",
    techStack: ["Next.js", "Chart.js", "Firebase", "Tailwind"],
    liveDemo: "https://ai-dashboard-bice-five.vercel.app/",
    githubRepo: "https://github.com/AnasIsmail8996/hacktheon/tree/main/admin",
    features: ["Real-time Analytics", "Data Visualization", "User Management", "AI Insights"],
    category: "Dashboard",
  },
  {
    id: "5",
    title: "Furniture",
    description: "A high-end furniture website showcasing luxury home decor.",
    image: "/images/projects/furniture.jpg",
    techStack: ["React", "Framer Motion", "Three.js", "Tailwind"],
    liveDemo: "https://anas-furniture.netlify.app/",
    githubRepo: "https://github.com",
    features: ["3D Product Previews", "Masonry Layout", "Interactive Gallery", "Booking System"],
    category: "Furniture Website",
  },
];
