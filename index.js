
let gw50 = 50
let gw10 = 10
let gw5 = 5
let gw1 = 1

const saque = parseInt(prompt('digite o valro do seu saque'))


if( saque > gw50){
    quantidade50 = Math.floor(saque / gw50)
    valorRestante = saque % gw50
}
else{
    quantidade50 = 0
}

if( valorRestante > gw10){
    quantidade10 = Math.floor(valorRestante / gw10)
    valorRestante = saque % gw10
}else{
    quantidade10 = 0
}

if( valorRestante > gw5){
    quantidade5 = Math.floor(valorRestante / gw5)
    valorRestante = saque % gw5
}
else{
    quantidade5 = 0
}

if(valorRestante > gw1){
    quantidade1 = valorRestante * gw1
}
else{
    quantidade1 = 0
}


document.write(`<p>quantidade de notas de 50 :${quantidade50}</p>`)
document.write(`<p>quantidade de notas de 10 :${quantidade10}</p>`)
document.write(`<p>quantidade de notas de 5 :${quantidade5}</p>`)
document.write(`<p>quantodade de notas de 1 :${quantidade1}</p>`)
