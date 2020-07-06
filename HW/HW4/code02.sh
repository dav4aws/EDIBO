#! /bin/bash

echo
echo "Cik minutes darbinam scriptu?"
read x
echo
echo "Jus izvelejaties $x minutes"
echo

runtime="$x minute"
endtime=$(date -ud "$runtime" +%s)
while [[ $(date -u +%s) -le $endtime ]]
do
kopa="`df | grep sda2 | awk '{print $2}'`"
lietots="`df | grep sda2 | awk '{print $3}'`"
pieejams="`df | grep sda2 | awk '{print $4}'`"
total=`bc<<<"scale=8;(($lietots/$kopa)*100)"`
slodze=`df | grep sda2 | awk '{print $3}'`
	echo "Tagadejas laiks: `date +%H:%M:%S`"
	echo $slodze
	echo "$total %"
	echo "Atkartosies pec 1 sekundes"
	echo "----------------------------"
sleep 1
done
