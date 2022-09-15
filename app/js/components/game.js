import { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

class GamePanel extends LitElement {
    static get properties() {
        return {
            player: {type: Object},
            active: {type: Boolean, attribute: true, reflect: true},
            ended: {type: Boolean, attribute: true, reflect: true},
            showQuestions: {type: Boolean},
            question: {type: Object}
        }
    }
    static get is() {
        return "game-panel";
    }

    constructor() {
        super();
        this.count = 0;
        this.showQuestions = false;
        this.active = false;
        this.ended = false;
        this.timeout = null;
        this.question = {};
    }

    createRenderRoot() {
        return this;
    }

    updated(changedProperties) {        
        if (changedProperties.has("player"))
        {  
            this.setPlaying();
        }
    }

    setPlaying() {
        if (this.player.playing) {            
            this.continuePlaying();               
        } else {
            this.stopPlaying();
        }
    }

    endGame() {
        this.stopPlaying();
        this.querySelector(".question-controls").classList.add("hidden");                        
    }

    continuePlaying() {        
        if (this.player.count !== this.player.questions.length) {
            document.querySelector('.global-controls').classList.add("hidden");   
            this.showQuestions = true;     
            this.active = true;  
            this.showDefinition();
            if (!this.timeout)
            {
                this.countdown();         
            }
        } else {
            this.endGame();
        }
    }

    stopPlaying() {
        clearTimeout(this.timeout);
        this.timeout = null;
    }

    showDefinition() {
        this.question = {...this.player.questions[this.player.pos]};
    }

    countdown() {        
        this.player.seconds = parseInt(this.player.seconds, 10);
        const timer = this.querySelector(".timer");

        if (this.player.seconds == 1) {
            
            timer.innerHTML = 0;
            this.ended = true;
            if (document.querySelectorAll('game-panel[ended]').length)
            {
                this.endGame();
            } else {
                this.pasapalabra();
            }
            return;
        }
        
        this.player.seconds--;
        
        timer.innerHTML = this.player.seconds;
        this.timeout = setTimeout(() => { this.countdown() }, 1000);        
    }

    nextPos(currentPos = 0) {
        currentPos++;
        if ((currentPos <= this.player.questions.length - 1))
        {
            if (this.player.questions[currentPos].correct === null)
            {
                this.player.pos = currentPos;                
                return this.player.pos;
            } else {
                return this.nextPos(currentPos);
            }
        } else {            
            return this.nextPos(0);
        }                
    }

    pasapalabra() {                    
        
        if (!document.querySelector(`game-panel[ended]`))
        {
            this.player = {
                ...this.player,
                pos: this.player.remainingWords ? this.nextPos(this.player.pos) : this.player.remainingWords, 
                playing: false
            };

            this.changePlayer();        
        } else {            
            if (this.player.remainingWords)
            {
                this.player = {
                    ...this.player,
                    pos: this.player.remainingWords ? this.nextPos(this.player.pos) : this.player.remainingWords,                
                };
            } else {
                this.endGame()
            }
        }
    }

    checkAnswer(correct = false) {        
        if (correct) {
            this.player.questions[this.player.pos].correct = true;            
            this.querySelector(`.circle .item[data-id="${this.player.questions[this.player.pos].letter}"]`).classList.add("item--success");                
        } else {
            this.player.questions[this.player.pos].correct = false;            
            this.querySelector(`.circle .item[data-id="${this.player.questions[this.player.pos].letter}"]`).classList.add("item--failure");            
        }

        this.player.remainingWords--;
        this.querySelector(".score").innerHTML = this.player.questions.filter(question => question.correct).length;
            
        if (this.player.remainingWords)
        {
            if (!correct) {
                this.pasapalabra();
            } else {            
                this.player = {
                    ...this.player,
                    pos: this.nextPos(this.player.pos), 
                    playing: correct
                };    
            }
        } else {
            this.ended = true;
            this.pasapalabra();
        }
    }

    changePlayer() {        
        this.showQuestions = false;
        this.active = false;
        this.dispatchEvent(new CustomEvent('user-change', {
            detail: {
                player: {...this.player}
            }
        }));
    }

    render() {
        return html`
<section class="game player${this.player.index}">
<div class="circle-container">
    <div class="title-container">
        
    </div>
    <ul class="circle">
        ${this.player.questions.map(question => {
            const questionCorrect = question.correct ? 'item--success' : 'item--failure';
            const questionStatus = question.correct === null ? '' : questionCorrect;
            
            return html`<li data-id="${question.letter}" class="item ${questionStatus}">${question.letter}</li>`
        })}        
    </ul>
    <ul class="scoreboard">
        <li class="timer" href="">${this.player.seconds}</li>
        <li class="score" href="">0</li>
    </ul>
</div>
<div class="controls-container">    
    <div class="question-controls ${this.showQuestions ? '' : 'hidden'}">
        <span class="hint">${this.question.hint}</span>
        <p class="definition">${this.question.definition}</p>        
        <p class="answer">${this.question.word}</p>
        <div @click="${() => this.checkAnswer(true)}" class="send btn btn--green">Correcto</div>
        <div @click="${() => this.checkAnswer(false)}" class="send btn btn--red">Fallo</div>
        <div @click="${() => this.pasapalabra()}"class="pasapalabra btn">Pasapalabra</div>
    </div>    
</div>
</section>	
        `
    }
}

window.customElements.define(GamePanel.is, GamePanel);