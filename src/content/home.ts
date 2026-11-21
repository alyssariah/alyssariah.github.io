/** Copy for the home page sections. */
export const homeContent = {
  hero: {
    typedStrings: [
      'Hello World!',
      'Full-stack dev by day.',
      'DevOps whisperer by night.',
      'Debugging life one line at a time.',
    ],
    tagline: 'Crafting clean, modern websites and platforms that deliver results.',
    cta: { label: 'Discover my projects', href: '/projects' },
  },
  about: {
    title: 'About Me',
    lead: 'Hi, I’m a Lead Full-Stack Engineer who enjoys building systems that make developers’ lives easier. I started out studying psychology, which gave me a deep understanding of how people think and solve problems. That perspective now informs the tools, pipelines, and infrastructure I create to help teams work more efficiently.',
    body: 'I’ve worked across the full stack, from frontends to backends, and now focus on cloud-native systems that help teams ship faster with confidence. I’m proactive, a fast learner, and I take pride in creating solutions that combine stability with speed. And yes, I do it all with a strong cup of coffee in hand. ☕',
  },
  quality: {
    title: 'I Believe in Quality Work',
    body: 'I focus on cloud-native development and DevOps practices that help teams deliver fast, reliable, and secure software. I’ve built serverless architectures, automated deployments, and testing pipelines that balance speed with stability. My psychology background also helps me create collaborative, resilient teams where strong technical foundations meet human-centered problem solving.',
    technologies:
      'TypeScript, Node.js, NestJS, React, Next.js, GraphQL, PostgreSQL, MongoDB, AWS (CDK, ECS, Lambda, SQS, API Gateway), Docker, GitHub Actions, Datadog, Playwright.',
    cta: { label: 'View works', href: '/projects' },
  },
  cta: {
    title: 'Fast. Reliable. Scalable.',
    body: 'Read more about what I do and my philosophy of design. Judge for yourself with the work and results I’ve delivered for clients.',
    button: { label: 'Drop me a note', href: '/contact' },
  },
  funFacts: {
    title: 'Fun Facts About Me',
    body: 'I’ve completed both half and full marathons, so endurance and focus are strengths in both code and life. I love backpacking and kayaking with my husband and our dogs, and I’m a big fan of The Office and Stranger Things — balance matters, even for engineers. And of course, I start every debugging session with a good cup of coffee. Always. ☕',
    stats: [
      { icon: 'coffee', label: 'Cups of coffee', value: 99 },
      { icon: 'mountain', label: 'Backpacking trips', value: 20 },
      { icon: 'glasses', label: 'Articles read', value: 217 },
      { icon: 'footprints', label: 'Miles ran', value: 2000 },
    ],
  },
} as const;

export type FunFactIcon = (typeof homeContent.funFacts.stats)[number]['icon'];
