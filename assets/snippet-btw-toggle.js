window.onload = function() {
    const btwToggle = document.querySelector('.btw-toggle');
    const toggle = btwToggle.querySelector('span')

    btwToggle.addEventListener('click', () => {
        toggle.classList.toggle('incl');
    })
}