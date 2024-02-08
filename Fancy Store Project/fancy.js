const btn = document.getElementsByClassName('btn')[0];
const navbar = document.getElementsByClassName('nav-bar')[0];
btn.addEventListener('click',()=>{
    navbar.classList.toggle('mobile');
})