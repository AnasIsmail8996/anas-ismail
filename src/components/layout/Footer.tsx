import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#030014] border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-white">
            ANAS ISMAIL<span className="text-blue-500">.</span>
          </div>
          
          <div className="flex gap-6 items-center">
            <a 
              href="https://github.com/AnasIsmail8996/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anas-ismail-ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-500 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.youtube.com/@aihzkarachi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-red-500 transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Anas Ismail Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
