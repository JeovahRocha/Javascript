/* 
Exercício 3: Concatenando Strings
Crie um programa que solicite o nome e o sobrenome do usuário e exiba uma mensagem de boas-vindas no formato: "Olá, [nome] [sobrenome]! Bem-vindo ao nosso site."
 */

let nome = prompt("Qual o seu nome?");
let sobrenome = prompt("Qual o seu sobrenome?");

document.write(`Seja Bem vindo ${nome} ${sobrenome}`);
