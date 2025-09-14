// Global variable
let box = document.getElementById('box');

// Function to change box color
function changeColor(element, color) {
    element.style.backgroundColor = color;
    return `Color changed to ${color}`;
}

// Function to move box
function moveBox(element, x, y) {
    element.style.transform = `translate(${x}px, ${y}px)`;
    return `Box moved to (${x}, ${y})`;
}

// Function to start/stop spin animation
function toggleSpin(element) {
    if (element.classList.contains('spin')) {
        element.classList.remove('spin');
        return 'Spin stopped';
    } else {
        element.classList.add('spin');
        return 'Spin started';
    }
}
