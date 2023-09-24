let body = document.getElementById("body");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let array = ["blue", "white", "pink", "maroon", "orange", "green", "purple", "yellow", "cyan", "lavender", "aqua"]
let i = 0;

btn.addEventListener("click", ()=>{
    body.style.backgroundColor = array[i];
    text.innerHTML = array[i];
    text.style.color = array[i]
    i++
    if(i === array.length){
        i = 0;
    }
})