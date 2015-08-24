$('nav a').click(function() {
	$('nav li').removeClass('active');
	$(this).parent().addClass('active');

	var section = $(this).attr('data-anchor'),
		top = $('section[data-section="' + section + '"]').offset().top;	


	$('html, body').animate({scrollTop: top}, 500);
});

$(window).scroll(function() {
	var windscroll = $(window).scrollTop();

    $('body > section').each(function(i) {
        if ($(this).position().top <= windscroll) {
            $('nav li.active').removeClass('active');
            $('nav li').eq(i).addClass('active');
        }
    });
}).scroll();

var $word = $('.title-text span:first-child');

$('#typed').typed({
	strings: [
		"a meeting of the minds",
		"a celebration of computer science",
		"competing in Mechmania",
		"open to everyone",
		"more than just a conference",
		"an annual event",
		"puzzling over Puzzlebang!",
		"student-run",
		"going above and beyond",
		"21 years running",
		"a meeting of the minds",
		"a celebration of computer science",
		"competing in Mechmania",
		"INFESTED WITH SPIDERS PLEASE SEND HELP",
		"open to everyone",
		"more than just a conference",
		"an annual event",
		"puzzling over Puzzlebang!",
		"student-run",
		"going above and beyond",
		"21 years running"
	],
	typeSpeed: 30,
	backSpeed: 0,
	backDelay: 2000,
	loop: true
});