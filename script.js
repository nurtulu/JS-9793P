let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
document.getElementById('counter').innerText = counter;

function increaseCounter() {
    counter++;
    document.getElementById('counter').innerText = counter;
    localStorage.setItem('counter', counter);
}

function resetCounter() {
    counter = 0;
    document.getElementById('counter').innerText = counter;
    localStorage.setItem('counter', counter);
}
