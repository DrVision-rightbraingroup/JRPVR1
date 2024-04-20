// tailwind.config.js

import { join } from 'path';

export const content = [
  join(__dirname, 'src/**/*.{vue,html,js,ts,jsx,tsx}'),
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-custom': 'linear-gradient(130deg, #0D3B66 0%, #BFD7EA 100%)',
    },
    colors: {
      'strong-deep-blue': '#0D3B66',
      'strong-metallic-silver': '#8D99AE',
      'bright-ice-blue': '#BFD7EA',
      'rich-navy-blue': '#1B2A41',
      'vivid-warm-highlight': '#D84A05',
    },
    spacing: {
      '18': '4.5rem', // equivalent to 72px
      '24': '6rem', // equivalent to 96px
    },
  },
};

export const plugins = [];