// function Student(name, surName, age) {
//     this.name = name;
//     this.surName = surName;
//     this.age = age;
// }
//
// Student.prototype.sayName = function () {
//     console.log(`My name is ${this.name}`);
// }

class Student {
    constructor(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    sayName() {
        return(`My name is ${this.name}`);
    }
}

const max = new Student('Max', 'Ivanov', 19);
console.log(max);