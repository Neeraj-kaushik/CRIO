def armstrong(n):
    x=n
    count=0
    while x!=0:
        rem=x%10
        count+=1
        x=x//10
    sum1=0
    x=n
    while x!=0:
        rem=x%10
        sum1+=rem**count
        x=x//10
    if sum1==n:
        return True
    else:
        return False

n=int(input())
if armstrong(n):
    print("true")
else:
    print("false")