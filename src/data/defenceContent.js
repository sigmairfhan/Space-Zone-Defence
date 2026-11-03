// // Content for the Defence page. Lives in its own file so it never conflicts with site.js / the home page data.
// // Import in Defence.jsx as: import { ... } from '../data/defenceContent.js'
// //
// // Anything that says 'xyzxyzxyz' is dummy text - replace it with your team's content.
// //
// // NOT in this file: the comparison tabs/rows (compareCriteria, compareTabs, compareHint).
// // They still come from site.js until the real comparison content is ready.
// //
// // ASSETS TO ADD (inside the Vite `public` folder):
// //   public/images/defence/missile-1.webp         -> image for missile 1
// //   public/images/defence/missile-2.webp         -> image for missile 2
// //   public/videos/fin-guidance.mp4               -> fin movement video
// //   public/images/defence/fin-guidance-poster.webp  (optional video poster)

// export const defenceHero = {
//   badge: 'Defence',
//   title: 'Indigenous defence technology',
//   accent: 'built in India',
//   text:
//     'Throttleable. Restartable. Non-explosive. Designed and manufactured entirely in India \u2014 with a strong domestic supply chain, reduced dependence on overseas suppliers, and a commitment to self-reliance. Our advanced vortex-hybrid propulsion technology is engineered to support India\u2019s growing aerospace and defence ecosystem, contributing to the vision of Atmanirbhar Bharat and strengthening India\u2019s indigenous propulsion capabilities.',
// }



// // ---------- Our Missiles ----------
// export const missiles = {
//   eyebrow: 'Our Missiles',
//   title: 'Indigenous Precision.',
//   accent: 'Engineered for India.',
//   text: 'SpaceZone Defence is advancing India’s defence capabilities through indigenous missile systems, hybrid propulsion technologies, and precision-driven aerospace engineering. The DHRAN missile series represents our commitment to innovation, strategic capability, and Atmanirbhar Bharat.',
//   note: 'Designed for India. Engineered for Precision. Driven by Innovation.',

//   items: [
//     {
//       name: 'DHRAN Mark-1',
//       variant: 'Multi-Role Supersonic Missile',
//       tagline: 'Versatile deployment. Supersonic performance. Indigenous innovation.',
//       image: '/images/defence/missile-1.jpg',

//       specs: [
//         { label: 'Range', value: '10–35 km' },
//         { label: 'Speed', value: 'Mach 1.5–2' },
//         { label: 'Warhead', value: 'High-Explosive' },
//         { label: 'Guidance System', value: 'GPS' },
//         { label: 'Launch Platform', value: 'Mobile / Fixed Launcher' },
//       ],

//       rolesTitle: 'Missile Classifications',
//       roles: [
//         'Surface-to-Surface (SSM)',
//         'Air-to-Surface (ASM)',
//         'Surface-to-Air (SAM)',
//         'Air-to-Air (AAM)',
//         'Sea-to-Surface (SSM)',
//         'Sea-to-Air (SAM)',
//       ],
//     },

//     {
//       name: 'DHRAN MK-2',
//       variant: 'Supersonic Surface-to-Surface Missile',
//       tagline: 'Extended range. Advanced navigation. Precision-focused engineering.',
//       image: '/images/defence/missile-2.jpg',

//       specs: [
//         { label: 'Range', value: '100 km' },
//         { label: 'Speed', value: 'Mach 2.5' },
//         { label: 'Warhead', value: 'High-Explosive / Smart Payload' },
//         { label: 'Guidance System', value: 'GPS + INS' },
//         { label: 'Launch Platform', value: 'Fixed Launch Pad' },
//       ],

//       rolesTitle: 'Missile Classification',
//       roles: [
//         'Surface-to-Surface (SSM)',
//       ],
//     },
//   ],
// };



// // ---------- Capability gap + comparison intro ----------
// export const gap = {
//   eyebrow: 'The Capability Gap',

//   title: 'Conventional propulsion has its limitations.',
//   accent: 'India needs indigenous innovation.',

