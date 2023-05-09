const buttons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');
    galleryItems.forEach(item => {
      item.classList.add('hide');
      if (item.classList.contains(filter) || filter === 'all') {
        item.classList.remove('hide');
      }
    });
  });})