#! /usr/bin/gnuplot -persist

set title "Test" font ",14" textcolor rgbcolor "royalblue"
set xdata time
set timefmt "%H:%M:%S"
set format x "%H:%M:%S"
set ylabel 'Counts'
set xlabel 'Time'


plot "data2.dat" using 1:2 w l



