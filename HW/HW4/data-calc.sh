#! /bin/bash
echo
kopa="`df | grep sda2 | awk '{print $2}'`"
lietots="`df | grep sda2 | awk '{print $3}'`"
pieejams="`df | grep sda2 | awk '{print $4}'`"
total=`bc<<<"scale=4;(($lietots/$kopa)*100)"`
total1=`bc<<<"scale=4;(($pieejams/$kopa)*100)"`

echo Izmantojot bitus
echo $kopa $lietots $pieejams
echo
echo Tiek izmantoti $total %
echo Ir pieejams $total1 %
echo
echo
echo Izmantojot Human-Reading
kopa2=`df -h | grep sda2 | awk '{print $2}' | cut -dG -f 1`
lietots2=`df -h | grep sda2 | awk '{print $3}' | cut -dG -f 1`
pieejams2=`df -h | grep sda2 | awk '{print $4}' | cut -dG -f 1`
total2=`bc<<<"scale=4;(($lietots2/$kopa2)*100)"`
total22=`bc<<<"scale=4;(($pieejams2/$kopa2)*100)"`
echo $kopa2 GB $lietots2 GB $pieejams2 GB
echo
echo Tiek izmantoti $total2 %
echo Ir pieejams $total22 %
echo
