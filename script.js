// ---JavaScript Functions ---
// Function to calculate area (demonstrates parameters & return values)
function calculateArea(width, height) {
    return width * height;
}
// Function to trigger box animation (demonstrates local scope)
function triggerAnimation(boxId) {
    const box = document.getElementById(boxId); // local variable
    box.classList.add('animate');

    // Remove the class after animation ends to allow repeated triggers
    box.addEventListener('animationend', () => {
        box.classList.remove('animate');
    }, { once: true });
}
// Event listener for button click
document.getElementById('animateBtn').addEventListener('click', () => {
    triggerAnimation('box');

    // Example of using a function with return value
    const area = calculateArea(10, 5);
    document.getElementById('output').textContent = `Calculated Area: ${area}`;
});
