"use client";

import { Calendar, MapPin, Users, Bell, Trophy, MessageCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Set up your padel matches in seconds. Choose your preferred time, location, and skill level.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: MapPin,
    title: "Find Nearby",
    description: "Discover padel events happening around you. Never miss a game in your neighborhood.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Users,
    title: "Join Players",
    description: "Connect with local padel enthusiasts. Build your community and make new friends.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Bell,
    title: "Get Notified",
    description: "Receive instant updates when new events are created near your location.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Keep track of your games, stats, and achievements. Watch your skills improve.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: MessageCircle,
    title: "Chat & Coordinate",
    description: "Message other players directly. Organize games and coordinate meetups easily.",
    color: "bg-indigo-100 text-indigo-600"
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <motion.div 
        className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <feature.icon className="w-7 h-7" />
      </motion.div>
      <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-20 px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"
      ></motion.div>
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"
      ></motion.div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl text-gray-900 pb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: "linear-gradient(90deg, #1e40af, #7c3aed, #1e40af)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Everything You Need to Play
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            playcano brings the padel community together with powerful features designed for players of all levels.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}