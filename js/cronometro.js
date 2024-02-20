const cronometroDiv = document.createElement("div")
cronometroDiv.setAttribute("class", "cronometroDiv")
document.body.appendChild(cronometroDiv)

const conteudo = document.createElement("div")
conteudo.setAttribute("class", "conteudo")
cronometroDiv.appendChild(conteudo)

const cronometro = document.createElement("div")
cronometro.setAttribute("class", "cronometro")
conteudo.appendChild(cronometro)

const timerCronometro = document.createElement("div")
timerCronometro.setAttribute("class", "timerCronometro")
cronometro.appendChild(timerCronometro)

const tituloCronometro = document.createElement("h1")
tituloCronometro.setAttribute("class", "tituloCronometro")
tituloCronometro.innerHTML = "Cronometro.JS"
cronometro.prepend(tituloCronometro)

const minutosTimer = document.createElement("h1")
minutosTimer.setAttribute("class", "minutosTimer")
minutosTimer.innerHTML = "00"
timerCronometro.appendChild(minutosTimer)

const doisPontos = document.createElement("h1")
doisPontos.setAttribute("class", "doisPontos")
doisPontos.innerHTML = ":"
timerCronometro.appendChild(doisPontos)

const segundosTimer = document.createElement("h1")
segundosTimer.setAttribute("class", "segundosTimer")
segundosTimer.innerHTML = "00"
timerCronometro.appendChild(segundosTimer)

const doisPontos2 = document.createElement("h1")
doisPontos2.setAttribute("class", "doisPontos2")
doisPontos2.innerHTML = ":"
timerCronometro.appendChild(doisPontos2)

const milisegundosTimer = document.createElement("h1")
milisegundosTimer.setAttribute("class", "milisegundosTimer")
milisegundosTimer.innerHTML = "000"
timerCronometro.appendChild(milisegundosTimer)

const botoes = document.createElement("div")
botoes.setAttribute("class", "botoesDiv")
cronometro.appendChild(botoes)

const btnIniciar = document.createElement("button")
btnIniciar.setAttribute("class", "btn btnIniciar")
btnIniciar.innerHTML = "Iniciar"
botoes.appendChild(btnIniciar)

const btnParar = document.createElement("button")
btnParar.setAttribute("class", "btn btnParar")
btnParar.innerHTML = "Parar"
botoes.appendChild(btnParar)

const btnContinuar = document.createElement("button")
btnContinuar.setAttribute("class", "btn btnContinuar")
btnContinuar.innerHTML = "Continuar"
botoes.appendChild(btnContinuar)

const btnZerar = document.createElement("button")
btnZerar.setAttribute("class", "btn btnZerar")
btnZerar.innerHTML = "Zerar"
botoes.appendChild(btnZerar)

const aba = document.createElement("div")
aba.setAttribute("class", "aba")
cronometroDiv.appendChild(aba)

const aba_img = document.createElement("img")
aba_img.setAttribute("src", "imgs/seta_esquerda.svg")
aba.appendChild(aba_img)

const cronometro_aba = document.querySelector(".cronometro_aba")

cronometro_aba.addEventListener("click", () => {
    cronometroDiv.classList.add("exibir")
    abas.style.display = "none"
})

aba.addEventListener("click", () => {
    cronometroDiv.classList.remove('exibir')
    abas.style.display = "block"
})

let intervalo
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let estaPausado = false;

const formatarTimer = (num) => {
    return num = num < 10 ? `0${num}` : num
}

const formatarMilisegundos = (num) => {
    return num < 100 ? `${num}`.padStart(3, "0") : num
}

const comecarTimer = () => {

    intervalo = setInterval(() => {

        if (!estaPausado) {

            milisegundos += 10
            milisegundosTimer.innerHTML = formatarMilisegundos(milisegundos)

            if (milisegundos === 1000) {
                segundos++
                milisegundos = 0
                segundosTimer.innerHTML = formatarTimer(segundos)
            }

            if (segundos === 60) {
                minutos++
                segundos = 0
                minutosTimer.innerHTML = formatarTimer(minutos)
            }

            btnIniciar.style.display = "none"
            btnParar.style.display = "block"

        }

    }, 10)
}

const pararTimer = () => {
    estaPausado = true
    btnContinuar.style.display = "block"
    btnParar.style.display = "none"
}

const continuarTimer = () => {
    estaPausado = false
    btnContinuar.style.display = 'none'
    btnParar.style.display = "block"
}

const zerarTimer = () => {
    clearInterval(intervalo)
    minutosTimer.innerHTML = "00"
    segundosTimer.innerHTML = "00"
    milisegundosTimer.innerHTML = "000"

    segundos = 0
    minutos = 0
    milisegundos = 0 

    btnIniciar.style.display = "block"
    btnParar.style.display = "none"
    btnContinuar.style.display = "none"

    estaPausado = false
}

btnZerar.addEventListener("click", zerarTimer)
btnContinuar.addEventListener("click", continuarTimer)
btnIniciar.addEventListener("click", comecarTimer)
btnParar.addEventListener("click", pararTimer)