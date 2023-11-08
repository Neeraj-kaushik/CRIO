def checkPallindrome(x):
    if x<0:
        return False
    else:
        n=x
        rev=0
        while n!=0:
            rem=n%10
            rev=rev*10+rem
            n=n//10
        if rev==x:
            return True
        else:
            return False

x=int(input())
if checkPallindrome(x):
    print("true")
else:
    print("false")