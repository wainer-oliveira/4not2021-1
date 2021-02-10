let vetor = [10,20,30]

let obj = {
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

//Desestruturação de vetor: as variáveis podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

//Desestruturação de objetos: as variáveis devem ter o mesmos nomes das proriedades do objeto
//Não importa a ordem
let {naturalidade, nome, idade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 = {
    marca: 'Volksvagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}

//Desestruturação parcial de um objeto
let {modelo, cor} = obj2
console.log(modelo, cor)

let vet2 = ['laranja', 'maçã', 'pera']

//Não funciona: desestruturação parcial de um vetor
//let [undefined, fruta2, undefined] = vet2
//console.log(fruta2)

//Ignorando os últimos elementos
let [fruta1] = vet2
console.log(fruta1)

//Ignorando os primeiros elementos
let [,,fruta3] = vet2
console.log(fruta3)
