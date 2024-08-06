# Função para calcular a média das notas
def calcular_media(notas):
    soma = sum(notas)
    quantidade = len(notas)
    media = soma / quantidade
    return media

# Função principal do programa
def main():
    # Lista para armazenar as notas
    notas = []

    # Solicita ao usuário o número de notas
    numero_de_notas = int(input("Quantas notas você quer inserir? "))

    # Loop para receber as notas
    for i in range(numero_de_notas):
        nota = float(input(f"Digite a nota {i + 1}: "))
        notas.append(nota)

    # Calcula a média das notas
    media = calcular_media(notas)

    # Exibe a média
    print(f"A média das notas é: {media:.2f}")

# Executa a função principal
if __name__ == "__main__":
    main()
