function carregar() {
  let msg = document.getElementById("img");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  let minuts = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minuts}`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "fotoManha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE
    img.src = "fotoTarde.png";
    document.body.style.background = "#b9846f";
  } else {
    //BOA NOITE
    img.src = "fotoNoite.png";
    document.body.style.background = "#049f";
  }
}
