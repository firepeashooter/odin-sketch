

//Create a 16x16 grid of divs

function createGrid(){

    containerDiv = document.querySelector(".container");

    for (let i = 0; i < (16 * 16); i++){
        newDiv = document.createElement("div");

        newDiv.classList.add("cube");
        containerDiv.appendChild(newDiv);
    };

}

createGrid();

//Creating the Hover Effect
containerDiv = document.querySelector(".container");
cubes = document.querySelectorAll(".cube");

//Event Delegation

containerDiv.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cube")){
        e.target.classList.add("coloured");
    }
});

containerDiv.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("cube")){
        e.target.classList.remove("coloured");
    }

})
