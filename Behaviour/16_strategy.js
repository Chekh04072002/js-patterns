// Позволяет создавать некоторую оболочку для различных интерфейсов для того, чтобы мы могли использовать
// разные алгоритмы и разные интерфейсы в конкретной задаче

class Vehicle {
    travelTime() {
        return this.timeTaken;
    }
}

class Bus extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 10;
    }
}
class Taxi extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 7;
    }
}
class Car extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 5;
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime();
    }
}

const commute = new Commute();

console.log(commute.travel(new Car()));