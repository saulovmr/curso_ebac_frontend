function linhaTexto(){
    const linha = document.querySelector('.adiciona-linha');
    linha.style.textDecoration = "line-through";
    }

$('form').on('submit', function(e){
    e.preventDefault();
    const enderecoNovaTarefa = $('#nova-tarefa').val();
    const novaTarefa = $('<li onclick="linhaTexto()"></li>');
    $(`${enderecoNovaTarefa}`).appendTo(novaTarefa);
    $(`<li">${enderecoNovaTarefa}</li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
    $('#nova-tarefa').val('');
    
})

