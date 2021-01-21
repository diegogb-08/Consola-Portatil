//Colors array
let color = ['lightgreen']

//start button
let start = document.getElementById('start');

//add event listener
start.addEventListener('click', function(){
    //randomizer
    var randomColor = color[Math.floor(Math.random() * color.length)]
    //get lucecita
    let lucecita = document.getElementById('lucecita');

    lucecita.style.background = randomColor;
})