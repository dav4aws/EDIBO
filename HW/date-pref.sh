#! /bin/bash

start=`date +%s`
for i in {1..1000}
do
	echo $i `date`
done

end=`date +%s`

echo $((end-start)) sekundes

