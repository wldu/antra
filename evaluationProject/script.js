class WhacAMoleModel {
    scores;
    timeLeft;
    constructor() {
        this.scores = 0;
        this.timeLeft = 5;
        // console.log(this.scores, 'scores');
    }
    increment(num) {
        this.scores++;
        console.log('clicked');
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
        this.model.scores = 0;
        this.timeLeft = 5;
        this.view.render(this.model.scores, this.timeLeft);
    }
    reset() {
        
        // this.view.render(this.model.count, this.timeLeft);        
    }
    
    startGame() {
        let timer = setInterval(() => {
            this.model.timeLeft--;
            console.log(this.model.timeLeft, this.model.scores);            
            // this.view.render(this.scores, this.timeLeft)
            if(this.model.timeLeft <= 0) {
                clearInterval(timer);
            }
        }, 1000);
        
    }
    
    bindMoleEvent() {
        this.view.moles.forEach((mole) => {
            this.view.bindListener(mole, ()=> {
                this.model.scores += 1;
                this.model.increment(1);
            console.log('clicked');
            console.log(this.model.scores);
            });
        });
        this.view.bindListener(this.view.buttonStart, ()=> {
                let timer = setInterval(() => {
                this.timeLeft--;
                console.log(this.timeLeft, this.scores);            
                // this.view.render(this.scores, this.timeLeft)
                if(this.timeLeft <= 0) {
                    clearInterval(timer);
                    // this.view.moles.forEach(mole, ()=>{
                    //     remove event
                    // });
                }
            }, 1000);
        });
    }

}

const model = new WhacAMoleModel();
const view = new WhacAMoleView();
const controller = new WhacAMoleController(model, view);





