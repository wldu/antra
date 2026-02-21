const START_TIME = 30;
const START_SCORES = 0;

class WhacAMoleModel {
    scores;
    timeLeft;
    molesShown;
    constructor(view) {
        this.view = view;
        this.scores = START_SCORES;
        this.timeLeft = START_TIME;
        this.molesShown = [];
    }
    increment(num) {
        this.scores += num;
    }
    reset() {
        this.timeLeft = START_TIME;
        this.scores = START_SCORES;
    }
}

class WhacAMoleView {
    constructor() {
        this.buttonStart = document.querySelector("#btn-start");
        this.boxScore = document.querySelector(".box-score");
        this.timer = document.querySelector('.timer');
        this.moles = document.querySelectorAll('.box-moles .mole');
    }
    render(scores, timeLeft) {
        this.boxScore.textContent = this.boxScore.textContent.split(' ').slice(0, 6).join(' ') + ' ' + scores;
        this.timer.textContent = timeLeft;
    }
    bindListener(elem, eventHandler) {
        elem.addEventListener('click', eventHandler);
    }
}


class WhacAMoleController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.bindMoleEvent(model, view);
        this.view.render(this.model.scores, this.model.timeLeft);
    }
    
    bindMoleEvent(model, view) {
        view.render(model.scores, model.timeLeft);
        let curPos = 1;
        let snakePos = 1;
        let snakeElem = document.querySelector('#mole' + snakePos);
        let moleElem = document.querySelector('#mole' + curPos);
        view.bindListener(view.buttonStart, ()=> {
            model.reset(); 
            let timer = setInterval(() => {
                if(model.molesShown.length == 3) {
                    this.setBlank();
                }
                curPos = Math.floor(Math.random() * 12) + 1;
                moleElem = document.querySelector('#mole' + curPos);
                moleElem.style.backgroundImage = "url('./images/mole.jpg')";
                model.molesShown.push(moleElem);  
                if(model.timeLeft % 2 == 0) {
                    snakeElem.style.backgroundImage =  'none';
                    snakePos = Math.floor(Math.random() * 12 + 1); 
                    snakeElem = document.querySelector('#mole' + snakePos);              
                    snakeElem.style.backgroundImage = "url('./images/snake.jpg')";
                }                 
                model.timeLeft--; 
                view.render(model.scores, model.timeLeft);                                
                if(model.timeLeft <= 0) {
                    model.timeLeft = 0;
                    this.setBlank();
                    model.molesShown.length = 0;
                    moleElem.style.backgroundImage =  'none';
                    snakeElem.style.backgroundImage =  'none';
                    view.render(model.scores, model.timeLeft);
                    clearInterval(timer);
                }                 
            }, 1000);
        });
        view.moles.forEach((mole) => {
            view.bindListener(mole, ()=> {
                if(mole == snakeElem) {
                    snakeElem.style.backgroundImage =  'none';
                    this.setBlank();
                    model.timeLeft = 0;
                    for(let elem of model.molesShown) elem.style.backgroundImage = 'none';
                } else if(model.molesShown.includes(mole)) {
                    model.increment(1);
                }
            });
        });
    }
    setBlank(){
        while(this.model.molesShown.length > 0) {
            let moleElem = model.molesShown.shift();
            moleElem.style.backgroundImage = 'none';
        }
    }
}

const view = new WhacAMoleView();
const model = new WhacAMoleModel(view);
const controller = new WhacAMoleController(model, view);





