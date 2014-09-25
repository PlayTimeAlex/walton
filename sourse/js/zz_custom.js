(function($) {
    $(document).ready(function(){
        $(".b-header").height($(window).height());
        //tel-mask
        $(".b-form__text_tel").mask("(999) 999-9999");

        $('input, select').placeholder();
    });

    $(window).load(function() {
         
    });
}(jQuery));