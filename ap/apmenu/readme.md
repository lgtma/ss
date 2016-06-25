=== apmenu ===

Contributors: lgtma

License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A custom menu helper plugin.

== Description ==

 menu style functions for non-bootstrap ap realty wp themes.

== Installation ==
```html
<!-- build menu -->
<nav id="navid" role="navigation">
	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#blog">Blog</a></li>
	</ul>	
</nav>
```
```javascript
/* call function */
(function($){
	$('#navid').apMenu();
})(jQuery);
```
== Changelog ==

= 1.0 - May 12 2015 =
* Initial release
= 1.1 - Feb 2016 =
* Updates: apmenu.css
* Updates: add Submenu lvl.2
* Updates: add close Menu on body click
* Updates: fix missing nav arrow icon
= 1.1 - may 2016 =
* Updates: add nav slide direction

