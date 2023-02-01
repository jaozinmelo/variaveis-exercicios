const nomeCompleto = prompt('ESCREVA SEU NOME COMPLETO:')
const dataDeNascimento = prompt('Digite sua data de nascimento')
let   endereço = prompt('Digite seu endereço:')
const cpf =  prompt('Digite seu CPF:')
const escolaridade = prompt('Digite seu grau de escolaridade')
let   cnh = confirm ('Possui CNH?')
let filhos = Number (prompt('quantos filhos você possui?') )
let cargoAtual = prompt('Qual o seu cargo atual?')
let salario = Number( prompt('Digite seu salario atual:'))
let comissao = Number(prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero'))
let admissao =Number( prompt('Informe o ano de admissão:'))

console.log(
    typeof nomeCompleto,typeof dataDeNascimento, typeof endereço,
    typeof cpf, typeof escolaridade, typeof cnh, typeof filhos, 
    typeof cargoAtual, typeof salario, typeof comissao, typeof admissao
)

//Imprima no console um relatório da pessoa colaboradora.

console.log(` 
    Nome Completo: ${nomeCompleto}  
    Data de Nascimento: ${dataDeNascimento}  
    Endereço: ${endereço}  
    CPF: ${cpf}  
    Escolaridade: ${escolaridade}  
    CNH: ${cnh}  
    FILHOS: ${filhos}  
    Gargo atual: ${cargoAtual}        
    Salário: ${salario}        
    Comissão: ${comissao}        
    admissão: ${admissao}  
`)