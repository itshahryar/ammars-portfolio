'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

export default function ExperienceTimeline() {
  // --- INLINED DATA: No external import needed ---
  const experiences = [
    {
      role: 'Senior Media Professional',
      organization: 'Leading Media Company',
      duration: '2020 - Present',
      achievements: [
        'Led content strategy for digital platforms reaching millions',
        'Managed cross-functional teams in media production',
        'Developed innovative storytelling formats',
      ],
    },
    {
      role: 'Digital Marketing Specialist',
      organization: 'Growth Agency',
      duration: '2018 - 2020',
      achievements: [
        'Executed paid campaigns with exceptional ROI',
        'Launched and scaled multiple brand initiatives',
        'Optimized social media advertising strategies',
      ],
    },
    {
      role: 'Content Creator & Journalist',
      organization: 'Independent Media',
      duration: '2016 - 2018',
      achievements: [
        'Published investigative pieces and feature stories',
        'Created multimedia content packages',
        'Built engaged audience communities',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Slightly refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 border border-emerald-300/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
              Professional Experience
            </span>
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Career{' '}
            <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100 leading-relaxed">
            A timeline of professional roles and achievements across media, marketing, and content creation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        {/* --- CHANGE: Increased max-width for wider cards --- */}
        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline Line - Unchanged */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-400"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* --- ENHANCED: Timeline Dot with animation --- */}
              <motion.div
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl border-4 border-emerald-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                <FaBuilding className="text-emerald-600 text-xl" />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                // --- ENHANCED: More dynamic hover effect ---
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 20px 40px -10px rgb(0 0 0 / 0.3)" }}
                // --- CHANGE: Reduced padding for smaller card height --- 
                className="ml-8 flex-1 rounded-2xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg border border-slate-100 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
                  {/* --- CHANGE: Reduced font size --- */}
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-800 border border-emerald-200">
                    <FaCalendarAlt className="w-3 h-3" />
                    {exp.duration}
                  </span>
                </div>
                {/* --- CHANGE: Reduced font size and margin --- */}
                <p className="text-base font-semibold text-emerald-600 mb-4">{exp.organization}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start text-slate-700"
                    >
                      {/* --- CHANGE: Reduced icon size --- */}
                      <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {/* --- CHANGE: Reduced font size --- */}
                      <span className="leading-relaxed text-sm">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
