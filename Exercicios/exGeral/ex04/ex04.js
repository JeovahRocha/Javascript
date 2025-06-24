/* 
Exercício 4: Verificação de Números
Crie um programa que solicite dois números ao usuário e verifique se o primeiro número é maior, menor ou igual ao segundo número. Exiba o resultado no console.
*/
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));

if (num1 > num2) {
  document.write(`O numero ${num1} é maior que o numero ${num2}`);
} else if (num1 < num2) {
  document.write(`O número ${num1} é menor que o numero ${num2}`);
} else {
  document.write(`Os número ${num1} e ${num2} são iguais.`);
}
