(() => {
  const refs = {
    openModalLeaveBtn: document.querySelector("[data-modal-leave-open]"),
    closeModalLeaveBtn: document.querySelector("[data-modal-leave-close]"),
    leave: document.querySelector("[data-modal-leave]"),
     modalSendBtn: document.querySelector("[data-modal-send-btn]"),
  
    modalThanksReview: document.querySelector("[data-thanks-review-modal]"),
    closeModalThanksReviev: document.querySelector("[data-close-thanks-review]"),
  };

  refs.openModalLeaveBtn.addEventListener("click", toggleModalLeave);
  refs.closeModalLeaveBtn.addEventListener("click", toggleModalLeave);
  refs.modalSendBtn.addEventListener("click", removeModalLeave);
  refs.closeModalThanksReviev.addEventListener("click", removeModalLeave);
  function toggleModalLeave() {
    refs.leave.classList.toggle("is-hidden");
  }
  function removeModalLeave(e) {
    e.preventDefault();
    refs.modalThanksReview.classList.toggle("is-hidden");
    refs.leave.classList.add("is-hidden");
  }
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelectorAll("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
   
//   };
//   refs.openModalBtn.forEach((el) => {
//   el.addEventListener("click", toggleModal);
// })
  
//   refs.closeModalBtn.addEventListener("click", toggleModal);
//   refs.modalSubscribe.addEventListener("click", removeModal);
//   refs.closeModalThanks.addEventListener("click", removeModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
  
// })();