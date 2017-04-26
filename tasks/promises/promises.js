const addresses = ['/mtest/tasks/promises/img/1.jpg', '/mtest/tasks/promises/img/2.jpg'];

function getStetByStepPromise(adresses) {
    return adresses.reduce( (prevPromise, addr) => {
        return prevPromise.then( () =>{
            return createPromise(addr);
        });
    }, Promise.resolve('success'));
}

// проверка работы
getStetByStepPromise(addresses).then( () => createPromise(addresses[0]) );

function createPromise(addr){
    return new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            let startTime = new Date();
            console.log(`start download url ${addr} at ${startTime.toISOString()}`);
            xhr.open('GET', addr);
            //xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
            xhr.timeout = 10000;
            xhr.onload = function () {
                let finishTime = new Date();
                console.log(`finished download url ${addr} at ${finishTime.toISOString()} `);
                resolve();
            };
            xhr.ontimeout = function () {
                resolve();
            };
            xhr.onerror = function () {
                resolve();
            };
            xhr.send();
        }
    );
}
