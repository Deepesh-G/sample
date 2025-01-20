console.log("this is a module!")
function aveg(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
   return sum/arr.length;
   
}
module.exports = aveg;
// console.log(aveg([3,4]));
