const a = document.querySelector("a");
const btn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const btn2 = document.querySelector(".modal-form button");
a.addEventListener("click", () => {
  modal.classList.remove("modal-easeout");
  modal.classList.add("modal-easein");
  modal.classList.toggle("hidden");
});
btn.addEventListener("click", () => {
  modal.classList.remove("modal-easein");
  modal.classList.add("modal-easeout");
  setTimeout(() => {
    modal.classList.toggle("hidden");
  }, 200);
});
btn2.addEventListener("click", (e) => {
  modal.classList.remove("modal-easein");
  modal.classList.add("modal-easeout");
  setTimeout(() => {
    modal.classList.toggle("hidden");
  }, 200);
});
