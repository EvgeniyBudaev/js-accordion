const accordion = document.querySelector('[data-accordion="accordion"]');
const items = accordion.querySelectorAll('[data-accordion="select"]');
const header = accordion.querySelectorAll('[data-accordion="header"]');

function toggleAccordion() {
  const thisItem = this.parentNode;
  console.log('this', this); //accordion__select
  console.log('thisItem', thisItem); // li

    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('open');
        return;
    }

    item.classList.remove('open');
  });
}

header.forEach(header => header.addEventListener('click', toggleAccordion));