const refs = {
  modal: document.querySelector("#modal"),
  openModal: document.querySelector(".open-button"),
  closeModal: document.querySelector(".close-button"),
};

refs.openModal.addEventListener("click", () => {
  refs.modal.showModal();
});

refs.closeModal.addEventListener("click", () => {
  refs.modal.setAttribute("closing", "");

  refs.modal.addEventListener(
    "animationend",
    () => {
      refs.modal.removeAttribute("closing");
      refs.modal.close();
    },
    { once: true }
  );
});
