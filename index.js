const addLead = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


addLead.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        listItems +=    `
        <li>
            <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}'</a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
}
