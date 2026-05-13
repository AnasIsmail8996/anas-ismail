"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown, Search, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const SUBJECT_OPTIONS = [
  "Hire Full Stack MERN Developer",
  "MERN Stack Project Inquiry",
  "Frontend React Development",
  "Backend Node.js & Express Development",
  "MongoDB Database Setup",
  "API Integration Request",
  "Website Redesign Project",
  "Bug Fixing & Optimization",
  "E-commerce Website Development",
  "Admin Dashboard Development",
  "Deployment & DevOps Support",
  "Freelance Collaboration",
  "Long-Term Developer Hiring",
  "Internship / Job Opportunity",
  "Custom Web Application Development"
];

const Contact = () => {
  const [state, handleSubmit] = useForm("mqengwjb");
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [subjectSearch, setSubjectSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSubjectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredSubjects = SUBJECT_OPTIONS.filter(option =>
    option.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "anasismailhz@gmail.com",
      href: "mailto:anasismailhz@gmail.com"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+92 321 8996191",
      href: "https://wa.me/923218996191"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#"
    },
  ];

  const socials = [
    { icon: <FaGithub />, href: "https://github.com/AnasIsmail8996/", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/anas-ismail-ai/", color: "hover:text-blue-500" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@aihzkarachi/", color: "hover:text-red-500" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#030014] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 group transition-all"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{info.label}</p>
                      <p className="text-white font-semibold text-sm sm:text-base break-all">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-zinc-500 text-sm mb-6">Follow me on social media</p>
                <div className="flex gap-4">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-2xl bg-white/5 text-zinc-400 text-xl transition-all ${social.color} hover:bg-white/10`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full p-10 rounded-[2.5rem] bg-white/5 border border-emerald-500/20 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-zinc-400">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Anas Ismail"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="anas@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>
                </div>
                <div className="space-y-2" ref={dropdownRef}>
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-400 ml-1">Subject</label>
                  <div className="relative">
                    <input type="hidden" name="subject" value={selectedSubject} />
                    <button
                      type="button"
                      onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                      className={`w-full px-6 py-4 rounded-2xl bg-white/5 border transition-all flex items-center justify-between text-left ${isSubjectOpen
                          ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                          : 'border-white/10 hover:border-white/20'
                        }`}
                    >
                      <span className={selectedSubject ? "text-white" : "text-zinc-500"}>
                        {selectedSubject || "Select a subject"}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isSubjectOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isSubjectOpen && (
                      <div className="absolute top-full left-0 w-full mt-2 p-2 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
                        <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl mb-2 border border-white/5">
                          <Search className="w-4 h-4 text-zinc-400" />
                          <input
                            type="text"
                            placeholder="Search subject..."
                            value={subjectSearch}
                            onChange={(e) => setSubjectSearch(e.target.value)}
                            className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-zinc-600"
                            autoFocus
                          />
                        </div>
                        <div className="max-h-60 overflow-y-auto pr-1 
                          [&::-webkit-scrollbar]:w-1.5 
                          [&::-webkit-scrollbar-track]:bg-transparent 
                          [&::-webkit-scrollbar-thumb]:bg-white/10 
                          [&::-webkit-scrollbar-thumb]:rounded-full 
                          hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                          {filteredSubjects.length > 0 ? (
                            <div className="space-y-1">
                              {filteredSubjects.map((option, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => {
                                    setSelectedSubject(option);
                                    setIsSubjectOpen(false);
                                    setSubjectSearch("");
                                  }}
                                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between
                                    ${selectedSubject === option
                                      ? 'bg-blue-600/20 text-blue-400'
                                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}
                                >
                                  {option}
                                  {selectedSubject === option && <Check className="w-4 h-4" />}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="px-4 py-8 text-center text-sm text-zinc-500">
                              No subjects found.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
