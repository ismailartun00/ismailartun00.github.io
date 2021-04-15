const smallimages = document.querySelectorAll(".smallphotos img")
const bigphoto = document.querySelector(".bigphoto img")
const currentsize = document.querySelector(".current-size span")
const numbers = document.querySelectorAll(".numbers div")

smallimages.forEach(item =>{
    item.addEventListener("mouseover", ()=>{
        bigphoto.src = item.src;
    })
})

numbers.forEach(item => {
    item.addEventListener("click", () => {
        currentsize.textContent = item.textContent;
    })
})