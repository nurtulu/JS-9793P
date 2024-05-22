document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment-btn');
    let counter = 0;

    incrementButton.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
    });
});