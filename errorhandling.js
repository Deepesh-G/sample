// let a = parseInt(window.prompt("enter the first number"));
// let b = parseInt(window.prompt("enter the first number"));
// let sum = a + b;
// console.log(sum);
let s = prompt("enter the number")
let e = prompt("enter the number")

if(isNaN(s) || isNaN(e)){
    throw SyntaxError("Number must be a number");
}

let result = parseInt(s) + parseInt(e);

console.log(result);

function  main(){
    const i = 4;
    try{
        console.log(`the sum of the num ${result  * i}`);
    }
    catch (error){
        console.log("error went off")
    }
    finally{
        console.log("done");
        }
}

let c = main();

