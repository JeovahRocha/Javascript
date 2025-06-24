/*
Exercício 5: Calculadora de IMC
Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa. O IMC é calculado pela fórmula: IMC = peso / (altura * altura). Solicite o peso (em kg) e a altura (em metros) ao usuário e exiba o resultado no console.
*/

let peso = Number(prompt("Qual o seu peso em? "));
let altura = Number(prompt("Qual a sua altura? "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
  document.write(
    `O seu IMC é ${imc}, isso indica que você esta abaixo do peso ideal`
  );
} else if (imc >= 18.5 && imc <= 24.9) {
  document.write(
    `O seu IMC é ${imc.toFixed(2)}, isso indica que seu peso esta normal`
  );
} else if (imc >= 25 && imc <= 29.9) {
  document.write(
    `O seu IMC é ${imc.toFixed(2)}, isso indica que voce esta em pré-obesidade`
  );
} else if (imc >= 30 && imc <= 34.9) {
  document.write(
    `O seu IMC é ${imc.toFixed(
      2
    )}, isso indica que voce esta em Obesidade Grau 1`
  );
} else if (imc >= 35 && imc <= 39.9) {
  document.write(
    `O seu IMC é ${imc.toFixed(
      2
    )}, isso indica que voce esta em Obesidade Grau 2`
  );
} else {
  document.write(
    `O seu IMC é ${imc.toFixed(
      2
    )}, isso indica que voce esta em Obesidade Grau 3`
  );
}
