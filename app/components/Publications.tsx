'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { publications } from '../constants/data';

export default function Publications() {
  return (
    // --- RESTORED: Original dark green background ---
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
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
              Publications
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Published{' '}
            <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Works
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-emerald-100 leading-relaxed">
            Showcasing published e-magazines and digital publications across multiple volumes.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              // --- FIX: Removed the `y` property to prevent flickering ---
              // --- Added a subtle `scale` for hover feedback ---
              whileHover={{ scale: 1.03 }}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500"
            >
              {/* --- Image Container with Reduced Height --- */}
              <div className="aspect-[3/4] w-full">
                <Image
                  src={pub.cover}
                  alt={pub.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* --- Dark Overlay for Text Contrast --- */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* --- Content Overlaying the Image --- */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-2"
                  >
                    {pub.volume}
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="text-2xl font-bold leading-tight"
                  >
                    {pub.title}
                  </motion.h3>
                </div>
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="text-sm text-gray-200 mb-4 leading-relaxed"
                  >
                    {pub.description}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center cursor-pointer rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white border border-white/30 transition-all hover:bg-white/30"
                  >
                    Preview
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

