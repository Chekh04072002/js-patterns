let protoCar = {
    type: 'car',
    wheel: 4,
    logger() {
        console.log(`Owner: ${this.owner}`);
    }
}

let car = Object.create(protoCar, {
    owner: {
        value: 'Sasha'
    }
})

console.log(car.logger());