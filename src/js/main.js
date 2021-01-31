$(document).ready(function() {
    $('.phone__callback').on('click', function(){
        $('.overlay, #popup').fadeIn('slow');
    });
    $('.popup-form__btn').on('click', function(){
        $('.overlay, #popup').fadeOut('slow');
    });
});