import csv

data = open('SystemEventLog.csv')
reader = (csv.reader(data))

print(list(reader))


