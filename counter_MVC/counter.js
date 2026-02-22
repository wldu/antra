// // MVC
// class CounterModel{
//     count;
//     constructor(){
//         this.count = 0;
//     }
//     increment(num){
//         this.count += num;
//     }
// }

// class CounterView{
//     constructor(){
//         this.button = document.querySelector(".add-btn");
//         this.minusBtn = document.querySelector(".minus-btn");
//         this.h1 = document.querySelector(".counter")
//     }

//     render(count){
//         this.h1.textContent = `Count: ${count}`
//     }

//     bindListener(elem, eventHandler){
//         elem.addEventListener('click',eventHandler)
//     }

// }

// class CounterController{
//     constructor(model, view){
//         this.model = model;
//         this.view = view;

//         this.view.render(this.model.count);
//         this.add();
//         this.minus();
//     }

//     add(){
//         const ele = this.view.button;
//         this.view.bindListener(ele,()=>{
//             this.model.increment(1);
//             this.view.render(this.model.count);
//         });
//     }
//     minus(){
//         this.view.bindListener(this.view.minusBtn,()=>{
//             this.model.increment(-1);
//             this.view.render(this.model.count);
//         });

//     }

// }

// const model = new CounterModel();
// const view = new CounterView();
// const controller = new CounterController(model, view);
// MVC
class CounterModel {
    count;
    constructor() {
        this.count = 0;
    }
    increment(num) {
        this.count += num;
    }
    decrement(num) {
        this.count -= num;
    }
}

class CounterView {
    constructor() {
        this.buttonAdd = document.querySelector(".add-btn");
        this.buttonMinus = document.querySelector(".minus-btn");
        this.h1 = document.querySelector('.counter');
    }
    render(count) {
        console.log(this.h1.textContent);
        this.h1.textContent = `Count: ${count}`;
    }
    bindListener(elem, eventHandler) {
        elem.addEventListener('click', eventHandler);
    }
}


class CounterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.render(this.model.count);        
        this.add();
        this.minus();
    }
    add() {
        this.view.bindListener(this.view.buttonAdd, ()=> {
            this.model.increment(1);
            this.view.render(this.model.count);
        })
    }
    minus() {
        this.view.bindListener(this.view.buttonMinus, ()=> {
            this.model.decrement(1);
            this.view.render(this.model.count);
        })
    }
}

const model = new CounterModel();
const view = new CounterView();
const controller = new CounterController(model, view);


