const accordionItems = document.querySelectorAll('.accordion-item a');

function toggleAccordion () {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

accordionItems.forEach(item => item.addEventListener('click', toggleAccordion))