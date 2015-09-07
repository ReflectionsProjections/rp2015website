$('nav a').click(function() {
	$('nav li').removeClass('active');
	$(this).parent().addClass('active');

	var section = $(this).attr('data-anchor'),
		top = $('section[data-section="' + section + '"]').offset().top + 50;	

	if (section == 'home') top = 0;
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

$('.about-main a').click(function() {
	$('.about-main').toggleClass('hidden');
});

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
	/*       ___
		///\(o_o)/\\\
		|||  ` '  |||     */ 
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