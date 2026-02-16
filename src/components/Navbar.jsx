import { useState } from 'react';
import { FaBars, FaGraduationCap, FaLinkedin, FaRobot, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SocialLink from './SocialLink';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/85 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#hero" className="focus-ring text-sm font-semibold tracking-[0.2em] text-accent-300 uppercase">
          ABRAHAM P
        </a>

        <button
          type="button"
          className="focus-ring inline-flex items-center rounded-md border border-white/15 p-2 text-slate-200 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="focus-ring nav-link">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/abraham-ponnuraj-b717a111"
              icon={FaLinkedin}
              label={<span>LinkedIn</span>}
              ariaLabel="LinkedIn Profile"
              className="focus-ring nav-link inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] hover:border-accent-400/35"
            />
          </li>
          <li>
            <SocialLink
              href="https://huggingface.co/abrahamcbe"
              icon={FaRobot}
              label={<span>Hugging Face</span>}
              ariaLabel="Hugging Face Profile"
              className="focus-ring nav-link inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] hover:border-accent-400/35"
            />
          </li>
          <li>
            <SocialLink
              href="https://www.coursera.org/user/e47af823abc442d09e8f128bac09507c"
              icon={FaGraduationCap}
              label={<span>Coursera</span>}
              ariaLabel="Coursera Profile"
              className="focus-ring nav-link inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] hover:border-accent-400/35"
            />
          </li>
        </ul>
      </nav>

      <motion.div
        id="mobile-menu"
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-white/10 bg-navy-900/95 lg:hidden"
      >
        <ul className="space-y-1 px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="focus-ring nav-link block" onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/abraham-ponnuraj-b717a111"
              icon={FaLinkedin}
              label={<span>LinkedIn</span>}
              ariaLabel="LinkedIn Profile"
              className="focus-ring nav-link inline-flex w-full items-center gap-2"
            />
          </li>
          <li>
            <SocialLink
              href="https://huggingface.co/abrahamcbe"
              icon={FaRobot}
              label={<span>Hugging Face</span>}
              ariaLabel="Hugging Face Profile"
              className="focus-ring nav-link inline-flex w-full items-center gap-2"
            />
          </li>
          <li>
            <SocialLink
              href="https://www.coursera.org/user/e47af823abc442d09e8f128bac09507c"
              icon={FaGraduationCap}
              label={<span>Coursera</span>}
              ariaLabel="Coursera Profile"
              className="focus-ring nav-link inline-flex w-full items-center gap-2"
            />
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
