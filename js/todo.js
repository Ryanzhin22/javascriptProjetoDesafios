const toDoContainer = document.createElement("div")
toDoContainer.setAttribute("class", 'todo_container')
document.body.appendChild(toDoContainer)

const toDoConteudo = document.createElement("div")
toDoConteudo.setAttribute("class", "toDoConteudo")
toDoContainer.appendChild(toDoConteudo)

const toDoAba = document.createElement("div")
toDoAba.setAttribute("class", "todoAba")
toDoContainer.appendChild(toDoAba)

const toDoAbaImg = document.createElement("img")
toDoAbaImg.setAttribute("class", "toDoAbaImgImg")
toDoAbaImg.setAttribute("src", "imgs/seta_esquerda.svg")
toDoAbaImg.addEventListener('click', ()=>{
    toDoContainer.classList.remove('todoExibir')
    abas.style.display = "block"
})
toDoAba.appendChild(toDoAbaImg)

const toDo = document.createElement("div")
toDo.setAttribute("class", "toDo")
toDoConteudo.appendChild(toDo)

const toDoTitle = document.createElement("h1")
toDoTitle.setAttribute("class", "toDoTitle")
toDoTitle.innerText = "To Do List"
toDo.appendChild(toDoTitle)

const toDoInputDiv = document.createElement("div")
toDoInputDiv.setAttribute("class", "toDoInputDiv")
toDo.appendChild(toDoInputDiv)

const toDoInput = document.createElement("input")
toDoInput.setAttribute("type", "text")
toDoInput.setAttribute("placeholder", "Insira sua tarefa")
toDoInput.setAttribute("class", "toDoInput")
toDoInput.setAttribute("maxlength", "120")
toDoInputDiv.appendChild(toDoInput)

const toDoInputSubmit = document.createElement("input")
toDoInputSubmit.setAttribute("type", "submit")
toDoInputSubmit.setAttribute("value", "+")
toDoInputSubmit.setAttribute("class", "toDoInputSubmit")
toDoInputDiv.appendChild(toDoInputSubmit)

const toDoLists = document.createElement("div")
toDoLists.setAttribute("class", "todoLists")
toDo.appendChild(toDoLists)

const todo_aba_img = document.querySelector("#todo_aba_img")
todo_aba_img.addEventListener("click", ()=>{
    toDoContainer.classList.add('todoExibir')
    abas.style.display = "none"
})

const toDoEditDiv = document.createElement("div")
toDoEditDiv.setAttribute("class", "toDoEditDiv")
toDoConteudo.appendChild(toDoEditDiv)

const toDoEditTitle = document.createElement("h1")
toDoEditTitle.setAttribute("class", "toDoEditTitle")
toDoEditTitle.innerText = "Editar Tarefa To Do"
toDoEditDiv.appendChild(toDoEditTitle)

const inputTextoEdit = document.createElement("input")
inputTextoEdit.setAttribute("type", "text")
inputTextoEdit.setAttribute("class", "inputTextoEdit")
inputTextoEdit.setAttribute("placeholder", "Edite o valor da tarefa")
toDoEditDiv.appendChild(inputTextoEdit)

const toDoEditButtons = document.createElement("div")
toDoEditButtons.setAttribute("class", "toDoEditButtons")
toDoEditDiv.appendChild(toDoEditButtons)

const toDoEditButtonConfirm = document.createElement("input")
toDoEditButtonConfirm.setAttribute("class", "toDoEditButtonConfirm")
toDoEditButtonConfirm.setAttribute("type", "submit")
toDoEditButtonConfirm.setAttribute("value", "Confirmar")
toDoEditButtons.appendChild(toDoEditButtonConfirm)

const toDoEditButtonCancel = document.createElement("input")
toDoEditButtonCancel.setAttribute("class", "toDoEditButtonCancel")
toDoEditButtonCancel.setAttribute("type", "submit")
toDoEditButtonCancel.setAttribute("value", "Cancelar")
toDoEditButtons.appendChild(toDoEditButtonCancel)

let valorAntigo = "teste"

const criarTarefa = (nomeTarefa) => {
    const divItemList = document.createElement("div")
    divItemList.setAttribute("class", "divItemList")
    toDoLists.appendChild(divItemList)

    const itemListFrase = document.createElement("p")
    itemListFrase.setAttribute("class", "itemListFrase")
    itemListFrase.innerText = nomeTarefa
    divItemList.appendChild(itemListFrase)

    const itemListButtons = document.createElement("div")
    itemListButtons.setAttribute("class", "itemListButtons")
    divItemList.appendChild(itemListButtons)

    const itemListCheck = document.createElement("div")
    itemListCheck.setAttribute("class", "itemListCheck")
    itemListButtons.appendChild(itemListCheck)

    const itemListEdit = document.createElement("div")
    itemListEdit.setAttribute("class", "itemListEdit")
    itemListButtons.appendChild(itemListEdit)

    const itemListDelete = document.createElement("div")
    itemListDelete.setAttribute("class", "itemListDelete")
    itemListButtons.appendChild(itemListDelete)

    const itemListDeleteImg = document.createElement("img")
    itemListDeleteImg.setAttribute("class", "itemListDeleteImg")
    itemListDeleteImg.setAttribute("src", "imgs/delete.png")
    itemListDelete.appendChild(itemListDeleteImg)

    const itemListEditImg = document.createElement("img")
    itemListEditImg.setAttribute("class", "itemListEditImg")
    itemListEditImg.setAttribute("src", "imgs/edit.png")
    itemListEdit.appendChild(itemListEditImg)

    const itemListCheckImg = document.createElement("img")
    itemListCheckImg.setAttribute("class", "itemListCheckImg")
    itemListCheckImg.setAttribute("src", "imgs/check.png")
    itemListCheck.appendChild(itemListCheckImg)

    itemListCheck.addEventListener("click", ()=>{
        divItemList.classList.toggle("check")
    })

    itemListDelete.addEventListener("click", () => {
        divItemList.remove()
    })

    itemListEdit.addEventListener("click", ()=>{
        toDo.style.display = "none"
        toDoEditDiv.style.display = "flex"

        valorAntigo = itemListEdit.parentNode.parentNode.firstChild.innerText
        inputTextoEdit.value = valorAntigo
    })

    toDoInput.value = ""
    toDoInput.focus()
}

const verificaRepetido = (valorInput) => {
    const todasTarefas = [...document.querySelectorAll(".itemListFrase")]
    todasTarefas.forEach((el) => {
        if (el.innerHTML == valorInput) {
            el.parentNode.remove()
            alert('Tarefa já escrita')
        }
    })
}

toDoInputSubmit.addEventListener("click", ()=>{
    const valorInput = toDoInput.value

    if(valorInput == ""){

        alert('Escreva uma tarefa para ser executada')
        toDoInput.focus()

    }else{

        verificaRepetido(valorInput)
        criarTarefa(valorInput)

    }

})

toDoEditButtonConfirm.addEventListener("click", ()=>{
    toDo.style.display = "block"
    toDoEditDiv.style.display = "none"

    const listaAtualizada = document.querySelectorAll(".itemListFrase")
    listaAtualizada.forEach((el)=>{
        if(valorAntigo == el.innerText){
            el.innerText = inputTextoEdit.value
        }
    })
})

toDoEditButtonCancel.addEventListener("click", () => {
    toDo.style.display = "block"
    toDoEditDiv.style.display = "none"
})