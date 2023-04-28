while True:
    n = int(input())
    if n == 0:
        break
    
    palavras = [input() for _ in range(n)]
    palavras.sort()
    
    conjunto_ruim = False
    for i in range(n-1):
        if palavras[i+1].startswith(palavras[i]):
            conjunto_ruim = True
            break
    
    if conjunto_ruim:
        print("Conjunto Ruim")
    else:
        print("Conjunto Bom")