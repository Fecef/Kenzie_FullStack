const button = document.getElementById("findButton");
button.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  getAnagramsOf(input);
});

function getAnagramsOf(input) {
  let textContent = words.filter((element) => {
    return alphabetize(input) === alphabetize(element);
  });
  textContent = textContent.join(", ");
  button.insertAdjacentHTML("afterend", `<p>${textContent}</p>`);
}

function alphabetize(str) {
  return str.toLowerCase().split("").sort().join("").trim();
}
