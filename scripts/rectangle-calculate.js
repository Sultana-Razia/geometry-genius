function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidthInput.value);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLengthInput.value);

    const area = width * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}