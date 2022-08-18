const btn = document.querySelector("button");
const section = document.querySelector("#result");

btn.addEventListener("click", () => {
  const number = getNumber();
  section.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    fetch(`http://numbersapi.com/${number}/math?json`)
      .then((res) => res.json())
      .then((curiosity) => {
        section.insertAdjacentHTML(
          "afterbegin",
          `
        <p>${curiosity.text}</p>
      `
        );
      });
  }
});

btn.addEventListener("click", () => {
  const data = getData();
  const month = data.slice(5, 7);
  const day = data.slice(8, 10);
  section.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    fetch(`http://numbersapi.com/${day}/${month}/date?json`)
      .then((res) => res.json())
      .then((curiosity) => {
        section.insertAdjacentHTML(
          "afterbegin",
          `
        <p>${curiosity.text}</p>
      `
        );
      });
  }
});

function getNumber() {
  const num = document.querySelector("#random-number");
  return num.value;
}

function getData() {
  const data = document.querySelector("#data");

  // data.value.slice(5);
  return data.value;
}
