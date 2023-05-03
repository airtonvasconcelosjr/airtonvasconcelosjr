valor = float(input())

# notas
notas_100 = int(valor // 100)
valor %= 100
notas_50 = int(valor // 50)
valor %= 50
notas_20 = int(valor // 20)
valor %= 20
notas_10 = int(valor // 10)
valor %= 10
notas_5 = int(valor // 5)
valor %= 5
notas_2 = int(valor // 2)
valor %= 2

moedas_1 = int(valor // 1)
valor %= 1
moedas_50 = int(valor // 0.5)
valor %= 0.5
moedas_25 = int(valor // 0.25)
valor %= 0.25
moedas_10 = int(valor // 0.1)
valor %= 0.1
moedas_5 = int(valor // 0.05)
valor %= 0.05
moedas_1cent = int(round(valor / 0.01))

# impressão dos resultados
print("NOTAS:")
print("{} nota(s) de R$ 100.00".format(notas_100))
print("{} nota(s) de R$ 50.00".format(notas_50))
print("{} nota(s) de R$ 20.00".format(notas_20))
print("{} nota(s) de R$ 10.00".format(notas_10))
print("{} nota(s) de R$ 5.00".format(notas_5))
print("{} nota(s) de R$ 2.00".format(notas_2))
print("MOEDAS:")
print("{} moeda(s) de R$ 1.00".format(moedas_1))
print("{} moeda(s) de R$ 0.50".format(moedas_50))
print("{} moeda(s) de R$ 0.25".format(moedas_25))
print("{} moeda(s) de R$ 0.10".format(moedas_10))
print("{} moeda(s) de R$ 0.05".format(moedas_5))
print("{} moeda(s) de R$ 0.01".format(moedas_1cent))
