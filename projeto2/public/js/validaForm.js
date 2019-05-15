function limpaCampos() {
    $('#codigo').val('');
    $('#nome').val('');
    $('#email').val('');
    $('#cursos').val('');
}

function validar() {
    let codigo = $('#codigo').val();
    let nome = $('#nome').val();
    let email = $('#email').val();
    let segunda;
    let curso = $('#cursos').val();
    let vai = 1;

    if(codigo == '' || codigo <= 0) {
        $('#codigo').addClass('erro');
        vai = 0;
        return;
    }
    else {
        $('#codigo').removeClass('erro');
    }

    if(nome.trim() == '' || nome.length > 10) {
        $('#nome').addClass('erro');
        vai = 0;
        return;
    }
    else {
        $('#nome').removeClass('erro');
    }

    if(curso.trim() == '') {
        $('#cursos').addClass('erro');
        vai = 0;
        return;
    }
    else {
        $('#cursos').removeClass('erro');
    }

    if(email.trim().length <= 0) {
        $('#email').addClass('erro');
        vai = 0;
        return;
    }
    else {
        email = email.split('@');  
        if(email[0].length > 0 && email[1].length > 0)
        {
            segunda = email[1].split('.');
            if(segunda[0].length > 0 && segunda[1] == 'com') {
                 $('#email').removeClass('erro');
                 vai = 1;
            }
            else{
                $('#email').addClass('erro');
                 vai = 0;
            }   
        }
        else {
            $('#email').addClass('erro');
            vai = 0;
        }
    }
    if(vai == 1)
    {
         addTable(codigo, nome, cursos);
         limpaCampos();
    }
   
}

function addTable(c,n,cu) {
    $('tbody').append(`
    <tr id='${c}#${n}#${cu}'>
        <td>${c}</td>
        <td>${n}</td>
        <td onclick="removeTabela(this)">X</td>
        <td onclick="alt(this)">A</td>
    </tr>`
    );
}

function removeTabela(td) {
    $(td.closest('tr')).remove();
}

function alt(td) {
    let data = td.closest('tr').id.split('#');

    $('#codigo').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);
}