//   paras: [
//     'Traditional propulsion technologies present engineering challenges in areas such as system complexity, operational flexibility, and integration. Addressing these challenges requires new approaches to aerospace propulsion.',
    
//     'India’s growing aerospace and defence ecosystem needs advanced indigenous technologies, supported by domestic engineering, research, and manufacturing capabilities.',
//   ],

//   strong: 'SpaceZone Defence is developing hybrid propulsion technologies to contribute to India’s next generation of indigenous aerospace and defence systems.',

//   hint: 'Explore our technology and engineering capabilities below.',

//   stats: [
//     {
//       value: 'Hybrid',
//       label: 'Advanced propulsion technology',
//     },
//     {
//       value: 'DHRAN',
//       label: 'Indigenous missile development programme',
//     },
//     {
//       value: 'UAV',
//       label: 'Tactical unmanned aerial systems',
//     },
//   ],
// }


// // ---------- Built in-house ----------
// export const builtHere = {
//   eyebrow: 'Built in India',
//   title: 'No overseas dependencies.',
//   accent: 'Engineered for self-reliance.',
//   text: 'SpaceZone Defence is committed to developing indigenous aerospace and defence technologies in India. From advanced hybrid propulsion systems to next-generation defence platforms, our focus is on strengthening domestic engineering, manufacturing capabilities, and supply chain independence.',
//   quote: 'Designed in India. Developed with purpose. Building the future of indigenous defence technology.',
// }

// // ---------- Technology ----------
// export const defenceTech = {
//   eyebrow: 'Our Technology',
//   title: 'Engineering the next generation of',
//   accent: 'Indian defence capabilities.',
//   text: 'Combining advanced aerospace engineering, hybrid propulsion technologies, AI-powered systems, and sustainable design principles, SpaceZone Defence is working towards secure, scalable, and innovative solutions for India’s evolving defence ecosystem.',
//   quote: 'Innovation through indigenous engineering. Technology driven by national ambition.',
//   quoteSource: 'SpaceZone Defence',
//   cardTitle: 'Indigenous Innovation',
//   cardText: 'Developing advanced propulsion systems, tactical UAVs, and next-generation defence technologies to support India’s aerospace and national security ambitions.',
// }


// // ---------- NEW: guidance / fin movement video ----------

// // ---------- Guidance / Fin Movement Video ----------
// export const guidance = {
//   eyebrow: 'Guidance & Control',

//   title: 'Intelligent motion sensing.',
//   accent: 'Responsive fin control technology.',

//   status: 'In Development',

//   text: 'SpaceZone Defence is developing an advanced electronic guidance and control system integrating gyroscopic sensors, acceleration sensing, and microcontroller-based control. The system monitors the platform’s movement and orientation, enabling electronic control of aerodynamic fin movement through an integrated control architecture.',

//   steps: [
//     {
//       title: 'Motion Sensing',
//       text: 'Gyroscopic and acceleration sensors monitor movement and orientation in real time.',
//     },
//     {
//       title: 'Electronic Processing',
//       text: 'An onboard microcontroller processes sensor information to coordinate the control system.',
//     },
//     {
//       title: 'Fin Control',
//       text: 'Electronic control signals operate the fin-actuation mechanism in response to the system’s control requirements.',
//     },
//   ],

//   video: '/videos/fin-guidance.mp4',

//   poster: '/images/defence/fin-guidance-poster.png',

//   caption: 'Exploring IMU-based motion sensing and microcontroller-controlled aerodynamic fin technology.',
// }

// // ---------- Active Programmes ----------
// export const programs = {
//   eyebrow: 'Our Programmes',
//   title: 'Advancing indigenous defence technologies.',
//   accent: 'Building capabilities for India.',
//   rows: [
//     {
//       name: 'Hybrid Propulsion Systems',
//       text: 'Developing advanced hybrid propulsion technologies for next-generation aerospace and defence applications.',
//       status: 'Active',
//     },
//     {
//       name: 'DHRAN Missile Programme',
//       text: 'Indigenous missile system development focused on advancing India’s aerospace and defence capabilities.',
//       status: 'Active',
//     },
//     {
//       name: 'Tactical UAV Systems',
//       text: 'Developing smart unmanned aerial platforms for emerging defence and homeland security requirements.',
//       status: 'Active',
//     },
//   ],
// }

