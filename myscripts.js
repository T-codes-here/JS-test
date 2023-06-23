window.addEventListener("DOMContentLoaded", (event) => {
    const para = document.querySelector('p');
    const button = document.querySelector('button');
});



button.addEventListener("click", setText());

function setText() {
    para.textContent = prompt('What do you want the text to be?', 'Initial text here')
}