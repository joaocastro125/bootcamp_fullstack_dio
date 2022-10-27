// // @ts-nocheck
// // @ts-nocheck
// // objeto 

const dados={
    nome:'joao',
    idade:34,
    // utilizando uma funcao amonima dentro do objeto 
    descrever:function(){
      console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`)
    }
}
dados.descrever()

console.log(dados)
console.log(dados.nome)
dados.altura=1.80// adicionando dinamicamente 

console.log(dados)

delete dados.altura 
console.log(dados)
console.log(dados['idade']) // acessando um objeto 


// classe 

class Pessoa{
    nome;
    idade;

    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }


    // metodo 
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`)
    }
    
}

let  pessoa=new Pessoa('joao',34)

console.log(pessoa)

// comparar  idade 

class Pessoas{
    nome
    idade

    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }


}

function comparaPessoas(p1,p2){
    if(p1.idade>p2.idade){
      console.log(`${p1.nome} é mais velho(a) ${p2.nome} `)
    }
    else if(p2.idade>p1.idade){
        console.log(`${p2.nome} é mais velho(a) ${p1.nome} `)
      }
      else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
      }
}

const  vitor  =  new  Pessoa ( 'Vitor' ,  25 ) ;
const  renan  =  new  Pessoa ( 'Renan' ,  30 ) ;

comparaPessoas ( vitor ,  renan ) ;