// // ---------- CTA ----------
// export const defenceCta = {
//   title: 'Building India’s next generation of defence technology.',
//   accent: 'Let’s engineer what comes next.',
//   text: 'Connect with SpaceZone Defence to discuss indigenous aerospace technologies, propulsion systems, UAV platforms, and potential engineering collaborations.',
// }















// Content for the Defence page. Lives in its own file so it never conflicts with site.js / the home page data.
// Import in Defence.jsx as: import { ... } from '../data/defenceContent.js'
//
// Anything that says 'xyzxyzxyz' is dummy text - replace it with your team's content.
//
// ASSETS TO ADD (inside the Vite `public` folder):
//   public/images/defence/missile-1.webp         -> image for missile 1
//   public/images/defence/missile-2.webp         -> image for missile 2
//   public/videos/fin-guidance.mp4               -> fin movement video
//   public/images/defence/fin-guidance-poster.webp  (optional video poster)

export const defenceHero = {
  badge: 'Defence',
  title: 'Indigenous defence technology',
  accent: 'built in India',
  text:
    'Throttleable. Restartable. Non-explosive. Designed and manufactured entirely in India \u2014 with a strong domestic supply chain, reduced dependence on overseas suppliers, and a commitment to self-reliance. Our advanced vortex-hybrid propulsion technology is engineered to support India\u2019s growing aerospace and defence ecosystem, contributing to the vision of Atmanirbhar Bharat and strengthening India\u2019s indigenous propulsion capabilities.',
}



// ---------- Our Missiles ----------
export const missiles = {
  eyebrow: 'Our Missiles',
  title: 'Indigenous Precision.',
  accent: 'Engineered for India.',
  text: 'SpaceZone Defence is advancing India’s defence capabilities through indigenous missile systems, hybrid propulsion technologies, and precision-driven aerospace engineering. The DHRAN missile series represents our commitment to innovation, strategic capability, and Atmanirbhar Bharat.',
  note: 'Designed for India. Engineered for Precision. Driven by Innovation.',

  items: [
    {
      name: 'DHRAN Mark-1',
      variant: 'Multi-Role Supersonic Missile',
      tagline: 'Versatile deployment. Supersonic performance. Indigenous innovation.',
      image: '/images/defence/missile-1.jpg',

      specs: [
        { label: 'Range', value: '10–35 km' },
        { label: 'Speed', value: 'Mach 1.5–2' },
        { label: 'Warhead', value: 'High-Explosive' },
        { label: 'Guidance System', value: 'GPS' },
        { label: 'Launch Platform', value: 'Mobile / Fixed Launcher' },
      ],

      rolesTitle: 'Missile Classifications',
      roles: [
        'Surface-to-Surface (SSM)',
        'Air-to-Surface (ASM)',
        'Surface-to-Air (SAM)',
        'Air-to-Air (AAM)',
        'Sea-to-Surface (SSM)',
        'Sea-to-Air (SAM)',
      ],
    },

    {
      name: 'DHRAN MK-2',
      variant: 'Supersonic Surface-to-Surface Missile',
      tagline: 'Extended range. Advanced navigation. Precision-focused engineering.',
      image: '/images/defence/missile-2.jpg',

      specs: [
        { label: 'Range', value: '100 km' },
        { label: 'Speed', value: 'Mach 2.5' },
        { label: 'Warhead', value: 'High-Explosive / Smart Payload' },
        { label: 'Guidance System', value: 'GPS + INS' },
        { label: 'Launch Platform', value: 'Fixed Launch Pad' },
      ],

      rolesTitle: 'Missile Classification',
      roles: [
        'Surface-to-Surface (SSM)',
      ],
    },
  ],
};



