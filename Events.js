let bnt = document.getElementById("btn");


btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "this is a test box for events";
    document.body.style.backgroundColor = " red";
    document.body.style.color = " green";
    alert("you got hacked ");  

});

function getRamdomcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`

}

setInterval(() => {
    document.querySelector(".container").style.backgroundColor = getRamdomcolor();
},1000); 