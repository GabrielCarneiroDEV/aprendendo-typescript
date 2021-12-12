//exemplo 01 number
let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001
console.log('Number - Ponto flutuante...:' , num1)
console.log('Number - Ponto hexadecimal...:' , num2)
console.log('Number - Ponto octal...:' , num3)
console.log('Number - Ponto binário...:' , num4)

//exemplo 02 bigint 
//para ler valores bigint é preciso modificar o  target para es2020
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b10000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log('Bigint ...:' , big1)
console.log('Bigint - Ponto hexadecimal...:' , num2)
console.log('Bigint - Ponto octal...:' , num3)
console.log('Bigint - Ponto binário...:' , num4)