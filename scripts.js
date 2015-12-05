(function($) {
	$('.logo a').click(function(){
		alert('text alert');
	});

	$(window).on('load resize',function(){
		var boxWidth  = $('.box .figure').width();
		var boxHeight = Math.floor(boxWidth/2);
		$('.listing .box').each(function(){
			$('.figure',this).css('height',boxHeight);
			// var imgWidth = $('.figure.image img',this).width();
			// var imgHeight = $('.figure.image img',this).height();
			// // (imgHeight/imgWidth)*newImgWidth = newImgHeight
			// var newImgHeight = Math.floor(imgHeight/imgWidth)*boxWidth;
			// $('.figure.image img',this).css({
			// 	'height':boxHeight
			// });
		});
	});
	
})(jQuery);