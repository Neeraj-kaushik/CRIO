def checkMember(n):
    a=0
    b=1
    while b<=n:
        c=a+b 
        if c==n:
            return True
        a=b 
        b=c 
    return False 
    

n=int(input())
if(checkMember(n)):
    print("true")
else:
    print("false")
