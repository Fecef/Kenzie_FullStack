const h1 = document.querySelector("h1");

function rollingDices() {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 1000; i++) {
    let rollOfDice = Math.ceil(Math.random() * 11) + 1;
    console.log(rollOfDice);
    count[rollOfDice - 2] += 1;
  }
  console.log(count);
  buildHTML(count);
}

function buildHTML(arr) {
  const sum = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length; i++) {
    h1.insertAdjacentHTML(
      "afterend",
      `<p>${i + 2}: ${arr[i]}</p>
        <progress max="${sum}" value="${arr[i]}"></progress>
        `
    );
  }
}

rollingDices();
