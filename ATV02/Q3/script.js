function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const salario = parseFloat(document.getElementById("salario").value);
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const estadoCivil = document.getElementById("estado-civil").value;

  let erros = [];

  if (nome.length <= 3) {
    erros.push("O nome deve ter mais de 3 caracteres");
  }

  if (idade < 0 || idade > 150) {
    erros.push("Idade inválida");
  }

  if (salario <= 0) {
    erros.push("Salário deve ser maior que zero");
  }

  if (sexo !== "m" && sexo !== "f") {
    erros.push("Sexo inválido");
  }

  if (
    estadoCivil !== "s" &&
    estadoCivil !== "c" &&
    estadoCivil !== "v" &&
    estadoCivil !== "d"
  ) {
    erros.push("Estado civil inválido");
  }

  if (erros.length > 0) {
    alert("Por favor, corrija os seguintes erros:\n\n" + erros.join("\n"));
    return false;
  }

  alert("Formulário enviado com sucesso!");
  return true;
}
