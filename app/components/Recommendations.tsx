'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Recommendations() {
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  // --- INLINED DATA: No external import needed ---
  const recommendations = [
    {
      title: 'Industry Leader',
      author: 'John Smith',
      role: 'CEO, Media Corp',
      text: 'Ammar demonstrates exceptional leadership and creativity in every project.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
    },
    {
      title: 'Client Testimonial',
      author: 'Lisa Anderson',
      role: 'Founder, Creative Studio',
      text: 'Working with Ammar transformed our brand presence. Their strategic insights and creative execution exceeded all expectations.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
    {
      title: 'Professional Endorsement',
      author: 'David Kim',
      role: 'Director, Digital Agency',
      text: 'Ammar\'s expertise in digital marketing and content creation is outstanding. A true professional who delivers results.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=300&fit=crop',
    },
    {
      title: 'Collaboration Review',
      author: 'Maria Garcia',
      role: 'Editor-in-Chief',
      text: 'Ammar\'s journalism skills and content strategy have been instrumental in our publication\'s success. Highly recommended.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop',
    },
  ];

  return (
    // --- ADDED: relative overflow-hidden for background ---
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
              Recommendations
            </span>
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional{' '}
            <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Endorsements
            </span>
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full"></div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100 leading-relaxed">
            Letters of recommendation and endorsements from industry leaders and clients.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto relative px-4 sm:px-12">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20 md:pb-12"
          >
            {recommendations.map((rec, index) => (
              <SwiperSlide key={index}>
                {/* --- ELEGANT CARD DESIGN with Glassmorphism --- */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-[450px] flex flex-col transition-all duration-300 hover:shadow-emerald-500/30"
                >
                  <div className="aspect-video relative h-48">
                    <Image src={rec.image} alt={rec.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold mb-3 text-white"
                    >
                      {rec.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-emerald-100 mb-4 flex-1 leading-relaxed"
                    >
                      {rec.text}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="border-t border-white/20 pt-4 mt-auto"
                    >
                      <p className="font-semibold text-white">{rec.author}</p>
                      <p className="text-sm text-emerald-300">{rec.role}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* --- ELEGANT NAVIGATION BUTTONS --- */}
          {/* Container for mobile navigation buttons */}
          <div className="md:hidden flex justify-center items-center gap-8 mt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 border border-white/30 flex"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 border border-white/30 flex"
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 border border-white/30 z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-lg items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 border border-white/30 z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
