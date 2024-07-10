// operador ... rest( juntar )/spread( espalhar )
// usar rest com parâmetro de função

// usar spread comobjeto
const funcionario = { nome: 'Maria', saalrio: 12350.00}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array 
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA, 'Rafaela']
console.log(grupoFinal)

