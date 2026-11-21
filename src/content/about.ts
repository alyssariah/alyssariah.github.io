/** Copy for the About page. */
export const aboutContent = {
  intro: {
    title: 'Code That Just Works',
    paragraphs: [
      'Hi, I’m a proactive, solution-oriented software engineer who loves building pipelines, infrastructure, and tools that make developers’ lives easier. I started out in psychology, which taught me how people think and solve problems — skills I now bring to designing systems and workflows that are both reliable and intuitive.',
      'I thrive on creating environments where teams can move fast without sacrificing stability, and I take pride in turning complex problems into elegant solutions. Outside of code, you’ll find me running marathons, exploring the outdoors with my husband and our dogs, or unwinding with The Office or Stranger Things.',
    ],
    cta: { label: 'Contact me', href: '/contact' },
  },
  principles: [
    {
      name: 'Vision',
      content:
        'To lead software architecture and platform initiatives that balance innovation with stability — creating ecosystems where developers can do their best work, faster and with fewer obstacles.',
    },
    {
      name: 'Mission',
      content:
        'To build scalable systems, tools, and processes that empower engineering teams to move faster, collaborate better, and deliver reliable software with confidence.',
    },
    {
      name: 'Approach',
      content:
        'I approach software engineering with a systems mindset and a people-first philosophy. My background in psychology helps me understand how developers interact with tools and processes — and how thoughtful design can make their work smoother. Automate what’s repetitive, simplify what’s complex, and always leave the system better than I found it.',
    },
  ],
} as const;
