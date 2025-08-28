export const portfolioData = {
    personalInfo: {
      name: "Vedant Choudhary",
      title: "Robotics & Autonomous Systems Engineer",
      subtitle: "I build robotic system!",
      email: "vchoud10@asu.edu",
      github: "https://github.com/VedantC2307",
      linkedin: "https://linkedin.com/in/vedant2307"
    },
    
    featuredProjects: [
      {
        id: 1,
        title: "Autonomous AI Desktop Assistant Robot",
        description: "AI-powered desktop assistant robot using ROS2 for system integration",
        technologies: ["ROS2", "Vision-Language Model", "Mecanum Drive"],
        image: "/placeholder.jpg",
        demoLink: "#",
        githubLink: "#",
        highlights: [
          "Spearheaded prototyping of AI-powered desktop assistant robot with smartphone interface",
          "Engineered 4-wheel mecanum drive system for omnidirectional mobility",
          "Developed integrated perception pipeline for context-aware decision-making"
        ]
      },
      {
        id: 2,
        title: "Collaborative Multi-Robot Exploration & 2D Scene Reconstruction",
        description: "ROS2-based multi-robot system for collaborative 3D mapping with 2D LiDAR",
        technologies: ["ROS2", "Multi-Robot Systems", "LiDAR"],
        image: "/placeholder.jpg",
        demoLink: "#",
        githubLink: "#",
        highlights: [
          "Developed ROS2-based multi-robot system for collaborative mapping",
          "Enabled synchronized exploration & real-time data fusion in dynamic environments"
        ]
      },
      {
        id: 3,
        title: "Custom 3D Printer",
        description: "Designed & built custom 3D printer using Solidworks with Raspberry Pi integration",
        technologies: ["Solidworks", "Raspberry Pi", "3D Printing"],
        image: "/placeholder.jpg",
        demoLink: "#",
        githubLink: "#",
        highlights: [
          "Designed & built custom 3D printer using Solidworks",
          "Integrated Raspberry Pi for remote operation & user accessibility"
        ]
      }
    ],
  
    experience: [
      {
        id: 1,
        role: "Graduate Research Assistant",
        company: "Neuromuscular Control & Human Robotics Lab, Arizona State University",
        duration: "Dec 2023 - Present",
        description: "Developing ROS2-based impedance controller for human-robot interaction research",
        technologies: ["ROS2", "Raspberry Pi", "ODrive", "PCB Design"]
      },
      {
        id: 2,
        role: "Systems Engineer",
        company: "Simpliforge Creations",
        duration: "Feb 2022 - Mar 2023",
        description: "Developing automation solutions for concrete 3D printing workflows",
        technologies: ["Rhino Grasshopper", "Delta PLCs", "ABB Robotics"]
      },
      {
        id: 3,
        role: "Mechatronics Engineer Intern",
        company: "Infinity Microsystems",
        duration: "Feb 2021 - Jul 2021",
        description: "Developing precision linear actuators and custom 3D printers",
        technologies: ["Mechanical Design", "3D Printing", "Actuators"]
      }
    ],
  
    skills: {
      technical: ["Python", "React", "TensorFlow", "Computer Vision"],
      tools: ["Git", "Docker", "VS Code"],
      domains: ["Robotics", "AI", "Extended Reality"]
    },
  
    research: [
      {
        id: 1,
        title: "Method for Conversion of 3D Layouts into 3D Printable Design",
        description: "Invented method to convert layouts into optimized 3D printable designs, reducing CAD-to-robot execution time by 40%",
        publication: "Patent Pending (Filed 2023)",
        link: "#"
      }
    ],
  
    certifications: [
      {
        id: 1,
        name: "Certification Name",
        issuer: "Issuing Organization",
        date: "2023",
        link: "https://verify.cert"
      }
      // Add more certifications
    ]
  };

export const education = [
  {
    school: "Arizona State University",
    degree: "Master of Science in Robotics and Autonomous Systems",
    location: "Tempe, Arizona",
    duration: "2023 - 2025",
    gpa: ""
  },
  {
    school: "Manipal University",
    degree: "Bachelor of Technology in Mechatronics Engineering",
    location: "Manipal, India",
    duration: "2017 - 2021",
    gpa: ""
  }
];

