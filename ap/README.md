INSTALATION
----------------------------------------------------------------------
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