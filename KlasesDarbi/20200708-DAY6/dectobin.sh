#! /bin/bash
echo
echo "Ieraksti decimalu "
read x

eval dectobin='('$(for ((i=0; i<20; i++)); do printf '%s' "{0..1}"; done)')'

echo "$x skailis parveidots par binarto $((10#${dectobin[$x]}))"
echo
