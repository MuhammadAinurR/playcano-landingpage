"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and set your skill level, preferred locations, and availability. Let others know what kind of player you are."
  },
  {
    number: "02",
    title: "Find or Create Events",
    description: "Browse nearby padel events or create your own. Set the location, time, and number of players you need."
  },
  {
    number: "03",
    title: "Join & Play",
    description: "Reserve your spot, connect with other players, and show up to play. It's that simple!"
  }
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps and join the padel community today.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const stepRef = useRef(null);
              const stepInView = useInView(stepRef, { once: true, margin: "-50px" });
              
              return (
                <motion.div 
                  key={index}
                  ref={stepRef}
                  initial={{ opacity: 0, x: -50 }}
                  animate={stepInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white relative overflow-hidden"
                      initial={{ scale: 0 }}
                      animate={stepInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                      {step.number}
                    </motion.div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl overflow-hidden shadow-xl relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658723826297-fe4d1b1e6600?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="People playing padel"
                className="w-full h-[600px] object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            {/* Decorative element */}
            <motion.div 
              animate={{ 
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl -z-10"
            ></motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-200"
        >
          {[
            { value: "5000+", label: "Active Players" },
            { value: "1200+", label: "Events This Month" },
            { value: "150+", label: "Locations" }
          ].map((stat, index) => {
            const statRef = useRef(null);
            const statInView = useInView(statRef, { once: true });
            
            return (
              <motion.div 
                key={index}
                ref={statRef}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div 
                  className="text-5xl text-blue-600 mb-2"
                  animate={statInView ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  } : {}}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}