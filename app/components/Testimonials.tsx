'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonials } from '../constants/data';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
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
              Reviews & Testimonials
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Client{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Feedback
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed">
            What clients and collaborators say about working together.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-xl backdrop-blur-sm">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === activeTestimonial ? 0 : index < activeTestimonial ? -100 : 100 }}
                animate={{
                  opacity: index === activeTestimonial ? 1 : 0,
                  x: index === activeTestimonial ? 0 : index < activeTestimonial ? -100 : 100,
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-lg">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl text-white mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-emerald-100">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeTestimonial ? 'w-12 bg-emerald-500' : 'w-3 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

