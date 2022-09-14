let turn = 1;
let results = [[],[],[]];
let play;
let menu = document.getElementById("menu");
let twoP = document.getElementById("twoPlayer");
let oneP = document.getElementById("onePlayer");
let table = document.querySelector("table");
const body = document.querySelector("body");
twoP.onclick = function() {
    table.style.visibility = "visible";
    body.removeChild(menu);
    play = 1;
}

oneP.onclick = function() {
    play = 0;

    menu.innerHTML = "";

    let buttonX = document.createElement("button");
    buttonX.innerHTML = "X";

    let buttonO = document.createElement("button");
    buttonO.innerHTML = "O";
    buttonX.onclick = function() {
        body.removeChild(menu);

        table.style.visibility = "visible";
        turn = 1;

    }
    buttonO.onclick = function() {
        body.removeChild(menu);
        table.style.visibility = "visible";
        turn = 1;
        setTimeout(function(){computerTurn()},200);

    }
    menu.appendChild(buttonX);
    menu.appendChild(buttonO);


    
    

}



for(let i = 1; i < 4; i++){
    for(let z = 1; z < 4; z++){
        let id = i.toString() + "-" + z.toString();
        let grid = document.getElementById(id);
        grid.addEventListener("click", function(e){
            clicked(id)});
    }
}


function clicked(id) {
    let grid = document.getElementById(id);
    if(grid.innerHTML === ""){
        let row = parseInt(id.slice(0,1)) - 1;
        let column = parseInt(id.slice(2,3)) - 1;
        console.log("ro
