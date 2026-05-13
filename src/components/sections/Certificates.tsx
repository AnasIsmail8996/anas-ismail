"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "MERN Stack Development",
    organization: "Saylani Mass IT Training (SMIT)",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop", // Placeholder image
    skills: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://drive.google.com/file/d/1TdM3P3tpo3MEskgsEQ2viklH1-3Kx2M2/view?usp=sharing",
    featured: true,
  },
  {
    id: 2,
    title: "Responsive Web Design",
    organization: "Free CodeCamp",
    date: "january 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    link: "https://www.freecodecamp.org/certification/anasismail/responsive-web-design",
    featured: true,
  },
  {
    id: 3,
    title: "AWS Cloud / EC2 Deployment",
    organization: "Saylani Mass IT Training (SMIT)",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    skills: ["EC2", "S3", "Route 53", "Linux Server"],
    link: "https://drive.google.com/file/d/1TdM3P3tpo3MEskgsEQ2viklH1-3Kx2M2/view?usp=sharing",
    featured: false,
  },
  {
    id: 4,
    title: "DevOps Fundamentals",
    organization: "Saylani Mass IT Training (SMIT)",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Nginx"],
    link: "https://drive.google.com/file/d/1TdM3P3tpo3MEskgsEQ2viklH1-3Kx2M2/view?usp=sharing",
    featured: false,
  },
  {
    id: 5,
    title: "REST API Development",
    organization: "Saylani Mass IT Training (SMIT)",
    date: "Mar 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    skills: ["API Design", "JWT Auth", "PostgreSQL", "Swagger"],
    link: "https://drive.google.com/file/d/1TdM3P3tpo3MEskgsEQ2viklH1-3Kx2M2/view?usp=sharing",
    featured: false,
  },
  {
    id: 6,
    title: "  AI Integration & Prompt Engineering",
    organization: "Saylani Mass IT Training (SMIT)",
    date: "Apr 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    skills: ["OpenAI API", "LangChain", "Prompt Design", "AI Agents"],
    link: "https://drive.google.com/file/d/1TdM3P3tpo3MEskgsEQ2viklH1-3Kx2M2/view?usp=sharing",
    featured: true,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            Continuous Learning
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Certificates & <span className="text-gradient">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            A showcase of my professional certifications, continuous skill development, and technical achievements in the software engineering domain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20 backdrop-blur-md border border-white/20">
                  Featured
                </div>
              )}

              {/* Image Preview Container */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-900 border-b border-white/5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90" />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1 relative z-10 -mt-10">
                {/* Organization Logo/Icon Placeholder */}
                <div className="w-12 h-12 rounded-xl bg-[#030014] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative z-20 group-hover:border-blue-500/30 transition-colors">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-6 border-b border-white/5 pb-4">
                    <p className="text-zinc-400 text-sm font-medium break-words">{cert.organization}</p>
                    <div className="flex items-center gap-1.5 text-zinc-500 text-xs shrink-0">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold mb-3">Skills Assessed</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/5 border border-blue-500/10 text-zinc-300 text-xs font-medium">
                          <CheckCircle2 className="w-3 h-3 text-blue-500" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Button */}
                <a
                  href={cert.link}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-blue-600 text-white text-sm font-semibold transition-all duration-300 border border-white/5 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/25 group/btn"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
