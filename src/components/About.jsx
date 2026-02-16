import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-space"
      aria-labelledby="about-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 id="about-title" className="section-heading">
        About
      </h2>
      <p className="section-subtitle">
        Professional journey across enterprise engineering, software delivery management, and data-driven modernization initiatives.
      </p>

      <article className="glass-card">
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          I bring 17+ years of software engineering and delivery leadership across ERP, analytics, and enterprise application domains.
          My work includes international collaboration in Japan, where I delivered training and system enablement, and government-sector
          implementations in Maldives, including E-Court and transport information systems. I have led end-to-end project execution,
          cross-functional coordination, quality planning, and stakeholder communication, with a strong focus on business outcomes.
        </p>
      </article>
    </motion.section>
  );
}
