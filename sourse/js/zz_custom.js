(function($) {
    $(document).ready(function(){
        $(".b-header").height($(window).height());
        //tel-mask
        $(".b-form__text_tel").mask("(999) 999-9999");

        $('input, select').placeholder();

        $(window).scroll(function(){
            $('.b-header__header').css({
                'left': - $(this).scrollLeft()
            });
        });

    });

    $(window).load(function() {
         
    });
}(jQuery));