//Criando um objeto cujo valor das propriedades vem de variáveis

let usuario = 'joao'
let senha = 'Deus123'
let name = 'João das Couves'
let lastLogin = '2021-02-08 22:52:41'

let userInfo = {
    login: usuario,
    password: senha,
    name,  // Propriedade abreviada (name : name)
    lastLogin
}

console.log(userInfo)

let info = 'Isto é um teste'
console.log(info)
console.log({info})