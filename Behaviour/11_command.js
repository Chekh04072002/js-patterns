class Numb {
    constructor(value = 0) {
        this.value = value;
    }
    square() {
        return this.value ** 2;
    }
    cube() {
        return this.value ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.commands = [];
    }
    execute(command) {
        this.commands.push(command);
        return this.subject[command]();
    }
}

let x = new Command(new Numb(5));

console.log(x.execute('square'));
console.log(x.commands);

//Позволяет создавать определенную абстрактную оболочку над функционалом,
// который позволяет управлять через другой объект и тем самым записывая определенные состояние, которые были вызваны.