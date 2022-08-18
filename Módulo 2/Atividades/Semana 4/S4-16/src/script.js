const span = document.querySelector("#result");
const cepForm = document.getElementById("cep-form");
cepForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const input = cepForm[0];
  const inputValue = input.value;
  const response = await fetch(`https://viacep.com.br/ws/${inputValue}/json`)
    .then((res) => res.json())
    .then(
      (res) => (span.innerText = `${res.logradouro}, ${res.bairro}, ${res.uf}`)
    )
    .catch(() => (span.innerText = "CEP não localizado."));
}
