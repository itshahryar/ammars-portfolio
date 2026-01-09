'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { roles } from '../constants/data';

export default function RolesSlider() {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(roleInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // --- ADDED: relative overflow-hidden for background ---
    <section id="work" className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
      {/* --- NEW: Decorative Background Elements for Depth --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-emerald-400 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* --- ADDED: relative z-10 to ensure content is on top --- */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 border border-emerald-300/30">
              <span className="h-1 w-1 rounded-full bg-emerald-300 animate-pulse"></span>
              Roles & Domains
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Professional{' '}
            <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-emerald-100 leading-relaxed">
            Exploring diverse professional domains and roles across media, content, and digital marketing.
          </p>
        </motion.div>
        
        {/* --- CHANGED: Further reduced max-width --- */}
        <div className="max-w-2xl mx-auto">
          {/* --- CHANGED: Further reduced height --- */}
          <div className="relative h-72 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === activeRole ? 0 : index < activeRole ? -100 : 100 }}
                animate={{
                  opacity: index === activeRole ? 1 : 0,
                  x: index === activeRole ? 0 : index < activeRole ? -100 : 100,
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
              >
                {/* --- CHANGED: Further reduced icon size --- */}
                <div className="text-4xl mb-4">{role.icon}</div>
                {/* --- CHANGED: Further reduced title size --- */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{role.title}</h3>
                {/* --- CHANGED: Further reduced description size --- */}
                <p className="text-base text-emerald-100 max-w-xl">{role.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {roles.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveRole(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeRole ? 'w-12 bg-emerald-500' : 'w-3 bg-emerald-800/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

