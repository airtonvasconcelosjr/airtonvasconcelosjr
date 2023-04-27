total = int(input())

horas = int(total) // 3600
minutos = (total % 3600) // 60
segundos = int(total) % 60
print('{}:{}:{}'.format(horas, minutos, segundos))