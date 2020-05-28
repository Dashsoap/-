let promise = new Promise((resolve, reject) => {
    // console.log('Promise1');
    resolve("hello!");
});

promise.then((data) => {
    return data + " lagou"
}).then((data) => {
    console.log(data + " i love u");

});
