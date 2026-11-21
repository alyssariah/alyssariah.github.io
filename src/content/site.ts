export const siteConfig = {
  name: 'Alyssa Jackson',
  title: 'Alyssa Jackson | Web Developer and Designer',
  role: 'Lead Full-Stack Engineer',
  location: 'New York City',
  description:
    'Lead full-stack engineer building platforms, products, and developer tooling — cloud-native systems, CI/CD, and clean, modern websites.',
  email: 'alyssariah@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/alyssariah', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alyssa-riah-jackson/',
      icon: 'linkedin',
    },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export type SocialIcon = (typeof siteConfig.socials)[number]['icon'];
