"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  LayoutDashboard, 
  ShoppingBag, 
  Lock, 
  Database, 
  Bug, 
  Rocket, 
  Cloud 
} from "lucide-react";
import { FaAws } from "react-icons/fa";

const Services = () => {
  const services = [
    { 
      title: "Full Stack Web Development", 
      desc: "Complete end-to-end web applications built with the MERN stack.", 
      icon: <Globe className="w-8 h-8" />,
      color: "blue"
    },
    { 
      title: "REST API Development", 
      desc: "Secure, scalable, and well-documented APIs for your web or mobile apps.", 
      icon: <Server className="w-8 h-8" />,
      color: "purple"
    },
    { 
      title: "Admin Dashboard", 
      desc: "Custom administrative panels to manage your data and business logic.", 
      icon: <LayoutDashboard className="w-8 h-8" />,
      color: "emerald"
    },
    { 
      title: "E-commerce Website", 
      desc: "High-performance online stores with integrated payment gateways.", 
      icon: <ShoppingBag className="w-8 h-8" />,
      color: "amber"
    },
    { 
      title: "Authentication & JWT", 
      desc: "Robust user authentication systems using JWT, OAuth, and best security practices.", 
      icon: <Lock className="w-8 h-8" />,
      color: "rose"
    },
    { 
      title: "Database Design", 
      desc: "Efficient NoSQL and SQL database architectures for optimal data flow.", 
      icon: <Database className="w-8 h-8" />,
      color: "cyan"
    },
    { 
      title: "Bug Fixing", 
      desc: "Identifying and resolving complex frontend and backend technical issues.", 
      icon: <Bug className="w-8 h-8" />,
      color: "red"
    },
    { 
      title: "Deployment", 
      desc: "Streamlined deployment processes to Vercel, Netlify, or VPS servers.", 
      icon: <Rocket className="w-8 h-8" />,
      color: "indigo"
    },
    { 
      title: "AWS EC2 & S3", 
      desc: "Cloud infrastructure setup and management for hosting and storage.", 
      icon: <FaAws className="w-8 h-8" />,
      color: "orange"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-24 bg-[#030014] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            High-quality development services tailored to your specific business needs.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
