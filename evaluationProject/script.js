const START_TIME = 15, START_SCORES = 0;

class WhacAMoleModel {
    scores;
    timeLeft;
    constructor() {
        this.scores = START_SCORES;
        this.timeLeft = START_TIME;
        // console.log(this.scores, 'scores');
    }
    increment(num) {
        this.scores += num;
        // console.log(num, this.scores, 'increment');
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
        // console.log(this.boxScore.textContent);
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
    
    showMole() {
        
        
        
    }
    
    bindMoleEvent(model, view) {
        view.moles.forEach((mole) => {
            view.bindListener(mole, ()=> {
                model.increment(1);
            // console.log(this.model.scores);
            });
        });
        
        view.bindListener(view.buttonStart, ()=> {
            model.reset();
            let curPos = 1;
            let timer = setInterval(() => {
                model.timeLeft--;                
                let showTimer = setInterval(()=> {   
                    document.querySelector('#mole' + curPos).style.backgroundImage = 'none';
                    curPos = Math.floor(Math.random() * 12 + 1);
                    console.log(curPos);
                    document.querySelector('#mole' + curPos).style.backgroundImage = "url('./images/mole.jpg')";
                    if(model.timeLeft <= 0) {
                        document.querySelector('#mole' + curPos).style.backgroundImage = 'none';
                        clearInterval(showTimer);
                    }
                }, 200);
                console.log(model.timeLeft, model.scores, 'timer'); 
                view.render(model.scores, model.timeLeft);
                if(model.timeLeft <= 0) {
                    clearInterval(timer);
                }
            }, 1000);
        });
    }

}

const view = new WhacAMoleView();
const model = new WhacAMoleModel(view);
const controller = new WhacAMoleController(model, view);





