# pattern is 
# 1
# 23
# 456
# 78910

n=int(input())
temp=1
for i in range(1,n+1):
    for j in range(1,i+1):
        print(temp, end=" ")
        temp+=1
    print()