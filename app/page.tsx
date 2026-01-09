'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import RolesSlider from './components/RolesSlider';
import FeaturedWork from './components/FeaturedWork';
import Publications from './components/Publications';
import DigitalMarketing from './components/DigitalMarketing';
import ExperienceTimeline from './components/ExperienceTimeline';
import Testimonials from './components/Testimonials';
import Recommendations from './components/Recommendations';
import CTA from './components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <RolesSlider />
      <FeaturedWork />
      <Publications />
      <DigitalMarketing />
      <ExperienceTimeline />
      <Testimonials />
      <Recommendations />
      <CTA />
      <Footer />
    </div>
  );
}
