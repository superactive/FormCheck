FormCheck
===========
FormCheck is a MooTools class that allows you to perform different tests on forms to validate them before submission.

Please see the below for syntax and examples.

###Features:

* Lightweight, shiny and fast
* Skins support : customize css, fonts, ...
* Cross-browser compatibibility
* Display errors as tips, or before/after the field
* Basic validation (required, alpha, digit, alphanu, length, confirm, ...)
* Regex validation (phone, email, url)
* Custom function based validation, to perform test that could not be handled by basic tests neither regex test.
* Make easily your own custom regex and alerts
* Internalization : we now support 10 different languages
* Active community
* A lot of options that allow you to customize this class to fit exactly as you want

![Screenshot](http://moofloor.googlecode.com/files/support_fr.png)


How to use
----------

#### Attach FormCheck to your HTML document
	
	<script type="text/javascript" src="/js/formcheck/lang/en.js"> </script>
	<script type="text/javascript" src="/js/formcheck/formcheck.js"> </script>
	
#### Link the desired theme

	<link rel="stylesheet" href="/js/formcheck/theme/classic/formcheck.css" type="text/css" media="screen" />

#### Instantiate FormCheck class for the given form

	<script type="text/javascript">
    		window.addEvent('domready', function(){
        		new FormCheck('myform');
    		});
	</script>


Screenshots
-----------

![Screenshot 1](http://moofloor.googlecode.com/files/UserLogin.png)
![Screenshot 2](http://moofloor.googlecode.com/files/support_fr.png)