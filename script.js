

let currentMode = "black";
let size = 16

const grid = document.querySelector('#grid');
const black = document.querySelector("#black");
const random = document.querySelector("#random")
const erase = document.querySelector("#erase")
const clear = document.querySelector("#clear")
const sliderSize = document.querySelector(".slider-size");
let userInput = document.querySelector("#size");

black.onclick = () => { currentMode = "black" };
random.onclick = () => { currentMode = "random" };
erase.onclick = () => { currentMode = "erase" };



function resetGrid() {
    grid.innerText = "";
}
function updateSliderSize() {
    sliderSize.innerText = `${size} x ${size}`
}
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.className = "grid-row";
        for (let i = 0; i < size; i++) {
            let gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridRow.appendChild(gridItem);
        }
        grid.append(gridRow)
    }
}
grid.addEventListener("mouseover", changeColor)
function changeColor(event) {

    let target = event.target;
    if (target.className != "grid-item") return;
    if (currentMode == "black") { target.style.backgroundColor = "#111"; }
    else if (currentMode == "erase") {
        target.style.backgroundColor = "#fff";
    }
    else if (currentMode = "random") {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }

}
userInput.addEventListener('input', updateSize);
function updateSize(event) {
    size = event.target.value;
    updateSliderSize()
    resetGrid();
    createGrid(size);

}
clear.addEventListener('click', () => {
    resetGrid();
    createGrid(size);
})
updateSliderSize();
createGrid(size);
