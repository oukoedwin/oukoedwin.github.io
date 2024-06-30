/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Edwin O. Ouko",
  title: "Hi there, I'm Edwin",
  subTitle: emoji(
    "I am a passionate engineer with a proven track record in developing and deploying machine learning systems. My expertise extends to building dynamic web and mobile applications, as well as integrating and working with IoT systems. I thrive on solving complex problems and leveraging cutting-edge technology to create innovative solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1m2tdqKELSCyqIfyqhTcSgvAP71WR6M-5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/oukoedwin",
  linkedin: "https://www.linkedin.com/in/edwin-o-ouko-6bb103189/",
  gmail: "edwinouko4@gmail.com",
  medium: "https://medium.com/@edwinouko",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Embedded Systems and Machine Learning Engineer",
  skills: [
    emoji(
      "⚡ Designing and Building IoT Applications"
    ),
    emoji("⚡ Designing and Prototyping Hardware Accelerators on FPGAs"),
    emoji(
      "⚡ Building, Training, and Deploying Machine Learning Models"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Massachusetts Institute of Technology",
      logo: require("./assets/images/mit_logo_std_rgb_bright-red.png"),
      subHeader: "Master of Engineering in Electrical Engineering and Computer Science",
      duration: "September 2024 - May 2025",
      desc: "Focus:",
      descBullets: [
        "Reinforcement Learning",
        "Natural Language Processing"
      ]
    },
    {
      schoolName: "Massachusetts Institute of Technology",
      logo: require("./assets/images/mit_logo_std_rgb_bright-red.png"),
      subHeader: "Bachelor of Science in Electrical Engineering and  Computer Science",
      duration: "September 2020 - May 2024",
      desc: "Key Courses Taken:",
      descBullets: [
          "Sofware Design",
          "FPGAs",
          "Computer Security",
          "Distributed Systems",
          "Machine Learning",
          "Operating System"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.svg"),
      date: "June 2024 – August 2024",
      descBullets: [
        "Designed and developed a downloadSDK to streamline the process of downloading VM images in air-gapped on-premise clouds"
     ]
    },
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.svg"),
      date: "June 2023 – August 2023",
      descBullets: [
        "Implemented Kubernetes operators in Golang for inplace OS upgrade of nodes in hybrid Kubernetes clusters",
        "Implemented a daemon that interfaces the Kubernetes operator and SWUpdate tool for OS upgrade",
        "Repartitioned Mariner Linux OS image to allow A/B update using the daemon and the Kubernetes operator above"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.svg"),
      date: "June 2022 – August 2022",
      descBullets: [
        "Developed and tested Wi-Fi access point and station modes on Azure Sphere embedded device",
        "Troubleshooted and fixed networking bugs on Azure Sphere device",
        "Designed and built a web interface for setting up Wi-Fi on Azure Sphere device in zero-conf scenario"
     ]
    }
    // ,
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false  // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections, change it to Publications

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE IN PROGRAMMING, MACHINE LEARNING, AND IOT"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "edwinouko4 at gmail dot com"
};

// Twitter Section

const twitterDetails = {
  userName: "oukoed", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = "true"; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
