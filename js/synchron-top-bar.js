
$(window).bind('scroll', function () {
    navbarh = $('#synchron-navbar').height();
    topbarh = $('#synchron-top-bar').height();

    if ($('#synchron-top-bar').is(':visible')
	&& $(window).scrollTop() > navbarh)
    {
	$('#synchron-top-bar').addClass('fixed-top');
	$('body').css('margin-top', topbarh);
    } else {
	$('#synchron-top-bar').removeClass('fixed-top');
	$('body').css('margin-top', '0');
    }
})

