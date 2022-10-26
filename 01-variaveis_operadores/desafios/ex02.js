// @ts-nocheck
/**
 * Faça um programa para calcular o valor de uma viagem.

 Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoGagolina=6.66
const precoEtanol=5.79
const gastoPeloCarro=10
const distancia=100
const tipoCombustivel='Gasolina'




if(tipoCombustivel==='Etanol'){
    let valorGasto=(precoEtanol*distancia)/gastoPeloCarro
    console.log(valorGasto)
}else{
    let valorGasto=(precoGagolina*distancia)/gastoPeloCarro
    console.log(valorGasto)
}