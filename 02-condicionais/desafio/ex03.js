/**
 * Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme a tabela a baixo 
 * media=(nota1+nota2+nota3)/3;
 * 
 * classificação :
 * media menor que 5, reprovação 
 * media entre 5 e 7 , recuperacao 
 * media acima de 7 , passou de semetre
*/

const nota1 = 10
const nota2 = 10
const nota3 = 10

const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log("aluno foi reprovado")
}

else if (media >= 5 && media <= 7) {
    console.log("aluno de recuperação")
} else if (media > 7) {
    console.log("aluno aprovado")
}

console.log("a media " + media)