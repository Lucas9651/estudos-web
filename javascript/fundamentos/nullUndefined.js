let valor // não inicializada
console.log(valor)

valor = null // ausência de valor 
console.log(valor)
// console.log(valor.toString()) // Erro!1

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined