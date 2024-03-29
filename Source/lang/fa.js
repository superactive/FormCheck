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
        required:"این فیلد الزامی است.",
        alpha:"لطفا فقط از حروف الفباء برای این بخش استفاده کنید. کاراکترهای دیگر و فاصله مجاز نیستند.",
        alphanum:"لطفا فقط از حروف الفباء و اعداد در این بخش استفاده کنید. کاراکترهای دیگر و فاصله مجاز نیستند.",
        nodigit: "لطفا عدد وارد نکنید.",
        digit: "لطفا یک عدد صحیح وارد کنید.",
        digitmin: "عدد باید بزرگتر از %0 باشد.",
        digitltd: "عدد باید بین %0 و 1% باشد.",
        number: "لطفا یک عدد معتبر وارد کنید.",
        email: "لطفا یک ایمیل معتبر وارد کنید: <br /><span>نمونه: yourn...@domain.com</span>",
        image : "لطفا فقط تصویر انتخاب کنید.",
        phone: "لطفا یک شماره تلفن معتبر وارد کنید.",
        url: "لطفا یک URL صحیح وارد کنید: <br /><span>نمونه: http://www.domain.com</span>",

        confirm: "این بخش با %0 متفاوت است.",
        differs: "این بخش باید با %0 متفاوت باشد.",
        length_str: "طول مقدار وارد شده صحیح نیست و باید بین %0 و %1 کاراکتر باشد.",
        length_fix: "طول مقدار وارد شده صحیح نیست و باید دقیقا برابر %0 کاراکتر باشد.",
        lengthmax: "طول مقدار وارد شده صحیح نیست و باید حداکثر %0 کاراکتر باشد.",
        lengthmin: "طول مقدار وارد شده صحیح نیست و باید حداقل %0 کاراکتر باشد.",
        words_min : "این بخش باید حاوی حداقل %0 کلمه باشد. %1 کلمه وارد شده.",
        words_range : "این بخش باید حاوی %0-%1 کلمه باشد. %2 کلمه وارد شده.",
        words_max : "این بخش باید حاوی حداکثر %0 کلمه باشد. %1 کلمه وارد شده.",
        checkbox: "لطفا این مورد را انتخاب کنید.",
        radios: "لطفا این گزینه را انتخاب کنید",
        select: "لطفا مقداری را انتخاب کنید"
}