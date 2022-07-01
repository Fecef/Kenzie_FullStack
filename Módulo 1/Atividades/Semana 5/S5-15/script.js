function convertToArray(str) {
  str = str.split(".");
  let list = "";

  for (let i = 0; i < str.length; i++) {
    list += `${i + 1}º - ${str[i]}\n`;
  }
  return list;
}
console.log(
  convertToArray(
    "Verifcar se está conectado na energia. Verificar se o monitor está conectado na energia. Verificar se todos os cabos estão conectados. Apertar o botão de power. Esperar tela acender. Usar"
  )
);
