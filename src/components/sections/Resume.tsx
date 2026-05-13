"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl p-12 md:p-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-3xl bg-blue-600/10 flex items-center justify-center text-blue-500 mx-auto mb-8">
              <FileText className="w-10 h-10" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Download My <span className="text-gradient">Resume</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
              Interested in working together? Get a detailed look at my professional journey, 
              skills, and achievements by downloading my curriculum vitae.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left max-w-md mx-auto">
              {["Full Stack MERN Expertise", "Clean Code Architecture", "Responsive UI Design", "Database Optimization"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="/resume/anas-resume.pdf" 
              download
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 group"
            >
              Download CV
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
