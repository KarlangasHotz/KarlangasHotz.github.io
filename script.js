

//16x16 square divs with DOM manip
//they have to be appended as child of container
let container = document.querySelector("div#container");

//pure container, how does it have 16 childNodes already??
console.log(container);

//16 squares that are div
let square1 = document.createElement("div");
let square2 = document.createElement("div");
let square3 = document.createElement("div");
let square4 = document.createElement("div");
let square5 = document.createElement("div");
let square6 = document.createElement("div");
let square7 = document.createElement("div");
let square8 = document.createElement("div");
let square9 = document.createElement("div");
let square10 = document.createElement("div");
let square11 = document.createElement("div");
let square12 = document.createElement("div");
let square13 = document.createElement("div");
let square14 = document.createElement("div");
let square15 = document.createElement("div");
let square16 = document.createElement("div");


//squares defined as children of container in DOM
//couldve been looped: too late
container.appendChild(square1);
container.appendChild(square2);
container.appendChild(square3);
container.appendChild(square4);
container.appendChild(square5);
container.appendChild(square6);
container.appendChild(square7);
container.appendChild(square8);
container.appendChild(square9);
container.appendChild(square10);
container.appendChild(square11);
container.appendChild(square12);
container.appendChild(square13);
container.appendChild(square14);
container.appendChild(square15);
container.appendChild(square16);

//Setting up targeting each square and because of this
// giving them id = square
//mainly because black is default "not hovered on" colour

let squares = document.getElementById("container").childNodes;

for( let i = 0; i < squares.length; i++){

    squares[i].classList.add("square");
}

//now we can style them all through .square

//individual squares would be targeted squares[0-15]
//function forSquares() gives addEventListener to each square
//when hovered, they will become yellow


squares.forEach( e =>
    e.style.width = "250px"
)
squares.forEach( e =>
    e.style.height = "250px"
)

function forSquares (){
    squares.forEach(e =>
        e.addEventListener("mouseover", function (){

            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.style.backgroundColor = "#" + randomColor;
        })
    )

}
forSquares();


//function when button clicked on
//should delete current board: precedes create()
let button = document.querySelector("button");

function clear (){
    // container.childNodes = "";

    for ( i = container.childNodes.length - 1 ; i >= 0 ; i--){
        
        container.childNodes[0].remove()
    }
    
}

function create (){

    //ask for input: 1000px/(input^2) = width && length of each new square 

    let choice = parseInt(prompt("Choose amount of squares per side [up to 10 per side]", "e.g. 6"))
    if (choice > 0 && choice <= 10){
        let squares = document.getElementById("container").childNodes;

        let length = `${1000/ choice}`+ "px"

        //create the new board (choice * choice amount of squares)
        for (i = 1; i <= choice * choice; i++){
    
            container.appendChild(document.createElement("div"));
        }
        //width of each new Square
        squares.forEach(e => 
            e.style.width = `${length}`
        )
        //height of each new Square
        squares.forEach(e =>         

            e.style.height = `${length}`
        )

        //now give new board squares class square
        for( let i = 0; i < squares.length; i++){

            squares[i].classList.add("square");
        }
        forSquares();

        squares.forEach(e =>
            e.style.backgroundColor = "black"
        )
    }
    else {alert("Invalid input: Please choose a number between 1 and 10")}
}
button.addEventListener("click", clear);
button.addEventListener("click", create);










