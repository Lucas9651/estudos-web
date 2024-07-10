const pilotos = ['Vettel', 'Alonso', 'raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Vestappen') // adiciona o ultimo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamiton') // adiciona o primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removeu o massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)