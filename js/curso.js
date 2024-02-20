const cursos_aba_img = document.querySelector("#cursos_aba_img")
const abas = document.querySelector(".abas")

/* HTML */

const body = document.body

const atividadeCurso = document.createElement("div")
atividadeCurso.setAttribute("class", "atividadeCurso")
body.prepend(atividadeCurso)

const caixa1 = document.createElement("div")
caixa1.setAttribute('class', 'caixa1')
atividadeCurso.appendChild(caixa1)

const caixa2 = document.createElement("div")
caixa2.setAttribute("class", 'caixa2')
atividadeCurso.appendChild(caixa2)

const conteudo1 = document.createElement("div")
conteudo1.setAttribute("class", "conteudo1")
conteudo1.setAttribute('id', 'caixa1')
caixa1.appendChild(conteudo1)

const conteudo2 = document.createElement("div")
conteudo2.setAttribute("class", 'conteudo2')
conteudo2.setAttribute('id', 'caixa2')
caixa2.appendChild(conteudo2)

const cursosTitle = document.createElement("h1")
cursosTitle.setAttribute('class', "cursosTitle")
cursosTitle.innerHTML = "Cursos.JS"
conteudo1.appendChild(cursosTitle)

const label = document.createElement("label")
label.innerHTML = "Nome do Curso"
conteudo1.appendChild(label)

const textoInput = document.createElement("input")
textoInput.setAttribute('type', 'text')
textoInput.setAttribute("id", "text")
conteudo1.appendChild(textoInput)

const btnAntes = document.createElement('button')
btnAntes.setAttribute("class", 'btnAntes')
btnAntes.innerHTML = "Adicionar Antes"
conteudo1.appendChild(btnAntes)

const btnDepois = document.createElement('button')
btnDepois.setAttribute("class", 'btnDepois')
btnDepois.innerHTML = "Adicionar Depois"
conteudo1.appendChild(btnDepois)

const btnRemover = document.createElement('button')
btnRemover.setAttribute("class", 'btnRemover')
btnRemover.innerHTML = "Remover Curso"
conteudo1.appendChild(btnRemover)

const btnSelecionado = document.createElement('button')
btnSelecionado.setAttribute("class", 'btnSelecionado')
btnSelecionado.innerHTML = "Selecionar Curso"
conteudo1.appendChild(btnSelecionado)

const aba_fechar = document.createElement("div")
aba_fechar.setAttribute("class", "abaFechar")
atividadeCurso.appendChild(aba_fechar)

const aba_img_fechar = document.createElement("img")
aba_img_fechar.setAttribute("class", "abaImgFechar")
aba_img_fechar.setAttribute("src", "imgs/seta_esquerda.svg")
aba_fechar.appendChild(aba_img_fechar)

/*
const cursos_aba = document.createElement('div')
cursos_aba.setAttribute("class", 'cursos_aba')
atividadeCurso.appendChild(cursos_aba)

const cursos_aba_img = document.createElement("img")
cursos_aba_img.setAttribute('src', 'imgs/seta_direita.svg')
cursos_aba_img.setAttribute('alt', 'seta direita')
cursos_aba_img.setAttribute('id', "cursos_aba_img")
cursos_aba.appendChild(cursos_aba_img)
*/

aba_fechar.addEventListener('click', () => {
    atividadeCurso.classList.remove('calc_exibir')
    abas.style.display = "block"
})

cursos_aba_img.addEventListener('click', () => {
    atividadeCurso.classList.add('calc_exibir')
    abas.style.display = "none"
})

const tirarSelecionado = () => {
    let todosSelecionados = [...document.querySelectorAll(".selecionado")]
    todosSelecionados.map((el) => {
        el.classList.remove('selecionado')
    })
}

const cursoSelecionado = () => {
    let cursoSelecionado = document.querySelector(".selecionado")
    return cursoSelecionado
}

const adcionarCursos = (nome) => {
    const div = document.createElement('div')
    div.setAttribute("class", "curso c1")
    div.innerHTML = nome
    div.addEventListener("click", () => {
        tirarSelecionado()
        div.classList.toggle("selecionado")
    })
    return div
}

let cursos = ["HTML", "CSS", "Javascript"]

cursos.map((el) => {
    const novoCurso = adcionarCursos(el)
    conteudo2.appendChild(novoCurso)
})

btnAntes.addEventListener('click', () => {
    const novoNomeCurso = textoInput.value
    if (novoNomeCurso == "") {
        alert("Coloque o nome do curso!")
    } else {
        if (cursoSelecionado()) {
            const novoCurso = adcionarCursos(novoNomeCurso)
            const curso = cursoSelecionado()
            conteudo2.insertBefore(novoCurso, curso)
        } else {
            alert("Selecione um curso")
        }
    }
})

btnDepois.addEventListener("click", () => {
    const novoNomeCurso = textoInput.value
    if (novoNomeCurso == "") {
        alert("Coloque o nome do curso!")
    } else {
        if (cursoSelecionado()) {
            const novoCurso = adcionarCursos(novoNomeCurso)
            const curso = cursoSelecionado()
            conteudo2.insertBefore(novoCurso, curso.nextSibling)
        } else {
            alert("Selecione um curso")
        }
    }
})

btnSelecionado.addEventListener("click", () => {
    if (cursoSelecionado()) {
        alert(`O curso selecionado é: ${cursoSelecionado().innerHTML}`)
    } else {
        alert("Nenhum curso selecionado")
    }
})

btnRemover.addEventListener('click', () => {
    if (cursoSelecionado()) {
        const curso = cursoSelecionado()
        curso.remove()
    } else {
        alert("Nenhum curso selecionado")
    }
})