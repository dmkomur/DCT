(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalSubscribe: document.querySelector("[data-modal-subscribe]"),
  
    modalThanks: document.querySelector("[data-thanks-modal]"),
    closeModalThanks: document.querySelector("[data-close-thanks-modal]"),
  };
  refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", toggleModal);
})
  
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modalSubscribe.addEventListener("click", removeModal);
  refs.closeModalThanks.addEventListener("click", removeModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  function removeModal(e) {
    e.preventDefault();
    refs.modalThanks.classList.toggle("is-hidden");
    refs.modal.classList.add("is-hidden");
  }
})();