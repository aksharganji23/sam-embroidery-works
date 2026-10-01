/* =========================================================
   SAM EMBROIDERY & MAGGAM DESIGNS
   Website Content & Image Configuration
========================================================= */

export const contact = {
  mahi: '7995109004',
  shiva: '7842220004',
  email: 'samembroiderydesigns@gmail.com',
  instagram: 'sam_embroidery_designs',
  address:
    'Siri Nilayam, Plot No-5, Lane No-2, Jagdeesh Nagar Colony, Near Rasoolpura Metro Station, Begumpet, Hyderabad-03.',
};

/* =========================================================
   WHATSAPP
========================================================= */

export const wa = 'https://wa.me/917995109004';

/* =========================================================
   IMAGE TYPE
========================================================= */

export type ImageItem = {
  src: string;
  title: string;
  category: string;
  alt: string;
};

/* =========================================================
   IMAGE BASE PATH
========================================================= */

const image = (filename: string) =>
  `/images/crops/${filename}`;

/* =========================================================
   SERVICES
========================================================= */

export const services = [
  {
    title: 'Saree & Blouse Designing',
    desc: 'Intricate detailing tailored to your fabric, style and occasion.',
    icon: '✦',
    image: image('women-blouse.jpg'),
  },

  {
    title: 'Maggam Work',
    desc: 'Rich bridal detailing with traditional motifs and dimensional finish.',
    icon: '✧',
    image: image('maggam-jewelry.jpg'),
  },

  {
    title: 'Aari Work',
    desc: 'Fine thread artistry for elegant borders, necklines and motifs.',
    icon: '❋',
    image: image('maggam-aari.jpg'),
  },

  {
    title: 'Zardosi Work',
    desc: 'Metallic embroidery accents for a refined festive look.',
    icon: '◇',
    image: image('maggam-zardosi.jpg'),
  },

  {
    title: 'Lehenga Designs',
    desc: 'Statement embroidery for bridal and celebration wear.',
    icon: '✺',
    image: image('lehenga.jpg'),
  },

  {
    title: 'Sherwani Designs',
    desc: 'Regal embroidery for weddings and formal occasions.',
    icon: '✦',
    image: image('men-sherwani.jpg'),
  },

  {
    title: 'Kurta Designs',
    desc: 'Elegant thread and zari work for a festive wardrobe.',
    icon: '✧',
    image: image('men-kurta.jpg'),
  },

  {
    title: 'T-Shirt Logo Embroidery',
    desc: 'Custom logos for businesses, teams, colleges and events.',
    icon: '◈',
    image: image('custom-tshirt.jpg'),
  },

  {
    title: 'Photo Printing on T-Shirts',
    desc: 'Personal photographs turned into wearable keepsakes.',
    icon: '▣',
    image: image('custom-photo.jpg'),
  },

  {
    title: 'Jeans Logo Customization',
    desc: 'Custom patches, logos and embroidery for denim.',
    icon: '◆',
    image: image('custom-jeans.jpg'),
  },

  {
    title: 'Bags & Accessories',
    desc: 'Personalized embroidery for useful everyday pieces.',
    icon: '◇',
    image: image('bag-accessory.jpg'),
  },

  {
    title: 'Customized Photo Frames',
    desc: 'Personalized memories designed with care.',
    icon: '▣',
    image: image('photo-frame.jpg'),
  },

  {
    title: 'Saree Draping',
    desc: 'A polished finishing touch for special occasions.',
    icon: '✦',
    image: image('women-saree.jpg'),
  },

  {
    title: 'Bulk Orders',
    desc: 'Customization support for teams, events and group orders.',
    icon: '∞',
    image: image('embroidery-tools.jpg'),
  },
];

/* =========================================================
   WOMEN'S COLLECTION
========================================================= */

