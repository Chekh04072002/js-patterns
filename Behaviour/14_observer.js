// Формирует зависимости один ко многим. Через один объект можем вызвать изменения у всех подписанных на него объектов.
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    fire(changes) {
        this.observers.forEach(observer => {
            observer.update(changes);
        })
    }
}

class Observer {
    constructor(state = 0) {
        this.state = state;
        this.initialState = state;
    }
    update(action) {
        switch (action.type) {
            case 'Increment':
                this.state = ++this.state;
                break
            case 'Decrement':
                    this.state = --this.state;
                    break
                case 'Add': {
                    this.state += action.payload;
            }
        }
    }
}
const stream = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(5)

stream.subscribe(obs1);
stream.subscribe(obs2);

stream.fire({type: 'Increment'})

console.log(obs1);
console.log(obs2);
