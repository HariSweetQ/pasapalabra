import config from "../../config.js";

export default class Player {    
    constructor() {
        this.el = null;
        this.seconds = config.seconds;
        this.count = 0;
        this.pos = 0;
        this.next = 0;
        this.playing = false;
        this.remainingWords = 0;
    }

    setName(name = "") {
        this.name = name;
        return this;
    }

    setNext(next = 0) {
        this.next = next;
        return this;
    }

    setQuestions(questions = []) {
        this.questions = questions;
        this.remainingWords = questions.length;
        return this;
    }
    setIndex(index = 0) {
        this.index = index;
        return this;
    }

    start() {
        this.playing = true;        
        this.el.player = {...this};                
    }

    render() {
        const app = document.querySelector("#app");
        this.el = document.createElement("game-panel");
        this.el.player = this;
        this.el.addEventListener("user-update", e => {              
            this.seconds = e.detail.player.seconds;
            this.count = e.detail.player.count;    
            this.pos = e.detail.player.pos;    
            this.questions = e.detail.player.questions;    
            this.remainingWords = e.detail.player.remainingWords;    
            this.playing = e.detail.player.playing;
        });
        this.el.addEventListener("user-change", e => {              
            document.querySelector('#start').dataset.player = this.next;
            document.querySelector('#start').innerHTML = `Empezar Jugador ${this.next + 1}`;
            document.querySelector('.global-controls').classList.remove("hidden");
        })
        app.appendChild(this.el);
        return this.el;
    }
}