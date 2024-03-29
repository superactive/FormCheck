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
formchecformcheckLanguage = {
	required: "Dit veld is verplicht.",
	alpha: "Dit veld accepteert alleen alphabetische karakters.",
	alphanum: "Dit veld accepteert alleen alphanumerieke karakters.",
	nodigit: "Cijfers zijn niet toegestaan.",
	digit: "Voer een geldig getal in.",
	digitmin: "Het nummer moet minsten %0 lang zijn.",
	digitltd: "De waarde moet tussen de %0 en %1 liggen.",
	number: "Voer een geldig nummer in.",
	email: "Voer een geldig emailadres in.",
	phone: "Voer een geldig telefoonnummer in.",
	url: "Voer een geldig url in.",

	confirm: "Dit veld verschilt van %0",
	differs: "Deze waarde moet anders zijn dan %0",
	length_str: "De lengte is onjuist, het moet tussen de %0 en %1 lang zijn",
	length_fix: "De lengte is onjuist, het moet precies %0 tekens lang zijn",
	lengthmax: "De lengte is onjuist, het moet maximaal %0 lang zijn",
	lengthmin: "De lengte is onjuist, het moet minstens %0 lang zijn",
	checkbox: "Vink het hokje aan",
	checkboxes_group : 'Gelieve minstens %0 hokjes aan te vinken',
	radios: "Maak een keuze",
	select: "Kies een waarde"
}