export const skills = {
  roboticsFrameworks: [
    "ROS2",
    "RViz2",
    "Gazebo",
    "MoveIt2",
    "Nav2",
    "Mujoco",
    "isaacgym"
  ],
  programmingLanguages: [
    "Python",
    "C++",
    "C"
  ],
  embeddedSystems: [
    "ARM",
    "AVR",
    "STM32",
    "ESP32",
    "IMU",
    "Camera",
    "LiDAR",
    "Encoders",
    "Load Cells",
    "CAN",
    "UART",
    "SPI",
    "I2C"
  ],
  designAndSimulation: [
    "Solidworks",
    "Fusion 360",
    "AutoCAD",
    "MATLAB",
    "Simulink",
    "LabVIEW",
    "KiCad"
  ],
  sensorsAndInterfaces: [
    "IMU",
    "2D/3D LiDAR",
    "Stereo Camera",
    "Encoders",
    "Load Cells",
    "CAN",
    "UART",
    "I2C",
    "SPI"
  ]
};

export const publications = [
  {
    title: "Method for Conversion of 3D Layouts into 3D Printable Design",
    description: "Invented method to convert 2D layouts into optimized 3D printable designs, reducing CAD-to-robot execution time by 40%",
    link: "#",
    status: "Patent Pending (Filed 2023)"
  }
];

export const experience = [
  {
    company: "Arizona State University",
    role: "Graduate Research Assistant",
    location: "Tempe, Arizona, USA",
    duration: "December 2023 - Present",
    technologies: "ROS2, Raspberry Pi, ODrive, PCB Design",
    responsibilities: [
      "Developed ROS2-based impedance controller operating at 200Hz on Raspberry Pi, integrating ODrive, encoders, & sensors for real-time closed-loop control",
      "Designed custom PCB for power distribution to efficiently power the Raspberry Pi & ODrive, improving system reliability & safety in human-robot interaction experiments",
      "Conducted biomechanical testing with 20 subjects, validating performance using real-time sensor data &  demonstrating reduced ankle sprain forces by 25%",
      "Tested multiple control architectures with Raspberry Pi, microcontrollers, and LattePanda bridges, integrating ODrive, MATLAB, and sensors for real-time closed-loop control."
    ]
  },
  {
    company: "Simpliforge Creations",
    role: "Systems Engineer",
    location: "Hyderabad, India",
    duration: "February 2022 - March 2023",
    technologies: "Rhino Grasshopper, Delta PLCs, ABB Robotics",
    responsibilities: [
      "Developed Rhino Grasshopper slicer algorithm to automate concrete 3D printing workflows, reducing design time by 40%, improved layer consistency by 10%, & decreased material waste by 10%",
      "Designed concrete 3D printing structures using SolidWorks, executed precise slicing to achieve optimal layer height for printing with ABB IRB6700 robotic arm",
      "Managed the integration of Delta PLC to automate actuator & pump motor control, achieving 20% improvement in operational efficiency",
      "Implemented path-planning for ABB IRB6700 robotic arm, optimizing for singularity & joint limits to ensure smooth & collision-free trajectories",
      "Led team of five in designing & constructing custom 3-ton lifting systems, employing Finite Element Analysis for structural validation & ensuring successful on-site installations",
      "Collaborated with executive leadership to develop compelling investment pitch decks targeting cement manufacturers & VCs, while overseeing tender documentation processes, successfully securing $0.3M in new projects",
    ]
  },
  {
    company: "Horeca1",
    role: "Associate Project Executive",
    location: "Mumbai, India",
    duration: "August 2021 - Jan 2022",
    technologies: "Wordpress, Marketing strategies",
    responsibilities: [
      "Created cost-effective website, cutting online presence expenses by 60%, while gaining insights into cognitive biases’ influence on UI design",
      "Coordinated business plan overhaul, achieving 30% revenue growth. Cultivated client connections through customer-centric initiatives and implemented effective marketing strategies for market expansion and revenue enhancement"
    ]
  },
  {
    company: "Infinity Microsystems",
    role: "Mechatronics Engineer Intern",
    location: "Hyderabad, India",
    duration: "February 2021 - July 2021",
    technologies: "Mechanical Design, 3D Printing, Actuators",
    responsibilities: [
      "Developed precision linear actuators, enhancing performance & reliability of aerospace test benches",
      "Designed & built custom 3D printer, improving prototyping efficiency & reducing material waste by 10%"
    ]
  }
];

