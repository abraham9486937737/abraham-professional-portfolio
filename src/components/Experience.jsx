import { motion } from 'framer-motion';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section-space"
      aria-labelledby="experience-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 id="experience-title" className="section-heading">
        Experience
      </h2>
      <p className="section-subtitle">Vertical timeline of major professional roles, responsibilities, and impact.</p>

      <div className="relative ml-2 border-l border-accent-400/30 pl-7 sm:ml-4">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            className="glass-card relative mb-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border border-accent-300 bg-navy-900" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
            <p className="mt-1 text-sm text-accent-300">{item.company}</p>
            <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">{item.duration}</p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
