
var ol = document.getElementById("list-container")
var input = document.getElementById("input")

function add() {
    var listitem = document.createElement("li",'#list-container')
    listitem.innerHTML = input.value +"<button class='btn' onclick='deleteitems(event)'>Delete</button>"
    ol.append(listitem)
}
function deleteitems(event) {
    event.target.parentElement.remove()
}