export const aboutData: { description: string }[] = [
  {
    description: `I am a senior-year student pursuing Computer Science Engineering. Aiming to be a psychologist in high school, life changed when I realised I enjoy learning about computers more. 

  My tech stack primarily consists of ReactJS + TailwindCSS + NodeJS. I'm open to learning and working in new stack, too. I enjoy creating CLI-Utilities and how you can immediately ease the banal obligations (eugh)!

  I've participated in hackathons and am open to contribute to new teams. Other than professional interests, I am extremely fascinated by psychology and am currently (trying to!) read Carl Jung. I spend my free time playing chess online, and find solace in (sporadic!) martial arts sessions. 
  `,
  },
];

export const personalData: { name: string; email: string }[] = [
  {
    name: "Lipi Sharma",
    email: "lipisharma2911@gmail.com",
  },
];

export const skillData: {
  frontend: string[];
  backend: string[];
  tools: string[];
  languages: string[];
  operating_system: string[];
}[] = [
  {
    frontend: ["ReactJs", "TailwindCSS", "Javascript", "NextJS"],
    backend: ["NodeJS", "ExpressJS"],
    tools: ["Docker", "Git", "Postman", "GnuPG"],
    languages: ["Javascript", "GoLang", "C++", "Python"],
    operating_system: ["MacOS", "Linux"],
  },
];

export const projectData: {
  name: string;
  shortDescription: string;
  link: string;
  techStack: string[];
}[] = [
  {
    name: "SecretKeyper",
    shortDescription: "Secure password store CLI utility",
    link: "https://github.com/ReticentFacade/secretKeyper",
    techStack: ["GoLang", "GnuPG", "NodeJS", "MongoDB", "ReactJS"],
  },
  {
    name: "Covershop",
    shortDescription: "E-commerce site for customizable mobile covers",
    link: "https://covershop.vercel.app/",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Shadcn/ui"],
  },
  {
    name: "Seed-to-sip",
    shortDescription: "E-commerce site to help farmers sell coffee beans",
    link: "https://seedtosip.vercel.app/",
    techStack: ["ReactJs", "PostgreSQL", "NodeJS", "ExpressJs"],
  },
  // {
  //   name: "",
  //   shortDescription: "",
  //   link: "",
  //   techStack: [""],
  // },
];

export const educationData: {
  major: string;
  gpa: number;
  institution: string;
}[] = [

];

export const volunteerData: {
  org: string;
  time: Date;
}[] = [];