// ---------- Capability gap + comparison intro ----------
export const gap = {
  eyebrow: 'The Capability Gap',

  title: 'Conventional propulsion has its limitations.',
  accent: 'India needs indigenous innovation.',

  paras: [
    'Traditional propulsion technologies present engineering challenges in areas such as system complexity, operational flexibility, and integration. Addressing these challenges requires new approaches to aerospace propulsion.',
    
    'India’s growing aerospace and defence ecosystem needs advanced indigenous technologies, supported by domestic engineering, research, and manufacturing capabilities.',
  ],

  strong: 'SpaceZone Defence is developing hybrid propulsion technologies to contribute to India’s next generation of indigenous aerospace and defence systems.',

  hint: 'Explore our technology and engineering capabilities below.',

  stats: [
    {
      value: 'Hybrid',
      label: 'Advanced propulsion technology',
    },
    {
      value: 'DHRAN',
      label: 'Indigenous missile development programme',
    },
    {
      value: 'UAV',
      label: 'Tactical unmanned aerial systems',
    },
  ],
}


// ---------- Comparison: Solid vs Liquid vs Space Zone approach ----------
// One entry in compareCriteria per row; each tab in compareTabs has one row per criterion, in the same order.
//   badge  = the short "simple words" pill      detail = the background text shown on hover / tap
//   tone   = 'good' (green) | 'bad' (red) | 'neutral' (blue) - sets the row colour
export const compareCriteria = [
  { title: 'Throttle & restart', icon: 'bi-speedometer2' },
  { title: 'Fuel safety', icon: 'bi-fire' },
  { title: 'System complexity', icon: 'bi-globe' },
  { title: 'Manufacturing base', icon: 'bi-gear-wide-connected' },
  { title: 'Range vs. long-range baseline', icon: 'bi-chevron-double-right' },
]

export const compareTabs = [
  {
    name: 'Solid',
    rows: [
      {
        tone: 'bad',
        badge: 'Fixed thrust, single burn',
        detail: 'Conventional motors follow a predetermined burn profile, without commanded throttling or restart after ignition.',
      },
      {
        tone: 'bad',
        badge: 'Energetic material hazard',
        detail: 'Combined fuel and oxidizer form an energetic propellant, requiring careful storage, transport and handling.',
      },
      {
        tone: 'good',
        badge: 'Simple, few parts',
        detail: 'Few moving parts simplify the motor, but combustion control remains limited once ignition begins.',
      },
      {
        tone: 'neutral',
        badge: 'Specialized supplier base',
        detail: 'Production requires specialized suppliers, dedicated facilities and rigorous quality checks.',
      },
      {
        tone: 'neutral',
        badge: 'Reference baseline',
        detail: 'Established solid-powered systems provide a reference for comparing range under equivalent mission conditions.',
      },
    ],
  },
  {
    name: 'Liquid',
    rows: [
      {
        tone: 'good',
        badge: 'Adjustable, restart-capable',
        detail: 'Suitable designs allow thrust adjustment and repeated ignition through coordinated propellant delivery and control.',
      },
      {
        tone: 'neutral',
        badge: 'Propellant-dependent hazards',
        detail: 'Propellant selection determines fire, toxicity and storage hazards; cryogenic combinations require temperature-controlled handling.',
      },
      {
        tone: 'bad',
        badge: 'Complex feed systems',
        detail: 'Separate fuel and oxidizer circuits require valves, plumbing and pressurization or pumping equipment.',
      },
      {
        tone: 'neutral',
        badge: 'Specialized infrastructure',
        detail: 'Production and operation require precision components, specialized facilities and propellant-specific ground equipment.',
      },
      {
        tone: 'neutral',
        badge: 'Configuration dependent',
        detail: 'Range depends on vehicle configuration and mission requirements; propulsion type alone does not establish an advantage.',
      },
    ],
  },
  {
    name: 'SpaceZone Hybrid ',
    rows: [
      {
        tone: 'good',
        badge: 'Adjustable, restart-capable',
        detail: 'Oxidizer flow control enables thrust adjustment, while a suitable ignition system supports restart capability.',
      },
      {
        tone: 'good',
        badge: 'Separately stored propellants',
        detail: 'Fuel and oxidizer are stored separately, reducing hazards associated with premixed propellants; oxidizer and pressure risks remain.',
      },
      {
        tone: 'good',
        badge: 'Simplified feed system',
        detail: 'A solid fuel grain eliminates the liquid fuel feed circuit, simplifying the propulsion arrangement.',
      },
      {
        tone: 'good',
        badge: 'Coordinated production',
        detail: 'Production combines fuel-grain fabrication, component manufacturing, motor assembly and qualification testing.',
      },
      {
        tone: 'neutral',
        badge: 'Validation required',
        detail: 'Any range improvement requires comparative analysis and testing against a defined reference vehicle.',
      },
    ],
  },
]

