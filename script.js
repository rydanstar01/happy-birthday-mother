// Auto adjust height of the card
function adjustCardHeight() {
    var card = document.querySelector('.card');
    var image = card.querySelector('.image');
    var message = card.querySelector('.message');
    var cardHeight = Math.max(image.offsetHeight, message.offsetHeight);

    card.style.height = cardHeight + 'px';
}

window.onload = function () {
    // Adjust height of the card
    adjustCardHeight();

    // Handle window resize event
    window.addEventListener('resize', function () {
        adjustCardHeight();
    });
};

