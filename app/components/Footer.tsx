'use client';

import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // X icon

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
    { name: 'X', href: '#', icon: <SiX /> },
    { name: 'Instagram', href: '#', icon: <FaInstagram /> },
    { name: 'Facebook', href: '#', icon: <FaFacebook /> },
    { name: 'Email', href: 'mailto:your-email@example.com', icon: <FaEnvelope /> },
  ];

  return (
    <footer className="relative py-8 bg-gradient-to-br from-emerald-700 to-emerald-600">
      {/* Decorative top border with a slightly lighter accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-white">Ammar</h3>
            <p className="text-base text-emerald-100 max-w-md leading-relaxed">
              Multidisciplinary professional crafting compelling narratives across media, content, and digital spaces.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={social.name}
                className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-emerald-500/30 text-emerald-100 hover:text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
