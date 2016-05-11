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
			fixedScroll: true, // fixed navbar on scroll
			direction: '' //nav slide direction
		}, options);

		var opt = $.extend(defaults,options);

		return this.each(function(){

			var nav = $(this),
				ulClass = 'ap-menu',
				ulSubClass = 'ap-sub-menu',
				ulFirst = nav.find('ul:first'),
				toggle  = $('<span class="ap-toggle '+defaults.toggleName+'"><i class="fa fa-bars"></i></span>');
			
			ulFirst.addClass(ulClass), //add class ul parent
			ulFirst.wrap('<div class="ap-menu-wrapper"></div>'); //wrap ul parent
			nav.find('ul.'+ulClass+' li > ul').addClass(ulSubClass); //add class submenu
			nav.find('ul.'+ulClass+' li').has('ul').addClass(ulClass+'-has-children'); //add class has-children

			if( $(defaults.theme) ){
				nav.addClass(defaults.theme);
			}

			if( defaults.direction=='right' ){
				nav.addClass('rtl');// right to left
			}
			else if( defaults.direction=='left' ){
				nav.addClass('ltr');//left to right
			}
			else{
				nav.addClass('ttb');//top to bottom
			}

			// if appendToggle not empty append toggle menu to specified place;
			if( defaults.toggleNav ){
				$(defaults.toggleNav).append(toggle)
			} else{
				nav.append(toggle);
			}
			
			// main nav toggle function
			toggle.click( function(e){

				e.stopPropagation();
				nav.toggleClass('shrink');
				$(this).toggleClass('shrink');

				if( $(this).hasClass('shrink') ){
					$('i', this).removeClass('fa-bars').addClass('fa-times');
				} else {
					$('i',this).removeClass('fa-times').addClass('fa-bars');
				}

			});
			
			var fa_angle_down = 'fa-angle-down';

			// subnav toggle function
			$('.ap-menu-wrapper > .'+ulClass+' > li').each(function(){
				
				var toggle_subnav = 'toggle-subnav',
					subtoggle = '<i class="fa"></i>';
				
				// find submenu
				if($('.'+ulSubClass, this).length){
					
					$('> a',this).addClass(toggle_subnav);
					$(subtoggle).addClass(fa_angle_down).appendTo($('> a',this));

					// submenu lvl.2
					$('.'+ulClass+'-has-children',this).each(function(){
						if($('.'+ulSubClass).length){
							$('> a',this).addClass(toggle_subnav);
							$(subtoggle).addClass(fa_angle_down).appendTo($('> a',this));
						}
					});

				}

			});
			
			var togglesubnav_i = $('a.toggle-subnav > i.fa');
			togglesubnav_i.click(function(e){
				e.preventDefault();
				var parent_li = $(this).closest('li');

				$('li').not($(this).parents('li')).removeClass('shrink');
				parent_li.toggleClass('shrink');
				//console.log(parentli);

			});

			// close main nav on body click
			$('body').on('click',function(e){

				var a = $(e.target),
					b = a.parents();

				if( !a.is('a') && !b.is('a') ){
					if( nav.hasClass('shrink') ){
						nav.removeClass('shrink');
						toggle.removeClass('shrink');
					}
					if( $('.'+defaults.toggleName+' i.fa').hasClass('fa-times') ){
						$('.'+defaults.toggleName+' i.fa').removeClass('fa-times').addClass('fa-bars');
					}
				}

			});

			/*
			 * # fixed navbar on scroll down  
			 * ----------------------------------------------------------------- */
			if(defaults.fixedScroll == true){
				$(window).scroll(function(){
					var distanceY = window.pageYOffset,
					shrinkOn = 150,
					siteNavbar = $('.site-nav');
					if(distanceY > shrinkOn){
						$(siteNavbar).addClass('scrolled-down');
					}else{
						if($(siteNavbar).hasClass('scrolled-down')){
							$(siteNavbar).removeClass('scrolled-down');
						}
					}
					//console.log(distanceY);
				});
			} // fixedScroll
			
		});
	}
})(jQuery);
