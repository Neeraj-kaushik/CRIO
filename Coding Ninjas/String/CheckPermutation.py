from os import *
from sys import *
from collections import *
from math import *




def isPermutation(string1, string2) :
    # return sorted(string1)==sorted(string2)
    count1=[0]*256
    if len(string1)!=len(string2):
        return False
    for i in range(len(string1)):
        count1[ord(string1[i])]+=1
    for i in range(len(string2)):
        count1[ord(string2[i])]-=1
    for i in range(len(count1)):
        if count1[i]!=0:
            return False
    return True

    




#main
string1 = input()
string2 = input()

ans = isPermutation(string1, string2)

if ans :
    print('true')
else :
    print('false')