#So, Quetion is to check wheather the given number is prime number or not
def primeNumber(n):
    for i in range(2,(n//2)+1):
        if n%i==0:
            return False
    return True

n=int(input())
if(primeNumber(n)):
    print("true")
else:
    print("false")