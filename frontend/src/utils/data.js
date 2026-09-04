// Import the image
import vibeLearningImage from '../assets/projectImages/vibelearning.png'
import ailsmWebImage from '../assets/projectImages/ailsmweb.png'
import carwebImage from '../assets/projectImages/carweb.png'
import ecommmercewebImage from '../assets/projectImages/ecommerceweb.jpeg'
import carVideo from "../assets/projectVideos/car.mp4"
import lightVideo from  "../assets/projectVideos/light.mp4"
import threeVideo from "../assets/projectVideos/threetrios.mp4"
import minesVideo from "../assets/projectVideos/mine.mp4"
import synapseVideo from "../assets/projectVideos/synapse.mp4"
import vibelearningVideo from "../assets/projectVideos/vibelearning.mp4"
import ecommmerceVideo from "../assets/projectVideos/ecommerce.mp4"

export const projects = [{
    id: 1,
    name: "E-Commerce Website", 
    description: "A modern e-commerce website built with React, Tailwind, and Vite.",
    image: ecommmercewebImage,
    video: ecommmerceVideo,
    githubLink: "https://github.com/minmin1805/e-commerce-app",
    deployedLink: "https://e-commerce-app-a6op.onrender.com/",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind", "Upstash"],
},
{
    id: 2,
    name: "Vibe-Learning Application",
    description: "A modern learning application built with React, Tailwind, and Vite.",
    image: vibeLearningImage,
    video: vibelearningVideo,
    githubLink: "https://github.com/minmin1805/vibe-learning-app",
    deployedLink: "https://vibe-learning-prod.onrender.com",
    technologies: ["React", "Javascript", "MongoDB", "Tailwind", "OpenAI"],
},
{
    id: 3,
    name: "Car Marketplace Website",
    description: "A modern car marketplace website built with React, Tailwind, and Vite.",
    image: carwebImage,
    video: carVideo,
    githubLink: "https://github.com/minmin1805/Car-Marketplace-Webapp",
    deployedLink: "https://car-marketplace-webapp.vercel.app/",
    technologies: ["React", "Javascript", "Drizzle", "Tailwind"],
},
{
    id: 4,
    name: "AI Learning Management System Application",
    description: "A modern AI learning management system built with React, Tailwind, and Vite.",
    image: ailsmWebImage,
    video: synapseVideo,
    githubLink: "https://github.com/minmin1805/AI-Study-App",
    deployedLink: "https://synapse-hub.vercel.app/dashboard",
    technologies: ["React", "Javascript", "Drizzle", "Tailwind", "GeminiAI"],
},
{
    id: 5,
    name: "Light Em All Maze Generation",
    description: "A maze generation application built with Java",
    image: "https://via.placeholder.com/150",
    video: lightVideo,
    githubLink: "https://github.com/minmin1805/Light-Em-All-Maze-Game",
    deployedLink: null,
    technologies: ["Java", "JavaSwings", "JUnit"],
},
{
    id: 6,
    name: "Three Trios",
    description: "A card game built with Java",
    image: "https://via.placeholder.com/150",
    video: threeVideo,
    githubLink: "https://github.com/minmin1805/ThreeTrios",
    deployedLink: null,
    technologies: ["Java", "JavaSwings", "JUnit"],
},
{
    id: 7,
    name: "Minesweeper",
    description: "A minesweeper game built Java",
    image: "https://via.placeholder.com/150",
    video: minesVideo,
    githubLink: "https://github.com/minmin1805/Minesweeper-Java-Game",
    deployedLink: null,
    technologies: ["Java", "JavaSwings", "JUnit"],
},
]