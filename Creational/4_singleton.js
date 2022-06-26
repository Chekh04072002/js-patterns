class Database {
    constructor(data) {
        if (Database.flag) {
            return Database.instance;
        }
        Database.instance = this;
        Database.flag = true;
        this.data = data;
    }
    getData() {
        return this.data;
    }
}

let first = new Database('qwerty');
console.log(first);

let sec = new Database('asdfg');
console.log(sec);
