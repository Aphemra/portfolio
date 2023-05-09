import uuid from "react-uuid";

import flashcard from "../images/projectImages/flashcard.png";
import battleship from "../images/projectImages/battleship.png";
import portfolio from "../images/projectImages/portfolio.png";

export const projects = [
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
		title: "Battleship",
		description: "A recreation of the classic naval board game.",
		imageSource: battleship,
		skillsUsed: ["C#", "Unity"],
		repoLink: "https://github.com/NicCantCode/battleship",
		liveLink: "",
		downloadLink: "https://niccantcode.itch.io/battleship",
	},
];
