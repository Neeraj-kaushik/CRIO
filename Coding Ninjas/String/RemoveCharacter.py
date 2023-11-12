from os import *
from sys import *
from collections import *
from math import *

def removeAllOccurrencesOfChar(string,c):
    return string.replace(c,"")


string = input()
c = input()
output = removeAllOccurrencesOfChar(string,c)
print(output)