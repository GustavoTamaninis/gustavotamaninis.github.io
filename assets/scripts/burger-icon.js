let cxBurgerBtn = document.querySelector('.burger');
let cxBurgerNav = document.querySelector('.burger-nav')

function alternarNav(){
    cxBurgerNav.classList.toggle('ligado');
}

function fecharMenu(){
    if(window.innerWidth >  768){
        cxBurgerNav.classList.remove('ligado');
    }
}

cxBurgerBtn.addEventListener('click', alternarNav)

window.addEventListener('resize', fecharMenu)