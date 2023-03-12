const burger = document.querySelector("#burger");
const cancel = document.querySelector("#cancel");
const content = document.querySelector(".content")
const nav = document.querySelector("nav")


burger.addEventListener("click", ()=>{
    content.classList.add("shift")
    nav.setAttribute("class", "nav")
})

cancel.addEventListener("click", ()=>{
    content.classList.remove("shift")
    nav.removeAttribute("class", "nav")
})
