from tkinter import *
import tkinter
from datetime import datetime

#biblioteca add fontes externas 
import pyglet
pyglet.font.add_file("digital-7.ttf")



cor1 = "#3d3d3d"  # preto
cor2 = "#fafcff"  # branco
cor3 = "#eeb463b" # vermelha
cor4 = "#21c25c"  # verde
cor5 = "#dedcdc"  # cinza
cor6 = "#3080f0"  # azul

#Fundo do app
fundo = cor1
#Cor dos dados
cor = cor2

janela=Tk()
janela.title("")
janela.geometry("430x180") #Largura x altura
janela.resizable(width=False, height=False)
janela.configure(bg=cor1)

def relogio():
    #date time pega os dados da máquina
    tempo = datetime.now()

    #Os char % são dados inerentes ao datetime=Hours, Minutes and Seconds
    hora = tempo.strftime("%H:%M:%S")
    diasemana = tempo.strftime("%A")
    dia = tempo.day

    #B minúsculo trará como resposta o mês abreviado
    mes = tempo.strftime("%b")
    ano = tempo.strftime("%Y")

    l1.config(text=hora)
    l1.after(200, relogio)
    l2.config(text=diasemana + "  " + str(dia) + "/" + str(mes) + "/" + str(ano))

#O parêmetro "sticky" leva em consideração as direções do plano cartesiano
l1 = Label(janela,text="", font=("digital-7 100"), bg=fundo, fg=cor6)
l1.grid(row=0, column=0, sticky=N, padx=5)

l2 = Label(janela,text="", font=("digital-7 25"), bg=fundo, fg=cor6)
l2.grid(row=1, column=0, sticky=S, padx=5)

relogio()
janela.mainloop()


