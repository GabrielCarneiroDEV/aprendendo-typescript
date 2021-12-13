// Exemplo 01 - Uso de colchetes
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas)

// Exemplo 02 - Array object  (objeto array)
//essa é a forma mais comum de declaração de arrays em typescript
let frutas2: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas2)

// Exemplo 03 - Adicionando mais strings com método push

let idiomas: Array<string> = ['Português', 'Inglês', 'Francês'];
idiomas.push('Alemão')
console.log(idiomas)
idiomas.push('Espanhol')
console.log(idiomas)
idiomas.push('Italiano')
console.log(idiomas)

// Exemplo 04 - Identificar tamnho da array - método length
console.log(idiomas.length)
console.log(frutas.length)

// Exemplo 05 - Exemplo de array com spread operator

let listaDeNumeros: Array<number> = [0, 1, 2, 3, 4, 5];
listaDeNumeros = [...listaDeNumeros, 6, 7, 8, 9, 10];
console.log(listaDeNumeros)

// Exemplo 06 - Exemplo de array com laço de iteração

let listaDeLinguagens: string[] = new Array('JavaScript', 'Python', 'Java', 'PHP');

function imprimirLinguagens(linguagem:string[]){
    for (let i = 0; i < linguagem.length; i++) {
        console.log(linguagem[i]);
        
    }
}

imprimirLinguagens(listaDeLinguagens);