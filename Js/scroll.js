jQuery(document).ready(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() > $(window).height()){
           $('.logo').css({
               display:'block'
           });
       } else {
           $('.logo').css({
               display:'none'
           });
       };
    });
    $(document).ready(function() {
        $('.js-scrollTo').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
            return false;
        });
    });
});
