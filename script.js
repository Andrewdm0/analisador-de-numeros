var num = window.document.getElementById("txtn")
var lista = window.document.getElementById("flista")
var valores = []

//Variaveis dos resultados

var resquant = document.getElementById("resquant")
var resmaior = document.getElementById("resmaior")
var resmenor = document.getElementById("resmenor")
var ressoma = document.getElementById("ressoma")
var resmedia = document.getElementById("resmedia")

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) !=-1) {
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar(){

    //Quantidade

    var quant = valores.length
    resquant.innerHTML = `Ao todo temos ${quant} números cadastrados.`

    //Maior
    c=0
    var maior = valores[0]
    while (c <= valores.length) {

        if (valores[c] > maior) {
            maior = valores[c]
        }
        c++
    }
    resmaior.innerHTML = `Maior valor informado foi ${maior}.`
    //

    //Menor
    c=0
    var menor = valores[0]
    while (c <= valores.length) {

        if (valores[c] < menor) {
            menor = valores[c]
        }
        c++
    }
    resmenor.innerHTML = `Menor valor informado foi ${menor}.`
    //

    //Soma
    c=0
    var soma = 0
    while (c < valores.length) {

        soma += valores[c]
        c++
    }
    ressoma.innerHTML = `A soma de todos os números foi: ${soma}.`
    //

    //Média

    resmedia.innerHTML = `A média dos valores digitados é: ${soma/quant}`

    //

}