export default function navigationToggle() {
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    const bars = document.querySelectorAll('#hamburger-menu > div');
    
    const mobileNavigationMenu = document.querySelector('#mobile-navigation-menu');
    const mobileNavigationElements = document.querySelector('#mobile-navigation-menu > div');


    const topBar = document.querySelector('#hamburger-menu #top-bar');
    const middleBar = document.querySelector('#hamburger-menu #middle-bar');
    const bottomBar = document.querySelector('#hamburger-menu #bottom-bar');

    // console.log(hamburgerMenu);
    
    hamburgerMenu.addEventListener('click', () => {
        mobileNavigationMenu.classList.toggle('collabsed');
        // topBar.classList.toggle('rotate-[135deg] translate-y-3');
        // middleBar.classList.toggle('opacity-0');
        // bottomBar.classList.toggle('rotate-45 -translate-y-[14px]');
        bars.forEach((bar) => {
            bar.classList.toggle('open');
        })
    })
}