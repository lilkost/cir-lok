$(function () {
   $(window).scroll(function() {
        let height = $(window).scrollTop();
        if(height > 350){
            $('.catalog').removeClass('active')
            $('.header__catalog').removeClass('active');
          
        }
    });
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        if(height >120){
            $('.buttons__left').addClass('active');
        }
        else {
            $('.buttons__left').removeClass('active');
        }
    });
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        if(height > $('.wrapper').height() - $('footer').height() - 800){
            $('.buttons__left').removeClass('active');
        }
    });
    //
    // console.log($('.wrapper').height() - $('footer').height() - 500)
})

