// @ts-nocheck
// faz uma funcao que retorne seu nome 

function meuNome(nome) {
    return `meu nome é ${nome}`
}

meuNome('joao')

// verificar sua idade se maior ou menor de idade

function verifyAge(idade) {
    if (idade >= 18) {
        return meuNome('joao') + ' e sou maior de idade'
    } else {
        return meuNome('joao') + ' e sou menor de idade'
    }
}
console.log(verifyAge(14))

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

const pagoPorProduto = 100
const opcoesPagamento = 4

function formaDePagamento(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

if (opcoesPagamento === 1) {
    console.log(formaDePagamento(pagoPorProduto, 10))
}
else if (opcoesPagamento === 2) {
    console.log(formaDePagamento(pagoPorProduto, 15))
}
else if (opcoesPagamento === 3) {
    console.log(pagoPorProduto)
}
else {
    console.log(aplicarJuros(pagoPorProduto, 10))
}

