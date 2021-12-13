
// variáveis [type annotation]
const nome: string = 'Gabriel Carneiro';
console.log(nome);

// arrays [type annotation]
const animais : string[] =['Elefante', 'cachorro', 'gato', 'girafa'];
console.log(animais);


//objetos [type annotation]
let carro: {
    nome: string,
    ano:number,
    preco:number

};

carro ={nome: "palio", ano:2014, preco:20_000}
console.log(carro);

//funções [type annotation]
function multiplicarNumeros (num1:number, num2:number){
    return num1 * num2;
}

console.log(multiplicarNumeros(10,2))