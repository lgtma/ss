/*
 apjs | responsive menu plugin | v.1
 Dependencies: jquery, font-awesome
 Author: @lgtma
*/
(function($){
	$.fn.apMenu = function(options){
		// Default settings
		var defaults = $.extend({
			ulClass: 'ap-menu',
			ulsubClass: 'ap-sub-menu',
			toggleName: 'toggle-main-menu',
			appendToggle: '#main-nav'
		}, options);

		var opt = $.extend(defaults,options);

		return this.each(function(){
			$nav = $(this);
			
			$nav.find('> ul').addClass(defaults.ulClass); //add class ul parent
			$nav.find('ul.'+defaults.ulClass+' li > ul').addClass(defaults.ulsubClass); //add class submenu
			$nav.find('ul.'+defaults.ulClass+' li').has('ul').addClass(defaults.ulClass+'-has-children'); //add class has-children
			
			var toggle 		 = $('<span class="'+defaults.toggleName+'"><i class="fa fa-bars"></i></span>'),
				ulmenu 		 = $('ul.'+defaults.ulClass+' li',this);
			
			$nav.append(toggle);

			// main nav toggle function
			toggle.click(function(){
				$nav.toggleClass('shrink');
			});

			// subnav toggle function
			$(ulmenu).each(function(){
				var subtoggle = $('<i class="fa fa-angle-down"></i>');
				if($('.sub-menu',this).length){
					$('> a',this).addClass('toggle-subnav');
					$(subtoggle).appendTo($('> a',this));
				}
			});
			var togglesubnav = $('a.toggle-subnav > i.fa');
			$(togglesubnav).click(function(){
				$('li').not($(this).parents('li')).removeClass('shrink');
				$(this).closest('li').toggleClass('shrink');
			});
		});
	}
})(jQuery);