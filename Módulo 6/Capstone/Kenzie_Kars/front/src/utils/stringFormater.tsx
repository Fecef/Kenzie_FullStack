export function stringFormater(
  value: string,
  currency: boolean,
  callback: any
) {
  const convertedValue = +value;
  if (!convertedValue) return callback(value);

  if (currency) {
    const formatedValue = convertedValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return callback(formatedValue);
  }

  const formatedValue = convertedValue.toLocaleString("pt-BR");
  return callback(formatedValue);
}
