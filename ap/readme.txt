=== apmenu ===

Contributors: lgtma

License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A custom menu helper plugin.

== Description ==

 menu style functions for non-bootstrap ap realty wp themes.

== Installation ==

<!-- build menu -->
<nav id="navid" role="navigation">
	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#blog">Blog</a></li>
	</ul>	
</nav>

/* call function */
(function($){
	$('#navid').apMenu();
})(jQuery);

== Changelog ==

= 1.0 - May 12 2015 =
* Initial release
= 1.1 - Feb 2016 =
* Updates apmenu.css
* Add Submenu lvl.2

