function calcNascimento() {
  let aqui1 = document.getElementById("resultado");
  let ano = document.getElementById("anoNascimento1");
  let data = new Date();
  let ano1 = data.getFullYear();

  if (ano.value.lenght == 0 || Number(ano.value) > ano1) {
    aqui1.innerHTML = `[ERRO]`;
  } else {
    let sexo = document.getElementsByName("Masculino-feminino");
    let atual = ano1 - Number(ano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("class", "caixa");
    if (sexo[0].checked) {
      genero = "Homem";
      if (atual >= 0 && atual < 10) {
        //criança
        img.setAttribute("src", "menino.png");
      } else if (atual < 21) {
        //adulto
        img.setAttribute("src", "Adulto.png");
      } else if (atual < 50) {
        //idoso
        img.setAttribute("src", "idoso.png");
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if (atual >= 0 && atual < 10) {
        //criança
        img.setAttribute("src", "menina.png");
      } else if (atual < 21) {
        //adulto
        img.setAttribute("src", "Adulta.png");
      } else if (atual < 50) {
        //idoso
        img.setAttribute("src", "idosa.png");
      }
    }
    aqui1.style.textAlign = "center";
    aqui1.innerHTML = `Detectamos ${genero} com ${atual} anos!`;
    aqui1.appendChild(img);
  }
}
