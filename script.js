//function to create a board of any size between 2 and 100

function createBoard(size) {
    let container = document.getElementById('container');
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.classList.add("grid");
      square.style.height = "(480 / size)px";
      square.style.width = "(480 / size)px";
      container.appendChild(square);
    }
  }
  
  createBoard(16);
  
  function refreshGrid() {
  
    let button = document.getElementById("button");
    button.addEventListener("click", () => {
      let number = window.prompt("What size grid do you want?");
      if (number > 2 && number < 100) {
        createBoard(number);
        changeColour();
      } else {
        console.log("You selected too many or too few squares.");
      }
    });
  }
  
  refreshGrid();
  
  
  
  //creates function to color the etch-a-sketch
  
  function changeColour() {
    let grids = document.getElementsByClassName("grid");
    for (const grid of grids) {
      grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "black";
      })
    }
  }
  
  changeColour();
  
  
  
  
  
  
  