const START_TIME = 30;
const START_SCORES = 0;

class WhacAMoleModel {
    scores;
    timeLeft;
    constructor() {
        this.scores = START_SCORES;
        this.timeLeft = START_TIME;
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
        let curPos = 1;
        let molesShown = [];
        view.moles.forEach((mole) => {
            view.bindListener(mole, ()=> {
                if(molesShown.includes(mole)) {
                    model.increment(1);
                }
            });
        });
        
        view.bindListener(view.buttonStart, ()=> {
            model.reset(); 
            let elem = null;
            let timer = setInterval(() => {
                model.timeLeft--;                
                let showTimer = setInterval(()=> {
                    if(molesShown.length == 3) {
                        while(molesShown.length > 0){
                            elem = molesShown.shift();
                            elem.style.backgroundImage = 'none';
                        }
                    }
                    curPos = Math.floor(Math.random() * 12 + 1);
                    elem = document.querySelector('#mole' + curPos)
                    elem.style.backgroundImage = "url('./images/mole.jpg')";
                    molesShown.push(elem);
                    if(model.timeLeft <= 0) {
                        document.querySelector('#mole' + curPos).style.backgroundImage = 'none';
                        clearInterval(showTimer);
                    }
                }, 1000);
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





