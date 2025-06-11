

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