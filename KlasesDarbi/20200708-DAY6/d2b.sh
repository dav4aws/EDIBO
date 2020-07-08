#! /bin/bash

echo Ievadam skaitli:
read x

if echo "$x" | grep -qE '^[0-9]+$'; then
xbin=0
x1=1

while [ $x -ne 0 ]
do
	xat=$((x % 2))
	xbin=$((xat * x1 + xbin))
	x1=$((x1 * 10))
	x=$((x/2))
done

echo Binarais kods $xbin
else
	echo ERROR: Nav skaitlis
fi
