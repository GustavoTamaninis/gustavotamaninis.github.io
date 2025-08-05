cxAltTema = document.querySelector('#alternar-tema');
const body = document.body;

cxAltTema.addEventListener('click', function(e){
    //body.classList.add('modo-escuro')
    body.classList.toggle('modo-escuro')
    if(body.classList.contains('modo-escuro')){
        localStorage.setItem('tema', 'escuro');
    }else{
        localStorage.removeItem('tema');
    }
})

document.addEventListener('DOMContentLoaded', function(){
    temaSalvo = localStorage.getItem('tema');

    if(temaSalvo === 'escuro'){
        body.classList.add('modo-escuro')
    }
})