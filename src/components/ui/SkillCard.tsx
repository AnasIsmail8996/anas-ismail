"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background glow on hover */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity blur-xl rounded-2xl"
        style={{ backgroundImage: `linear-gradient(to right, ${color}, transparent)` }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          {icon}
        </div>
        <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
        <p className="text-zinc-500 text-sm font-medium">{level}</p>
        
        {/* Progress bar style */}
        <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
