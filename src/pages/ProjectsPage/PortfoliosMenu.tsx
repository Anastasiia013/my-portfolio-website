import ichgramImage from "../../assets/projects/ichgram-project.jpg";
import ichgramImage2 from "../../assets/projects/Ichgram-full.png";

import meetupImage from "../../assets/projects/meetup-project-2.png";
import meetupImage2 from "../../assets/projects/Meetup-full.png";

import petshopImage from "../../assets/projects/petshop-project2.png";
import petshopImage2 from "../../assets/projects/PetStore-full.png";

import wheelImage from "../../assets/projects/wheel.png";
import wheelImage2 from "../../assets/projects/WheelOfFortune-full.png";

const projects = [
  {
    id: 1,
    link: "https://ichgram-frontend-sepia.vercel.app/",
    gitHub: "https://github.com/Anastasiia013/ichgram-frontend",
    gitHub2: "https://github.com/Anastasiia013/ichgram-backend",
    image: ichgramImage,
    image2: ichgramImage2,
    title: "Ichgram",
    description:
      "Connect, share, and chat in a full-stack Instagram clone built for seamless social interaction. Engage with friends through photos, comments, and live chat.",
    features:
      "user registration, login, email verification, password recovery, likes, comments, follows, photo uploads.",
    technologies:
      "React, Redux Toolkit, Axios, Node.js, Express, TypeScript, MongoDB, Multer, Mailgun.",
    testData: "Login: admin | Password: 12345@H",
  },
  {
    id: 2,
    link: "https://anastasiia013.github.io/petStore/",
    gitHub: "https://github.com/Anastasiia013/petStore",
    image: petshopImage,
    image2: petshopImage2,
    title: "Pet Online Store",
    description:
      "Shop for your pets with ease in a responsive and user-friendly online store. From browsing to checkout, every step is smooth and fast.",
    features:
      "product catalog, filtering, cart management, order form, backend integration.",
    technologies: "React, Redux Toolkit, Axios, CSS Modules, JavaScript.",
  },

  {
    id: 3,
    link: "https://anastasiia013.github.io/Meetup_Project/",
    gitHub: "https://github.com/Anastasiia013/Meetup_Project",
    image: meetupImage,
    image2: meetupImage2,
    title: "Meet up Platform",
    description:
      "Discover events near you instantly and connect with like-minded people. Intuitive filters make finding your next meetup a breeze.",
    features: "filter by date, type, distance, and category.",
    technologies: "HTML, SCSS, JavaScript, Google Fonts (Roboto).",
  },
  {
    id: 4,
    link: "https://anastasiia013.github.io/WheelOfFortune.github.io/",
    gitHub: "https://github.com/Anastasiia013/WheelOfFortune.github.io",
    image: wheelImage,
    image2: wheelImage2,
    title: "Wheel Of Fortune",
    description:
      "Spin the wheel and let chance decide! A fun, interactive way to pick winners for any group or event.",
    features: "random winner selection, name filtering, animated wheel.",
    technologies: "JavaScript, HTML5, CSS.",
  },
];

export default projects;
