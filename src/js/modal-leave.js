(() => {
  const refs = {
    openModalLeaveBtn: document.querySelector("[data-modal-leave-open]"),
    closeModalLeaveBtn: document.querySelector("[data-modal-leave-close]"),
    modalLeave: document.querySelector("[data-modal]"),
  };

  refs.openModalLeaveBtn.addEventListener("click", toggleModalLeave);
  refs.closeModalLeaveBtn.addEventListener("click", toggleModalLeave);

  function toggleModalLeave() {
    refs.modalLeave.classList.toggle("is-hidden");
  }
})();