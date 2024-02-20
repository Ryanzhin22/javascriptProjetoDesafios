const calculadora_aba = document.querySelector("#calculadora_aba_img")

const calculadoraDiv = document.createElement("div")
calculadoraDiv.setAttribute('class', "calculadoraDiv")
document.body.appendChild(calculadoraDiv)

const conteudoCalc = document.createElement("div")
conteudoCalc.setAttribute('class', "conteudoCalc")
calculadoraDiv.appendChild(conteudoCalc)

const calcTitle = document.createElement("h1")
calcTitle.setAttribute('class', "calcTitle")
calcTitle.innerHTML = "Calculadora.JS"
conteudoCalc.appendChild(calcTitle)

const currentOperation = document.createElement("div")
currentOperation.setAttribute('class', "currentOperation")
currentOperation.innerHTML = "0"
conteudoCalc.appendChild(currentOperation)

const buttonsContainer = document.createElement("div")
buttonsContainer.setAttribute('class', "buttonsContainer")
conteudoCalc.appendChild(buttonsContainer)

const btnCE = document.createElement("button")
btnCE.setAttribute('class', "btnCalc")
btnCE.innerHTML = "CE"
buttonsContainer.appendChild(btnCE)

const btnC = document.createElement("button")
btnC.setAttribute('class', "btnCalc")
btnC.innerHTML = "C"
buttonsContainer.appendChild(btnC)

const btnDel = document.createElement("button")
btnDel.setAttribute('class', "btnCalc")
btnDel.innerHTML = "Del"
buttonsContainer.appendChild(btnDel)

const btnBar = document.createElement("button")
btnBar.setAttribute('class', "btnCalc btnOperation")
btnBar.innerHTML = "/"
buttonsContainer.appendChild(btnBar)

const btn7 = document.createElement("button")
btn7.setAttribute('class', "btnCalc numberBtnCalc")
btn7.innerHTML = "7"
buttonsContainer.appendChild(btn7)

const btn8 = document.createElement("button")
btn8.setAttribute('class', "btnCalc numberBtnCalc")
btn8.innerHTML = "8"
buttonsContainer.appendChild(btn8)

const btn9 = document.createElement("button")
btn9.setAttribute('class', "btnCalc numberBtnCalc")
btn9.innerHTML = "9"
buttonsContainer.appendChild(btn9)

const btnMult = document.createElement("button")
btnMult.setAttribute('class', "btnCalc btnOperation")
btnMult.innerHTML = "*"
buttonsContainer.appendChild(btnMult)

const btn4 = document.createElement("button")
btn4.setAttribute('class', "btnCalc numberBtnCalc")
btn4.innerHTML = "4"
buttonsContainer.appendChild(btn4)

const btn5 = document.createElement("button")
btn5.setAttribute('class', "btnCalc numberBtnCalc")
btn5.innerHTML = "5"
buttonsContainer.appendChild(btn5)

const btn6 = document.createElement("button")
btn6.setAttribute('class', "btnCalc numberBtnCalc")
btn6.innerHTML = "6"
buttonsContainer.appendChild(btn6)

const btnSub = document.createElement("button")
btnSub.setAttribute('class', "btnCalc btnOperation")
btnSub.innerHTML = "-"
buttonsContainer.appendChild(btnSub)

const btn1 = document.createElement("button")
btn1.setAttribute('class', "btnCalc numberBtnCalc")
btn1.innerHTML = "1"
buttonsContainer.appendChild(btn1)

const btn2 = document.createElement("button")
btn2.setAttribute('class', "btnCalc numberBtnCalc")
btn2.innerHTML = "2"
buttonsContainer.appendChild(btn2)

const btn3 = document.createElement("button")
btn3.setAttribute('class', "btnCalc numberBtnCalc")
btn3.innerHTML = "3"
buttonsContainer.appendChild(btn3)

const btnAdd = document.createElement("button")
btnAdd.setAttribute('class', "btnCalc btnOperation")
btnAdd.innerHTML = "+"
buttonsContainer.appendChild(btnAdd)

const btn0 = document.createElement("button")
btn0.setAttribute('class', "btnCalc")
btn0.innerHTML = "0"
buttonsContainer.appendChild(btn0)

const btnPoint = document.createElement("button")
btnPoint.setAttribute('class', "btnCalc")
btnPoint.innerHTML = "."
buttonsContainer.appendChild(btnPoint)

const btnEqual = document.createElement("button")
btnEqual.setAttribute('class', "btnCalc  btnEqual")
btnEqual.innerHTML = "="
buttonsContainer.appendChild(btnEqual)

const abaCalc = document.createElement("div")
abaCalc.setAttribute('class', "abaCalc")
calculadoraDiv.appendChild(abaCalc)

const abaCalcImg = document.createElement("img")
abaCalcImg.setAttribute("class", "abaCalcImg")
abaCalcImg.setAttribute("src", "imgs/seta_direita.svg")
abaCalc.appendChild(abaCalcImg)

calculadora_aba.addEventListener('click', () => {
    calculadoraDiv.classList.add("calcExibir")
    abas.style.display = 'none'
})

abaCalcImg.addEventListener("click", () => {
    calculadoraDiv.classList.remove("calcExibir")
    abas.style.display = 'block'
})

// PROGRAMAÇÃO DA CALCULADORA

let isOperation = false
let haveDot = false

const elementNumber = (num) => {
    if (num == "." && haveDot == false) {
        currentOperation.innerText += num
        haveDot = true
    } else if (num == "." && haveDot == true) {
        console.log('ponto já usado')
    } else {
        if(currentOperation.innerText == "0"){
            currentOperation.innerText = num
            isOperation = false
        }else{
            currentOperation.innerText += num
            isOperation = false
        }
    }
}

const elementOperation = (elm) => {
    if (isOperation == false) {
        if(currentOperation.innerText == "0"){
            currentOperation.innerText = elm.innerText
            isOperation = true
            haveDot = false
        } else{
            currentOperation.innerText += elm.innerText
            isOperation = true
            haveDot = false
        }
    } else if (isOperation == true && elm.classList.contains('btnOperation')){
        currentOperation.innerText = currentOperation.innerText.slice(0, -1)
        currentOperation.innerText += elm.innerText
    }
}

const elementEqual = () => {
    const contaEfetuada = eval(currentOperation.innerText)
    currentOperation.innerText = contaEfetuada
}

const elementDel = () => {
    currentOperation.innerText = currentOperation.innerText.slice(0, -1)
}

const elementClear = () => {
    currentOperation.innerText = ""
}

buttonsContainer.addEventListener("click", (evt) => {
    const elementoClicado = evt.target.innerText
    const elementoOperacao = evt.target
    if(+elementoClicado >= 0 || elementoClicado == "."){
        // CLICOU EM UM NÚMERO
        elementNumber(elementoClicado)
    } else if (evt.target.classList.contains('btnOperation')){
        // CLICOU EM UMA OPERAÇÃO
        elementOperation(elementoOperacao)
    } else if (elementoClicado == "="){
        // CLICOU EM "="
        elementEqual()
    } else if (elementoClicado == "Del"){
        // CLICOU EM DEL
        elementDel()
    } else if (elementoClicado == "CE"){
        // CLICOU EM CE
        elementClear()
    } else if (elementoClicado == "C"){
        // CALCULADORA ADAPTADA NÃO TEM PREVIOUS OPERATION
        elementClear()
    }
})