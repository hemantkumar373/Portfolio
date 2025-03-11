import {
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoPhp,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Social Media App",
    image: "./twitter.png",
    icons: [
      BiLogoMongodb,
      SiExpress,
      BiLogoReact,
      BiLogoRedux,
      BiLogoTailwindCss,
    ],
    description:
      "A social media platform enabling users to post, follow, and engage with real-time updates.",
    github: "https://github.com/hemantkumar373/Mini-Twitter-Clone",
  },
  {
    id: "2",
    name: "InFlight Food Ordering",
    image: "./food-app.png",
    icons: [
      BiLogoMongodb,
      SiExpress,
      BiLogoReact,
      BiLogoRedux,
      BiLogoTailwindCss,
    ],
    description:
      "A smart application for passengers to browse, customize, and order meals and drinks during flights.",
    github: "https://github.com/hemantkumar373/InFlight-Food-Ordering-App",
  },
  {
    id: "3",
    name: "SchoolMate",
    image: "./schoolmate.png",
    icons: [BiLogoPhp, BiLogoCss3],
    description:
      "A comprehensive school management system for streamlining student, teacher, and administrative workflows.",
    github: "https://github.com/hemantkumar373/SchoolMate",
  },
  {
    id: "4",
    name: "Digitronics",
    image: "./digitronics.png",
    icons: [
      BiLogoMongodb,
      SiExpress,
      BiLogoReact,
      BiLogoRedux,
      BiLogoTailwindCss,
    ],
    description:
      "A dynamic e-commerce platform for purchasing electronics with seamless user authentication and responsive design.",
    github: "https://github.com/hemantkumar373/Digitronics",
  },
  {
    id: "5",
    name: "Bookify",
    image: "./bookify.png",
    icons: [
      BiLogoMongodb,
      SiExpress,
      BiLogoReact,
      BiLogoRedux,
      BiLogoTailwindCss,
    ],
    description:
      "An online platform for exploring, purchasing, and reviewing books with secure payment integration.",
    github: "https://github.com/hemantkumar373/Bookify",
  },
  {
    id: "6",
    name: "Podstream",
    image: "./podstream.png",
    icons: [BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoNodejs],
    description:
      "A podcast streaming platform for discovering, listening to, and sharing your favorite podcasts.",
    github: "https://github.com/hemantkumar373/podstream",
  },
];

export default ProjectsData;
