// @ts-nocheck
/**
 * utilizando funcão
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



function cacularImc(peso, altura) {

    return peso / Math.pow(altura, 2)
}
const peso = 84
const altura = 1.80

function classificarImc(imc) {
    if (imc < 18.5) {
        return "abaixo do peso"
    }
    else if (imc >= 18.5 && imc < 25) {
        return "peso normal"
    } else if (imc >= 25 && imc < 30) {
        return "acima do peso"
    } else if (imc >= 30 && imc < 40) {
        return "esta obeso"
    } else {
        return " peso acima de 40 obesidade grave"
    }

}
// execultando a propria funcao 
(function () {
    const imc = cacularImc(peso, altura)
    console.log(imc.toFixed(2))
    console.log(classificarImc(imc))

})()


