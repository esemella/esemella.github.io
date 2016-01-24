var h=$(window).height();

$("document").ready(function() {
    $('.link1').click(function(){
        $('html, body').animate({
            scrollTop: $("#home").offset().top}, 1000);
    });
    $('.link2').click(function(){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top}, 1000);
    });
    $('.link3').click(function(){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top}, 1000);
    });
		$('.link4').click(function(){
        $('html, body').animate({
            scrollTop: $("#education").offset().top}, 1000);
    });
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > h) {
            $('#backImg2').css({
                position: 'absolute',
                top: h
            });
        } else {
            $('#backImg2').css({
                position: 'fixed',
                top: 0
            });
        }
				if (($(window).scrollTop() >= h / 2) &&
						($(window).scrollTop() <= h + (h / 2))){
						$('#programming').animate({
								opacity: '1'
						}, 1000);
				}
				if ($(window).scrollTop() >= h  * 3 / 4) {
						$('#webdev').animate({
								opacity: '1'
						}, 1000);
				}
				if ($(window).scrollTop() >= h) {
						$('#os').animate({
								opacity: '1'
						}, 1000);
				}
    });
});