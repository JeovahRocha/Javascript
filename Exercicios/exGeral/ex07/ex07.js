/*
Exercício 2: Validador de Formulário
Crie um formulário HTML com campos para nome, e-mail e senha. Use eventos DOM para validar se os campos estão preenchidos corretamente (por exemplo, verifique se o e-mail contém "@" e se a senha tem pelo menos 6 caracteres). Exiba uma mensagem de erro ou sucesso na página. 
*/
function confere() {
  let nom = document.getElementById("nome");
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let res1 = document.getElementById("nome1");
  let res2 = document.getElementById("nome2");
  let res3 = document.getElementById("nome3");
  res1.innerHTML = `${nom.value}`;
  res2.innerHTML = `${email.value}`;
  res3.innerHTML = `${senha.value}`;

  if (nom.value.trim() === "") {
    res1.innerHTML = `[ERRO]`;
  } else {
    res1.innerHTML = `Nome Registrado`;
  }

  if (email.value.trim() === "") {
    res2.innerHTML = `[ERRO]`;
  } else if (!email.value.trim().includes("@")) {
    res2.innerHTML = `E-mail incorreto`;
  } else {
    res2.innerHTML = `Email Registrado`;
  }
  if (senha.value.length < 6) {
    res3.innerHTML = `A senha precisa ter pelo menos 6 caracteres`;
  } else {
    res3.innerHTML = `Senha registrada`;
  }
}