export const women: ImageItem[] = [
  {
    src: image('women-blouse.jpg'),
    title: 'Blouse Designs',
    category: 'Blouse',
    alt: 'Luxury Indian blouse with detailed Maggam embroidery',
  },

  {
    src: image('women-saree.jpg'),
    title: 'Saree Designs',
    category: 'Saree',
    alt: 'Indian saree with detailed embroidered border',
  },

  {
    src: image('women-sleeve.jpg'),
    title: 'Sleeve Designs',
    category: 'Sleeves',
    alt: 'Detailed embroidered blouse sleeve design',
  },

  {
    src: image('women-neck.jpg'),
    title: 'Neck Designs',
    category: 'Neck',
    alt: 'Luxury embroidered blouse neckline',
  },

  {
    src: image('lehenga.jpg'),
    title: 'Lehenga Designs',
    category: 'Lehenga',
    alt: 'Indian bridal lehenga with ornate embroidery',
  },

  {
    src: image('dupatta.jpg'),
    title: 'Dupatta Designs',
    category: 'Dupatta',
    alt: 'Embroidered Indian dupatta with floral detailing',
  },
];

/* =========================================================
   MEN'S COLLECTION
========================================================= */

export const men: ImageItem[] = [
  {
    src: image('men-sherwani.jpg'),
    title: 'Sherwani',
    category: 'Sherwani',
    alt: 'Cream Indian sherwani with detailed gold embroidery',
  },

  {
    src: image('men-kurta.jpg'),
    title: 'Kurta',
    category: 'Kurta',
    alt: 'Elegant embroidered Indian kurta',
  },

  {
    src: image('men-jodhpuri.jpg'),
    title: 'Jodhpuri',
    category: 'Jodhpuri',
    alt: 'Royal navy Jodhpuri jacket with gold embroidery',
  },

  {
    src: image('men-waistcoat.jpg'),
    title: 'Waistcoats',
    category: 'Waistcoat',
    alt: 'Embroidered traditional Indian waistcoat',
  },
];

/* =========================================================
   MAGGAM WORK
========================================================= */

export const maggam: ImageItem[] = [
  {
    src: image('maggam-zardosi.jpg'),
    title: 'Zardosi Work',
    category: 'Zardosi',
    alt: 'Close-up of intricate gold Zardosi embroidery',
  },

  {
    src: image('maggam-aari.jpg'),
    title: 'Aari Work',
    category: 'Aari',
    alt: 'Detailed floral Aari embroidery on rich green fabric',
  },

  {
    src: image('maggam-moti.jpg'),
    title: 'Moti Work',
    category: 'Moti',
    alt: 'Pearl and Moti embroidery detailing',
  },

  {
    src: image('maggam-stone.jpg'),
    title: 'Stone Work',
    category: 'Stone',
    alt: 'Decorative stone and floral embroidery',
  },

  {
    src: image('maggam-bead.jpg'),
    title: 'Bead Work',
    category: 'Bead',
    alt: 'Detailed bead embroidery on luxury fabric',
  },

  {
    src: image('maggam-sequin.jpg'),
    title: 'Sequin Work',
    category: 'Sequin',
    alt: 'Elegant sequin and floral embroidery',
  },
];

/* =========================================================
   CUSTOMIZATION
========================================================= */

export const customization: ImageItem[] = [
  {
    src: image('custom-tshirt.jpg'),
    title: 'T-Shirt Logos',
    category: 'T-Shirt',
    alt: 'Custom logo printed on a white T-shirt',
  },

  {
    src: image('custom-photo.jpg'),
    title: 'Photo Printing',
    category: 'Photo Printing',
    alt: 'Family photograph printed on a T-shirt',
  },

  {
    src: image('custom-jeans.jpg'),
    title: 'Jeans Logos',
    category: 'Jeans',
    alt: 'Customized embroidery design on denim jeans',
  },

  {
    src: image('bag-accessory.jpg'),
    title: 'Bags & Accessories',
    category: 'Accessories',
    alt: 'Embroidered personalized fabric tote bag',
  },

  {
    src: image('photo-frame.jpg'),
    title: 'Photo Frames',
    category: 'Photo Frames',
    alt: 'Personalized family photo frames',
  },

  {
    src: image('embroidery-tools.jpg'),
    title: 'Custom Embroidery',
    category: 'Embroidery',
    alt: 'Traditional embroidery tools and threads',
  },
];

