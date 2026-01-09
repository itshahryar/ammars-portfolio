'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { navItems } from '../constants/data';
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiMail,
  HiAcademicCap,
  HiDocumentText,
} from 'react-icons/hi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIconForNavItem = (label: string) => {
    switch (label) {
      case 'Home':
        return <HiHome size={20} />;
      case 'About':
        return <HiUser size={20} />;
      case 'Skills':
        return <HiCode size={20} />;
      case 'Experience':
        return <HiBriefcase size={20} />;
      case 'Education':
        return <HiAcademicCap size={20} />;
      case 'Projects':
        return <HiDocumentText size={20} />;
      default:
        return <HiHome size={20} />;
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-white'
        }`}
      >
    <nav className="container mx-auto px-6 py-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <Image 
          src="/logo.png" 
          alt="Ammar Logo" 
          width={40} 
          height={40}
          className="rounded-full object-cover"
        />
      </motion.div>
      <motion.a
        href="#"
        className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        Ammar
      </motion.a>
    </div>

    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          className="font-medium transition-colors relative group text-gray-700 hover:text-emerald-600"
          whileHover={{ scale: 1.05 }}
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
        </motion.a>
      ))}
    </div>

    <motion.a
      href="#contact"
      className="hidden md:block px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get In Touch
    </motion.a>

    <motion.button
      className="md:hidden text-gray-700"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
    </motion.button>
  </div>
</nav>
      </motion.header>

      {/* ================= MOBILE DRAWER ================= */}
      <motion.div
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl md:hidden"
        initial={{ x: '-100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-50 to-teal-50">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Ammar
            </span>
            <motion.button
              className="text-gray-700 hover:text-emerald-600 p-1 rounded-full hover:bg-white/60"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiX size={24} />
            </motion.button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600 transition-all"
                  >
                    <span className="text-emerald-600">
                      {getIconForNavItem(item.label)}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50">
            <motion.a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiMail size={18} />
              <span>Get In Touch</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

