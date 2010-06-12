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
	required: "��� ���� ����������� ��� ����������.",
	alpha: "��� ���� ����� ��������� ������ �����.",
	alphanum: "��� ���� ����� ��������� ������ ����� � �����.",
	nodigit: "��� ���� �� ����� ��������� �����.",
	digit: "���������� ������� �����.",
	digitmin: "����� �� ����� ���� ����� %0",
	digitltd: "����� ������ ���� ����� %0 � ����� %1",
	number: "���������� ������� �����.",
	email: "���������� ������� ���������� email: <br /><span>�������� yourname@domain.ru</span>",
	phone: "���������� ������� ���������� �������.",
	url: "���������� ������� ���������� ����� url: <br /><span>�������� http://www.domain.ru</span>",
	
	confirm: "��� ���� �� ������ ���������� �� ���� %0",
	differs: "����� ������ ���������� �� %0",
	length_str: "����� ������ ������ ���� �� %0 �� %1 ��������",
	length_fix: "The length is incorrect, it must be exactly %0 characters",
	lengthmax: "��������� ���� �������, ��������� �� ����� ��� �� %0 ��������",
	lengthmin: "��������� ���� �������, ��������� �� ����� ��� �� %0 ��������",
	checkbox: "���������� ��������� �������",
	radios: "���������� �������� �� ������������ ���������",
	select: "���������� �������� �� ������������ ���������"
}