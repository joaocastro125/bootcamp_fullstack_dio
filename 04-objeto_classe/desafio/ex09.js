// @ts-nocheck
/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer ou valor do seu IMC (IMC = peso / (altura * altura));
    Instancia uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;
*/

class Pessoas{
    nome
    peso
    altura

    constructor(nome,peso,altura){
        this.nome=nome
        this.altura=altura
        this.peso=peso
    }
    CalcularImc(){
        return this.peso/(this.altura*this.altura)  
    }
    claficarImc(){
        const imc=this.CalcularImc()
        if(imc>18.5){
            return('Abaixo do peso')
        }
        else if(imc>=18.5 && imc<25){
            return('Peso normal')
        }
        else if(imc>=25 && imc<30){
            return('Acima de peso')
        }
        if(imc>=30 && imc<40){
            return('Obeso')
        }
    }
}

const imc=new Pessoas('joao',84,1.75)
console.log(imc.claficarImc())
console.log(imc)