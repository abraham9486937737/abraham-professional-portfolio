import { FaGithub, FaGraduationCap, FaLinkedin, FaRobot } from 'react-icons/fa';
import SocialLink from './SocialLink';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 pt-6">
      <div className="flex flex-col items-center justify-between gap-3 pb-5 text-sm text-slate-400 sm:flex-row">
        <p>© 2026 Abraham PonnuRaj. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abraham9486937737"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md p-1.5 transition duration-300 hover:-translate-y-0.5 hover:text-accent-300"
            aria-label="Visit Abraham's GitHub"
          >
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <SocialLink
            href="https://www.linkedin.com/in/abraham-ponnuraj-b717a111"
            icon={FaLinkedin}
            label={<span>LinkedIn</span>}
            ariaLabel="LinkedIn Profile"
            className="focus-ring inline-flex items-center gap-2 rounded-md p-1.5 transition duration-300 hover:-translate-y-0.5 hover:text-accent-300"
          />
          <SocialLink
            href="https://huggingface.co/abrahamcbe"
            icon={FaRobot}
            label={<span>Hugging Face</span>}
            ariaLabel="Hugging Face Profile"
            className="focus-ring inline-flex items-center gap-2 rounded-md p-1.5 transition duration-300 hover:-translate-y-0.5 hover:text-accent-300"
          />
          <SocialLink
            href="https://www.coursera.org/user/e47af823abc442d09e8f128bac09507c"
            icon={FaGraduationCap}
            label={<span>Coursera</span>}
            ariaLabel="Coursera Profile"
            className="focus-ring inline-flex items-center gap-2 rounded-md p-1.5 transition duration-300 hover:-translate-y-0.5 hover:text-accent-300"
          />
        </div>
      </div>
    </footer>
  );
}
