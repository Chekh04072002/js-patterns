class Calc {
    constructor(init = 0) {
        this.sum = init;
    }
    add(numb) {
        this.sum += numb;
        return this;
    }
}

let numb1 = new Calc();
console.log(numb1.add(10).add(5));