<body>
  <!-- Wszystkie Twoje znaczniki HTML, w tym znaczniki okna modalnego  -->

  <!-- Umieść przed zamykającym tagiem body -->
  <script src="./js/modal.js"></script>
</body>

Skrypt do skopiowania i wklejenia do pliku modal.js.

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();