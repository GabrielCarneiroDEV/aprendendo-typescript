// Exemplo 01 - uso simples de tuplas em typescript
let pessoa: [string, string, number];
// A ordem de atribuição dos valores precisa ser identica a declaração.
pessoa = ['Gabriel', 'Carneiro', 27];

//Exemplo 02 - acessando o valor da tupla
console.log(pessoa[0]);

//Exemplo 03 - outra forma de usar tupla em typescript (com labels)
let pessoa2: [nome:string, sobrenome:string, idade:number] = ['Gabriel', 'Carneiro', 27];

console.log(pessoa2)


//Exemplo 04 - usando tuplas com spread operator
let listaDeFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaDeFrutas);

//Exemplo 05 - Lista heterogênea de tupla com spread operator
let listaDeFrutas2: [number, boolean, ...string[]] = [5, true, ...listaDeFrutas];
console.log(listaDeFrutas2);

//Exemplo 06 - uso de função com tuplas
function listarPessoas(nomes: string[], idades:number[]){
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Gabriel', 'Ludmila', 'Dandara'], [27, 27, 4]);
console.log(resultado);


//Exemplo 07 - Labled tuples com spread operator numa função
type Nome = 
        |   [primeiroNome: string, sobrenome:string]
        |   [primeiroNome: string, nomeDoMeio:string, sobrenome:string]

function criarPessoa(...nome:Nome){
    return [...nome];
}
console.log(criarPessoa("Gabriel", "Carneiro"));
console.log(criarPessoa("Gabriel", "Carneiro", "costa"));