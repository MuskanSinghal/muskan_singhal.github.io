module.exports = {
  siteTitle: 'Muskan Singhal | Graduate Student',
  siteDescription:
    'Graduate Student based in Arizona, specializing in building software applications and working with Machine Learning Models.',
  siteKeywords:
    'Muskan Singhal,software engineer, back-end engineer, web developer, javascript, arizona state university',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Muskan Singhal',
  location: 'Tempe, Arizona',
  email: 'muskan.singhal@asu.edu',
  github: 'https://github.com/MuskanSinghal',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/MuskanSinghal',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/muskansinghal',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/muskan_singhal/?hl=en',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
