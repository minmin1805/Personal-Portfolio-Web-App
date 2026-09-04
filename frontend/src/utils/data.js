// Import the image
import vibeLearningImage from '../assets/projectImages/vibelearning.png'
import ailsmWebImage from '../assets/projectImages/ailsmweb.png'
import carwebImage from '../assets/projectImages/carweb.png'
import ecommmercewebImage from '../assets/projectImages/ecommerceweb.jpeg'
import digitalDetectiveImage from '../assets/projectImages/digitaldetectiveweb.png'
import friendOrFoeImage from '../assets/projectImages/friendorfoeweb.png'
import exploitationEscapeImage from '../assets/projectImages/exploitationescapeweb.png'
import inboxInspectorImage from '../assets/projectImages/inboxinspectorweb.png'
import privacyBudgetImage from '../assets/projectImages/privacybudgetweb.png'
import carVideo from "../assets/projectVideos/car.mp4"
import lightVideo from  "../assets/projectVideos/light.mp4"
import threeVideo from "../assets/projectVideos/threetrios.mp4"
import minesVideo from "../assets/projectVideos/mine.mp4"
import synapseVideo from "../assets/projectVideos/synapse.mp4"
import vibelearningVideo from "../assets/projectVideos/vibelearning.mp4"
import ecommmerceVideo from "../assets/projectVideos/ecommerce.mp4"
import digitalDetectiveVideo from "../assets/projectVideos/digitaldetective.mp4"
import friendOrFoeVideo from "../assets/projectVideos/friendorfoe.mp4"
import exploitationEscapeVideo from "../assets/projectVideos/exploitationescape.mp4"
import inboxInspectorVideo from "../assets/projectVideos/inboxinspector.mp4"
import privacyBudgetVideo from "../assets/projectVideos/privacybudget.mp4"

export const projects = [{
    id: 1,
    name: "Digital Footprint Detective",
    description: "An educational web game that teaches teens to spot privacy risks in social media photos, captions, and habits.",
    image: digitalDetectiveImage,
    video: digitalDetectiveVideo,
    githubLink: "https://github.com/minmin1805/Digital-Footprint-Game",
    deployedLink: "https://digitalfootprintgame.ourrescue.org/",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind"],
},
{
    id: 2,
    name: "Friend or Foe",
    description: "An educational web game that teaches teens to investigate friend requests and spot fake social media accounts.",
    image: friendOrFoeImage,
    video: friendOrFoeVideo,
    githubLink: "https://github.com/minmin1805/Friend-or-Foe-Game",
    deployedLink: "https://friendorfoegame.ourrescue.org/",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind"],
},
{
    id: 3,
    name: "Exploitation Escape",
    description: "An educational web game that teaches teens how to respond to online exploitation through chat scenarios and quizzes.",
    image: exploitationEscapeImage,
    video: exploitationEscapeVideo,
    githubLink: "https://github.com/minmin1805/Sextortion-Escape-Game",
    deployedLink: "https://sextortionescapegame.ourrescue.org/",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind"],
},
{
    id: 4,
    name: "Inbox Inspector",
    description: "An educational web game that teaches phishing awareness through email and DM investigations.",
    image: inboxInspectorImage,
    video: inboxInspectorVideo,
    githubLink: "https://github.com/minmin1805/Inbox-Inspector-Game",
    deployedLink: "https://inboxinspectorgame.ourrescue.org/",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind", "Azure OpenAI"],
},
{
    id: 5,
    name: "Privacy Budget",
    description: "An educational web game that teaches privacy vs engagement trade-offs before posting online.",
    image: privacyBudgetImage,
    video: privacyBudgetVideo,
    githubLink: "https://github.com/minmin1805/Privacy-Budget-Game",
    deployedLink: "https://privacybudgetgame.ourrescue.org/",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind", "Azure OpenAI"],
},
{
    id: 6,
    name: "E-Commerce Website", 
    description: "A modern e-commerce website built with React, Tailwind, and Vite.",
    image: ecommmercewebImage,
    video: ecommmerceVideo,
    githubLink: "https://github.com/minmin1805/e-commerce-app",
    deployedLink: "https://e-commerce-app-a6op.onrender.com/",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind", "Upstash"],
},
{
    id: 7,
    name: "Vibe-Learning Application",
    description: "A modern learning application built with React, Tailwind, and Vite.",
    image: vibeLearningImage,
    video: vibelearningVideo,
    githubLink: "https://github.com/minmin1805/vibe-learning-app",
    deployedLink: "https://vibe-learning-prod.onrender.com",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind", "OpenAI"],
},
{
    id: 8,
    name: "Car Marketplace Website",
    description: "A modern car marketplace website built with React, Tailwind, and Vite.",
    image: carwebImage,
    video: carVideo,
    githubLink: "https://github.com/minmin1805/Car-Marketplace-Webapp",
    deployedLink: "https://car-marketplace-webapp.vercel.app/",
    technologies: ["React", "Javascript", "Drizzle", "Tailwind"],
},
{
    id: 9,
    name: "AI Learning Management System Application",
    description: "A modern AI learning management system built with React, Tailwind, and Vite.",
    image: ailsmWebImage,
    video: synapseVideo,
    githubLink: "https://github.com/minmin1805/AI-Study-App",
    deployedLink: "https://synapse-hub.vercel.app/dashboard",
    technologies: ["React", "Javascript", "Drizzle", "Tailwind", "GeminiAI"],
},
{
    id: 10,
    name: "Light Em All Maze Generation",
    description: "A maze generation application built with Java",
    image: "https://via.placeholder.com/150",
    video: lightVideo,
    githubLink: "https://github.com/minmin1805/Light-Em-All-Maze-Game",
    deployedLink: null,
    technologies: ["Java", "JavaSwings", "JUnit"],
},
{
    id: 11,
    name: "Three Trios",
    description: "A card game built with Java",
    image: "https://via.placeholder.com/150",
    video: threeVideo,
    githubLink: "https://github.com/minmin1805/ThreeTrios",
    deployedLink: null,
    technologies: ["Java", "JavaSwings", "JUnit"],
},
{
    id: 12,
    name: "Minesweeper",
    description: "A minesweeper game built Java",
    image: "https://via.placeholder.com/150",
    video: minesVideo,
    githubLink: "https://github.com/minmin1805/Minesweeper-Java-Game",
    deployedLink: null,
    technologies: ["Java", "JavaSwings", "JUnit"],
},
]
