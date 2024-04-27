const row = document.createElement("div");
row.classList = "row";
container.appendChild(row);

for (i = 0; i < 16; i++) {
    let col = document.createElement("div");
    col.classList = "col";
    row.appendChild(col);
}

const columns = document.querySelectorAll('.col');
columns.forEach((col) => {
    for (i = 0; i < 16; i++) {
        gridSquare = document.createElement("div");
        gridSquare.classList = "grid-square";
        col.appendChild(gridSquare);
    }
});