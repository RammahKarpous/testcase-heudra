import navigationToggle from "./navigation-toggle.js";
navigationToggle();

/** Selecting all the achor tags with a # in the url, and setting prevent default on them */
const anchors = document.querySelectorAll('a[href="#"]');

anchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
    })
})