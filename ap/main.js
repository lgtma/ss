var $ = jQuery.noConflict();
//init calling functions
$.realeo = {
	_init: function(){
		$.realeo.apMenu._init();
	}
};
//functions
$.realeo.apMenu = {
	_init: function(){
		$.realeo.apMenu.init_menu();
	},

	init_menu: function(){
		$('#main-nav').apMenu({
			//options
			fixedScroll: true,
			direction: 'right'
		})
	}
};
jQuery(document).ready($.realeo._init);