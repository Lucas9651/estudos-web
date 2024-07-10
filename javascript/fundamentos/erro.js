function tratarErroELancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.menssagem,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!' )
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)
