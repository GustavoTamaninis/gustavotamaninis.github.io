cxAltTema = document.querySelector('#alternar-tema');
const body = document.body;

cxAltTema.addEventListener('click', function(e){
    //body.classList.add('modo-escuro')
    body.classList.toggle('modo-escuro')
})