while True:
    try:
        n = int(input())
    except EOFError:
        break
    
    codigos = []
    for i in range(n):
        codigo = input().strip()
        codigos.append(codigo)
        
    codigos_ordenados = sorted(codigos, key=lambda x: int(x))
    
    for codigo in codigos_ordenados:
        print(codigo)
