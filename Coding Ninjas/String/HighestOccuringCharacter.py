
from sys import stdin


def highestOccuringChar(string) :
	count=[0]*256
	for i in string:
		count[ord(i)]+=1
	max1=-1
	for i in range(len(count)):
		if max1<count[i]:
			max1=count[i]
			val=i
	return chr(val)

#main
string = stdin.readline().strip();
ans = highestOccuringChar(string)
print(ans)