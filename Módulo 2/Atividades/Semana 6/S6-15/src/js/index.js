const toggleBtn = document.querySelectorAll(".fa-bars");
const dropEffect = document.querySelectorAll("[data-toggle]");

toggleBtn[0].addEventListener("click", () => {
  dropEffect.forEach((el) => {
    const hasDropDown = el.classList.contains("dropdown");
    if (hasDropDown) {
      el.classList.remove("dropdown");
      el.classList.add("dropup");
      setTimeout(() => {
        el.classList.remove("flex");
      }, 200);
    } else {
      el.classList.remove("dropup");
      el.classList.add("flex");
      el.classList.add("dropdown");
    }
  });
});
