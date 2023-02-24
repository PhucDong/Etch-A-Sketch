let container = document.querySelector(".container");

for (let i=0; i < 16; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square-div");
    container.appendChild(squareDiv);
}