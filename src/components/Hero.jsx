import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

export default function Hero() {
  const assetBaseUrl = import.meta.env.BASE_URL;

  return (
    <section id="hero" className="section-space" aria-labelledby="hero-title">
      <motion.div
        className="glass-card overflow-hidden"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.18em] text-accent-300 uppercase">Abraham PonnuRaj</p>
            <h1 id="hero-title" className="mb-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Data Engineer | Data Scientist
            </h1>
            <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
              Enterprise Software Architect with 17+ Years of Experience
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
              I design data-driven architecture grounded in enterprise systems discipline, combining large-scale application delivery,
              platform reliability, and analytics engineering to build solutions that support confident business decisions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                className="focus-ring button-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects <FaArrowRight className="ml-2" aria-hidden="true" />
              </motion.a>

              <motion.a
                href={`${assetBaseUrl}Abraham_PonnuRaj_Resume.pdf`}
                download
                className="focus-ring button-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume <FaDownload className="ml-2" aria-hidden="true" />
              </motion.a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[220px] lg:max-w-[260px]">
            <img
              src={`${assetBaseUrl}images/abraham.jpg`}
              alt="Portrait of Abraham P"
              loading="lazy"
              className="h-auto w-full rounded-2xl border border-white/15 object-cover shadow-glass"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
