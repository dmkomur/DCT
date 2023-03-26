(() => {
  const refs = {
    openModalLeaveBtn: document.querySelector("[data-modal-leave-open]"),
    closeModalLeaveBtn: document.querySelector("[data-modal-leave-close]"),
    leave: document.querySelector("[data-modal-leave]"),
  };

  refs.openModalLeaveBtn.addEventListener("click", toggleModalLeave);
  refs.closeModalLeaveBtn.addEventListener("click", toggleModalLeave);

  function toggleModalLeave() {
    refs.leave.classList.toggle("is-hidden");
  }
})();