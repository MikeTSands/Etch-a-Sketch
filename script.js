//create variables for later use
let container = document.getElementById('container');



//function to build a grid in the container

function buildGrid(x){
    for (let rows = 0 ; rows < x ; rows++){
        for (let columns = 0 ; columns < x ; columns++){
            let child = document.createElement("div");
            child.classList.add("grid");
            container.append(child);
        };
    };
}

buildGrid(16);


//creates function to color the etch-a-sketch
function changeColor(){
    let grids = document.getElementsByClassName('grid');
    for (const grid of grids){
        grid.addEventListener('mouseover', function(){
            grid.style.backgroundColor =  "black";
        })
    }
}

changeColor();

//need to make button work
//function to refresh 16x16 grid
function refreshGrid(){
    let grids = document.getElementsByClassName('grid');
    for (const grid of grids){
        grid.style.backgroundColor = "white";
        console.log("hello");
    }

}

let button = document.getElementById("button");
button.addEventListener('click', refreshGrid());
