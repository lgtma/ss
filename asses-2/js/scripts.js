var apps = (function($){
	var funcs = {};
	funcs.init = function(){
		// call functions:
		aScrollTo();
		responsEl();
		showTab();

		// create functions:
		function responsEl(){
			$(window).on('load resize', function(){
				var footH = $('#footer').height();
				$('#main').css('padding-bottom',footH + 'px');
				// listing property
				if($('.property .listing').length){
					var boxWidth  = $('.box .figure').width();
					var boxHeight = Math.floor(boxWidth/4)*3;
					$('.box').each(function(){
						$('.figure',this).css('height',boxHeight);
					});
				}
			})
		}
		
		// show hide tab
		function showTab(){
			$('.tabs .tab-link > a').click(function(e){
				e.preventDefault();

				var active_tab = $('.tab-link.active > a').attr('href');// get tab content selector
				var active_tab_link = $('.tabs > .tab-link.active');// find active nav 
				active_tab_link.removeClass('active');//remove active class
				
				$(this).parents('span').addClass('active');// add active class to parent

				// hide tab content
				$(active_tab).parents('.tabs-content').removeClass('active');
				$(active_tab).parents('.tabs-content').addClass('hide');

				// show target tab content
				var target_tab_content = $(this).attr('href');
				$(target_tab_content).parents('.tabs-content').removeClass('hide');
				$(target_tab_content).parents('.tabs-content').addClass('active');
				
			});
		}
		
		//https://css-tricks.com/snippets/jquery/smooth-scrolling/
		function aScrollTo(){
			$('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
						scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
		}
	}
	return funcs;
})(jQuery);
//runcoderun!
(function($){
	apps.init();
})(jQuery);