const bars = document.querySelector('.bars');
console.log(bars)
const nav = document.querySelector('.main-header nav');

bars.addEventListener('click', ({currentTarget})=>{
    console.log(currentTarget);
    currentTarget.classList.toggle('close');
    nav.classList.toggle('active');
})