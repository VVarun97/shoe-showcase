document.addEventListener('DOMContentLoaded', () => {
    const mainShoeImage = document.getElementById('main-shoe-img');
    const selectorButtons = document.querySelectorAll('.selector-btn');

    // Handle Shoe Swapping
    selectorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newSrc = button.getAttribute('data-src');

            // Skip if clicking same shoe
            if (mainShoeImage.getAttribute('src') === newSrc) return;

            // Update UI State
            selectorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Animate out
            mainShoeImage.classList.add('fade-out');

            // Swap image when half faded
            setTimeout(() => {
                // Ensure image is loaded before fading back in
                mainShoeImage.onload = () => {
                    mainShoeImage.classList.remove('fade-out');
                    // Remove onload after running to prevent redundant calls
                    mainShoeImage.onload = null;
                };
                
                mainShoeImage.setAttribute('src', newSrc);
            }, 200); // 200ms matches halfway through CSS transition
        });
    });
});
