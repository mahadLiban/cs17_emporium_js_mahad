let slides = document.querySelectorAll('.carousel_itemx')
let voirSlides = slides.length;

console.log(voirSlides);

let indicator = document.getElementsByClassName('lesBtn')
let voir = indicator.length
console.log(voir);


   indicator[0].addEventListener('click',()=>{
    slides[0].style.transform ='translateX(0%)'
    slides[1].style.transform ='translateX(150%)'
    slides[2].style.transform ='translateX(300%)'
    slides[3].style.transform ='translateX(450%)'
    slides[4].style.transform ='translateX(600%)'
    slides[5].style.transform ='translateX(750%)'
    slides[6].style.transform ='translateX(900%)'

    
})
indicator[1].addEventListener('click',()=>{
    slides[0].style.transform ='translateX(-150%)'
    slides[1].style.transform ='translateX(0%)'
    slides[2].style.transform ='translateX(150%)'
    slides[3].style.transform ='translateX(300%)'
    slides[4].style.transform ='translateX(450%)'
    slides[5].style.transform ='translateX(600%)'
    slides[6].style.transform ='translateX(750%)'

})
indicator[2].addEventListener('click',()=>{
    slides[0].style.transform ='translateX(-300%)'
    slides[1].style.transform ='translateX(-150%)'
    slides[2].style.transform ='translateX(0%)'
    slides[3].style.transform ='translateX(150%)'
    slides[4].style.transform ='translateX(300%)'
    slides[5].style.transform ='translateX(450%)'
    slides[6].style.transform ='translateX(600%)'

})
indicator[3].addEventListener('click',()=>{
    slides[0].style.transform ='translateX(-450%)'
    slides[1].style.transform ='translateX(-300%)'
    slides[2].style.transform ='translateX(-150%)'
    slides[3].style.transform ='translateX(0%)'
    slides[4].style.transform ='translateX(150%)'
    slides[5].style.transform ='translateX(300%)'
    slides[6].style.transform ='translateX(450%)'

}) 


export{slides, voirSlides, indicator, voir};