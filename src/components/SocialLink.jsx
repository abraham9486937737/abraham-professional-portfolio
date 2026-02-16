export default function SocialLink({ href, icon: Icon, label, className = '', ariaLabel }) {
  const accessibleLabel =
    ariaLabel || (typeof label === 'string' ? label : href.includes('linkedin.com') ? 'Open LinkedIn Profile' : 'Open social profile link');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleLabel}
      className={className}
    >
      <Icon className="text-accent-300" aria-hidden="true" />
      {label}
    </a>
  );
}