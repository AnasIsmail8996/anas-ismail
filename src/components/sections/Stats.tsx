"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Users, Briefcase, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "20+", icon: <Code2 />, color: "text-blue-500" },
    { label: "Happy Clients", value: "10+", icon: <Users />, color: "text-emerald-500" },
    { label: "Years Experience", value: "2", icon: <Briefcase />, color: "text-purple-500" },
    { label: "Awards Won", value: "5+", icon: <Award />, color: "text-amber-500" },
  ];

  return (
    <section className="py-20 bg-[#030014]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center text-center group hover:bg-white/10 transition-all"
            >
              <div className={`p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform ${stat.color}`}>
                {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
