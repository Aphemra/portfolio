import uuid from "react-uuid";

import flashcard from "../images/projectImages/flashcard.png";
import battleship from "../images/projectImages/battleship.png";
import portfolio from "../images/projectImages/portfolio.png";
import todo from "../images/projectImages/todoApp.png";
import pokedex from "../images/projectImages/pokedex.png";

export const projects = [
	{
		id: uuid(),
		title: "Flashcard",
		description: "A web app that facilitates the creation of decks of flashcards that you can quiz yourself with!",
		imageSource: flashcard,
		skillsUsed: ["React", "Javascript", "HTML", "CSS"],
		repoLink: "https://github.com/Aphemra/flashcard",
		liveLink: "https://aphemra.github.io/flashcard/",
		downloadLink: "",
	},
	{
		id: uuid(),
		title: "Portfolio Site",
		description: "The very site you are on right now! Inspired by Brittany Chiang's design and built from the ground up.",
		imageSource: portfolio,
		skillsUsed: ["React", "Javascript", "HTML", "CSS"],
		repoLink: "https://github.com/Aphemra/portfolio",
		liveLink: "",
		downloadLink: "",
	},
	{
		id: uuid(),
		title: "Battleship",
		description: "A recreation of the classic naval board game.",
		imageSource: battleship,
		skillsUsed: ["C#", "Unity"],
		repoLink: "https://github.com/NicCantCode/WeekLongGame1-Battleship",
		liveLink: "",
		downloadLink: "https://niccantcode.itch.io/battleship",
	},
	{
		id: uuid(),
		title: "Todo App Frontend",
		description:
			"A Todo app using React.js for the frontend with a backend provided by Matt Fetterman in Express and Prisma.",
		imageSource: todo,
		skillsUsed: ["React", "APIs", "REST", "Axios", "Javascript", "HTML", "CSS"],
		repoLink: "https://github.com/Aphemra/todo-app",
		liveLink: "https://aphemra-todo.netlify.app/",
	},
	{
		id: uuid(),
		title: "International Pokedex",
		description: "An app making use of the PokeAPI to pull in data and display it with a live search and filter.",
		imageSource: pokedex,
		skillsUsed: ["React", "APIs", "Javascript", "HTML", "CSS"],
		repoLink: "https://github.com/Aphemra/international-pokedex",
		liveLink: "https://aphemra.github.io/international-pokedex/",
	},
];
