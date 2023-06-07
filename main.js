$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('0000-000');
    $('#cpf').mask('000.000.000-00');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required:true
            },
            email:{
                email: true,
                required: true
                
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome completo',
            cpf: 'Por favor, digite seu CPF',
            email: 'Por favor, digite seu email',
            telefone: 'Por favor, digite seu telefone',
            endereco: 'Digite seu endereco com numero e complemento, se houver',
            cep: 'Por favor, digite seu cep'
        },
        submitHandler: function(form){
            alert('Tudo certo, pode prosseguir')
        },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }  

    })
})