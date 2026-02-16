import { motion } from 'framer-motion';

const certifications = [
  'Data Analytics & Data Science Program — KGiSL MicroCollege (Feb 2025 - Aug 2025)',
  'IBM Data Analyst Professional Certificate — Coursera (Oct 2025)',
  'IBM Data Science Professional Certificate — Coursera (Sep 2025)',
  'BigQuery for Data Analysts — Coursera (Oct 2025)',
  'Working with BigQuery — Coursera (Oct 2025)',
  'Google Cloud Fundamentals: Core Infrastructure — Coursera (Sep 2025)',
  'ASP.NET for Experienced Developers Specialization — Coursera (Sep 2025)'
];

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="section-space"
      aria-labelledby="certifications-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 id="certifications-title" className="section-heading">
        Certifications
      </h2>

      <article className="glass-card">
        <ul className="list-disc space-y-2 pl-4 text-sm text-slate-300 sm:text-base">
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </article>
    </motion.section>
  );
}
