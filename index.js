const modalToggles = [...document.getElementsByClassName('modal-toggle')];

modalToggles.forEach(item => {
    item.addEventListener('click', () => {
        const targetModal = item.getAttribute('data-target');
        document.getElementsByClassName(targetModal)[0].classList.toggle('active');
    });
})
