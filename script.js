document.addEventListener('DOMContentLoaded', function() {
    const offers = document.querySelectorAll('input[name="offer"]');
    const total = document.getElementById('total');

    offers.forEach((offer) => {
        offer.addEventListener('change', function() {
            offers.forEach(o => o.closest('.offer').classList.remove('selected'));
            this.closest('.offer').classList.add('selected');
            total.textContent = `$${this.value}.00 USD`;
        });
    });
});