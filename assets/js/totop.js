// Function to toggle the visibility of the 'to-top' button
const toggleToTopButton = () => {
    const toTopButton = document.querySelector('.to-top');
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    toTopButton.style.display = scrollPosition > 100 ? "flex" : "none";
};

// Event listener for scroll event
window.addEventListener('scroll', toggleToTopButton);

// Initially hide the button in case of immediate scroll position greater than 100
toggleToTopButton();
