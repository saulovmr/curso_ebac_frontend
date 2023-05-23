$('form').on('submit', function(e){
    e.preventDefault();
    const enderecoNovaTarefa = $('#nova-tarefa').val();
    const novaTarefa = $('<li onclick="linhaTexto(this)"></li>');
    $(`${enderecoNovaTarefa}`).appendTo(novaTarefa);
    $(`<li">${enderecoNovaTarefa}</li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
    $('#nova-tarefa').val('');
    
})

function linhaTexto(linha){
    linha.style.textDecoration = "line-through";
    }

