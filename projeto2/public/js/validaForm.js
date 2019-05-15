
function limpaCampos(){

    /*$('#form').each(()=>{
        this.reset();
    });*/

    $('input').val('');
    $('input').removeClass('erro');
    $('select').val('');
    $('select').removeClass('erro');
    $('textarea').val('');

    /*$('#codigo').val('');
    $('#codigo').removeClass('erro');
    $('#cursos').val('');
    $('#cursos').removeClass('erro');
    $('#nome').val('');
    $('#nome').removeClass('erro');
    $('#email').val('');
    $('#email').removeClass('erro');
    $('#mensagem').val('');*/
}

function validar(){
    let codigo = $('#codigo').val();
    let nome = $('#nome').val().trim();
    let email = $('#email').val().trim();
    let erro = false;
    if(codigo == '' || codigo <= 0){
        $('#codigo').addClass('erro');
        erro = true;
    }
    else
        $('#codigo').removeClass('erro');

    if(nome.length < 3 || nome.length > 10){
        $('#nome').addClass('erro');
        erro = true;
    }
    else
        $('#nome').removeClass('erro');
    let curso = $('#cursos').val();
    if(curso == ''){
        $('#cursos').addClass('erro');
        erro = true;
    }
    else
        $('#cursos').removeClass('erro');

    if(erro)
        return;
    //if(email.match('\w+@\w\.com'))
        //$('#email').addClass('erro');

    addTable(codigo,nome,curso);
    limpaCampos();
}

function addTable(c, n, cu){
    $('tbody').append(`
    <tr id="${c}#${n}#${cu}">
        <td>${c}</td>
        <td>${n}</td>
        <td onclick="removeTabela(this)">X</td>
        <td onclick="alt(this)">A</td>
    </tr>
    `);
}

function removeTabela(table){
    $(table.closest('tr')).remove();
}

function alt(td){
    let data = td.closest('tr').id.split('#');
    $('#codigo').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);
}