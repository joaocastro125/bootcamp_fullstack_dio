// @ts-nocheck
/**
 * DESAFIO 
 * faça um porgrama para calcular o valor gasto de combustível em uma viagem .
 * você terá 3 variaveis. sendo elas:
 * - preço do combustível 
 * - valor medio de gasto do carro 
 * - distância em KM da viagem 
 * 
 * imprima no console o qual valor que será gasto de combustível para realizar esta viagem 
*/

const precoCombutivel=5.79
const gastoPeloCarro=10
const distancia=100 

// resulvido pelo professor 

const gastoPeloCarroLitros=precoCombutivel/gastoPeloCarro
const valorGasto=gastoPeloCarroLitros*distancia


let result=(precoCombutivel*distancia)/gastoPeloCarro

console.log("o valor gasto pelo carro é :"+valorGasto+"Km")