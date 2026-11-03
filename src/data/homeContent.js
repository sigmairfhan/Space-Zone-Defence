// src/data/homeContent.js
// Home page copy for Space Zone Defence (group company of Space Zone India).
// Facts below come from spacezoneindia.com. Items marked CONFIRM are positioning
// statements your team should verify before going live.

export const hero = {
  badge: 'Defence • Hybrid Propulsion • Space',
  title: 'Hybrid propulsion for',
  accent: "India's defence missions.",
  text:
    'Space Zone Defence builds on the restart and reusable hybrid rocket technology proven by Mission RHUMI Twin, bringing safer, throttleable propulsion and hands-on engineering capability to the defence ecosystem.',
}

export const challenge = {
  eyebrow: 'The challenge',
  title: 'Building a stronger,',
  accent: 'more capable space-tech base in India',
  text:
    "India's space and defence sectors are growing fast, but two gaps remain: a shortage of engineers who have flown real hardware, and propulsion that is costly to test and impossible to reuse.",
  items: [
    {
      n: '01',
      title: 'Too little hands-on rocketry experience',
      text:
        'Most students and young engineers learn rockets and satellites from textbooks. Few get to design, solder, integrate and launch real payloads before they enter the industry.',
    },
    {
      n: '02',
      title: 'Single-use, hard-to-control propulsion',
      text:
        'Conventional solid motors burn on a fixed profile and cannot be restarted. Hybrid motors can be shut down, restarted and reused, which lowers the cost and risk of every test and flight.',
    },
  ],
  stats: [
    { value: '4,000+', label: 'School and college students took part in the Mission RHUMI Twin satellite programme' },
    { value: '100%', label: 'Success rate across all Space Zone India missions' },
  ],
}

export const whyNow = {
  title: 'Why it matters now',
  text:
    "On 10 October 2026, Space Zone India launched Mission RHUMI Twin from Thiruvidandhai, Tamil Nadu: India's first twin hybrid rocket launch, building on Mission RHUMI-2024, India's first reusable hybrid rocket. The technology is proven in flight. The next step is taking hybrid propulsion from student and research missions to defence-grade programmes.",
}

export const solve = {
  eyebrow: 'How Space Zone solves it',
  title: 'A restartable, reusable hybrid rocket.',
  accent: 'Designed and flown in Tamil Nadu.',
  paras: [
    "Mission RHUMI Twin carried forward the restart and reuse approach of Mission RHUMI-2024, which flew 3 CubeSats and 50 PicoSats on India's first reusable hybrid rocket.",
    'The team, led by Dr. Anand Megalingam, develops the propulsion, avionics, ground station and recovery planning in-house, and brings students into satellite design, soldering and PCB work.',
  ],
  cards: [
    {
      label: 'Performance',
      title: 'Restart and reuse in one rocket',
      text:
        'A hybrid propulsion system that can be shut down, restarted and recovered after flight, as demonstrated by Mission RHUMI Twin.',
    },
    {
      label: 'Engineering',
      title: 'Built in-house, tracked live',
      text:
        'Avionics ground station, flight trajectory dashboards, sea-recovery planning and static-fire monitoring are all developed by our own engineers.',
    },
  ],
  callout: {
    strong: '100% mission success',
    text:
      'Every Space Zone India mission to date, from high-altitude balloon satellites in 2021 to RHUMI Twin in 2026, has met its objectives.',
  },
}

export const strategic = {
  eyebrow: 'Why hands-on flight experience matters',
  title: "Launching isn't just a demonstration.",
  accent: 'It builds a space workforce.',
  text:
    'Each mission puts real payloads, real avionics and real students into the programme. That experience is what produces engineers who can move straight into propulsion, avionics and defence work.',
  stats: [
    { value: '3', label: 'CubeSats flown on Mission RHUMI-2024' },
    { value: '50', label: 'PicoSats flown on Mission RHUMI-2024' },
    { value: '150', label: 'PicoSats on the Dr. APJ Abdul Kalam SLV Mission, 2023' },
    { value: '100', label: 'FEMTO satellites deployed by balloon in 2021' },
  ],
}

export const technology = {
  eyebrow: 'The technology',
  title: 'The hybrid propulsion platform.',
  accent: 'One approach, three missions.',
  text:
    'Our hybrid rocket technology, proven through the RHUMI missions, serves defence, launch and satellite programmes.',
  cards: [
    {
      n: '01',
      color: 'blue',
      title: 'Defence propulsion',
      text:
        'Throttleable, restartable hybrid motors for defence applications. Hybrid fuel burns instead of detonating, which makes storage and handling safer than conventional solid motors.',
      to: '/defence',
      cta: 'Defence propulsion',
    },
    {
      n: '02',
      color: 'lime',
      title: 'Reusable launch vehicle',
      text:
        "Built on Mission RHUMI-2024 and RHUMI Twin: India's first reusable hybrid rocket and first twin hybrid launch, with mobile launch capability.",
      to: '/defence',
      cta: 'Launch vehicles',
    },
    {
      n: '03',
      color: 'sky',
      title: 'Satellite and payload systems',
      text:
        'Femto, Pico and CubeSat payloads designed and integrated with students and partner institutions, from balloon launches to rocket and drone deployment.',
      to: '/defence',
      cta: 'Payload systems',
    },
  ],
}