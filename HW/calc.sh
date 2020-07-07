#! /bin/bash

echo Ievadi skaitli
read a

echo $a kvadrata ir  $((a**2))

for a in {0..10};do echo $((a**a));done
