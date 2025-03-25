// Set the date we're counting down to (the event start date)
const countdownDate = new Date("2025-04-08T23:59").getTime(); // Event start date (march 25, 2025, 09:00)

// Update the countdown every second
const timer = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(timer); // Stop the countdown
        document.querySelector('.countdown-container').innerHTML = "<h2>The hackathon has ended!</h2>";
    } else {
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the results
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }
}, 1000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and details elements
document.querySelectorAll('section, details').forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Add animation class to hero content after page load
window.addEventListener('load', () => {
    document.querySelector('.hero-content').classList.add('loaded');
});
