// @ts-nocheck
/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto , considerando o preço normal de etiqueta 
 * e a escolha da condição de pagamento .
 * utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
 * codigo condição de pagamento:
 * - Á vista Débito, recebe 10% de desconto ;
 * - Á vista no dinheiro ou pix , recebe 15% de desconto 
 * - Em duas vezes ,preço normal de etiqueta sem juros
 * - Acima de duas vezes ,preço normal de etiqueta mias juros de 10%
 * 
 * 
*/

const pagoPorProduto=100
const opcoesPagamento=4

if(opcoesPagamento===1){
    console.log(pagoPorProduto-(100*10)/100)
}
else if(opcoesPagamento===2){
    console.log(pagoPorProduto-(100*15)/100 )
}
else if(opcoesPagamento===3){
    console.log(pagoPorProduto)
}
else{
    console.log((100*10)/100 +pagoPorProduto)
}

// const vistaNoDebito=
// const vistaNoDebitoOuPIX=(100*15)/100
// const preçoNormal=(100*2)/2
// const preçoNormalDuasVezes=(100*2)/2 +(100*10)/100




