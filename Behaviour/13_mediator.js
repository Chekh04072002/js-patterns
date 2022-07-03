class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

let max = new User('Max');
let dasha = new User('Dasha');
let nikita = new User('Nikita');

const room = new ChatRoom();
room.register(max);
room.register(dasha);
room.register(nikita);

nikita.send('Privet', dasha);
dasha.send('Ку, Никита', nikita);
max.send('Всем привет');

//Выстраивание тесной коммуникации между различными объектами разного типа,
//централизованная абстракция, которая позволяет взаимодействовать группе объектов через друг друга