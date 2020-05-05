jQuery(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        jQuery('body').addClass('ios');
	} else{
        jQuery('body').addClass('web');
	}
});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */

jQuery(window).scroll(function() {
	
		
	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */

jQuery(window).resize(function() {
		
		
	});



jQuery(function($){

/*

	$('.et_pb_team_member').on('click', function(){
	    $('body').toggleClass('popup-open');
	    $(this).toggleClass('popup').parents('.et_pb_section').css('z-index','10');

    });
*/

    $('.et_pb_team_member_description').prepend('<span class="close"></span>');

    $('.et_pb_team_member').on('click', function(){
        var el = $(this);
        showPopup(el);
    });
    $('.et_pb_team_member .close').on('click', function(){
        var el = $(this);
        setTimeout(hidePopup, 300, el);
    });

	function showPopup(el){
        $('body').addClass('popup-open');
        el.addClass('popup').parents('.et_pb_section').css('z-index','10');
    }

	function hidePopup(el){
        $('body').removeClass('popup-open');
        el.closest('.et_pb_team_member ').removeClass('popup').parents('.et_pb_section').css('z-index','0');
    }




	$('.button-nav').click(function(){
		$(this).toggleClass('active');
		$('.main-nav-list').slideToggle(); 
		return false;
	});


	/*
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/

	

});
