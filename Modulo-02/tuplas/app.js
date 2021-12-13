"use strict";
// Exemplo 01 - uso simples de tuplas em typescript
let pessoa;
// A ordem de atribuição dos valores precisa ser identica a declaração.
pessoa = ['Gabriel', 'Carneiro', 27];
//Exemplo 02 - acessando o valor da tupla
console.log(pessoa[0]);
//Exemplo 03 - outra forma de usar tupla em typescript (com labels)
let pessoa2 = ['Gabriel', 'Carneiro', 27];
console.log(pessoa2);
//Exemplo 04 - usando tuplas com spread operator
let listaDeFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaDeFrutas);
//Exemplo 05 - Lista heterogênea de tupla com spread operator
let listaDeFrutas2 = [5, true, ...listaDeFrutas];
console.log(listaDeFrutas2);
//Exemplo 06 - uso de função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Gabriel', 'Ludmila', 'Dandara'], [27, 27, 4]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Gabriel", "Carneiro"));
console.log(criarPessoa("Gabriel", "Carneiro", "costa"));
