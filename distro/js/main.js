$(function () {
    $('.lazy').Lazy();

    //pinBackground();





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