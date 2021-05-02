// init aos
AOS.init({ once : true });

// init jquery
$(document).ready(function(){

    // scrolling header
    $(window).scroll(function(){
        if( $(window).scrollTop() > 1 ){
            $('.header').addClass('fixed');
            $('.idx').addClass('action');
        } else {
            $('.header').removeClass('fixed');
            $('.idx').removeClass('action');
        }
    });

});

//faq
$(document).on('click', ".btn-faq", function(event){
    event.preventDefault();
    var attr = $(this).attr('data');
    $(this).find("i").toggleClass("icon-arrow-down icon-arrow-up");

    $(document).find('.ans[data-collapse="'+ attr +'"]').toggleClass('action');
});
