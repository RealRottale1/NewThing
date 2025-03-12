
const myDiv = document.getElementById("myDiv")

const h1 = document.createElement("h1")
h1.textContent = "Welcome to DOM homework"
h1.setAttribute("class", "highlight")
myDiv.appendChild(h1)

const p = document.createElement("p")
p.textContent = "This is your first DOM homework assignment"
myDiv.appendChild(p)

const ul = document.createElement("ul")
myDiv.appendChild(ul)

const li1 = document.createElement("li")
li1.textContent = "1"
ul.appendChild(li1)
const li2 = document.createElement("li")
li2.textContent = "2"
ul.appendChild(li2)
const li3 = document.createElement("li")
li3.textContent = "3"
ul.appendChild(li3)

const button = document.createElement("button")
button.textContent = "Add new list item"
document.body.appendChild(button);

let i = 0

button.addEventListener("click", function() {
    const liI = document.createElement("li")
    liI.textContent = "New List Item " + i
    liI.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")"
    ul.appendChild(liI) 
})

myDiv.addEventListener("click", function() {
    myDiv.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")"   
})