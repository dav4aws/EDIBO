# -*- coding: utf-8 -*-
"""scams.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1iJHGJm1C5aoTQYD1UEzt0_sQYd2HmEiG
"""

print("Ieraksti vardu:")
x = input()

print("Ieraksti summu:")
y = input()

print("Ieraksti numuru:")
z = input()



s = """ 
Godajamais %s,
Jums ir pienacis naudas parskaitijums
ar vertibu %s EUR
Lai sanemtu naudu, atsutiet iszinu uz tlf. numuru %s

Ciena, 
  atraitne
"""%(x, y, z)

print(s)
