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

    $('.et_pb_team_member_description, .et_pb_team_member_image').prepend('<span class="close"></span>');

    $('.et_pb_team_member').on('click', function(){
        var el = $(this);
        showPopup(el);
    });

    $('#brad').on('click', function(){
        var el = $('#bradC');
        showPopup(el);
        return false;
    });

    $('.single-bio .et_pb_button').on('click', function(){
        var el = $('.single-bio .et_pb_team_member');
        showPopup(el);
        return false;
    });


    $('.et_pb_team_member .close').on('click', function(){
        var el = $(this);
        setTimeout(hidePopup, 300, el);
    });

	function showPopup(el){
        //$('body').addClass('popup-open');
        el.addClass('popup').parents('.et_pb_row, .et_pb_section').css('z-index','10');
    }

	function hidePopup(el){
        //$('body').removeClass('popup-open');
        el.closest('.et_pb_team_member ').removeClass('popup').parents('.et_pb_row, .et_pb_section').css('z-index','0');
    }





   var  $fb =  $('.section-share .et-social-facebook'),
        $tw =  $('.section-share .et-social-twitter'),
        fbLink = $('#sfsiid_facebook a').attr('href'),
        twLink = $('#sfsiid_twitter a').attr('href');

        $fb.find('.icon').attr('href', fbLink);
        $tw.find('.icon').attr('href', twLink);




        $('.section-upcoming-shows .et_pb_button').on('click', function(e){
            e.preventDefault();
            return false;
        });

        $('.section-upcoming-shows .et_pb_blurb').each(function(){
            var $item = $(this);

            $item.find('.et_pb_main_blurb_image').append($item.find('.et_pb_blurb_description'));
        });


        $('a[href^="popup"]').on('click', function(e){
            var $el = $(this),
                popup = $el.attr('href');

            showPopup2(popup);

            e.preventDefault();
            return false;
        });

        $('.et_pb_main_blurb_image').on('click', function(e){
            var $el = $(this);

            hidePopup2($el);
        });


        function showPopup2(popup){
            $('#' + popup).addClass('show').parents('.et_pb_row, .et_pb_section').css('z-index','10');
        }

        function hidePopup2($el){
            $el.closest('.et_pb_blurb').removeClass('show').parents('.et_pb_row, .et_pb_section').css('z-index','0');
        }








        //$(".section-upcoming-shows .et_pb_main_blurb_image").appendTo(".section-upcoming-shows .et_pb_blurb_description");



        /*
        $('.more-text').on('click', function(e){
            e.preventDefault();
            $('.hidden-content').slideToggle();
        });
        */







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
