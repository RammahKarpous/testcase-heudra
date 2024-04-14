window.onload = function() {
    const btwToggle = document.querySelectorAll('.btw-toggle');
    
    btwToggle.forEach((btw) => {
        const toggle = btw.querySelector('span');

        btw.addEventListener('click', () => {
            toggle.classList.toggle('incl');
            toggle.classList.toggle('excl');
        })
    })
}