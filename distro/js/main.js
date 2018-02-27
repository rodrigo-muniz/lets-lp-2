$(function () {
    $('.lazy').Lazy();

    //$.Lazy('av', ['audio', 'video'], function(element, response) {
    // this plugin will automatically handle '<audio>' and '<video> elements,
    // even when no 'data-loader' attribute was set on the elements
    //});

    var areas = $("#areas-atuacao").html();

    console.log(areas);

    var listaPalavras = ["Tecnologia", "Eventos", "Teste 1", "Teste 2"];
    changeWords(listaPalavras, 2000);
    
    pinBackground();





});

//http://jquery.eisbehr.de/lazy/

function pinBackground() {
    $(window).scroll(function () {

        var pxScrollado = $(window).scrollTop();
        var inicioFix = 1000;
        var fimFix = 2100;

        console.log("pxScrollado", pxScrollado);

        //After scrolling 100px from the top...
        if (pxScrollado <= inicioFix) {
            $('#venda-mais').css('background-attachment', 'scroll');
            $('#sua-lista').css('background-attachment', 'scroll');
            $('#formidaveis').css('background-attachment', 'scroll');

        } else if ((pxScrollado >= inicioFix) && (pxScrollado <= fimFix)) {
            $('#venda-mais').css('background-attachment', 'fixed');
            $('#sua-lista').css('background-attachment', 'fixed');
            $('#formidaveis').css('background-attachment', 'fixed');

        } else {
            $('#formidaveis').css('background-attachment', 'scroll');
        }

    });
}


function changeWords(wordsArray, intervalo) {
    count = 0;
    setInterval(function () {
        count++;
        $("#areas-atuacao").fadeOut(400, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
        });
    }, intervalo);
}