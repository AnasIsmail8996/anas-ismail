"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Muhammad Kumail",
      role: "Client from Upwork",
      content: "Anas delivered the project much earlier than the deadline. His understanding of the MERN stack is top-notch. Highly recommended!",
      rating: 5,
     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zaid"
    },
    {
      name: "Abdullah Ansari",
      role: "Remote Startup Founder",
      content: "Excellent communication and technical skills. He helped us migrate our legacy system to a modern Next.js architecture seamlessly.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
    },
    {
      name: "Jaffer Aman",
      role: "E-commerce Business Owner",
      content: "Anas built our furniture store from scratch. The 3D product previews and smooth animations he implemented significantly increased our user engagement. Top tier developer!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zaid"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#030014] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            What my clients and colleagues have to say about our collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl relative group hover:border-blue-500/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-2 border-blue-500/20" />
                <div>
                  <h3 className="text-lg font-bold text-white">{review.name}</h3>
                  <p className="text-zinc-500 text-xs">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-zinc-400 italic leading-relaxed text-sm">
                &quot;{review.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
