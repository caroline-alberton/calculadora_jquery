$("#limpar").click(function () {

    $('input').val('')
    $('#operacoes').val('selecione')

});

$("#confirmar").click(function () {
    formvalidation()
    var operador = $('#operacoes').val();
    var primeirovalor = $('#primeirovalor').val();
    var segundovalor = $('#segundovalor').val();
    var resultado = $('#resultado').val();
    switch (operador) {
        case 'soma':
            resultado = parseInt(primeirovalor) + parseInt(segundovalor)
            break;
        case 'subtracao':
            resultado = primeirovalor - segundovalor
            break;
        case 'multiplicacao':
            resultado = primeirovalor * segundovalor
            break;
        case 'divisao':
            resultado = primeirovalor / segundovalor
            break;
        case 'porcentagem':
            resultado = primeirovalor / 100 * segundovalor
            break;
    }

    $('#resultado').val(resultado);

});


function formvalidation() {
    var valor = $('#primeirovalor').val();
    if (valor == "") {
        alert('Informe o primeiro valor.');
        $('#primeirovalor').css({"borderColor":"red"})
        return false;

    }
    else {
        $('#primeirovalor').css({"borderColor":"#808080"})
    }

    var valor = $('#segundovalor').val();
    if (valor == "") {
        alert('Informe o segundo valor.');
        $('#segundovalor').css({"borderColor":"red"})
        return false;

    }
    else {
        $('#segundovalor').css({"borderColor":"#808080"})
    }

    var valor = $('#operacoes').val();
    if (valor == "selecione") {
        alert('Selecione o operador.');
        $('#operacoes').css({"borderColor":"red"})
        return false;

    }
    else {
        $('#operacoes').css({"borderColor":"#808080"})
    }
}