(() => {
  const refs = {
    openModalExploreBtn: document.querySelector("[data-modal-explore-open]"),
    closeModalExploreBtn: document.querySelector("[data-modal-explore-close]"),
    modalExplore: document.querySelector("[data-modal]"),
  };

  refs.openModalExploreBtn.addEventListener("click", toggleModalExplore);
  refs.closeModalExploreBtn.addEventListener("click", toggleModalExplore);

  function toggleModalLeave() {
    refs.modalExplore.classList.toggle("is-hidden");
  }
})();