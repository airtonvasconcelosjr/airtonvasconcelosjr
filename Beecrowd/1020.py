dias = int(input())
anos = dias // 365
meses = (dias % 365) // 30
dias1 = (dias % 365) % 30

print('{} ano(s)\n{} mes(es)\n{} dia(s)'.format(anos, meses, dias1))