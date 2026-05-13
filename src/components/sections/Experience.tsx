"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer (Freelance)",
      company: "Self-Employed",
      location: "Remote",
      period: "2026 - Delivered in May 2026",
      desc: "Delivering high-quality web solutions for international clients. Specialized in custom MERN applications.",
      type: "Freelance"
    },
    {
      title: "MERN Stack Intern",
      company: "STL Tach",
      location: "Karachi, Pakistan",
      period: "2026 (6 Months)",
      desc: "Collaborated with senior devs to build scalable REST APIs and responsive frontends.",
      type: "Internship"
    },
    {
      title: "Junior Web Developer",
      company: "Klever Media",
      location: "Hybrid",
      period: "2025 - 2026",
      desc: "Developed pixel-perfect landing pages and integrated CMS systems for agency clients.",
      type: "Agency Work"
    },
    {
      title: "Pluton.ltd ",
      company: "Pluton.ltd",
      location: "onsite",
      period: "2023 to 2024 jan",
      desc: "Optimized database queries and implemented JWT-based authentication for a remote team.",
      type: "Internship"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#030014] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/50 via-purple-600/50 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Vertical Line for Mobile */}
                <div className="absolute left-[11px] top-6 bottom-[-3rem] w-0.5 bg-gradient-to-b from-blue-600/50 via-purple-600/50 to-transparent md:hidden" />

                {/* Content Side */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0 pt-6 md:pt-0">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300 group relative">
                    <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                      {exp.type}
                    </div>
                    
                    <div className="flex flex-col gap-2 mb-4 mt-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-500 text-sm">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {exp.company}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {exp.desc}
                    </p>
                    
                    <div className="flex items-center gap-1.5 text-blue-500 text-xs font-semibold">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </div>
                  </div>
                </div>

                {/* Dot in Middle */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-10 md:top-1/2 flex items-center justify-center z-10">
                  <div className="w-6 h-6 rounded-full bg-[#030014] border-4 border-blue-600 shadow-lg shadow-blue-600/50" />
                </div>

                {/* Empty Side for Spacer */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
