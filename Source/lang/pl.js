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
    required: "To pole jest wymagane.",
    alpha: "W tym polu dozwolone są wyłącznie litery.",
    alphanum: "W tym polu dozwolone sa wyłącznie litery i cyfry.",
    nodigit: "Cyfry w tym polu są niedozwolone.",
    digit: "Proszę podać poprawną liczbę.",
    digitmin: "Wartość musi wynosić przynajmniej %0",
    digitltd: "Wartość musi wynosić pomiędzy %0 a %1",
    number: "Proszę podać poprawny numer.",
    email: "Proszę podać poprawny e-mail: <br /><span>np. twoje.i...@twojadres.pl</span>",
    image : 'W tym polu dozwolone są tylko obrazy',
    phone: "Proszę podać poprawny numer telefonu.",
    url: "Proszę podać poprawny adres strony: <br /><span>np. http://www.twojadres.pl</span>",
    
    confirm: "To pole musi być takie samo jak %0",
    differs: "Ta wartość musi być inna od %0",
    length_str: "Niepoprawna dlugość, liczba znaków musi wynosić między %0 a %1",
    length_fix: "Niepoprawna dlugość, liczba znaków musi wynosić %0",
    lengthmax: "Niepoprawna dlugość, maksymalna dozwolona liczba znaków to %0",
    lengthmin: "Niepoprawna dlugość, minimalna wymagana ilość znaków to %0",
    words_min : "W tym polu może znajdować się minimalnie %0 słów, aktulanie masz: %1 słów",
    words_range : "W tym polu może znajdować się od %0 do %1 słów, aktulanie masz: %2 słów",
    words_max : "W tym polu może znajdować się maksymalnie %0 słów, aktualnie masz: %1 słów",
    checkbox: "Proszę zaznaczyć to pole",
    checkboxes_group : 'Proszę zaznaczyć %0 pól',
    radios: "Proszę wybrać jedną z opcji",
    select: "Proszę wybrać opcję z tego z menu",
    select_multiple : "Proszę wybrać przynajmniej jedną opcję"
}