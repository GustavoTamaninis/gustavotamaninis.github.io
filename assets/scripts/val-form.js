//Variáveis das caixas de cada campo:
const cxNome = document.querySelector('#nome');
const cxEmail = document.querySelector('#email');
const cxMensagem = document.querySelector('#mensagem');
const cxEnvioForm = document.querySelector('#envio-formulario');

//Variáveis das flash messages:
const cxNomeVazio = document.querySelector('.empty-name');

const cxEmailVazio = document.querySelector('.empty-email');
const cxEmailInvalido = document.querySelector('.invalid-email');

const cxMensagemVazia = document.querySelector('.empty-message');

//Detectando os eventos que vão ativar chamar as demais funções de validação:
cxNome.addEventListener('focusout', function(e){
    validarNome();
})

cxEmail.addEventListener('focusout', function(e){
    validarEmail();
})

cxMensagem.addEventListener('focusout', function(e){
    validarMensagem();
})

cxEnvioForm.addEventListener('click', function(e){
    e.preventDefault; //evitando que o formulário seja enviado, pois não possuo back-end.
})

//Validando cada campo:
function validarNome(){
    let nome = cxNome.value;
    cxNomeVazio.style.display = validarCampoVazio(nome);
}

function validarEmail(){
    let email = cxEmail.value;
    cxEmailVazio.style.display = validarCampoVazio(email);
    cxEmailInvalido.style.display = validarFormatEmail(email);
}

function validarMensagem(){
    let mensagem = cxMensagem.value;
    cxMensagemVazia.style.display = validarCampoVazio(mensagem);
}

//Validação global de campo vazio:
function validarCampoVazio(campo){
    if(campo == ""){
        return 'block';
    }else{
        return 'none';
    }
}

//Validação da formatação do e-mail:
function validarFormatEmail(email){
    const regEx = /^\S+@\S+\.\S+$/;
    if(validarCampoVazio(email) == 'none'){
        if(regEx.test(email) == false){
            return 'block'
        }else{
            return 'none';
        }
    }else{
        return 'none'
    }
}