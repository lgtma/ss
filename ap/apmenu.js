/*
 apmenu | responsive menu plugin | v.1.1
 Dependencies: jquery, font-awesome
 Author: @lgtma
*/
(function($){
	$.fn.apMenu = function(options){
		// Default settings
		var defaults = $.extend({
			toggleName: 'toggle-main-menu',
			toggleNav: '', // place where to put toggle
			theme: 'ap-menu-theme', // menu style
			fixedScroll: false // fixed navbar on scroll
		}, options);

		var opt = $.extend(defaults,options);

		return this.each(function(){
			$nav = $(this);
			
			var ulClass = 'ap-menu',
				ulSubClass = 'ap-sub-menu';
				
			$nav.find('ul:first').addClass(ulClass); //add class ul parent
			$nav.find('ul.'+ulClass+' li > ul').addClass(ulSubClass); //add class submenu
			$nav.find('ul.'+ulClass+' li').has('ul').addClass(ulClass+'-has-children'); //add class has-children
			
			var toggle 		 = $('<span class="ap-toggle '+defaults.toggleName+'"><i class="fa fa-bars"></i></span>'),
				ulMenu 		 = $('ul.'+ulClass+' li');
			
			if($(defaults.theme)){
				$nav.addClass(defaults.theme);
			}

			// if appendToggle not empty append toggle menu to specified place;
			if(defaults.toggleNav){
				$(defaults.toggleNav).append(toggle)
			} else{
				$nav.append(toggle);
			}
			
			// main nav toggle function
			toggle.click(function(){
				$nav.toggleClass('shrink');
				$(this).toggleClass('shrink');
				if($(this).hasClass('shrink')){
					$('i', this).removeClass('fa-bars').addClass('fa-times');
				} else {
					$('i',this).removeClass('fa-times').addClass('fa-bars');
				}
			});
			
			// subnav toggle function
			$(ulMenu).each(function(){
				var subtoggle = $('<i class="fa fa-angle-down"></i>');
				// find submenu
				if($('.'+ulSubClass, this).length){
					$('> a',this).addClass('toggle-subnav');
					$(subtoggle).appendTo($('> a',this));
					//console.log(this);
				}
			});
			var togglesubnav = $('a.toggle-subnav > i.fa');
			$(togglesubnav).click(function(){
				var parentli = $(this).closest('li');
				$('li').not($(this).parents('li')).removeClass('shrink');
				parentli.toggleClass('shrink');
				//console.log(parentli);
			});
			
			/*
			 * TEST:
			 * # fixed navbar on scroll down  
			 * ----------------------------------------------------------------- */
			if(defaults.fixedScroll == true){
				$(window).scroll(function(){
					var distanceY = window.pageYOffset,
					shrinkOn = 100,
					siteNavbar = $('.site-nav');
					if(distanceY > shrinkOn){
						$(siteNavbar).addClass('scrolled-down');
					}else{
						if($(siteNavbar).hasClass('scrolled-down')){
							$(siteNavbar).removeClass('scrolled-down');
						}
					}
					console.log(distanceY);
				});
			} // fixedScroll
			
		});
	}
})(jQuery);
