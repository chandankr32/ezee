// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Fleet Card Animation
const fleetCards = document.querySelectorAll(".fleet-card");

fleetCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });


    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// Current Year in Footer
const year = document.getElementById("year");

if(year){
    year.innerHTML = new Date().getFullYear();
}


// Booking Button Confirmation
const bookingButtons = document.querySelectorAll(".btn-warning");

bookingButtons.forEach(button => {

    button.addEventListener("click", function(){

        console.log("Booking button clicked");

    });

});


// WhatsApp Booking Function
function bookTaxi(vehicle){

    const phone = "918709917730";

    const message = 
    `Hello, I want to book ${vehicle}. Please share details.`;

    const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}