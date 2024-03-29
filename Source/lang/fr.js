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
	required: "Ce champ est requis.",
	alpha: "Ce champ n'accepte que des caract&egrave;res alphab&eacute;tiques sans accents.",
	alphanum: "Ce champ n'accepte que des caract&egrave;res alphanum&eacute;riques.",
	nodigit: "Ce champ n'accepte pas les chiffres.",
	digit: "Ce champ n'accepte que les chiffres.",
	digitmin: "Cette valeur doit &ecirc;tre au minimum %0",
	digitltd: "Cette valeur doit &ecirc;tre comprise entre %0 et %1",
	number: "Ce champ n'accepte qu'un nombre.",
	email: "Veuillez entrer une adresse email valide: <br /><span>Ex. votrenom@domain.com</span>",
	image : 'Ce champ ne peut contenir que des images', 
	phone: "Veuillez entrer un num&eacute;ro de t&eacute;l&eacute;phone valide.",
	url: "Veuillez entrer une adresse de site internet valide: <br /><span>Ex. http://www.domain.com</span>",
	
	confirm: "Ce champ est diff&eacute;rent de %0.",
	differs: "Ce champ doit &ecirc;tre diff&eacute;rent de %0.",
	length_str: "La longueur doit &ecirc;tre comprise entre %0 et %1 caract&egrave;res.",
	length_fix: "La longueur doit &ecirc;tre de %0 caractères exactement.",
	lengthmax: "La longueur doit &ecirc;tre au maximum de %0 caract&egrave;res.",
	lengthmin: "La longueur doit &ecirc;tre au minimum de %0 caract&egrave;res.",
	words_min : "Ce champ doit contenir au moins %0 mots, actuellement : %1 mots",
	words_range : "Ce champ doit contenir entre %0 et %1 mots, actuellement : %2 mots",
	words_max : "Ce champ doit contenir au plus %0 mots, actuellement : %1 mots",
	checkbox: "Merci de cocher la case.",
	checkboxes_group : 'Merci de cocher au moins %0 case(s)',
	radios: "Merci de choisir une valeur.",
	select: "Merci de choisir une valeur dans la liste.",
	select_multiple: "Merci de choisir au moins une valeur dans la liste."
}