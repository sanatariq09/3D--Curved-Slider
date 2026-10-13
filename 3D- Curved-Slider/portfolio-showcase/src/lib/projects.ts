import soft from '@/assets/project-0.jpg';
import sunshine from '@/assets/project-1.jpg';
import wild from '@/assets/project-2.jpg';
import move from '@/assets/project-3.jpg';
import essential from '@/assets/project-4.jpg';
import fashion from '@/assets/project-5.jpg';
import architecture from '@/assets/project-6.jpg';
import berry from '@/assets/berry-drink.jpg';

export const projects = [
  { name: 'Soft Ritual', category: 'Beauty · Art direction', image: soft, panel: 0, description: 'A softer perspective on everyday rituals. A considered visual identity and campaign concept for modern skincare.' },
  { name: 'A Little Sunshine', category: 'Beverage · Brand identity', image: sunshine, panel: 1, description: 'An uplifting brand concept with a bright palette, playful product imagery, and a refreshing point of view.' },
  { name: 'Into the Wild', category: 'Travel · Digital experience', image: wild, panel: 2, description: 'An immersive editorial concept inspired by the paths less travelled and the quiet beauty of the natural world.' },
  { name: 'Built to Move', category: 'Lifestyle · Campaign design', image: move, panel: 3, description: 'A bold campaign concept that brings together movement, contrast, and expressive product storytelling.' },
  { name: 'The Essential', category: 'Skincare · Visual identity', image: essential, panel: 4, description: 'A minimal skincare concept where tactile details, thoughtful composition, and natural tones take centre stage.' },
  { name: 'Everyday, Elevated', category: 'Fashion · Editorial design', image: fashion, panel: 5, description: 'An editorial direction celebrating timeless silhouettes, effortless style, and the beauty of simplicity.' },
  { name: 'Room to Breathe', category: 'Architecture · Web design', image: architecture, panel: 6, description: 'A nature-led architectural concept that connects thoughtful spaces with a calm, immersive digital experience.' },
  { name: 'Berry Good', category: 'Beverage · Packaging concept', image: berry, panel: null, description: 'A fresh, fruit-forward packaging and campaign concept, brought to life with vivid colour and playful compositions.' },
];

export type Project = (typeof projects)[number];