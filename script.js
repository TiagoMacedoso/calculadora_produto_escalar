const form = document.querySelector("form")
const btnCalcular = document.querySelector("#btnCalcular")
const btnApagar = document.querySelector("#btnApagar")
const vetor1 = document.querySelector("#vetor1")
const vetor2 = document.querySelector("#vetor2")
const resultado = document.querySelector("#resultado")

//valores dos inputs
let value1 = 0
let value2 = 0

//array pós splis dos valores dos inputs
let arr1 = []
let arr2 = []

//variáveis usadas nos cálculos
let multi = 0
let soma = 0

vetor1.addEventListener("keypress", function(e) {
    verificarCaractere(e)
})

vetor2.addEventListener("keypress", function(e) {
    verificarCaractere(e)
})

function verificarCaractere(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if (keyCode < 48 && keyCode != 44 && keyCode != 13 || keyCode > 57) {
        alert("Você digitou caracteres inválidos, são aceitos somente:\n\tnúmeros;\n\te vígula como separador entre os valores do array!")
        e.preventDefault()
    }
}

btnCalcular.addEventListener("click", function(e){

    e.preventDefault()

    value1 = 0
    value2 = 0
    arr1 = []
    arr2 = []
    multi = 0
    soma = 0

    try {
        
        value1 = vetor1.value
        value2 = vetor2.value

        arr1 = value1.split(",")
        arr2 = value2.split(",")

        if (arr1.length != arr2.length) alert("Os arrays não possuem o mesmo tamanho!")              
            else if(arr1[0] == '') alert("Você não inseriu valores para o vetor")
                else calcular() 

    } catch (error) {
        alert("Ocorreu um erro: " + error)
    }
})

btnApagar.addEventListener("click", function(e){
    form.reset()
    resultado.innerHTML = "RESULTADO"
})

function calcular(){
    for (let i = 0; i < arr1.length; i++) {
        multi = parseInt(arr1[i]) * parseInt(arr2[i])
        soma += multi
    }
    resultado.innerHTML = soma
}