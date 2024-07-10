const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise((resolve, reject) => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

.then(primeiroElemento)
.then(primeiroElemento)
.then(letraMinuscula)
.then(console.log)