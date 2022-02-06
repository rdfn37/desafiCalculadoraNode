const inquirer = require('inquirer')
const calculadora = require('./calculadora')

inquirer.prompt([
    {
        name: 'n1',
        message: 'Insira o primeiro número.'
    },
    {
        name: 'n2',
        message: 'Insira o segundo número.'
    },
    {
        name: 'operacao',
        message: 'Qual operação deseja realizar?\n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n'
    }
]).then(answer => {
    let n1 = parseFloat(answer.n1)
    let n2 = parseFloat(answer.n2)
    let op = answer.operacao
    let resultado

    switch(op) {
        case '1':
            resultado = calculadora.soma(n1, n2)
            console.log(`${n1} + ${n2} = ${resultado}`)
            break
        case '2':
            resultado = calculadora.subtracao(n1, n2)
            console.log(`${n1} - ${n2} = ${resultado}`)
            break
        case '3':
            resultado = calculadora.multiplicacao(n1, n2)
            console.log(`${n1} x ${n2} = ${resultado}`)
            break
        case '4':
            resultado = calculadora.divisao(n1, n2)
            console.log(`${n1} / ${n2} = ${resultado}`)
            break
    }
})