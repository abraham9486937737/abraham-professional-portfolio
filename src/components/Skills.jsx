import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-space"
      aria-labelledby="skills-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 id="skills-title" className="section-heading">
        Skills
      </h2>
      <p className="section-subtitle">Core strengths grouped for engineering leadership and enterprise delivery impact.</p>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => (
          <article key={group.category} className="glass-card">
            <h3 className="mb-4 text-lg font-semibold text-slate-100">{group.category}</h3>
            <ul className="space-y-4">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="mb-1 flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="text-slate-300">{item.name}</span>
                    <span className="text-accent-300">{item.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-700/60" role="progressbar" aria-valuenow={item.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${item.name} proficiency`}>
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
