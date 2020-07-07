#! /bin/bash
echo
echo "Cik sekundes darbinam scriptu?"
read x
echo
echo "Jus izvelejaties $x sekundes"
echo

rm ./data5.dat
rm ./xyz.png

runtime="$x second"
endtime=$(date -ud "$runtime" +%s)
while [[ $(date -u +%s) -le $endtime ]]
do
slodze=`df | grep sda2 | awk '{print $3}'`
	echo `date +%H:%M:%S` $slodze
	echo "`date +%H:%M:%S` $slodze" >> data5.dat	
sleep 1
done

gnuplot -persist <<-EOFMarker
set title "Slodzes Grafiks" font ",14" textcolor rgbcolor "royalblue"
set xdata time
set timefmt "%H:%M:%S"
set format x "%H:%M:%S"
set ylabel "Counts"
set xlabel "Time"
set terminal png size 800,600; set output 'xyz.png'

plot "data5.dat" using 1:2 w l
EOFMarker
