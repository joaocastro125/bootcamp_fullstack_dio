// funcao

function somar() {
   console.log(10 + 10)
}

somar()

// funcao com parametro
function somar(x, y) {
   const resultado = x + y
   return resultado
}

const reult = somar(10, 20)
console.log(reult)
// funcão anomima 
const soma = function (x, y) {
   const resultado = x + y
   return resultado
}

const reult1 = somar(10, 20)
console.log(reult)

// arrow function 

const soma1 = (x, y) => {
   const soma = x + y
   return soma
}
console.log(soma1(10, 20))