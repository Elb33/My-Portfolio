import huddleUrl from "./assets/images/huddle landing page/Screenshot (859).png";
import fiberUrl from "./assets/images/fiber landing page/Screenshot (837).png";
import sunnysideUrl from "./assets/images/sunnyside landing page/Screenshot (867).png";
import sneakersUrl from "./assets/images/sneakers/Screenshot (849).png";
import fypUrl from "./assets/images/document language translator/Screenshot (789).png";
import snapUrl from "./assets/images/snap/Screenshot (846).png";
import rpsUrl from "./assets/images/rps/Screenshot (310).png";
import dblogUrl from "./assets/images/dojoblog/Screenshot (321).png";
import comfyhouseUrl from "./assets/images/comfyhouse/Screenshot (319).png";
import capstoneUrl from "./assets/images/capstone/Screenshot (330).png";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const projectData: Project[] = [
  {
    title: "Huddle Landing Page",
    description: "The landing page of the company called Huddle",
    imageUrl: huddleUrl,
    projectUrl: "https://huddle-landing-page-vert-two.vercel.app/",
  },
  {
    title: "Fiber Landing Page",
    description: "The landing page of the company called Fiber.",
    imageUrl: fiberUrl,
    projectUrl: "https://fiber-landing-page-two.vercel.app/",
  },
  {
    title: "Sunnyside Landing Page",
    description: "The landing page of the company called Sunnyside.",
    imageUrl: sunnysideUrl,
    projectUrl: "#",
  },
  {
    title: "Sneakers",
    description:
      "This is an example of an e-commerce website with a functioning cart system.",
    imageUrl: sneakersUrl,
    projectUrl: "#",
  },
  {
    title: "Final Year Project",
    description:
      "This is a document language translator that translates the language of the inputted document and then translates it using the Google Cloud Translation API and compiles the translated document into a PDF document available for download.",
    imageUrl: fypUrl,
    projectUrl: "#",
  },
  {
    title: "Snap Landing Page",
    description: "This is the landing page of the company called Snap.",
    imageUrl: snapUrl,
    projectUrl: "#",
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "This is a web based version of the rock, paper, scissors game.",
    imageUrl: rpsUrl,
    projectUrl: "#",
  },
  {
    title: "Dojo Blog",
    description:
      "This is a blog website that employs the CRUD function enabling the user to create, edit and delete blogs.",
    imageUrl: dblogUrl,
    projectUrl: "#",
  },
  {
    title: "Comfy House Store",
    description:
      "This is an e-commerce website that deals with furniture for the home.",
    imageUrl: comfyhouseUrl,
    projectUrl: "#",
  },
  {
    title: "Capstone Store",
    description:
      "This is an e-commerce store that deals with the buying of clothes.",
    imageUrl: capstoneUrl,
    projectUrl: "#",
  },

  // Add more projects as needed
];

export default projectData;
