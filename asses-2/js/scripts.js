var apps = {
	init: function($){
		//call functions:
		apps.scrollTop();
		apps.navToggle();
		apps.responsEl();
		apps.showTab();
	},
	// navToggle();
	navToggle: function(){
		//main nav toggle
		$('.toggle-menu').click(function(e){
		e.stopPropagation();
			$(this).toggleClass('shrink');
			$('nav[role="navigation"]').toggleClass('shrink');
			if($(this).hasClass('shrink')){
				$(this).removeClass('fa-bars');
				$(this).addClass('fa-times');
			} else{
				$(this).addClass('fa-bars')
				$(this).removeClass('fa-times');
			}
		});

		//subnav toggle
		$('nav[role="navigation"] > ul > li').each(function(){
			if($('.sub-menu',this).length){
				$('> a',this).addClass('toggle-subnav');
				$('<i class="fa fa-caret-down"></i>').appendTo($('> a',this));
				//subnav lv.2
				$('.sub-menu li').each(function(){
					if($('.sub-menu',this).length){
						$('> a',this).addClass('toggle-subnav');
						$('<i class="fa fa-caret-right"></i>').appendTo($('> a',this));
					}
				});
			}
		});

		$('a.toggle-subnav i.fa').on('click', function(e){
			e.preventDefault();
			$('nav[role="navigation"] li').not($(this).parents('li')).removeClass('shrink');
			$(this).closest('li').toggleClass('shrink');
			if($(this).hasClass('fa-caret-right')){
				$(this).removeClass('fa-caret-right').addClass('fa-caret-down');
			} else{
				$(this).removeClass('fa-caret-down').addClass('fa-caret-right');
			}
		});

		//close nav
		$('body').on('click',function(e){
			var a=$(e.target),b=a.parents();
			if(!a.is('a')&&!b.is('a')) {
				if ($('nav[role="navigation"], .toggle-menu').hasClass('shrink')){
					$('nav[role="navigation"], .toggle-menu').removeClass('shrink');
				}
				if ($('.toggle-menu').hasClass('fa-times')){
					$('.toggle-menu').removeClass('fa-times'); 
					$('.toggle-menu').addClass('fa-bars');
				}
				//else return;
			}
		});
	},

	// responsEl()
	responsEl: function(){
		$(window).on('load resize', function(){
			var ww = $(window).width();
			// padding main content from footer
			var footH = $('#footer').height();
			$('#main').css('padding-bottom',footH + 'px');

			//Header
			if($('#header').length){
				var ul_Menu = $('#main-nav > ul');

				if(ww<=1024){
					$(ul_Menu).removeClass('inline');
				} else{
					$(ul_Menu).addClass('inline');
				}
			}
		});
	},

	// showTab()
	showTab: function(){
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
	},

	// scrollTop() - https://css-tricks.com/snippets/jquery/smooth-scrolling/
	scrollTop: function(){
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

};
//runcoderun!
(function($){
	apps.init();
})(jQuery);