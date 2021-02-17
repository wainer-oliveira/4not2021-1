console.log(Math.min(14,.5,-3,30,15,25,7)) //Retorna o menor valor passado
console.log(Math.max(14,.5,-3,30,15,25,7)) //Retorna o maior valor passado

let numeros = [14,.5,-3,30,15,25,7]

//Usando espalhamento para "desmontar" o vetor
console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

let maisNumeros = [0, 4, 11, ...numeros, 25, 40, 27]
console.log(maisNumeros)

//Função com parâmetro (ou argumento) de resto
function somaTudo(...nums){
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

console.log(somaTudo(12, 45, -5))
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30))

function calcular(oper, ...nums){
    let res
    switch(oper){
        case '+':
            res = somaTudo(...nums)
            break
        
        case '*':
            res = 1
            for(let n of nums) res *= n
            break
    }
    return res
}

console.log(calcular('*', 12, 45, -5))
console.log(calcular('+', 2, 76, -2, 41, 19, 11, 22, 30))

//Como chamar a função chamaTudo() para processar o vetor maisNumeros ?
console.log(somaTudo(...maisNumeros))
console.log(calcular('+',...maisNumeros))