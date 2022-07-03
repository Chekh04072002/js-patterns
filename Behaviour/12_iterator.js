class MyIter {
    constructor(data) {
        this.data = data;
        this.index = -1;
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                this.index++;
                let value = this.data[this.index];
                return {
                    value,
                    done: this.index > this.data.length
                }
            }
        }
    }
}

let a = new MyIter(['q', 'w', 'e', 'r']);
for (let i of a) {
    console.log(i)
}
