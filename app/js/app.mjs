import "./components/game.js";
import Player from "./player.js";
import { questions } from "../questions/index.js";
import config from "../../config.js";


function Word(idNumber, letter, hint, definition, word, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}

const players = [];

// Two players
for (let x = 0; x <= config.players - 1 ; x++) {
	players.push(new Player());
}

players.forEach((player, index) => {
	player.setName(`Jugador ${index}`)
	.setNext(players.length - 1 === index ? 0 : index + 1)
	.setQuestions(questions[index].map((question, index) => new Word(index, question.letter, question.title, question.text, question.value)))
	.setIndex(index)
	.render(index);
});

document.querySelector("#start").addEventListener("click", (e) => {
	players[e.target.dataset.player].start();
});