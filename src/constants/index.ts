import {
  mobile,
  backend,
  ubi,
  sen,
  assec,
  code,
  creator,
  web,
  javascript,
  py,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  bootstrap,
  figma,
  reactNative,
  humanBodyPose,
  thisPortfolio,
  valentine,
  hangman,
  portfolio_vid,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "React Native",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "CMS Integration",
    icon: backend,
  },
  {
    title: "Responsive",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
]

const experiences = [
  {
    title: "Web Developer",
    company_name: "Assec sim",
    icon: assec,
    iconBg: "#383E56",
    date: "Jul 2024 - at present",
    points: [
      "Developing and maintaining web and mobile applications using React Native and Bootstrap.",
      "Collaborating with cross-functional teams including designers, product managers and other developers.",
      "Implementing responsive design, ensuring cross-browser compatibility, unit testing, ERP (Enterprise Resource Planning) and CRM (Customer Relanshionship Managment).",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Web Design.",
    ],
  },
  {
    title: "Recognition of Merit",
    company_name: "University of Beira Interior",
    icon: ubi,
    iconBg: "#383E56",
    date: "15 May 2024",
    points: ["Dissertation in Sports Sciences - 18/20"],
  },
  {
    title: "Software Engineer",
    company_name: "SensoMatt",
    icon: sen,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Use Python to detect and analyze the COCO and MPII datasets, extracting images with keypoint annotations of humans in various poses and everyday activities.",
      "Compare and analyze both models in terms of precision and accuracy using metrics such as percentage error (PE), percentage of correct keypoints (PCK), mean per-joint position error (MPJPE), as well as processing time and speed.",
      "Carry out research and a comparative analysis of the company's competing products, classifying them according to their specific characteristics.",
    ],
  },
  {
    title: "MSc in Sports Science",
    company_name: "University of Beira Interior",
    icon: ubi,
    iconBg: "#383E56",
    date: "Mar 2023 ",
  },
  {
    title: "Self-taught: My journey into programming",
    company_name: "By myself",
    icon: code,
    iconBg: "#383E56",
    // date: "Dec 2022 - Jan 2024",
    date: "Dec 2022",
    points: [
      "During the stages of my Master's thesis in Sports Science, I developed a strong interest in Computer Science. After completing my thesis in March 2023, I delved more deeply into a self-taught journey in the world of programming.",
      "I started by building several small, undocumented projects in JavaScript to explore fundamental concepts, such as math and tax calculators. This hands-on approach gave me a solid foundation in programming logic. Later, I shifted my focus to frontend development, creating classic projects like a To-Do List, a Hangman Game, and more.",
      "A few months into my journey, I began learning React with TypeScript. I applied these skills by developing an e-commerce application using a placeholder backend API, as well as building my own portfolio.",
      "Now, I'm working in my second position within the tech industry.",
    ],
  },
]

const projects = [
  {
    name: "Body Pose Detection",
    description:
      "I track an athlete's body by identifying key reference points. This allows me to analyze movement metrics and make adjustments to enhance sports training.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
    ],
    media: humanBodyPose,
    source_code_link: "https://github.com/BRp99/body-pose-detection",
    live_demo_link: "https://github.com/BRp99/body-pose-detection",
  },
  {
    name: "Valentine Proposal",
    description:
      "This was one of my first projects! I shared it with my friends, and they sent it to their valentines. Depending on the answer, something will happen to one of the buttons.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    media: valentine,
    source_code_link: "https://github.com/BRp99/valentine-proposal",
    live_demo_link: "https://valentine-proposal-brp99.vercel.app/",
  },
  {
    name: "Hangman Game",
    description:
      "This was also one of my first projects! I created it to practice handling events, work with DOM manipulation, and learn to break down problems into smaller parts. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    media: hangman,
    source_code_link: "https://github.com/BRp99/hangman2",
    live_demo_link: "https://hangman2-brp99s-projects.vercel.app/",
  },
  {
    name: "This Portfolio",
    description:
      "This portfolio is a testament to my learning, growth, and passion for development, where each line of code represents a discovery and the implementation of new technologies and approaches.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    media: thisPortfolio,
    source_code_link: "https://github.com/BRp99/portfolio",
    live_demo_link: "https://brp99.github.io/portfolio/",
  },
]

export { services, technologies, experiences, projects }
