'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const handleCollaborateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
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
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></span>
              About The Professional
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            About{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            Multidisciplinary professional crafting compelling narratives across media, journalism, content, design, and digital marketing.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-sm bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl border border-emerald-400 shadow-lg px-6 py-7 flex flex-col items-center backdrop-blur-sm"
          >
            <div className="w-full aspect-[4.5/5] rounded-xl bg-white flex items-center justify-center mb-4 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                alt="Ammar"
                width={400}
                height={500}
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            <div className="w-full bg-white rounded-xl px-4 py-3 flex flex-col gap-1">
              <p className="text-gray-900 text-sm font-semibold">
                Multidisciplinary professional & creative problem-solver
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Crafting compelling narratives across media, journalism, content, design, and digital marketing — one project at a time.
              </p>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="flex-1"
          >
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Thoughtful content,{' '}
              <span className="text-emerald-600">strategic execution</span>.
            </h2>

            <div className="mt-4 space-y-3 text-gray-600 text-[14px] md:text-[15px] leading-[24px] max-w-2xl">
              <p>
                I&apos;m Ammar, a multidisciplinary professional working at the intersection of media, journalism, content creation, graphic design, and digital marketing. With a passion for storytelling and a strategic mindset, I craft compelling narratives that connect audiences with meaningful experiences.
              </p>
              <p>
                My expertise spans across creating engaging content, designing visual experiences, executing strategic marketing campaigns, and building digital platforms that reach millions. I bring a unique blend of creative vision and analytical thinking to every project.
              </p>
              <p>
                Whether it&apos;s launching a new publication, scaling a business, or developing a brand identity, I approach each challenge with curiosity, professionalism, and a commitment to excellence.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold shadow hover:shadow-md hover:bg-emerald-700 transition-all"
              >
                View all work
              </a>

              <button
                type="button"
                onClick={handleCollaborateClick}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-emerald-500/40 text-gray-900 text-sm font-semibold hover:bg-emerald-50 transition-all"
              >
                Let&apos;s collaborate
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

