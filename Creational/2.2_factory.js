class BMW_X6 {
    constructor(model) {
        this.model = model;
        this.maxSpeed = 260;
        this.weight = 2300;
        this.racing = 5.6;
        this.radius = 20;
    }
}

class BMW_X5 {
    constructor(model) {
        this.model = model;
        this.maxSpeed = 260;
        this.weight = 2400;
        this.racing = 5.8;
        this.radius = 20;
    }
}

class BMW_X4 {
    constructor(model) {
        this.model = model;
        this.maxSpeed = 240;
        this.weight = 2000;
        this.racing = 7.5;
        this.radius = 19;
    }
}

class FactoryBMW {
    static list = {
        X6: BMW_X6,
        X5: BMW_X5,
        X4: BMW_X4
    }
    create(model) {
        const ModelOfCar = FactoryBMW.list[model];
        const car = new ModelOfCar(model);

        return car;
    }
}
const factory = new FactoryBMW();
let arrOfCar = [
    factory.create('X4'),
    factory.create('X6'),
    factory.create('X5'),
    factory.create('X5')
];

console.log(arrOfCar);