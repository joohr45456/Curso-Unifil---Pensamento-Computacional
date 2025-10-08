'''
idade = 1

if idade > 18: 
    print("Maior de idade")
    print("bloco1")
else:
    print("Menor de idade")
    print("bloco2")

for i in range(-1, 11):
    print(i)

contador = 1
while contador <= 10000:
    print(contador)
    contador *= 5

'''
'''
def calcular_imc(peso, altura):

    imc = peso / (altura ** 2)
    return imc

def classificar_imc(imc):
    if imc < 18.5:
         return "abaixo do peso"
    elif imc < 24.9:
        return "Peso normal"
    elif imc < 29.9:
        return "Sobrepeso"
    elif imc < 34.9:
        return "Obesidade 1"
    elif imc < 39.9:
        return "Obesidade 2"
    else:
        return "Obesidade 3"

peso = 70
altura = 1.70
imc = calcular_imc(peso, altura)
classificacao = classificar_imc(imc)

print("IMC:", round(imc, 2))
print("Classificacao do IMC:", classificacao)
'''

i = 1
while i <= 5:
    if i % 2 == 0:
        print("par -", i)
    else:
        print("impar -", i)
    i += 1