(function($) {
	$('.logo a').click(function(){
		alert('text alert');
	});

	$(window).on('load resize',function(){
		var boxWidth  = $('.box .figure').width();
		var boxHeight = Math.floor(boxWidth/2);
		$('.box .figure').css('height',boxHeight);
	});
	
})(jQuery);