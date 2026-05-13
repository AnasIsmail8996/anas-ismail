"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#030014] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A showcase of my recent work across different domains, from e-commerce to AI.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Image Area */}
                <div className="aspect-video relative overflow-hidden bg-zinc-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Replace with <Image /> if you have real assets */}
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-bold border border-blue-500/10">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-zinc-500 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
