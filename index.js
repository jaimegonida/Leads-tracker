const addLead = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const delbtn = document.getElementById("delete-btn")

let LeadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))
if (LeadsFromLocal) {    
    myLeads = LeadsFromLocal
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        listItems +=    `
        <li>
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}

delbtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

addLead.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})



