import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sydney Pun', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sydney Pun',
  subtitle: 'Aspiring Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Senior Undergraduate at the University of California, Riverside pursuing a degree in Computer Science! I plan to graduate Winter 2021.',
  paragraphTwo:
    'Currently, I am a researcher for Dr. Wenxiu Ma. As a researcher, I am using statistical methods to handle big data motivated by genomics. Our team is working hard at building a HI-C dashboard.',
  paragraphThree: 'Please feel free to reach out to me with the contact me link below!',
  resume: 'https://drive.google.com/file/d/1WUM8VXVwPQ-TKnt2Eutvn1Bn1tO3yrSD/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.jpg',
    title: 'Internship Web Crawler',
    info:
      'First, we parse the skills section of the resume for the user. Then, we index those skills and crawl Indeed.com to return the top 5 internship opportunities in accordance to the skills section of the user.',
    info2: '',
    url: 'https://github.com/sydneypun/Internship-Web-Crawler',
    repo: 'https://github.com/sydneypun/Internship-Web-Crawler', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.jpg',
    title: 'Global Wildfire Analysis',
    info:
      'Using Explanatory Data Analysis and Machine Learning techniques to analyze and wildfire trends globally.',
    info2: '',
    url: 'https://github.com/sydneypun/cs105-prj-phase3-potato',
    repo: 'https://github.com/sydneypun/cs105-prj-phase3-potato', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.jpg',
    title: 'RMatch',
    info:
      'The CSE Department at UCR has an initiative to hire more Undergraduate students. This senior design project involves buiding a platform to match students and faculty members together.',
    info2: '',
    url: 'https://github.com/CS178A-B/final-project-jmsv',
    repo: 'https://github.com/CS178A-B/final-project-jmsv', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'spun001@ucr.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sydney-pun-78a35a121/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sydneypun',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/punfucius',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/punfucius',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
