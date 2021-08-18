function setColor(colorElement, colorName) {
    // STEP 1: Set background color style of the colorElement to the colorName
    // Your code here

    // STEP 2: Center text in each color element
    // Your code here

    // STEP 3: Set text color to white when background is green, blue or indigo
    // Your code here
}

// =============================
// DO NOT EDIT BELOW THIS LINE
// =============================

const rainbowList = document.getElementById('rainbow-list');

const rainbowColors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Indigo",
    "Violet"
];

rainbowColors.forEach((color) => {
    const colorElement = document.createElement("li");
    colorElement.innerText = color;
    setColor(colorElement, color.toLowerCase());
    rainbowList.appendChild(colorElement);
});