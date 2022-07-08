// Он определяет скеллет будущего алгортима, но при этом он делегирует создание конкретного функционала в дочерние классы,
// он определяет структуру, а дочерние классы уже реализовывают функционал

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}
    work() {
        return `${this.responsibilities()}`;
    }
    getZP() {
        return `${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `Программирую`;
    }
}

const dev = new Developer('Sasha', '300000');
console.log(dev.work());
console.log(dev.getZP());