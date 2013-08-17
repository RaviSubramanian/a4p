$(function (){

    addToCartButtons = $('.homeAddtoCart');
    productItem = $("[id^=product_]");

    $('ul#products').css('max-width',  '700px');

    addToCartButtons.hide();

    $(productItem).hover(function(){
       $(this).addToCartButtons.show();
        alert("showing.....");
    });

    $('.mainMenuBarItem').click(function(){
        alert("showing..... productItem " + productItem.length);
       alert("Length =" + addToCartButtons.length);
    });

    $('.product-image').hover(function(){
       $(this).addToCartButtons.show();
        alert("showing..... productItem " + productItem.length);
    });


    $('.mainMenuBarItem').css(function(){
       $(this.hide);
    });



});