class Car {
    constructor(model, price) {
       this.model = model;
       this.price = price;
    }
}

class Factory {
    constructor() {
        this.cars = [];
    }
    create(model, price) {
        const candidate = this.getCar(model);
        if (candidate) {
            return candidate;
        }
        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }
    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new Factory();

let mb = factory.create('Mercedes', 100000);
let bmwM4 = factory.create('Bmw', 60000);
let mbs = factory.create('Mercedes', 170000);
console.log(mb);
console.log(mbs);