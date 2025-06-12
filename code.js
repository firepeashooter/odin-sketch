

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

//Creates the initial grid
createGrid(50);


//Creating the Hover Effect
const containerDiv = document.querySelector(".container");
const cubes = document.querySelectorAll(".cube");

//Current Colour selected
let curColour = 'orange';


//Event Delegation for all the cubes in the container

containerDiv.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cube")){
        e.target.style.backgroundColor = curColour;

        //Add ten to the current opacity of the square
        e.target.style.opacity = parseFloat(getComputedStyle(e.target).opacity) + 0.1;
    }
});


//Event Delegation for Buttons

const buttonContainer = document.querySelector(".left");

buttonContainer.addEventListener( "click", (e) => {
    
    let target = e.target;
    
    switch(target.id){

        //Allows users to change the dimension of thier grid
        case "dim":
            //Promt the user for input size and save it to a variable
            size = prompt("What Size would you like the grid to be?: ");
            
            
            //Convert size to an integer so we can work with it
            let numSize = Number(size);
            
            
            //User input validation
            if (Number.isInteger(numSize)){
            
                if (numSize <= 100 && numSize >= 1){ 
                    
                        deleteGrid(containerDiv);
                        createGrid(numSize);
            
                }else{
                    alert("Invalid Number! Must be an Integer between 1 and 100");
                }
            }else{
                alert('Invalid Input! Must be an Integer between 1 and 100');
            }

            break;
        
        case "orange":

            curColour = "orange";

            break;

        case "green":

            curColour = "green";

            break;

        case "blue":

            curColour = "lightblue";

            break;
    }




})

