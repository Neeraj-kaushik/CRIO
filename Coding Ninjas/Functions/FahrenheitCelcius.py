def fahrenheit_to_Celcius(s,e,w):
    for i in range(s,e+1,w):
        val=int((i-32)*(5/9))
        print(i,val)

s=int(input())
e=int(input())
w=int(input())
fahrenheit_to_Celcius(s,e,w)