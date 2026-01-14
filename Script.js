// script.js for Greg's Aroma

// Example: Show an alert when a user clicks "Add to Cart"
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.dataset.product;
            alert(`${product} has been added to your cart! 🌸`);
        });
    });
});

// Example: Change product card background on hover
const products = document.querySelectorAll(".product");
products.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "#fff5e6";
    });
    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "#ffffff";
    });
});
