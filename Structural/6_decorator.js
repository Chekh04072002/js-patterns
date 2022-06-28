class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }
    getUrl() {
        return `https://${this.ip}:${this.port}`;
    }
}

function decorator(instance) {
    instance.isInstance = true;
    instance.func = function () {
        console.log('decorated');
    }
    return instance;
}

let serv = decorator(new Server('33:55:55:44', 8080));
console.log(serv);