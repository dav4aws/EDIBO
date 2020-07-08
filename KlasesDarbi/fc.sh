#! /bin/bash

echo Ieraksti mapes nosaukumu:
read nosaukums

date=`date +%Y%m%d`

mkdir $date-$nosaukums

echo $date-$nosaukums mapite izveidota
