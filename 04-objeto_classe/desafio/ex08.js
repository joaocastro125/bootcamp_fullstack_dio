/*
 Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um médio de combustível por Kilômetro rodado.
Crie um método que dê a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
  
*/ 

class Carro{
    marca
    cor
    gastoMedioCompostivel
    constructor(marca,cor,gastoMedioCompostivel){
        this.marca=marca
        this.cor=cor
        this.gastoMedioCompostivel=gastoMedioCompostivel
    }
    valorGasto(quantidade,preco){
      return quantidade*this.gastoMedioCompostivel*preco

    }
}

const celta=new Carro('chevrolet','preta',1/12)
console.log(celta.valorGasto(70,5))

console.log(celta)