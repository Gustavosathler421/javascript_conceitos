function calcularMaodeObra(horas){
    const valorHora = 80.00
    return horas * valorHora
}

function calcularTotal(valorPecas, horas){
    return valorPecas + calcularMaodeObra(horas)
}

function verificarGarantia(meses){
    if (meses <=6){
        return "EM GARANTIA"
    }else{
        return "SEM GARANTIA"
    }
}
module.exports = {
    calcularMaodeObra,
    calcularTotal,
    verificarGarantia
}