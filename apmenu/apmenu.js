/*
 apmenu | responsive menu plugin | v.1.2
 Dependencies: jquery, font-awesome
 Author: @lgtma
*/
(function($){
	$.fn.apMenu = function(options){

		// Default settings
		var defaults = $.extend({
			toggleName: "ap-toggle", //toggle menu class name
			toggleBar: "<i class='icon icon-bars'></i>",
			toggleClose: "<i class='icon icon-times'></i>",
			appendToggle: ".ap-nav" // where to append toggle menu
		}, options);

		var opt = $.extend(defaults,options);

		return this.each(function(){

			var nav = $(this),
				ulClass = 'ap-menu',
				ulSubClass = 'ap-sub-menu',
				ulFirst = nav.find('ul:first');

			var toggle  = $('<span class="'+defaults.toggleName+'">'+defaults.toggleBar+'</span>');

			ulFirst.addClass(ulClass), //add class ul parent
			ulFirst.wrap('<div class="ap-menu-wrapper"></div>'); //wrap ul parent
			nav.find('ul.'+ulClass+' li > ul').addClass(ulSubClass); //add class submenu
			nav.find('ul.'+ulClass+' li').has('ul').addClass(ulClass+'-has-children'); //add class has-children

			// if appendToggle not empty append toggle menu to specified place;
			if( defaults.appendToggle ){
				$(defaults.appendToggle).append(toggle);
			} else{
				nav.append(toggle);
			}

			// main nav toggle function
			toggle.click( function(e){
				e.stopPropagation();
				$(this).toggleClass('shrink');
				$("body").toggleClass("ap-nav-active");

				if( $(this).hasClass('shrink') ){
					$('i', this).removeClass('icon-bars').addClass('icon-times');
				} else {
					$('i',this).removeClass('icon-times').addClass('icon-bars');
				}

			});

			var fa_angle_down = 'icon-angle-down';

			// subnav toggle function
			$('.ap-menu-wrapper > .'+ulClass+' > li').each(function(){

				var toggle_subnav = 'toggle-subnav',
					subtoggle = '<i class="icon"></i>';

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

			var togglesubnav_i = $('a.toggle-subnav > i.icon');
			togglesubnav_i.click(function(e){
				e.preventDefault();
				var parent_li = $(this).closest('li');
				$('li').not($(this).parents('li')).removeClass('shrink');
				parent_li.toggleClass('shrink');
				//console.log(parentli);

			});

			// close main nav on body click
			$('body').on('click',function(e){
				e.stopPropagation();

				var a = $(e.target),
					b = a.parents();

				if( !a.is('a') && !b.is('a') ){

					if( nav.hasClass('shrink') ){
						nav.removeClass('shrink');
					}
					if( toggle.hasClass("shrink") ) {
						toggle.removeClass("shrink");
					}
					if($("body").hasClass("ap-nav-active")){
						$("body").removeClass("ap-nav-active");
					}

					if( $('.'+defaults.toggleName+' i.icon').hasClass('icon-times') ){
						$('.'+defaults.toggleName+' i.icon').removeClass('icon-times').addClass('icon-bars');
					}
				}
			});

		});
	}
})(jQuery);
