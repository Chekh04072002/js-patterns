function request(url) {
    return `${url} - Server`;
}

let cache = new Set();
let proxyRequest = new Proxy(request, {
    apply(target, thisArg, argArray) {
        let url = argArray[0];
        if (cache.has(url)) {
            return `${url} - Cache`;
        }
        else {
            cache.add(url);
            return Reflect.apply(target, thisArg, argArray);
        }
    }
})

console.log(proxyRequest('vk'));
console.log(proxyRequest('vk'));