function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    // TODO complete the rest
    const colorsDiv = document.getElementById("colors");
    const selectedColor = document.getElementById("selected");

    let randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    colorsDiv.style.backgroundColor = randomColor;
    selectedColor.innerText = randomColor;
}

window.onload = function () {
    initGrid();
}
