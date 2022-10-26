// @ts-nocheck
/**
 * o imc - indice de massa é um critério da organização mundial de súade para dar um indicação sobre a condição de uma pessoa adulta . 
 * formula do IMC:
 * IMC=peso/(altura*altura)
 * Elabore um algoritmo que dado a peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
 * IMC em adulto condicoes :
 * abaixo de 18.5 abaixo do peso 
 * entre 18.5 e 25 peso normal
 * entre 25 e 30 acima do peso
 * entre 30 e 40 obeso 
 * Acima de 40 obsesidade
*/

const peso = 120
const altura = 1.59

const imc = peso / Math.pow(altura, 2)
if (imc < 18.5) {
    console.log("abaixo do peso")
}
else if (imc >= 18.5 && imc < 25) {
    console.log("peso normal")
} else if (imc >= 25 && imc < 30) {
    console.log("acima do peso")
} else if (imc >= 30 && imc < 40) {
    console.log("esta obeso")
} else {
    console.log(" peso acima de 40 obesidade grave")
}

console.log("imc é " + imc.toFixed(2))
