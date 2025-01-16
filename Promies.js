// demo promis testings
let pir = new Promise((resolve, reject) => {

    let rsn = Math.random();
    if (rsn < 0.6) {
        return reject("Invalid")
    } else {
        setTimeout(() => {
            console.log('this is a promise created by me for the first time');
            resolve("deepsh.g");
        }, 3000);
    }

});

pir.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});