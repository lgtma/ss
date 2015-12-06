(function($) {
	$('.logo a').click(function(){
		alert('text alert');
	});

	//nav toggle
	$('.toggle-main-menu').click(function(e){
		e.stopPropagation();
		$(this).toggleClass('shrink');
		$('nav[role="navigation"]').toggleClass('shrink');
		if($('i.fa',this).hasClass('fa-bars')){
			$('i.fa',this).removeClass('fa-bars').addClass('fa-times');
		} else{
			$('i.fa',this).addClass('fa-bars');
		}
	});
	// Footer Menu
	$('#footer .menu > .link').each(function(){
		if($('.title',this).length){
			$('.title',this).addClass('toggle-nav');
			$('<i class="fa fa-caret-down"></i>').appendTo($('.title',this));
		}
	});
	$('.toggle-nav i.fa').click(function(e){
		e.preventDefault();
		$('#footer .link').not($(this).parents('.link')).removeClass('shrink');
		$(this).parents('.link').toggleClass('shrink');
	});

	$(window).on('load resize',function(){
		if($('.section.listing').length){
			var boxWidth  = $('.box .figure').width();
			var boxHeight = Math.floor(boxWidth/2);
			$('.box').each(function(){
				$('.figure',this).css('height',boxHeight);
			});			
		}
	});

})(jQuery);