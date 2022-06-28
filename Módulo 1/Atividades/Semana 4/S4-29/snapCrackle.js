function snapCrackle(maxValue) {
  let string = "";

  for (i = 1; i <= maxValue; i++) {
    string += i;
    // Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
    if (i % 2 !== 0 && i % 5 === 0) {
      string = string.replace(RegExp(i), "");
      string += "SnapCrackle";
      // Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
    } else if (i % 5 === 0) {
      string = string.replace(RegExp(i), "");
      string += "Crackle";
      // Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
    } else if (i % 2 !== 0) {
      string = string.replace(RegExp(i), "");
      string += "Snap";
    }
    // Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
    i < maxValue ? (string += ", ") : (string += ".");
    // Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
    // linha 5: string += i;
  }
  console.log(string);
}

function snapCracklePrime(maxValue) {
  let string = "";

  for (i = 1; i <= maxValue; i++) {
    string += i;
    // Ímpar e múltiplo de 5
    if (i % 2 !== 0 && i % 5 === 0) {
      string = string.replace(RegExp(i), "");
      string += "SnapCrackle";
      // Múltiplo de 5
    } else if (i % 5 === 0) {
      string = string.replace(RegExp(i), "");
      string += "Crackle";
      // Ímpar
    } else if (i % 2 !== 0) {
      string = string.replace(RegExp(i), "");
      string += "Snap";
    }
    // Primos
    for (let j = 2; j <= i; j++) {
      if (i % 2 === 0 && i !== 2) {
        //Apenas para filtrar...
      } else if (i % 3 === 0 && i !== 3) {
        //Apenas para filtrar...
      } else if (i % 4 === 0 && i !== 4) {
        //Apenas para filtrar...
      } else if (i % 5 === 0 && i !== 5) {
        //Apenas para filtrar...
      } else if (i % 6 === 0 && i !== 6) {
        //Apenas para filtrar...
      } else if (i % 7 === 0 && i !== 7) {
        //Apenas para filtrar...
      } else if (i % 8 === 0 && i !== 8) {
        //Apenas para filtrar...
      } else if (i % 9 === 0 && i !== 9) {
        //Apenas para filtrar...
      } else if (i === 2) {
        string = string.replace(RegExp(i), "Prime");
      } else {
        string += "Prime";
        break;
      }
    }
    // Separação com vírgula e espaço.
    i < maxValue ? (string += ", ") : (string += ".");
  }
  console.log(string);
}