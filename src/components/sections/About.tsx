"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Target, 
  Code2, 
  Database, 
  Layout, 
  Server, 
  ShieldCheck, 
  Smartphone,
  Cpu,
  Globe,
  Settings
} from "lucide-react";
import SkillCard from "../ui/SkillCard";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const experiencePoints = [
    { icon: <Layout className="w-5 h-5" />, title: "MERN Stack Projects", desc: "Building full-cycle applications from concept to deployment." },
    { icon: <Server className="w-5 h-5" />, title: "REST API Development", desc: "Architecting secure and scalable backend services with Express." },
    { icon: <Smartphone className="w-5 h-5" />, title: "Responsive UI", desc: "Crafting pixel-perfect, mobile-first interfaces with Tailwind CSS." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Auth Systems", desc: "Implementing robust JWT and OAuth authentication workflows." },
  ];

  return (
    <section id="about" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A passionate Full Stack MERN Developer dedicated to building scalable, high-performance web applications 
              with clean code and user-centric design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* 1. Professional Intro & Experience */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-12">
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <User className="text-blue-500" />
                  Professional Profile
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  I specialize in the <span className="text-white font-semibold">MERN stack</span>, creating robust 
                  digital solutions that bridge the gap between complex backend logic and intuitive frontend 
                  experiences. My focus is on writing <span className="text-blue-400">scalable, maintainable code</span> 
                  and staying at the forefront of modern web technologies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experiencePoints.map((point, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{point.title}</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Career Goals */}
              <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 backdrop-blur-2xl relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target className="w-48 h-48 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-amber-500" />
                  Career Goals
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  {[
                    "Expert Full Stack Engineer",
                    "Build Scalable SaaS Apps",
                    "Master Cloud & DevOps",
                    "AI-Powered Application Dev"
                  ].map((goal, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 3. Skills Summary */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Cpu className="text-emerald-500" />
                Technical Arsenal
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <SkillCard name="React.js" icon={<Layout />} level="Expert" color="#61DAFB" />
                <SkillCard name="Next.js" icon={<Globe />} level="Expert" color="#FFFFFF" />
                <SkillCard name="Node.js" icon={<Server />} level="Expert" color="#339933" />
                <SkillCard name="MongoDB" icon={<Database />} level="Advanced" color="#47A248" />
                <SkillCard name="TypeScript" icon={<Code2 />} level="Advanced" color="#3178C6" />
                <SkillCard name="Tailwind" icon={<Layout />} level="Expert" color="#06B6D4" />
                <SkillCard name="GitHub" icon={<Settings />} level="Advanced" color="#FFFFFF" />
                <SkillCard name="REST APIs" icon={<Cpu />} level="Expert" color="#FF6C37" />
              </div>
              
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mt-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-zinc-400" />
                  Tools I Use
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["VS Code", "Postman", "Git", "Figma", "Docker", "Vercel", "npm"].map(tool => (
                    <span key={tool} className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-xs border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
