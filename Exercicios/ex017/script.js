function tabuada() {
  let num = document.getElementById("numero").value;
  let tab = document.getElementById("result");
  // Limpar o SELECT sempre que ativar a função
  tab.innerHTML = " ";
  // loop para a tabuada de 1 a 10
  for (let c = 1; c <= 10; c++) {
    let res = num * c;
    // criando uma Option no Select do HTML
    let item = document.createElement("option");

    item.text = `${num} x ${c} = ${res}`;
    tab.appendChild(item);
  }
}
