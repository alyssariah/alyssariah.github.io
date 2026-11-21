import catalystIq from '@/assets/projects/catalyst-iq.png';
import delanoBats from '@/assets/projects/delano-bats.png';
import arkhProducts from '@/assets/projects/arkh-products.png';
import developerArkh from '@/assets/projects/developer-arkh.png';
import nextSanityTemplate from '@/assets/projects/next-sanity-template.png';
import puppyClickers from '@/assets/projects/puppy-clickers.png';
import splashNDash from '@/assets/projects/splash-n-dash.png';
import womenInStem from '@/assets/projects/women-in-stem.png';

import {
  projectCategorySchema,
  projectSchema,
  type Project,
  type ProjectCategory,
  type ProjectInput,
} from './schema';

/**
 * Portfolio entries, in display order. Content is validated at module load,
 * so a malformed entry fails the build instead of shipping broken UI.
 */
const projectData: ProjectInput[] = [
  {
    slug: 'catalyst-iq',
    title: 'Catalyst IQ',
    summary:
      'Designed and developed a fast, easy-to-manage marketing website for Catalyst IQ using Hugo and Tailwind CSS, focused on performance, scalability, and a streamlined editing experience.',
    categories: ['Websites & CMS', 'UX & Product Design'],
    image: {
      src: catalystIq,
      alt: 'Catalyst IQ homepage: “Empower transformation of your business”',
    },
    details: [
      { label: 'Client', value: 'Catalyst IQ' },
      { label: 'What I did', value: 'Website design and development' },
      { label: 'Tools used', value: 'Figma, Hugo, Tailwind CSS' },
      { label: 'Completed', value: 'September 2024' },
      {
        label: 'Skills',
        value: 'UI/UX design, static site development, performance optimization, responsive design',
      },
    ],
    body: [
      'Catalyst IQ is a data-driven consulting and analytics company that needed a modern, professional marketing website to showcase their services and thought leadership — one their internal marketing team could manage without ongoing developer support.',
      'The project began with wireframing and interface design in Figma, focusing on clarity, credibility, and conversion. Structured layouts, strong typography, and balanced whitespace communicated trust and analytical expertise while staying minimal and approachable.',
      'The site was built with Hugo for its performance and simple content management, and Tailwind CSS for a consistent, responsive design system. Reusable components for case studies, services, and team profiles keep content updates simple, and a modular content architecture removed the need for a heavyweight CMS.',
    ],
    highlights: [
      'Lightning-fast static architecture built with Hugo',
      'Fully responsive, accessible layouts built with Tailwind CSS',
      'Modular content structure for easy updates',
      'Optimized performance and SEO',
      'Scalable design system for future pages',
    ],
    links: { live: 'https://ciq-website.vercel.app/' },
  },
  {
    slug: 'delano-bats',
    title: 'Delano Bats',
    summary:
      'Designed and developed an eCommerce website for Delano Bats to launch their first product line, built with Next.js, BigCommerce, ButterCMS, and Tailwind CSS with CI/CD for continuous deployment.',
    categories: ['Websites & CMS', 'eCommerce', 'Web Apps & Integrations', 'UX & Product Design'],
    image: { src: delanoBats, alt: 'Delano Bats homepage: “Changing the game” baseball bat hero' },
    details: [
      { label: 'Client', value: 'Delano Bats' },
      { label: 'What I did', value: 'Website design, development, and eCommerce integration' },
      { label: 'Tools used', value: 'Figma, Next.js, BigCommerce, ButterCMS, Tailwind CSS' },
      { label: 'Completed', value: 'July 2024' },
      {
        label: 'Skills',
        value: 'UI/UX design, front-end development, eCommerce integration, CI/CD',
      },
    ],
    body: [
      'Delano Bats, a sports equipment company specializing in advanced baseball bat technology, needed a modern website to launch their first product line — a visually striking, performance-driven eCommerce platform that could grow with the brand.',
      'Design exploration in Figma established a strong visual identity reflecting Delano’s precision and craftsmanship: bold imagery, clean typography, and a high-contrast palette, with a frictionless shopping journey that highlights product performance.',
      'The site uses Next.js for speed and SEO, BigCommerce for inventory, payments, and orders, and ButterCMS as a headless CMS so the Delano team controls pages and product stories without developers. A CI/CD pipeline on GitHub Actions and Vercel delivers updates quickly and reliably.',
    ],
    highlights: [
      'Integrated eCommerce powered by BigCommerce',
      'Dynamic content management through ButterCMS',
      'Fast, responsive, SEO-optimized Next.js architecture',
      'Tailwind CSS component library for design consistency',
      'Automated CI/CD pipeline for continual deployment',
    ],
    links: { live: 'https://www.delanobats.com/' },
  },
  {
    slug: 'arkh-developer-program',
    title: 'ARKH Developer Program',
    summary:
      'Designed and developed the ARKH Developer Program website with a GraphQL-powered application system, built with Next.js, Tailwind CSS, and CI/CD automation.',
    categories: ['Websites & CMS', 'Web Apps & Integrations', 'UX & Product Design'],
    image: {
      src: developerArkh,
      alt: 'ARKH Developer Program overview page with Apply Now call to action',
    },
    details: [
      { label: 'Client', value: 'ARKH' },
      { label: 'What I did', value: 'Website design and full-stack development' },
      { label: 'Tools used', value: 'Figma, Next.js, Tailwind CSS, GraphQL' },
      { label: 'Completed', value: 'June 2024' },
      { label: 'Skills', value: 'Next.js, GraphQL, UI/UX design, CI/CD, database integration' },
    ],
    body: [
      'ARKH, a company focused on immersive technology and developer tools, needed a dedicated website to introduce their Developer Program, highlight partner benefits, and collect developer applications through a secure submission process.',
      'A UX-driven design phase in Figma established the structure, hierarchy, and forward-thinking visual tone — program overview, benefits, technical documentation, and an integrated application portal.',
      'The site was built with Next.js and Tailwind CSS. A custom application system backed by a GraphQL API and database lets ARKH securely collect, query, and manage applications in real time, with validation and automated responses. GitHub Actions and Vercel provide continuous delivery.',
    ],
    highlights: [
      'Program pages designed for clarity and engagement',
      'Custom GraphQL API integration for application submissions',
      'Responsive, modern design built with Tailwind CSS',
      'Next.js architecture for scalability and SEO',
      'CI/CD automation for seamless deployment',
    ],
    links: { live: 'https://arkh-developer-43zw5wj8t-arkh.vercel.app/' },
  },
  {
    slug: 'arkh-products',
    title: 'ARKH Products',
    summary:
      'UI/UX design and front-end for ARKH’s product site, launching the AR Controller Pro with an interactive 3D product viewer, product pages, and a buy flow.',
    categories: ['eCommerce', 'UX & Product Design'],
    image: { src: arkhProducts, alt: 'ARKH AR Controller Pro product page' },
    details: [
      { label: 'Client', value: 'ARKH' },
      { label: 'What I did', value: 'Product site UI/UX design and front-end development' },
      { label: 'Tools used', value: 'Next.js, model-viewer (3D/AR)' },
      { label: 'Skills', value: 'UI/UX design, product marketing pages, 3D product display' },
    ],
    body: [
      'ARKH, a spatial computing company building the AR layer of the metaverse, needed a product site to launch its AR Controller Pro — a touch- and motion-based controller for creating, playing, and manipulating objects in AR.',
      'The site is organized around how customers explore a new hardware product: the Controller itself, the Experiences it unlocks, a Developer section for the developer program, and Support. A video-led home page sets the tone, and each product page leads to a clear buy action.',
      'The controller is shown as an interactive 3D model using model-viewer, so visitors can rotate and inspect the hardware right on the page instead of relying on static renders.',
    ],
    highlights: [
      'Product-launch information architecture: Controller, Experiences, Developer, Support',
      'Interactive 3D product viewer for the AR Controller Pro',
      'Video-led home page and focused buy calls to action',
      'Responsive Next.js front end',
    ],
    links: { live: 'https://arkh-products.vercel.app/' },
  },
  {
    slug: 'splash-n-dash',
    title: 'Splash n Dash',
    summary:
      'Redesigned and developed a modern, full-stack website for a dog training club using Next.js and Sanity CMS, with a responsive UI and automated CI/CD.',
    categories: ['Websites & CMS'],
    image: {
      src: splashNDash,
      alt: 'Splash ’n Dash K9 Sports homepage with training photo carousel',
    },
    details: [
      { label: 'Client', value: 'Splash n’ Dash' },
      { label: 'What I did', value: 'Full website redesign and development' },
      { label: 'Tools used', value: 'Figma, Next.js, Sanity CMS, Tailwind CSS' },
      { label: 'Completed', value: 'March 2024' },
      { label: 'Skills', value: 'Next.js, Sanity, Tailwind CSS, CI/CD' },
    ],
    body: [
      'Splash n Dash is a professional dog training club that needed a complete website overhaul to showcase their services, trainers, and philosophy — and make it simple for staff to update content without technical help.',
      'A brand refresh in Figma balanced professionalism with approachability, with clear navigation, engaging imagery, and strong calls to action.',
      'The site was built with Next.js for performance and SEO, integrated with Sanity as a headless CMS so the club manages class schedules, trainer bios, and blog content in real time. Automated builds and deployments through GitHub Actions and Vercel keep updates seamless and the site maintainable long term.',
    ],
    highlights: [
      'Fully responsive, accessible interface',
      'Dynamic content powered by Sanity CMS',
      'Optimized images and SEO-friendly architecture',
      'Automated CI/CD with GitHub Actions and Vercel',
    ],
    links: { live: 'https://www.sndk9.com/' },
  },
  {
    slug: 'next-sanity-template',
    title: 'Next.js + Sanity Starter',
    summary:
      'A public, production-ready starter for client websites: Next.js App Router with an embedded Sanity Studio, a block-based page builder, blog, and member login.',
    categories: ['Websites & CMS', 'Web Apps & Integrations'],
    image: { src: nextSanityTemplate, alt: 'Next.js and Sanity CMS template homepage' },
    details: [
      { label: 'Client', value: 'Open source' },
      { label: 'What I did', value: 'Architecture and full-stack development' },
      {
        label: 'Tools used',
        value: 'Next.js (App Router), Sanity CMS, TypeScript, Tailwind CSS, NextAuth',
      },
      { label: 'Completed', value: 'May 2024' },
      { label: 'Skills', value: 'Headless CMS architecture, content modeling, authentication' },
    ],
    body: [
      'Most marketing sites need the same foundation: pages editors can build themselves, a blog, forms, and a fast, SEO-friendly front end. This template packages that foundation so new client sites start from a proven base instead of from scratch.',
      'Sanity Studio is embedded directly in the Next.js app at /studio, so content and code deploy together. Editors compose pages from reusable blocks — hero, call to action, image gallery, video, forms, and blog post feeds — without developer involvement.',
      'It also includes a blog, a contact form, member accounts via NextAuth backed by Sanity, and a Vercel deploy plugin so editors can publish from the Studio.',
    ],
    highlights: [
      'Embedded Sanity Studio with a block-based page builder',
      'Blog, contact form, and dynamic CMS-driven pages',
      'Member login and profiles with NextAuth + Sanity',
      'One-click deploys from the Studio via Vercel',
    ],
    links: {
      live: 'https://next-sanity-template-sigma.vercel.app/',
      code: 'https://github.com/alyssariah/next-sanity-template',
    },
  },
  {
    slug: 'puppy-clickers',
    title: 'Puppy Clickers',
    summary:
      'A UX case study for a dog training website focused on positive reinforcement and clicker-based learning, created for the Google UX Design Certificate.',
    categories: ['UX & Product Design'],
    image: { src: puppyClickers, alt: 'Puppy Clickers sign-in screen design' },
    details: [
      { label: 'Client', value: 'Google UX Design Certificate' },
      { label: 'Project type', value: 'UX case study — web app design' },
      { label: 'Tools used', value: 'Figma, Adobe Illustrator, Google Forms' },
      { label: 'Completed', value: 'March 2024' },
      {
        label: 'Skills',
        value: 'User research, wireframing, prototyping, usability testing, visual design',
      },
    ],
    body: [
      'Puppy Clickers is a concept for a dog training website that uses positive reinforcement and clickers as training markers to help owners build better habits with their pets, following the full UX process from research to usability testing.',
      'Many online training resources are cluttered or overly technical. Low-fidelity wireframes established a simple flow — learn, practice, and reward through a digital clicker — and high-fidelity Figma mockups added an inviting palette, friendly typography, and large, accessible touch targets.',
      'Five participants tested the prototype. They found it enjoyable and easy to navigate, and suggested onboarding tips and clearer progress visuals, which informed the next iteration.',
    ],
    highlightsTitle: 'Design practices',
    highlights: [
      'Accessible color contrast and touch-friendly components',
      'Consistent design system and iconography',
      'Positive feedback through visuals and microinteractions',
      'Iterative improvements based on usability testing',
    ],
  },
  {
    slug: 'women-in-stem',
    title: 'Women in STEM',
    summary:
      'A UX case study for a web app empowering women in STEM through connection, mentorship, and community, created for the Google UX Design Certificate.',
    categories: ['UX & Product Design'],
    image: { src: womenInStem, alt: 'Women in STEM web app design' },
    details: [
      { label: 'Client', value: 'Google UX Design Certificate' },
      { label: 'Project type', value: 'UX case study — web app design' },
      { label: 'Tools used', value: 'Figma, Miro, Google Forms' },
      { label: 'Completed', value: 'May 2024' },
      {
        label: 'Skills',
        value:
          'User research, wireframing, prototyping, usability testing, information architecture',
      },
    ],
    body: [
      'Women in STEM is a concept for a social platform designed to connect, inspire, and support women across science, technology, engineering, arts, and mathematics — addressing the isolation and underrepresentation many experience in technical fields.',
      'Surveys and interviews showed users valued mentorship, resource sharing, and safe community spaces, with a clean interface that prioritized connection over competition. Wireframes focused on core journeys: creating a profile, joining groups, posting updates, and mentorship.',
      'Usability testing with five women in STEM confirmed the encouraging tone and intuitive layout, and surfaced requests for clearer onboarding and filtering posts by discipline — which informed key refinements.',
    ],
    highlightsTitle: 'Design practices',
    highlights: [
      'Human-centered research grounded in empathy and inclusivity',
      'Accessible color palette and responsive layouts',
      'Clear visual hierarchy and consistent design system',
      'Iterative improvements based on user testing',
    ],
  },
];

export const projects: readonly Project[] = projectData.map((p) => projectSchema.parse(p));

export const projectCategories: readonly ProjectCategory[] = projectCategorySchema.options;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
