const inputget = document.querySelector("#yourtask")
const listContainer = document.querySelector("ul")

function AddTask(){
    if(inputget.value === ''){
        alert("You must add something man")
    }else{
        let lis = document.createElement("li")
        lis.innerHTML = inputget.value
        listContainer.appendChild(lis)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        lis.appendChild(span)
    }
    inputget.value = ""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)


//Sauvegarde dans le cache du naviguateur

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData()