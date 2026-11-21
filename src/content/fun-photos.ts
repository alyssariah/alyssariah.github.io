import campingFam from '@/assets/fun/camping-fam.webp';
import kayakRiver from '@/assets/fun/kayak-river.webp';
import running5k from '@/assets/fun/running-5k.webp';

export const funPhotos = [
  {
    image: kayakRiver,
    alt: 'Kayaking on a river with my dog',
    caption: 'There’s no place like 127.0.0.1.',
  },
  {
    image: campingFam,
    alt: 'Camping with my family and dogs',
    caption: 'There’s no cloud. It’s just someone else’s computer.',
  },
  {
    image: running5k,
    alt: 'Running a 5K race',
    caption: 'I would tell you a joke about recursion… but you’ll have to wait until you get it.',
  },
] as const;
