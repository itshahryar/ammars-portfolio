'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaMedal, FaStar, FaVideo } from 'react-icons/fa';
import { SiMeta } from 'react-icons/si';

const achievements = [
  {
    title: 'Digital News Platform',
    description: 'Grew viewership to millions with high engagement.',
    detail: 'Built a platform from scratch with SEO-optimized content and social campaigns.',
    icon: <FaRocket className="text-emerald-600" />,
    color: 'from-emerald-50 to-teal-50',
    badgeColor: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
    period: '2022 – 2023',
  },
  {
    title: 'High-Budget Campaigns',
    description: 'Managed Meta & Facebook campaigns with strong ROI.',
    detail: 'Optimized targeting and creative for maximum conversions.',
    icon: <SiMeta className="text-blue-600" />,
    color: 'from-blue-50 to-indigo-50',
    badgeColor: 'bg-blue-100 text-blue-800 ring-blue-200',
    period: '2021 – 2022',
  },
  {
    title: 'Business Launches',
    description: 'Successfully launched and scaled multiple businesses.',
    detail: 'From strategy to execution, driving measurable growth.',
    icon: <FaMedal className="text-amber-600" />,
    color: 'from-amber-50 to-orange-50',
    badgeColor: 'bg-amber-100 text-amber-800 ring-amber-200',
    period: '2020 – 2021',
  },
  {
    title: 'Content Production',
    description: 'High-impact video & written content driving engagement.',
    detail: 'Produced campaigns for social media & websites.',
    icon: <FaVideo className="text-pink-600" />,
    color: 'from-pink-50 to-pink-100',
    badgeColor: 'bg-pink-100 text-pink-800 ring-pink-200',
    period: '2019 – 2020',
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></span>
              Featured Work & Achievements
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Impactful{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Highlighting key milestones and successful ventures across media, content, and digital marketing.
          </p>
        </motion.div>

        {/* Achievements Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-white/90 px-6 py-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                style={{
                  background: `linear-gradient(to bottom right, ${item.color.split(' ')[0]}, ${item.color.split(' ')[1]})`,
                }}
              ></div>

              {/* Card Content */}
              <div className="relative flex-1 flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 text-slate-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {item.detail}
                  </p>
                </div>

                {/* Date badge fixed at bottom */}
                <div className="mt-auto flex justify-end">
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ${item.badgeColor} ring-1 shadow-sm`}
                  >
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
