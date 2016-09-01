=== apmenu ===

Contributors: lgtma

License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A custom menu helper plugin.

== Description ==

 Menu style functions for non-bootstrap ap realty wp themes.

== Options ==
 slideDirection : slide direction
 theme 	: menu class name for styling.
 toggleName 	: toggle class name.
 appendToggle 	: append toggle to specific element.

== Installation ==
```html
<nav id="navid" role="navigation" class="site-main-nav">
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
