function encontrarMaior() {
    // Lê os valores dos campos de input
    let num1 = parseInt(document.getElementById("numero 1").value);
    let num2 = parseInt(document.getElementById("numero 2").value);
    let num3 = parseInt(document.getElementById("numero 3").value);
    let num4 = parseInt(document.getElementById("numero 4").value);
    let num5 = parseInt(document.getElementById("numero 5").value);

    // Encontra o maior número
 let maior = num1;
 if (num2 > maior) {
   maior = num2;
 }
 if (num3 > maior) {
   maior = num3;
 }
 if (num4 > maior) {
   maior = num4;
 }
 if (num5 > maior) {
   maior = num5;
 }

 let media = num1 + num2 + num3 + num4 + num5/5;
 
 // Exibe o resultado
 alert( "O maior número é: " + maior);
 alert( "A média de todos é: " + media);
}