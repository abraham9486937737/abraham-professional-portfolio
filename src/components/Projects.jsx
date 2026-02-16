import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-space"
      aria-labelledby="projects-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 id="projects-title" className="section-heading">
        Projects
      </h2>
      <p className="section-subtitle">Interactive cards showcasing engineering outcomes, analytics depth, and production-quality execution.</p>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card group flex h-full flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-lg font-semibold text-slate-100 transition-colors duration-300 group-hover:text-accent-300">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-accent-300 transition hover:text-accent-200"
                  aria-label={`Open ${project.title} GitHub repository`}
                >
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-accent-300 transition hover:text-accent-200"
                  aria-label={`Open ${project.title} live demo`}
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
