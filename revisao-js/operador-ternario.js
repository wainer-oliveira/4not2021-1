let nota = 4.2
let situacao

/*if (nota >=6){
    situacao = 'APROVADO'
}else{
    situacao = 'REPROVADO'
}*/

/*if(nota >= 6)  situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

//As três partes do operador ternário
//1º parte: condição (que iria depois do if)
//Entre a 1º e a 2º parte -> ?
//2º parte: o resultado caso a condição seja verdadeira
//Entre a 2º e a 3º parte -> :
// 3º parte: resultado caso a condição seja falsa

situacao = nota >= 6? 'APROVADO': 'REPROVADO'

console.log(situacao)

let user = 'jhonson'
let userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)