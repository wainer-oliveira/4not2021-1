// Nesse arquivo tem apenas 1 coisa sendo exportada, e é function.
// Podemos usar export default

export default function dobraVet(vet){
    // Cria um novo vetor com elemento que são o dobro 
    // do valor do vetor original
    let res = []
    for(let n of vet) res.push(n * 2)
    return res
}
