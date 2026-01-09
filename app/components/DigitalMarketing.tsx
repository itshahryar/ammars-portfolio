'use client';

import { motion } from 'framer-motion';
import { SiFacebook, SiMeta } from 'react-icons/si';
import { FaRocket, FaChartLine, FaVideo } from 'react-icons/fa';

// You can create a reusable Section component or use a plain section tag
// For simplicity, I'm using a plain section tag here.
export default function DigitalMarketing() {
  const coreServices = [
    {
      icon: <SiMeta className="w-6 h-6" />,
      title: 'Paid Campaigns',
      description: 'Strategic Meta & Facebook ad campaigns with exceptional ROI and conversion rates.',
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Brand Launches',
      description: 'Successfully launched multiple businesses from concept to market penetration.',
    },
    {
      icon: <FaVideo className="w-6 h-6" />,
      title: 'Content Production',
      description: 'High-impact video and written content that drives engagement and builds brands.',
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: 'Data & Analytics',
      description: 'Data-driven strategies to optimize performance and achieve measurable growth.',
    },
  ];

  return (
    <section
      id="digital-marketing"
      className="bg-gradient-to-b from-white via-emerald-50/30 to-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
  className="inline-block mb-2"
>
  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
    <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></span>
    Digital Marketing Experience
  </span>
</motion.div>

<h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
  Driving Growth Through{' '}
  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
    Strategic Marketing
  </span>
</h2>

<div className="mt-3 flex justify-center">
  <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
</div>

<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
  Delivering measurable results by combining creative vision with data-driven digital strategies.
</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Key Achievements (NO hover color effect) - from second code snippet */}
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-white shadow-2xl h-full">
              <div className="p-8">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  <span className="h-1 w-8 bg-emerald-500 rounded-full"></span>
                  Key Achievements
                </span>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <FaRocket className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Launched a Digital News Platform
                      </p>
                      <p className="text-sm text-slate-600">
                        Grew it to achieve <strong>millions of viewership</strong>.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <SiMeta className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Managed High-Budget Campaigns
                      </p>
                      <p className="text-sm text-slate-600">
                        Expert in Meta & Facebook paid ads with strong ROI.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaChartLine className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Business Launch Expert
                      </p>
                      <p className="text-sm text-slate-600">
                        Successfully launched and scaled multiple businesses.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* My Approach (MATCHED SIZE & STRUCTURE) - from second code snippet */}
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-2xl h-full">
              <div className="p-8">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  <span className="h-1 w-8 bg-emerald-500 rounded-full"></span>
                  My Approach
                </span>

                <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-xl">
                  A blend of{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    creativity & analytics
                  </span>
                </h3>

                <p className="mt-5 text-base text-slate-700 leading-relaxed">
                  My expertise lies in crafting compelling narratives and
                  translating them into powerful digital campaigns. I don't
                  just run ads; I build ecosystems where content, social media,
                  and paid advertising work in synergy.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Growth Hacker', 'Content Strategist', 'Meta Ads Expert'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 border border-emerald-100"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-slate-900">{service.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
