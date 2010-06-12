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
	required: "������������ �� ��������� ����.",
	alpha: "���� ���� � ���� �� �����.",
	alphanum: "���� ���� � ���� �� ����� � �����.",
	nodigit: "���� ���� �� ���� �� ������� �����.",
	digit: "���� �������� �����.",
	digitmin: "������� �� ���� �� ���� ��-����� �� %0",
	digitltd: "������� ������ �� � ������ �� %0 � ��-����� �� %1",
	number: "���� �������� �����.",
	email: "���� �������� �������� email: <br /><span>�������� yourname@domain.com</span>",
	phone: "���� �������� �������� �������.",
	url: "���� �������� �������� �����: <br /><span>�������� http://www.domain.com</span>",
	
	confirm: "������ ������ �� � ���� � ���� � ���� %0",
	differs: "������� ������ �� �� ��������� �� %0",
	length_str: "��������� �� ���������� ������ �� � ������� %0 � �������� %1 �������",
	length_fix: "��������� � ����������, ������ �� � ����� %0 �������",
	lengthmax: "��������� ������, ���� ��������� �� �� ��������� %0 �������",
	lengthmin: "��������� ������, ���� �������� ���� %0 �������",
	checkbox: "���� ������������ ���-���� �������",
	radios: "���� �������� ���� �� ����������",
	select: "���� �������� ���� ��� ������ �� ����������"
}