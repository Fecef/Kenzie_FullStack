// Exercício 1
function soma(valor1, valor2, valor3, valor4) {
    return valor1 + valor2 + valor3 + valor4;
}

function media(value) {
    return value / 4;
}

function resultado(nota1, nota2, nota3, nota4) {
    return media(soma(nota1, nota2, nota3, nota4))
}

console.log("Média do aluno Carlos: " + resultado(5, 6, 8, 9));

// Converte a temperatura para a escala desejada.
function convertTo(scale, height) {

    scale = degreeType();
    height = temperature();

    let celsius = 0;
    let kelvin = 0;
    let fahrenheit = 0;


    if (scale == "Celsius") {
        kelvin = height + 273;
        fahrenheit = height * 1.8 + 32;

        alert(`Transformado para: Kelvin: ${kelvin.toFixed(2)} / Fahrenheit: ${fahrenheit.toFixed(2)}`);

    } else if (scale == "Fahrenheit") {
        celsius = (height - 32) / 1.8;
        kelvin = (height - 32) * 5 / 9 + 273;

        alert(`Transformado para: Celsius: ${celsius.toFixed(2)} / Kelvin: ${kelvin.toFixed(2)}`);

    } else {
        celsius = height - 273;
        fahrenheit = (height - 273) * 1.8 + 32;

        alert(`Transformado para: Celsius: ${celsius.toFixed(2)} / Fahrenheit: ${fahrenheit.toFixed(2)}`);
    }
}


// Define qual o tipo do grau.
function degreeType(scale) {
    scale = prompt("Celsius (1), Fahrenheit (2) ou Kelvin? (3)");

    if (scale === "1") {
        console.log("1");
        return "Celsius";

    } else if (scale === "2") {
        console.log("2");
        return "Fahrenheit";

    } else {
        console.log("3");
        return "Kelvin";
    }
}

// Pergunta qual é a temperatura.
function temperature(height) {
    height = parseFloat(prompt("Defina a temperatura: "));

    return height;
}