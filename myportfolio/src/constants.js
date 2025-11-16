import htmlLogo from './assets/technical_logo/html.png'

import cssLogo from './assets/technical_logo/css.png';
 import javascriptLogo from './assets/technical_logo/javascript.png';
 import reactjsLogo from './assets/technical_logo/reactjs.png';
 import tailwindcssLogo from './assets/technical_logo/tailwindcss.png';
 import bootstrapLogo from './assets/technical_logo/bootstrap.png';
 import springbootLogo from './assets/technical_logo/springboot.png';
 import mysqlLogo from './assets/technical_logo/mysql.png';
 import cLogo from './assets/technical_logo/c.png';
 import cppLogo from './assets/technical_logo/cpp.png';
 import javaLogo from './assets/technical_logo/java.png';
 import gitLogo from './assets/technical_logo/git.png';
 import githubLogo from './assets/technical_logo/github.png';
 import vscodeLogo from './assets/technical_logo/vscode.png';
 import postmanLogo from './assets/technical_logo/postman.png';
 import nodejsLogo from './assets/technical_logo/nodejs.png'


// // Experience Section Logo's
import weblogo from './assets/company_logo/port.png'


// // Education Section Logo's
import school from './assets/education_logo/school.jpg'
import college from './assets/education_logo/iconslogo.jpg'
// // Project Section Logo's
 import githubdetLogo from './assets/work_logo/homepage.png';
 import csprepLogo from './assets/work_logo/schoolapp.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      
      { name: 'MySQL', logo: mysqlLogo },
      
      
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      
     
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      
      
      
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: weblogo,
      role: "Cse Management portal",
      company: "Online Register Complain",
      date: "April 2025 - Present",
      desc: "A secure web-based platform enabling citizens to file online complaints, track case progress, and interact with law enforcement digitally. Includes multi-role access for Police, DSP, Judge, and Admin with automated workflow and real-time case updates.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Spring Boot",
        "Tailwind CSS",
        "My SQL",
        " Next Js",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: college,
      school: "Technocrats Institute of Technology",
      date: "july 2022 - July 2026",
      grade: "6.72 CGPA",
      desc: "I am pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya. During my academic journey, I have built a strong foundation in programming, java, react,springboot,mysql, web development, and software engineering.I enjoy learning new technologies and applying them to real-world projects. My goal is to become a skilled Software Developer who creates efficient and user-friendly applications.",
      degree: "Bachelor of Technology (B.Tech) ",
    },
    {
      id: 1,
      img: school,
      school: "Govt. HSS GORBI KALARI ",
      date: "jun 2021 -  2022",
      grade: "72%",
      desc: "I completed my Class 12th from the Madhya Pradesh Board of Secondary Education with Physics, Chemistry, and Mathematics (PCM) as my core subjects.This phase helped me build a strong base in analytical thinking, logical reasoning, and problem-solving.During this time, I also explored computer fundamentals and basic programming, which sparked my deep interest in technology and software development.My curiosity and consistency in learning laid the foundation for my engineering journey and growth as a developer.",
      degree: "Class 12th - Madhya Pradesh Board of Secondary Education",
    },
    {
      id: 2,
      img: school,
      school: "Govt. HSS GORBI KALARI ",
      date: "jun 2019 - march 2020",
      grade: "75%",
      desc: "I completed my Class 10th from the Madhya Pradesh Board of Secondary Education with 75% marks.This stage built a strong foundation in Mathematics, Science, and English, and also introduced me to the world of computers and technology.Actively participating in school activities, science exhibitions, and group projects helped me improve my teamwork, creativity, and communication skills.My Class 10th journey played a key role in shaping my interest in the technical field and motivated me to pursue engineering.",
      degree: "Class 10th - Madhya Pradesh Board of Secondary Education",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Case Management portal",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: weblogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/sahusujit2005/Case-management-Portal",
      webapp: "https://ephemeral-hotteok-4d3ca3.netlify.app/",
    },
    {
      id: 1,
      title: "School Management ",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sahusujit2005/School_App",
      webapp: "https://coruscating-churros-76c784.netlify.app/",
    },
    
   
    // agar our aage project add karna hai to esi ko copy karke pest kar dena hai
  ];  