export class Anime {
  static alertModal() {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content-alert");
    const modalBtn = document.querySelector(".modal-content-alert-btn");

    modal.classList.remove("hidden");
    modalContent.classList.remove("modal-out");
    modalContent.classList.add("modal-in");

    modalBtn.addEventListener("click", () => {
      modalContent.classList.remove("modal-in");
      modalContent.classList.add("modal-out");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 450);
    });
  }

  static contenttModal() {
    const modal = document.querySelector("#modal");
    const modalContent = document.querySelector(".modal-content");
    const modalBtn = document.querySelector(".modal-content-btn");

    modal.classList.remove("hidden");
    modalContent.classList.remove("modal-out");
    modalContent.classList.add("modal-in");

    modalBtn.addEventListener("click", () => {
      modalContent.classList.remove("modal-in");
      modalContent.classList.add("modal-out");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 450);
    });
  }
}
