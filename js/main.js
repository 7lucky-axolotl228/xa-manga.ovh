const elModalOpener = document.querySelector('.js-modal-opener');
const elModal = document.querySelector('.modal');

elModalOpener.addEventListener('click', function() {
  elModal.classList.add('modal-open');
});
