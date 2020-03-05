$(document).ready(function () {
    //form 驗證
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function validata(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }else {
                        if (event.target.id === 'nextPageCheckout2'){
                            event.target.action = '../pages/checkout-2.html';
                        } else if (event.target.id === 'nextPageCheckout3'){
                            event.target.action = '../pages/checkout-3.html';
                        } else if (event.target.id === 'EInvoice'){
                            event.target.action = '../pages/checkout-success.html';
                        } else if (event.target.id === 'PInvoice'){
                            event.target.action = '../pages/checkout-success.html';
                        };
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    //Top button 移到最上方
    $('.top').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });
    
    var lastScrollTop = 110;
    $(window).scroll(function () {
        var windowH = $(window).height();
        var scrollPos = $(window).scrollTop();
        
        // Collapse Navbar
        var navbarCollapse = function(){
            if (  scrollPos > lastScrollTop){
                $('#mainNav').addClass('sticky-min');
            } else{
                $('#mainNav').removeClass('sticky-min');
            };
        };
        navbarCollapse();


        //Top button
        var topBtn = function(){
            if ( scrollPos > 0 ){
                $('.top').fadeIn(1000);
            } else {
                $('.top').fadeOut(2000);
            };
        };
        topBtn();


        // index.html section 顯示
        $('.animatedUp').each(function(){
            var thisPos = $(this).offset().top;
            if ( thisPos < scrollPos + windowH - 100 ){
                $(this).addClass('fadeIn');
            };    
        });
        $('.animatedLeft, .animatedRight').each(function(){
            var thisPos = $(this).offset().top;
            if ( thisPos < scrollPos + windowH - 150 ){
                $(this).addClass('fadeIn');
            };    
        });
        
    });
    // 產品like
    $('.js-product-like').click(function (e) { 
        e.preventDefault();
        $(this).find('i').toggle();
    });
    // 購物車 數量加減
    $('.js-order').on('click', function(e){
        var num = $(this).find('.js-order-number');
        e.preventDefault();
        if(e.target.nodeName !== 'BUTTON'){
            return;
        } else if (e.target.className.indexOf('js-order-reduce') != -1){
            $(this).find('.js-order-number').val( parseInt(num.val()) - 1 );
            if ( parseInt(num.val()) == 1 ){
                $(this).find('.js-order-reduce').attr('disabled', true);
            };
        } else if (e.target.className.indexOf('js-order-add') != -1){
            $(this).find('.js-order-number').val( parseInt(num.val()) + 1 );
            if ( parseInt(num.val()) !== 1 ){
                $(this).find('.js-order-reduce').attr('disabled', false);
            }
        };
    });
    // 結帳流程-發票 切換選擇
    $('input[type="radio"]').click(function (e) { 
        e.preventDefault();
        if ( $(this).attr("value") == "EInvoice" ){
            $('#EInvoice').show();
            $('#PInvoice').hide();
        }
        if ( $(this).attr("value") == "PInvoice" ){
            $('#EInvoice').hide();
            $('#PInvoice').show();
        }
    });
});