/* =========================================================
   T-SHIRT LOGOS
========================================================= */

export const tshirtLogos: ImageItem[] = [
  {
    src: image('custom-tshirt.jpg'),
    title: 'Custom T-Shirt Logo',
    category: 'Business',
    alt: 'Custom logo design on white T-shirt',
  },

  {
    src: image('custom-photo.jpg'),
    title: 'Photo T-Shirt',
    category: 'Personal',
    alt: 'Personal photo printed on T-shirt',
  },

  {
    src: image('custom-jeans.jpg'),
    title: 'Custom Apparel',
    category: 'Custom',
    alt: 'Customized apparel design',
  },
];

/* =========================================================
   PHOTO PRINTING
========================================================= */

export const photoPrinting: ImageItem[] = [
  {
    src: image('custom-photo.jpg'),
    title: 'Family Photos',
    category: 'Family',
    alt: 'Family photograph printed on clothing',
  },

  {
    src: image('photo-frame.jpg'),
    title: 'Memories',
    category: 'Memories',
    alt: 'Family photographs displayed in elegant frames',
  },

  {
    src: image('celebration-group.jpg'),
    title: 'Special Moments',
    category: 'Celebration',
    alt: 'Friends and family celebrating together',
  },
];

/* =========================================================
   FULL WEBSITE GALLERY
========================================================= */

export const gallery: ImageItem[] = [
  /* ---------------- WOMEN ---------------- */

  ...women,

  /* ---------------- MEN ---------------- */

  ...men,

  /* ---------------- MAGGAM ---------------- */

  ...maggam,

  /* ---------------- CUSTOMIZATION ---------------- */

  {
    src: image('custom-tshirt.jpg'),
    title: 'Custom T-Shirt Logos',
    category: 'Customization',
    alt: 'Custom T-shirt logo design',
  },

  {
    src: image('custom-photo.jpg'),
    title: 'Photo Printing',
    category: 'Customization',
    alt: 'Photo printed T-shirt design',
  },

  {
    src: image('custom-jeans.jpg'),
    title: 'Jeans Logos',
    category: 'Customization',
    alt: 'Custom jeans logo design',
  },

  {
    src: image('bag-accessory.jpg'),
    title: 'Bags & Accessories',
    category: 'Customization',
    alt: 'Personalized embroidered bag',
  },

  {
    src: image('photo-frame.jpg'),
    title: 'Customized Photo Frames',
    category: 'Customization',
    alt: 'Customized family photo frames',
  },

  /* ---------------- STUDIO ---------------- */

  {
    src: image('embroidery-tools.jpg'),
    title: 'The Art Of Embroidery',
    category: 'Craftsmanship',
    alt: 'Embroidery threads and traditional embroidery tools',
  },

  {
    src: image('celebration-group.jpg'),
    title: 'Celebration Collection',
    category: 'Our Work',
    alt: 'Indian celebration fashion collection',
  },
];

/* =========================================================
   HERO IMAGE
========================================================= */

export const heroImage = {
  src: image('maggam-jewelry.jpg'),
  alt: 'Luxury Maggam embroidery with gold and gemstone detailing',
};

/* =========================================================
   INTRODUCTION IMAGE
========================================================= */

export const introImage = {
  src: image('celebration-group.jpg'),
  alt: 'Indian celebration fashion collection',
};

/* =========================================================
   CUSTOMIZATION FEATURE IMAGE
========================================================= */

export const customizationImage = {
  src: image('custom-tshirt.jpg'),
  alt: 'Custom T-shirt personalization',
};

/* =========================================================
   EMBROIDERY FEATURE IMAGE
========================================================= */

export const embroideryFeatureImage = {
  src: image('embroidery-tools.jpg'),
  alt: 'Traditional embroidery tools and threads',
};