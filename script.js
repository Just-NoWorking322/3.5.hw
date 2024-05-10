
function createSomething() {
    let quantity = document.getElementById("value").value;
    let enteredColor = document.getElementById("color").value;

    let defaultColors = ["blueviolet", "green", "blue"];
    let colorIndex = 0;

    let htmlContent = "";

    for (let i = 0; i < quantity; i++) {
        let color = enteredColor || defaultColors[colorIndex];
        colorIndex = (colorIndex + 1) % defaultColors.length;

        htmlContent += '<div style="width: 50px; height: 50px; margin: 1rem; background-color: ' + color + '"></div>';
    }

    document.querySelector(".korobka").innerHTML = htmlContent;
}
