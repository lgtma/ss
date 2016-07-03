var $ = jQuery.noConflict();
realeo = {
	init: function(){
		realeo._mainmenu();
	},

	//mainmenu - apmenu.js
	_mainmenu: function(){
		$('#main-nav').apMenu({
			//options
			fixedScroll: true
		});
	}
}

$(document).ready(realeo.init);
