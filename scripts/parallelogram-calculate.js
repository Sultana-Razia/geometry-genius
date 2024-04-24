function calculateParallelogramArea() {
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const base = parseFloat(parallelogramBaseInput.value);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const height = parseFloat(parallelogramHeightInput.value);

    const area = base * height;
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}