export const projects = [
  {
    title: "Autonomous AI Desktop Assistant Robot",
    technologies: "ROS2, Vision-Language Models, CAD, PCB Design",
    githubLink: "https://github.com/VedantC2307/rolle_robot",
    youtubeLink: "https://www.youtube.com/watch?v=4LokRFOcv3o",
    description: "Roll-E integrates language models with a mobile robot platform, enabling natural language control and autonomous movement. The project seamlessly combines hardware with LLM reasoning capabilities for context-aware decision making, using a smartphone as its sensor hub for localization, vision, and voice interaction. Built with modularity at its core, Roll-E is designed with a modular architecture in mind with ongoing enhancements in navigation and autonomous actions.",
    hasViewDetails: true
  },
  {
    title: "ros2-mobile-sensor-bridge",
    technologies: "Javascript, HTML, CSS, Android",
    githubLink: "https://github.com/VedantC2307/ros2-mobile-sensor-bridge",
    description: "Mobile Sensor Bridge for ROS2 transforms your Android/IOS smartphone into a plug‑and‑play sensor suite—streaming camera, spatial pose data, and bidirectional audio into ROS2 topics via rclnodejs. Whether you’re prototyping perception pipelines or building voice‑driven robots, the package lets you leverage your phone’s sensors without extra hardware."
  },
  {
    title: "Wearable Robotic Exoskeleton for Gait Assistance",
    technologies: "ROS2, Embedded Systems, Human-Robot Interaction",
    githubLink: "https://github.com/VedantC2307/Odrive-control-app",
    githubLink2: "https://github.com/VedantC2307/OdriveCANControl/tree/vedant",
    description: "At ASU’s Neuromuscular Control & Human Robotics Lab, I built the ROS2-based control framework for a soft robot exoskeleton, integrating ODrive motor driver, encoders, and biomechanical sensors for safe, real-time human–robot interaction.",
    hasViewDetails: true,
    hasMultipleGithub: true,
    github1Label: "Control App",
    github2Label: "ROS2 Control"
  },
  
  {
    title: "Collaborative Multi-Robot Exploration & 2D Scene Reconstruction",
    technologies: "ROS2, Multi-Robot Systems, LiDAR, Rviz, Gazebo",
    githubLink: "https://github.com/VedantC2307/MAE598-MultiRobotSystemsProject",
    description: "Developed ROS2-based multi-robot system for collaborative 3D mapping with 2D LiDAR. This project aims to enable synchronized exploration & real-time data fusion from multiple robots in dynamic environments."
  },
  {
    title: "PiPowerBridge",
    technologies: "PCB Design, KiCAD",
    githubLink: "https://github.com/VedantC2307/PiPowerBridge",
    description: "A compact power distribution PCB that supplies 5V to a Raspberry Pi while directly powering an ODrive motor controller from a 33V LiPo battery. Designed for seamless integration, it mounts directly on the ODrive, optimizing space and wiring. Includes additional SPI interface pins for external sensors."
  },
  {
    title: "Custom 3D Printer",
    technologies: "Solidworks, Raspberry Pi, 3D Printing",
    description: "Designed & built custom 3D printer using Solidworks, integrating Raspberry Pi for remote operation & user accessibility."
  },
  {
    title: "Hand Gesture Controlled Robotic Hand",
    technologies: "Solidworks, Computer Vision, Arduino",
    githubLink: "https://github.com/VedantC2307/HandGestureBot",
    description: "A robotic hand that mirrors your finger movements in real time using MediaPipe for hand tracking and stepper motors for control. With smooth motion filtering, it accurately follows gestures, creating a natural and responsive interaction."
  },
  {
    title: "Conversion of 2D/3D Layouts into 3D Printable Design",
    technologies: "Rhino Grasshopper, Python, 3D Printing",
    description: "Developed a patent-pending algorithm that automates concrete 3D printing design, reducing design time and quote turnaround by 40%. It generates structurally optimized, user-tailored designs with customizable trusses and precise parameter control, streamlining the workflow for greater efficiency and flexibility."
  },
  
];

export const contact = {
  email: "vchoud10@asu.edu",
  phone: "+1-623-290-4961",
  linkedin: "https://linkedin.com/in/vedant2307",
  github: "https://github.com/VedantC2307"
};

export const bio = {
  name: "Vedant Choudhary",
  title: "MS in Robotics & Autonomous Systems",
  subtitle: "I Build Robotics Systems! 🤖",
  description: `From the intricate dance of robot limbs to the symphony of code, I thrive at the heart of robotics.
            With a Master’s in Robotics & Autonomous Systems, I specialize in building robotic system combining embedded platforms, 
            robotics frameworks, and software. I’ve worked on real-time control frameworks, custom hardware 
            for human-robot interaction, and VLM-powered mobile robots using ROS2. Adaptable and curious, I excel at 
            problem-solving and rapid prototyping to build seamless, intelligent robotics systems.
            `,
  highlights: [
    "ROS2",
    "Embedded systems",
    "Python/C++",
    "CAD design",
    "PCB Design",
    "3D printing",
    "Human-robot interaction",
  ]
};