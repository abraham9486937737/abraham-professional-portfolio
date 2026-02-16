import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin, FaPhoneAlt, FaRobot } from 'react-icons/fa';
import SocialLink from './SocialLink';

const socialLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'abrahamcbe@gmail.com',
    href: 'mailto:abrahamcbe@gmail.com'
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+91 94869 37737',
    href: 'tel:+919486937737'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/abraham-ponnuraj-b717a111',
    href: 'https://www.linkedin.com/in/abraham-ponnuraj-b717a111'
  },
  {
    icon: FaRobot,
    label: 'Hugging Face Profile',
    value: 'huggingface.co/abrahamcbe',
    href: 'https://huggingface.co/abrahamcbe'
  },
  {
    icon: FaGraduationCap,
    label: 'Coursera Profile',
    value: 'coursera.org/user/e47af823abc442d09e8f128bac09507c',
    href: 'https://www.coursera.org/user/e47af823abc442d09e8f128bac09507c'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/abraham9486937737',
    href: 'https://github.com/abraham9486937737'
  }
];

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Thank you. Your message has been captured in the UI form. Connect via email for direct communication.');
  };

  return (
    <motion.section
      id="contact"
      className="section-space"
      aria-labelledby="contact-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 id="contact-title" className="section-heading">
        Contact
      </h2>
      <p className="section-subtitle">Open to senior engineering, delivery leadership, and enterprise modernization opportunities.</p>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="glass-card">
          <ul className="space-y-4">
            {socialLinks.map((item) => (
              <li key={item.label}>
                {item.label === 'LinkedIn Profile' || item.label === 'Hugging Face Profile' || item.label === 'Coursera Profile' ? (
                  <SocialLink
                    href={item.href}
                    icon={item.icon}
                    ariaLabel={item.label}
                    label={
                      <span className="flex w-full items-center justify-between">
                        <span className="text-slate-200">{item.label}</span>
                        <span className="text-xs text-slate-300 group-hover:text-accent-200 sm:text-sm">{item.value}</span>
                      </span>
                    }
                    className="focus-ring group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-accent-400/45"
                  />
                ) : (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="focus-ring group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-accent-400/45"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <span className="inline-flex items-center gap-3 text-slate-200">
                      <item.icon className="text-accent-300" aria-hidden="true" />
                      {item.label}
                    </span>
                    <span className="text-xs text-slate-300 group-hover:text-accent-200 sm:text-sm">{item.value}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-card">
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
                Name
              </label>
              <input id="name" name="name" required className="focus-ring w-full rounded-lg border border-white/15 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
                Email
              </label>
              <input id="email" name="email" type="email" required className="focus-ring w-full rounded-lg border border-white/15 bg-slate-900/60 px-3 py-2 text-sm text-slate-100" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="focus-ring w-full rounded-lg border border-white/15 bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
              />
            </div>
            <button type="submit" className="focus-ring button-primary w-full sm:w-auto">
              Send Message
            </button>
            {message && (
              <p className="text-sm text-accent-200" role="status" aria-live="polite">
                {message}
              </p>
            )}
          </form>
        </article>
      </div>
    </motion.section>
  );
}
