def removeDuplicate(n, s):
    r=""
    for i in range(n):
        if len(r)==0:
            r+=s[i]
        else:
            if r[-1]!=s[i]:
                r+=s[i]
    return r

n=int(input())
s=input()
print(removeDuplicate(n,s))