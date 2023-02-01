/* let nome 
let idade 
console.log(typeof (nome), typeof (idade)) */

/* imprimimos o typeof das variaveis sem valor
e foi impresso o typeof undefined por que a 
variável não tinha valor. */

/* nome = prompt('Qual o seu nome?')
idade= Number (prompt('Qual a sua idade?'))
console.log(typeof (nome), typeof (idade))

console.log("Olá pessoal, meu nome  : \n", nome,'Eu tenho', idade)
console.log(`Olá ${nome} você tem ${idade}`)
console.log("Olá pessoal, meu nome é "+nome,' Eu tenho '+idade) */

const origem = 'Você é brasileiro ?'
const cafe = 'Você gosta de café ?'
const cozinha = 'Você sabe cozinhar ?'

let respostaA = prompt(origem)
let respostaB = prompt(cafe)
let respostaC = prompt(cozinha)

console.log(respostaA,respostaB,respostaC)

console.log(` 
${origem}  ${respostaA}
${cafe}  ${respostaB}
${cozinha}  ${respostaC}
`)



