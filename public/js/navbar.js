let nav = document.querySelector("nav")
let header = document.querySelector("header")

window.addEventListener('scroll',()=>{
    if (window.pageYOffset>='5') {
        header.style.position='fixed'
        header.style.width='100%'
        header.style.top='0'
        header.style.zIndex='1000'
        header.classList.remove("flex-column")
        header.classList.add("justify-content-between")
        header.querySelector("h1").style.fontSize="30px"
        
    } else {
        header.style.position='static'
        header.classList.add("flex-column")
        header.classList.remove("justify-content-between")
        header.querySelector("h1").style.fontSize="50px"
    }
})

export{nav};