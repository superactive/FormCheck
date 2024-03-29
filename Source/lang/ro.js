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
	required: "Acest c&#226;mp este obligatoriu.",
	alpha: "Acest c&#226;mp accept&#259; doar caractere alfabetice.",
	alphanum: "Acest c&#226;mp accept&#259; doar caractere alfanumerice.",
	nodigit: "Nu sunt acceptate cifrele.",
	digit: "V&#259; rug&#259;m introduce&#355;i un num&#259;r intreg.",
	digitmin: "Num&#259;rul trebuie s&#259; fie cel pu&#355;in %0",
	digitltd: "Valoarea trebuie s&#259; fie &#238;ntre %0 si %1",
	number: "V&#259; rug&#259;m introduce&#355;i un num&#259;r valid.",
	email: "V&#259; rug&#259;m introduce&#355;i un email valid: <br /><span>Ex: numeledvs@domeniu.ro</span>",
	image : 'Acest c&#226;mp accept&#259; doar imagini',
	phone: "V&#259; rug&#259;m introduce&#355;i un num&#259;r valid de telefon.",
	url: "V&#259; rug&#259;m introduce&#355;i o adres&#259; web valid&#259;: <br /><span>Ex: http://www.domeniu.ro</span>",
	
	confirm: "Acest c&#226;mp este diferit de %0",
	differs: "Aceast&#259; valoare trebuie s&#259; fie diferit&#259; de %0",
	length_str: "Lungimea este incorect&#259;, trebuie s&#259; fie &#238;ntre %0 si %1",
	length_fix: "Lungimea este incorect&#259;, trebuie s&#259; fie de exact %0 caractere",
	lengthmax: "Lungimea este incorect&#259;, trebuie s&#259; fie cel mult %0",
	lengthmin: "Lungimea este incorect&#259;, trebuie s&#259; fie cel pu&#355;in %0",
	words_min : "Acest c&#226;mp trebuie s&#259; con&#355;in&#259; cel pu&#355;in %0 cuvinte, momentan con&#355;ine: %1 cuvinte",
	words_range : "Acest c&#226;mp trebuie s&#259; con&#355;in&#259; %0-%1 cuvinte, momentan con&#355;ine: %2 cuvinte",
	words_max : "Acest c&#226;mp trebuie s&#259; con&#355;in&#259; cel mult %0 cuvinte, momentan con&#355;ine: %1 cuvinte",
	checkbox: "V&#259; rug&#259;m bifa&#355;i c&#259;su&#355;a",
	radios: "V&#259; rug&#259;m selecta&#355;i o op&#355;iune",
	select: "V&#259; rug&#259;m alege&#355;i o valoare",
	select_multiple : "V&#259; rug&#259;m alege&#355;i cel pu&#355;in o valoare"
};