export const skillsContent = {
  title: 'My Skills',
  description:
    'I help build and maintain web applications and infrastructure that are scalable, reliable, and efficient.',
  items: [
    {
      icon: 'code',
      name: 'Full-Stack Development',
      content: 'Build robust frontend and backend applications with modern frameworks.',
    },
    {
      icon: 'server',
      name: 'Cloud & Infrastructure',
      content: 'Design and manage cloud systems and serverless services for reliability.',
    },
    {
      icon: 'workflow',
      name: 'CI/CD & Automation',
      content: 'Streamline workflows with automated pipelines, testing, and deployments.',
    },
    {
      icon: 'bug',
      name: 'Testing & Quality',
      content: 'Integrate testing frameworks to catch issues early and ensure stability.',
    },
    {
      icon: 'database',
      name: 'API & Database Integration',
      content: 'Design and maintain APIs and databases for smooth system connections.',
    },
    {
      icon: 'wrench',
      name: 'Developer Tools & AI',
      content: 'Build internal tools — including LLM-powered workflows — that make teams faster.',
    },
    {
      icon: 'cloud-upload',
      name: 'Deployment & Hosting',
      content: 'Deploy applications seamlessly with monitoring and scalable setups.',
    },
    {
      icon: 'pen-tool',
      name: 'UI/UX Design',
      content: 'Create intuitive interfaces, wireframes, and prototypes in Figma.',
    },
  ],
} as const;

export type SkillIcon = (typeof skillsContent.items)[number]['icon'];
