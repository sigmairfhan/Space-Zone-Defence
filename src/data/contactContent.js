// Contact details for Space Zone Defence. Lives in its own file so it never conflicts with site.js.
// Used by pages/Contact.jsx and components/Footer.jsx.

export const contactInfo = {
  email: 'contact@spacezoneindia.com',
  hq: {
    name: 'Spacezone Defence Pvt Ltd.',
    lines: [
      'No: 926/4(A2), Devendra Avenue,',
      'Koman Nagar, Thaiyur,',
      'Chennai - 603103,',
      'Tamil Nadu, India.',
    ],
  },
}

// One-line version for the footer copyright row
export const contactAddressLine = [contactInfo.hq.name, ...contactInfo.hq.lines].join(' ')