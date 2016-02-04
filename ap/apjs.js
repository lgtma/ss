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
			toggleNav: '', //place where to put toggle
			theme: 'default-ap-theme'
		}, options);

		var opt = $.extend(defaults,options);

		return this.each(function(){
			$nav = $(this);
			
			$nav.find('ul:first').addClass(defaults.ulClass); //add class ul parent
			$nav.find('ul.'+defaults.ulClass+' li > ul').addClass(defaults.ulsubClass); //add class submenu
			$nav.find('ul.'+defaults.ulClass+' li').has('ul').addClass(defaults.ulClass+'-has-children'); //add class has-children
			
			var toggle 		 = $('<span class="'+defaults.toggleName+'"><i class="fa fa-bars"></i></span>'),
				ulmenu 		 = $('ul.'+defaults.ulClass+' li');
			
			if($(defaults.theme)){ $nav.addClass(defaults.theme); }

			// if appendToggle not empty append toggle menu to specified place;
			$(defaults.toggleNav!='')? $(defaults.toggleNav).append(toggle) : $nav.append(appendToggle);

			// main nav toggle function
			toggle.click(function(){
				$nav.toggleClass('shrink').slideToggle();
			});
			
			// subnav toggle function
			$(ulmenu).each(function(){
				var subtoggle = $('<i class="fa fa-angle-down"></i>');
				// find submenu
				if($('.'+defaults.ulsubClass, this).length){
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
				console.log(parentli);
			});
		});
	}
})(jQuery);