export const compareHint = 'Hover any row for detail · toggle between all three options'


// ---------- Built in-house ----------
export const builtHere = {
  eyebrow: 'Built in India',
  title: 'No overseas dependencies.',
  accent: 'Engineered for self-reliance.',
  text: 'SpaceZone Defence is committed to developing indigenous aerospace and defence technologies in India. From advanced hybrid propulsion systems to next-generation defence platforms, our focus is on strengthening domestic engineering, manufacturing capabilities, and supply chain independence.',
  quote: 'Designed in India. Developed with purpose. Building the future of indigenous defence technology.',
}

// ---------- Technology ----------
export const defenceTech = {
  eyebrow: 'Our Technology',
  title: 'Engineering the next generation of',
  accent: 'Indian defence capabilities.',
  text: 'Combining advanced aerospace engineering, hybrid propulsion technologies, AI-powered systems, and sustainable design principles, SpaceZone Defence is working towards secure, scalable, and innovative solutions for India’s evolving defence ecosystem.',
  quote: 'Innovation through indigenous engineering. Technology driven by national ambition.',
  quoteSource: 'SpaceZone Defence',
  cardTitle: 'Indigenous Innovation',
  cardText: 'Developing advanced propulsion systems, tactical UAVs, and next-generation defence technologies to support India’s aerospace and national security ambitions.',
}


// ---------- NEW: guidance / fin movement video ----------

// ---------- Guidance / Fin Movement Video ----------
export const guidance = {
  eyebrow: 'Guidance & Control',

  title: 'Intelligent motion sensing.',
  accent: 'Responsive fin control technology.',

  status: 'In Development',

  text: 'SpaceZone Defence is developing an advanced electronic guidance and control system integrating gyroscopic sensors, acceleration sensing, and microcontroller-based control. The system monitors the platform’s movement and orientation, enabling electronic control of aerodynamic fin movement through an integrated control architecture.',

  steps: [
    {
      title: 'Motion Sensing',
      text: 'Gyroscopic and acceleration sensors monitor movement and orientation in real time.',
    },
    {
      title: 'Electronic Processing',
      text: 'An onboard microcontroller processes sensor information to coordinate the control system.',
    },
    {
      title: 'Fin Control',
      text: 'Electronic control signals operate the fin-actuation mechanism in response to the system’s control requirements.',
    },
  ],

  video: '/videos/fin-guidance.mp4',

  poster: '/images/defence/fin-guidance-poster.png',

  caption: 'Exploring IMU-based motion sensing and microcontroller-controlled aerodynamic fin technology.',
}

// ---------- Active Programmes ----------
export const programs = {
  eyebrow: 'Our Programmes',
  title: 'Advancing indigenous defence technologies.',
  accent: 'Building capabilities for India.',
  rows: [
    {
      name: 'Hybrid Propulsion Systems',
      text: 'Developing advanced hybrid propulsion technologies for next-generation aerospace and defence applications.',
      status: 'Active',
    },
    {
      name: 'DHRAN Missile Programme',
      text: 'Indigenous missile system development focused on advancing India’s aerospace and defence capabilities.',
      status: 'Active',
    },
    {
      name: 'Tactical UAV Systems',
      text: 'Developing smart unmanned aerial platforms for emerging defence and homeland security requirements.',
      status: 'Active',
    },
  ],
}

// ---------- CTA ----------
export const defenceCta = {
  title: 'Building India’s next generation of defence technology.',
  accent: 'Let’s engineer what comes next.',
  text: 'Connect with SpaceZone Defence to discuss indigenous aerospace technologies, propulsion systems, UAV platforms, and potential engineering collaborations.',
}