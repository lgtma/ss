/* apTabs 0.1 | @lgtma */
(function($){
	$.fn.apTabs = function(options){
		// Default settings
		var defaults = $.extend({
			tabs: 'ap-tabs',
			tabsNav: 'ap-tabs-nav',
			tabsContent: 'ap-tabs-content'
		}, options);

		var opt = $.extend(defaults,options);

		return this.each(function() {
			var tabbed 		= $(this),
				tbNav 		= tabbed.find('> div:eq(0)', tabbed).addClass(defaults.tabsNav),
				tbContent 	= tabbed.find('> div:eq(1)', tabbed).addClass(defaults.tabsContent),
				//elements class name
				aptLink 	= 'apt-link',
				aptNav 		= 'apt-nav',
				aptActive 	= 'apt-active',
				aptHide 	= 'apt-hide'
				aptContent 	= 'apt-content';

			if(defaults.tabs){
				tabbed.addClass(defaults.tabs);
			}
			
			$('.'+defaults.tabsContent).children().wrap('<div class="'+aptContent+'"></div>');
			$('.'+defaults.tabsNav).children(':first').addClass(aptNav);
			$('.'+aptNav).children().addClass(aptLink);

			//set first element to be active content 
			tbContent.find('> div:eq(0)', tbContent).addClass(aptActive);
			$('.'+aptNav).children(':first').addClass(aptActive);			
			
			$('.'+aptLink+' > a').click(function(e){
				e.preventDefault();
				var active_tab_selector = $('.'+aptLink+'.'+aptActive+' > a').attr('href'), // get tab content selector
					active_tab_link = $('.'+aptNav+' > '+'.'+aptLink+'.'+aptActive);// find active nav 
					active_tab_link.removeClass(aptActive);//remove active class
				$(this).parents('.'+aptLink).addClass(aptActive);// add active class to parent

				// hide tab content
				$(active_tab_selector).parents('.'+aptContent).removeClass(aptActive);
				$(active_tab_selector).parents('.'+aptContent).addClass(aptHide);

				// show target tab content
				var target_tab_content = $(this).attr('href');
				$(target_tab_content).parents('.'+aptContent).removeClass(aptHide);
				$(target_tab_content).parents('.'+aptContent).addClass(aptActive);

			});

		});
	}
})(jQuery);
