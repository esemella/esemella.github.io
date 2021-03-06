var h=$(window).height();

$("document").ready(function() {
	var height = $(window).height();
	var width = $(window).width();

	$(window).resize(function() {
		if (width != $(window).width() || height != $(window).height) {
			location.reload();
			return;
		}
	});

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
				if ($(window).scrollTop() >= h * 3 / 5) {
						$('#webdev').animate({
								opacity: '1'
						}, 1000);
				}
				if ($(window).scrollTop() >= h * 4 / 5) {
						$('#os').animate({
								opacity: '1'
						}, 1000);
				}
    });
});
