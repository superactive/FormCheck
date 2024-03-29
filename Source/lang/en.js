/*
---
script: formcheck.js

description:     A MooTools class that allows you to perform different tests on forms to validate them before submission.

authors:
  - fyrye (http://torntech.com)
  - weepaki
  - floor.ch (http://mootools.floor.ch)
  
copyright: Copyright (c) 2010-2011 

license:
  - MIT License

requires:
  core/1.2.4: '*'
  more/1.2.4.4:
      - Fx.Scroll

provides:
  - FormCheck
...
*/
formcheckLanguage = {
	required: "This field is required.",
	alpha: "This field accepts alphabetic characters only.",
	alphanum: "This field accepts alphanumeric characters only.",
	nodigit: "No digits are accepted.",
	digit: "Please enter a valid integer.",
	digitmin: "The number must be at least %0",
	digitltd: "The value must be between %0 and %1",
	number: "Please enter a valid number.",
	email: "Please enter a valid email: <br /><span>E.g. yourname@domain.com</span>",
	image : 'This field should only contain image types',
	phone: "Please enter a valid phone.",
	url: "Please enter a valid url: <br /><span>E.g. http://www.domain.com</span>",
	
	confirm: "This field is different from %0",
	differs: "This value must be different of %0",
	length_str: "The length is incorrect, it must be between %0 and %1",
	length_fix: "The length is incorrect, it must be exactly %0 characters",
	lengthmax: "The length is incorrect, it must be at max %0",
	lengthmin: "The length is incorrect, it must be at least %0",
	words_min : "This field must concain at least %0 words, currently: %1 words",
	words_range : "This field must contain %0-%1 words, currently: %2 words",
	words_max : "This field must contain at max %0 words, currently: %1 words",
	checkbox: "Please check the box",
	checkboxes_group : 'Please check at least %0 box(es)',
	radios: "Please select a radio",
	select: "Please choose a value",
	select_multiple : "Please choose at least one value"
}