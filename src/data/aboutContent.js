// Content for the About page. Lives in its own file so it never conflicts with site.js / the home page data.
// Imported by src/pages/About.jsx as: import { about } from "../data/aboutContent.js"


export const about = {
  // Team photo banner (wide image above the "How we work" section)
  teamBanner: '/images/about-team.jpeg',

  hero: {
    badge: 'About Space Zone Defence',
    title: 'Indigenous propulsion and defence technology, built in India.',
    text:
      'Space Zone Defence is the defence division of Space Zone India, committed to strengthening India’s defence capability through indigenous, high-performance technology — from hybrid propulsion to missile systems and tactical UAVs.',
  },

  // NEW section (added to About.jsx) - mission & vision from the company doc
  mission: {
    eyebrow: 'Mission & Vision',
    title: 'What drives us',
    cards: [
      {
        label: 'Mission',
        title: 'Safeguard the nation',
        text:
          'To design, develop and deliver cutting-edge missile systems, hybrid propulsion technologies and smart defence solutions that safeguard our nation and support allied forces.',
      },
      {
        label: 'Vision',
        title: 'Precision that protects',
        text:
          'To deliver precision-driven defence solutions that protect borders, empower forces and inspire technological excellence.',
      },
    ],
  },

  story: {
    eyebrow: 'Our story',
    title: 'From hybrid propulsion research to defence-grade systems',
    quote:
      'We focus on hybrid missile propulsion systems, tactical UAVs and next-generation defence solutions — built in India, for India.',
    text:
      'Space Zone Defence was founded in 2025 as the defence arm of Space Zone India, the Chennai-based aerospace company behind India’s reusable hybrid rocket missions. By combining advanced aerospace engineering, AI-powered systems and sustainable design principles, we are developing secure, smart and scalable platforms to support the armed forces and homeland security operations. Our work is grounded in real hardware: every system is designed, tested and refined in-house, and proven through static-fire and flight testing.',
    founder: {
      name: 'Dr. Anand Megalingam',
      role: 'Founder & CEO',
      text:
        'Dr. Anand Megalingam is the founder and CEO of Space Zone India and Space Zone Defence, and has served as Mission Director for the company’s hybrid rocket launches, including Mission RHUMI. Raised in a modest rural family, he earned his way into aerospace engineering, graduating with a gold medal, and went on to be selected by the U.S. Department of State for an international leadership programme that included exposure to NASA facilities. He has built the company from the ground up on one idea: that India can design, build and fly its own advanced propulsion technology.',
      photo: '/images/team/founder.webp',
    },
  },

  timeline: [
    {
      year: '2025',
      title: 'Space Zone Defence begins',
      text:
        'Space Zone Defence is established as the defence division of Space Zone India, and begins research and development in hybrid rockets and propulsion \u2014 laying the technical foundation for our systems.',
    },
    {
      year: '2026',
      title: 'Horizontal and vertical testing',
      text:
        'Horizontal static-fire testing of our hybrid motors begins, followed by successful vertical testing \u2014 bringing our systems closer to flight-ready, operational defence platforms.',
    },
  ],

  board: {
    eyebrow: 'Leadership',
    title: 'Board of Directors',
    members: [
      { role: 'Chairman of the Board', name: 'Megalingam', photo: '/images/team/chairman.jpg' },
      { role: 'Chief Executive Officer', name: 'Dr. Anand Megalingam', photo: '/images/team/founder.webp' },
      { role: 'Independent Board Member', name: 'Neemu', photo: '/images/team/independent-director.jpg' },
    ],
  },

  advisors: {
    title: 'Advisors to the Board of Directors',
    people: [
      {
        name: 'Dr. G. Satheesh Reddy',
        role:
          'Aerospace scientist; former Chairman of DRDO (2018–2022) and Secretary, Department of Defence R&D.',
        note:
          'Led India’s premier defence research organisation as its thirteenth chairman. Advises Space Zone Defence on indigenous defence technology and programme strategy.',
        photo: '/images/team/satheesh-reddy.jpg',
      },
      {
        name: 'Dr. Mylswamy Annadurai',
        role:
          'Padma Shri awardee; former Director, ISRO Satellite Centre; Vice-Chairman, Tamil Nadu State Council for Science and Technology.',
        note:
          'Widely known as the “Moon Man of India” for his leadership of the Chandrayaan programme. Advises on aerospace systems and space-technology development.',
        photo: '/images/team/mylswamy-annadurai.jpg',
      },
      {
        name: 'A. S. Rajan, IPS (Retd.)',
        role:
          '1987-batch IPS officer; former Special Director, Intelligence Bureau and former Director, SVP National Police Academy, Hyderabad.',
        note:
          'Brings over 36 years of experience in policing, intelligence and internal security. Advises on security, homeland-defence requirements and institutional engagement.',
        photo: '/images/team/as-rajan.jpg',
      },
    ],
  },

  campus: {
    eyebrow: 'How we work',
    title: 'Design, test, fly — all under one roof',
    text:
      'From first calculation to flight test, our engineers own the full development cycle. Working alongside Space Zone India, we draw on shared propulsion know-how, test infrastructure and launch experience.',
    cards: [
      {
        tone: 'navy',
        label: 'Design',
        title: 'Engineering & simulation',
        text: 'CFD, trajectory and Monte Carlo simulation guide every design before hardware is built.',
      },
      {
        tone: 'blue',
        label: 'Test',
        title: 'Static-fire testing',
        text: 'Hybrid motors are proven on the test stand, first horizontally and now vertically.',
      },
      {
        tone: 'navy',
        label: 'Fly',
        title: 'Flight & recovery',
        text: 'Instrumented flight tests with real-time telemetry, ground-station tracking and recovery.',
      },
    ],
  },

  cta: {
    title: 'Build India’s defence future with us',
    text:
      'Whether you are a defence agency, a research partner or an engineer who wants to work on real propulsion hardware, we would like to hear from you.',
  },
}