const verificarBotao = document.getElementById("verificar");
const mensagem = document.getElementById("mensagem");

verificarBotao.addEventListener("click", function() {
  const nota = document.getElementById("nota").value;

  if (nota < 0 || nota > 10 || isNaN(nota)) {
    mensagem.textContent = "Por favor, informe uma nota válida entre 0 e 10.";
  } else {
    mensagem.textContent = "Nota válida!";
  }
});
