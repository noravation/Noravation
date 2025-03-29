// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Get Started Button and Popup Handling
const getStartedBtn = document.getElementById('get-started-btn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup-btn');

// When the "Get Started" button is clicked, show the popup
getStartedBtn.addEventListener('click', function() {
    popup.style.display = 'flex'; // Show the popup
});

// When the "Close" button is clicked, hide the popup
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
});

// Optional: If the user clicks outside the popup, it will also close the popup
window.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});

// Handle Contact Form Submission (Redirect to Thank You Page)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    // Redirect to the Thank You page
    window.location.href = "thank-you.html";
});
