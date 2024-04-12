window.onload = function() {
    if (document.querySelector('.nav-search-bar') !== undefined) {
        const searchBar = document.querySelector('.nav-search-bar');
        const input = searchBar.querySelector('input');

        input.addEventListener('focus', () => {
            searchBar.classList.add('expanded');
            console.log("focussed");
        })
    }
}