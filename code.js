

//Create a size x size grid
//Size in an int that specifies the size of the grid (it's a square)

function createGrid(size){

    const containerDiv = document.querySelector(".container");

    for (let i = 0; i < size; i++){ //Creates the rows in the container

        const newDivRow = document.createElement("div");

        newDivRow.style.width = containerDiv.style.width;
        newDivRow.classList.add("row");
        containerDiv.appendChild(newDivRow);

        for (let j = 0; j < size; j++){ //Create the cubes within the rows

            const newDivCube = document.createElement("div");

            newDivCube.classList.add("cube");
            newDivRow.appendChild(newDivCube);
        }

    };

}

//A function to delete the entire grid

function deleteGrid(container){

    //loop through the rows and just delete them
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

createGrid(50);


//Creating the Hover Effect
const containerDiv = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

//Event Delegation

containerDiv.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cube")){
        e.target.classList.add("coloured");

        //Make the square darker ever time you hover over it
    }
});


//Allowing Users to Specify Dimension

const dimButton = document.querySelector(".dimension");

dimButton.addEventListener("click", (e) => {

    //Promt the user for input size and save it to a variable
    size = prompt("What Size would you like the grid to be?: ");

    //Delete the current grid
    deleteGrid(containerDiv);

    //Render the new grid
    createGrid(size);
})

