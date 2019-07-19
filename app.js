//variables
const container = document.getElementById('container');
const gridChanger = document.getElementById('gridchanger');

//make Grid
makeGrid(16);
function makeGrid(numberOfElementsOnTheSide){
    container.style.gridTemplateColumns = "1fr ".repeat(numberOfElementsOnTheSide);
    container.style.gridTemplateRows = "1fr ".repeat(numberOfElementsOnTheSide);
    for(let i = 0; i<numberOfElementsOnTheSide**2; i++){
        let protodiv = document.createElement('div');
        protodiv.classList.add('pixel');
        container.appendChild(protodiv);
    }
}

//make container empty
function deleteGrid(){
    allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach(onepixel => container.removeChild(onepixel));
}

//change color when hovering
function paintOnHover(e){
    e.target.style.backgroundColor = '#EDF5E1';
}
// canvasItems kann erst nach makeGrid bestimmt werden

function makedrawable(){
    const canvasItems = document.querySelectorAll('.pixel');
    canvasItems.forEach(onepixel => {
        onepixel.addEventListener('mouseover',paintOnHover);
    })
}
makedrawable();

//button
function clickButtonHandler(){
    let numberOfElementsPerAxis = prompt("How many items on each axis?");
    deleteGrid();
    makeGrid(numberOfElementsPerAxis);
    makedrawable();
}

gridChanger.addEventListener('click', clickButtonHandler);

