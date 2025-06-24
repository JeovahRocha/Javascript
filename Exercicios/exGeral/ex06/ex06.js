/*
Exercício 1: Calculadora Interativa
Crie uma calculadora simples em uma página HTML com botões para soma, subtração, multiplicação e divisão. Use eventos DOM para capturar os cliques nos botões e exibir o resultado em um elemento na página.
*/
function somar() {
  let tn1 = document.getElementById("n1");
  let tn2 = document.getElementById("n2");
  let res = document.getElementById("res");
  let numero1 = Number(tn1.value);
  let numero2 = Number(tn2.value);
  let resultado = numero1 + numero2;
  res.innerHTML = `A soma entre ${numero1} e ${numero2} é ${resultado}`;
}
function subtrair() {
  let tn1 = document.getElementById("n1");
  let tn2 = document.getElementById("n2");
  let res = document.getElementById("res");
  let numero1 = Number(tn1.value);
  let numero2 = Number(tn2.value);
  let resultado = numero1 - numero2;
  res.innerHTML = `A soma entre ${numero1} e ${numero2} é ${resultado}`;
}
function multiplicar() {
  let tn1 = document.getElementById("n1");
  let tn2 = document.getElementById("n2");
  let res = document.getElementById("res");
  let numero1 = Number(tn1.value);
  let numero2 = Number(tn2.value);
  let resultado = numero1 * numero2;
  res.innerHTML = `A soma entre ${numero1} e ${numero2} é ${resultado}`;
}
function dividir() {
  let tn1 = document.getElementById("n1");
  let tn2 = document.getElementById("n2");
  let res = document.getElementById("res");
  let numero1 = Number(tn1.value);
  let numero2 = Number(tn2.value);
  let resultado = numero1 / numero2;
  res.innerHTML = `A soma entre ${numero1} e ${numero2} é ${resultado}`;
}
