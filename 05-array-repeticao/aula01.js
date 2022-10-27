// @ts-nocheck
// array 

// const notas=[
//     'notas1',
//      'notas2',
//      'notas3',
//      [
//         'joao'
//      ]
// ]
// // add no final da lista
// notas.push('nota4')

// console.log(notas)
// console.log(notas[2])
// console.log(notas[3][0])


// console.log(notas)

// // estrutura de repeticao 

// for(let i=0;i<10;i++){
//     console.log(i)
// }



const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);