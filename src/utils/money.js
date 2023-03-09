export function toMoney(money) {
  return money.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
