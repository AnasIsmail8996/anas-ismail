"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Settings, 
  Layout, 
  Layers, 
  ShieldCheck,
  Terminal,
  Cpu,
  Globe,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      skills: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", 
        "Tailwind CSS", "Bootstrap", "Material UI", "Shadcn UI", "Framer Motion"
      ],
      color: "blue"
    },
    {
      title: "Backend & Logic",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: [
        "Node.js", "Express.js", "REST API", "JWT Auth", "OAuth", "Socket.io", 
        "MVC Architecture", "Middleware", "RBAC", "Axios", "React Query", "Redux Toolkit", "Context API"
      ],
      color: "purple"
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      skills: [
        "MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Firebase", "Redis", 
        "Aggregation Pipeline", "Indexing", "Database Design"
      ],
      color: "emerald"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      skills: [
        "AWS (EC2, S3, IAM, CloudFront, Route 53, Lightsail)", "Nginx", "PM2", 
        "Linux Server", "CI/CD", "GitHub Actions", "Docker", "Docker Compose"
      ],
      color: "sky"
    },
    {
      title: "Tools & Professional",
      icon: <Settings className="w-6 h-6 text-zinc-400" />,
      skills: [
        "Git", "GitHub", "GitLab", "Postman", "VS Code", "Figma", "Jira", "Trello", 
        "npm", "yarn", "pnpm"
      ],
      color: "zinc"
    },
    {
      title: "Deployment & Hosting",
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      skills: [
        "Vercel", "Netlify", "Render", "Railway", "Server Deployment", "SSL Setup", "Env Management"
      ],
      color: "amber"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A comprehensive list of technologies and tools I master to build production-ready applications.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-zinc-900/50 text-zinc-400 text-xs font-medium border border-white/5 hover:border-blue-500/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
