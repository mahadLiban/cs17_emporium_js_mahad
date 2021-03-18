let checkbox = document.getElementById('checkbox')
let whiteMode = document.querySelector('.bg-white');
let whiteMode1 = document.querySelector('.navbar-light')
console.log(whiteMode1);
checkbox.addEventListener("change",()=>{
    
    document.body.classList.toggle("dark")
    whiteMode.classList.toggle('bg-white');
    whiteMode.classList.toggle('bg-dark');
    whiteMode1.classList.toggle('navbar-light')
    whiteMode1.classList.toggle('navbar-dark')
   
    
})
export{checkbox};

