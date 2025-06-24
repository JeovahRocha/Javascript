function pais() {
  let nac1 = document.getElementById("nac");
  let brl = document.getElementById("brl");
  result = String(nac1.value);
  brl.innerHTML = `<p>Você nasceu no ${result}</p>`;
  if (result == "Brasil") {
    brl.innerHTML += `<p>Você é Brasileirohuehuehue</p>`;
  } else {
    brl.innerHTML += `<p> Você é gringo!</p>`;
  }
}
