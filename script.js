//create variables for later use
let container = document.getElementById('container');
console.log(container);

//function to build a grid in the container

function buildGrid(x){
    for (let rows = 0 ; rows < x ; rows++){
        for (let columns = 0 ; columns < x ; columns++){
            container.append("<div class = 'grid'> </div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
}




