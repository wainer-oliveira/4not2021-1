// Exportar as funções para uso dentro de outro

export  function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n
    return soma
}

export function quadradoVet(vet){
    let res = []
    for(let n of vet) res.push(n ** 2)
    return res
}

