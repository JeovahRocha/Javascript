/*Exercício 2: Conversor de Temperatura
Crie um programa que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é: F = (C * 9/5) + 32. Solicite a temperatura em Celsius ao usuário e exiba o resultado em Fahrenheit.
*/

let temp = Number(prompt("Qual a temperatura onde você esta? "));

let f = (temp * 9) / 5 + 32;
console.log(`A temperatura equivalente em Fahrenheit é ${f}`);
