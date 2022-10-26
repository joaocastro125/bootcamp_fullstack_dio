// @ts-nocheck
let isNumberPar = 12

let resultPar = (isNumberPar % 2) === 0
// console.log(resultPar)


// let result=(isNumberPar%2)===0


// if((isNumberPar%2)===0){
//     console.log("o numero é par")
// }
// else if(!isNumberPar){
//    console.log("é impar ")
// }

// else{
//     console.log("valor invalido")
// }


if (resultPar) {
    console.log("o numero é par")
} else if (isNaN(isNumberPar)) {
    console.log("opcao invalida")
}
else {
    console.log("o numero é impar")
}


