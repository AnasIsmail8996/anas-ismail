"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const floatingIcons = [
    { icon: "⚛️", label: "React", delay: 0 },
    { icon: "🟢", label: "Node.js", delay: 1 },
    { icon: "🍃", label: "MongoDB", delay: 2 },
    { icon: "🔥", label: "Firebase", delay: 1.5 },
    { icon: "📘", label: "TypeScript", delay: 0.5 },
    { icon: "🚀", label: "Next.js", delay: 2.5 },
    { icon: "🛠️", label: "Express", delay: 1.2 },
    { icon: "🎨", label: "Tailwind", delay: 1.8 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014] pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/30 rounded-full blur-[128px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-emerald-600/20 rounded-full blur-[128px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for New Projects
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hi, I&apos;m <span className="text-gradient">Anas Ismail</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-zinc-400 mb-8">
              Full Stack <span className="text-zinc-200">MERN Developer</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed">
              Crafting high-performance, scalable web applications with the MERN stack.
              Specializing in building seamless user experiences and robust backend architectures.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:anasismailhz@gmail.com"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-blue-600/20"
              >
                Hire Me
                <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume/anas-resume.pdf"
                download
                className="px-8 py-4 bg-zinc-900/50 hover:bg-zinc-800 text-white border border-zinc-800 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <a
                href="https://github.com/AnasIsmail8996/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-ismail-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@aihzkarachi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-red-500 transition-colors"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Profile Ring Decorations */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/10 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Image Container with Optimized Visibility */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-8 rounded-full p-1.5 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-white/20 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] overflow-hidden group"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#030014]">
                  <Image
                    src="/images/profile/anas_ismail_pic.jfif"
                    alt="Anas Ismail"
                    fill
                    className="object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Reduced Overlay - Only very subtle to maintain face visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/30 to-transparent opacity-40" />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {floatingIcons.map((tech, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: tech.delay,
                    ease: "easeInOut",
                  }}
                  className={`absolute p-3 md:p-4 glass-card rounded-2xl text-xl md:text-2xl shadow-xl shadow-black/50 z-30 flex items-center justify-center ${i > 3 ? "hidden md:flex" : "flex"
                    } ${i === 0 ? "top-0 right-0 md:-top-4 md:-right-4" :
                      i === 1 ? "top-1/3 -right-2 md:top-1/4 md:-right-12" :
                        i === 2 ? "bottom-4 right-0 md:top-2/3 md:-right-8" :
                          i === 3 ? "-bottom-4 left-1/3 md:right-1/4" :
                            i === 4 ? "bottom-0 left-1/4 md:-bottom-4" :
                              i === 5 ? "top-2/3 left-0 md:-left-12" :
                                i === 6 ? "top-1/4 left-0 md:-left-12" :
                                  "top-0 left-0 md:-top-4 md:-left-4"
                    }`}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
