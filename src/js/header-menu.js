(() => {
  const refs = {
    openMenuBtn1: document.querySelector('[data-menu-open1]'),
    openMenuBtn2: document.querySelector('[data-menu-open2]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  refs.openMenuBtn1.addEventListener('click', toggleMenu);
  refs.openMenuBtn2.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();