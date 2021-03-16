let nav = document.querySelector("nav")

window.addEventListener('scroll',()=>{
    if (window.pageYOffset>='1') {
        nav.style.position='fixed'
    } else {
        nav.style.position='static'
    }
})

// export{nav};