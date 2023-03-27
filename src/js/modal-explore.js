(() => {
  const refs = {
    openExploreBtn: document.querySelector("[data-explore-open]"),
    closeExploreBtn: document.querySelector("[data-explore-close]"),
    explore: document.querySelector("[data-explore]"),
  };

  refs.openExploreBtn.addEventListener("click", toggleExplore);
  refs.closeExploreBtn.addEventListener("click", toggleExplore);

  function toggleExplore() {
    refs.explore.classList.toggle("is-hidden");
  }
})();