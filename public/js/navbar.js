let nav = document.querySelector("nav")

window.addEventListener('scroll',()=>{
    if (window.pageYOffset>='1') {
        nav.style.position='fixed'
        nav.style.width='100%'
        nav.style.backgroundColor='white'
        nav.style.top='0'
        nav.style.zIndex='1000'
    } else {
        nav.style.position='static'
    }
})

export{nav};