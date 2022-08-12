function createBoard(size) {
    let container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0 ; i < amount; i++){
        let square = document.createElement("div");
        square.classList.add("grid");
        square.style.height = "(480 / size)px";
        square.style.width = "(480 / size)px";
        container.appendChild(square);
    }
}

createBoard(16);


//creates function to color the etch-a-sketch

function changeColour(){
    let grids = document.getElementsByClassName("grid");
    for (const grid of grids){
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = "black";
        })
    }
}

changeColour();



//need to make button work
//function to refresh 16x16 grid
function refreshGrid(){
    let grids = document.getElementsByClassName('grid');
    for (const grid of grids){
        grid.style.backgroundColor = "white";
    }
}

button.addEventListener('click', refreshGrid());

