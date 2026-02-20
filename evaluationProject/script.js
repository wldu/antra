class WhacAMoleModel {
    scores;
    timeLeft;
    constructor() {
        this.scores = 0;
        this.timeLeft = 5;
        // console.log(this.scores, 'scores');
    }
    increment(num) {
        this.scores += num;
        console.log(num, this.scores);
    }
}

class WhacAMoleView {
    constructor() {
        this.buttonStart = document.querySelector("#btn-start");
        this.boxScore = document.querySelector(".box-score");
        this.timer = document.querySelector('.timer');
        // this.moles = document.getElementsByClassName(".mole");
        this.moles = document.querySelectorAll('.box-moles .mole');
        // console.log(typeof this.moles);
        // console.log(this.moles);
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
        this.bindMoleEvent();
        this.view.render(this.model.scores, this.model.timeLeft);
    }
    reset() {
        
        // this.view.render(this.model.count, this.timeLeft);        
    }
    
    startGame() {
        this.model.timeLeft = 5;
        this.model.scores = 0;
        let timer = setInterval(() => {
            this.model.timeLeft--;
            console.log('here', this.model.timeLeft, this.model.scores);            
            this.view.render(this.model.scores, this.model.timeLeft)
            if(this.model.timeLeft <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    
    bindMoleEvent() {
        this.view.moles.forEach((mole) => {
            this.view.bindListener(mole, ()=> {
                this.model.increment(1);
            // console.log(this.model.scores);
            });
        });
        this.view.bindListener(this.view.buttonStart, ()=> {
                let timer = setInterval(() => {
                this.model.timeLeft--;
                console.log(this.model.timeLeft, this.model.scores); 
                this.view.render(this.model.scores, this.model.timeLeft);
                if(this.model.timeLeft <= 0) {
                    clearInterval(timer);
                    // this.view.moles.forEach(mole, ()=>{
                    //     remove event
                    // });
                }
            }, 1000);
        });
    }

}

const view = new WhacAMoleView();
const model = new WhacAMoleModel(view);
const controller = new WhacAMoleController(model, view);





