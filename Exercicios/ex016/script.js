function contar() {
  let aqui1 = document.getElementById("aqui");
  let n1 = document.getElementById("number1"); //inicio
  let n2 = document.getElementById("number3"); //passo
  let n3 = document.getElementById("number2"); //fim

  if (n1.value.length == 0 || n3.value.length == 0 || n2.value.length == 0) {
    window.alert("ERRO");
  } else {
    let n11 = Number(n1.value);
    let n22 = Number(n2.value);
    let n33 = Number(n3.value);
    if (n22 <= 0) {
      window.alert("ERRO! Considerado passo um.");
      n22 = 1;
    }
    if (n11 < n33) {
      //Contagem crecente
      for (let c = n11; c <= n33; c += n22) {
        aqui1.innerHTML += ` ${c} `;
      }
    } else {
      //contagem decrecente
      for (let c = n11; c >= n33; c -= n22) {
        aqui1.innerHTML += ` ${c} `;
      }
    }
  }
}
