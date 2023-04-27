def eh_primo(num):
   
    if num == 2:
        return True
   
    if num > 2 and num % 2 == 1:
      
        for i in range(3, int(num**0.5)+1, 2):
            if num % i == 0:
                return False
        return True
    else:
        return False


n = int(input())


for i in range(n):

    x = int(input())
    

    if eh_primo(x):
        print("{} eh primo".format(x))
    else:
        print("{} nao eh primo".format(x))