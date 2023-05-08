const form = document.getElementById('form-submit');


form.addEventListener('submit', function(e){
    e.preventDefault();    

const numero1 = document.getElementById('number1').value;
const numero2 = document.getElementById('number2').value;
const mensagemSucesso = '<b>Tudo certo, pode prosseguir com a operação!</b>';
const mensagemErro = '<b>Primeiro valor inserido tem que ser menor que o segundo</b>';

    if(numero1 < numero2){
        const containerMensagemSucesso = document.querySelector('.succes-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numero1.value = '';
        numero2.value = '';
    }else{
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

    }
})
