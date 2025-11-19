document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the new simple web page!');

    // Add simple hover effect logic if needed beyond CSS
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(99, 102, 241, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        });
    });
});
