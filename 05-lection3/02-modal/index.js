(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const overlay = document.getElementById("modal-overlay");
    const modalOpen = document.getElementById('modal-open');

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();