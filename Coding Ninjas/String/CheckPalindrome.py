def isPalindrome(s: str) -> bool:
    x=s[::-1]
    if s==x:
        return True
    else:
        return False
s=input()
if(isPalindrome(s)):
    print("true")
else:
    print("false")