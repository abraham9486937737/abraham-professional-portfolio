import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionLoader() {
  return (
    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-accent-400" aria-hidden="true" />
  );
}

export default function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 antialiased">
      <AnimatePresence>
        {isBooting && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <motion.div
              className="h-12 w-12 rounded-full border-2 border-white/10 border-t-accent-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              aria-label="Loading portfolio"
              role="status"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isBooting && (
        <>
          <Navbar />
          <main id="main-content" className="mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 lg:px-8" tabIndex={-1}>
            <Hero />
            <Suspense fallback={<SectionLoader />}>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </div>
  );
}
