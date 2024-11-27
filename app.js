const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const linkham = document.querySelectorAll("#linkham")


hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})


linkham.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})