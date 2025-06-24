let num = [5, 8, 2, 9, 3];

//Ordena os valores
num.sort();
//Acrescenta um valor a posição 5
num[5] = 9;

//Acrescenta um valor a ultima posição do vetor
num.push(4);

//Mostrando o vetor sem a formatação padrão
/*for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

console.log(`Nosso vetor é ${num}`);
*/
//Funciona apenas com objetos e arrays
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
