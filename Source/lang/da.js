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
	required: "Dette felt skal udfyldes.",
	alpha: "Dette felt accepterer kun alfabetiske tegn.",
	alphanum: "Dette felt accepterer kun alfanumeriske tegn.",
	nodigit: "Cifre ikke accepteret.",
	digit: "Skriv venligst et gyldigt heltal.",
	digitmin: "Tallet skal være mindst %0",
	digitltd: "Værdien skal være mellem %0 og %1",
	number: "Skriv venligst et gyldigt nummer.",
	email: "Skriv venligst en gyldig e-mail adresse: <br /><span>F.eks: ditnavn@gmail.com</span>",
	image : 'Dette felt bør kun indeholde gyldige billedtyper.',
	phone: "Skriv venligst et gyldigt telefonnummer.",
	url: "Skriv venligst et gyldigt url: <br /><span>F.eks: http://www.google.com</span>",

	confirm: "Dette felt er forskelligt fra %0",
	differs: "Denne værdi skal være anderledes end %0",
	length_str: "Længden er inkorrekt, den skal være mellem %0 og %1",
	length_fix: "Længden er inkorrekt, den skal være præcis %0 tegn.",
	lengthmax: "Længden er inkorrekt, den skal max være %0",
	lengthmin: "Længden er inkorrekt, den skal mindst være %0",
	words_min : "Dette felt skal mindst indeholde %0 ord, iøjeblikket: %1 ord",
	words_range : "Dette felt skal indeholde %0-%1 ord, iøjeblikket: %2 ord",
	words_max : "Dette felt må max indeholde %0 ord, iøjeblikket: %1 ord",
	checkbox: "Afkryds venligst denne boks.",
	checkboxes_group : 'Afkryds venligst mindst %0 boks(e)',
	radios: "Afkryds venligst en af mulighederne.",
	select: "Vælg venligst en af værdierne."
}