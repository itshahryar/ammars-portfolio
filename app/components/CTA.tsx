'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  // --- Social icons data ---
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2H21.49l-7.09 8.1L22.7 22h-6.6l-5.17-6.66L4.93 22H1.68l7.58-8.67L1 2h6.76l4.67 6.1L18.24 2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5C19.43 2 22 4.57 22 7.75v8.5C22 19.43 19.43 22 16.25 22h-8.5C4.57 22 2 19.43 2 16.25v-8.5C2 4.57 4.57 2 7.75 2zm8.5 1.5h-8.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:your-email@example.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
              Let&apos;s Collaborate
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Ready to{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Work Together?
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed mb-10">
            Ready to bring your vision to life? Let&apos;s discuss how we can work together to create something extraordinary.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            <motion.a
              href="mailto:contact@ammar.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-shadow"
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="/test.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold text-base hover:bg-emerald-50 transition-colors"
            >
              Grab My Resume
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ y: -3, color: '#10b981' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="text-slate-500 hover:text-emerald-500 transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

