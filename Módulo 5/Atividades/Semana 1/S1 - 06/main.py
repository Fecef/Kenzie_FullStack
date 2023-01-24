"""
    Crie uma lista lista_1 dos inteiros de 6 a 20
     (ambos inclusos) utilizando range;
    Imprima o último elemento da lista_1;
    Altere o segundo elemento de lista_1 para 'Kenzie'. Imprima lista_1;
    Utilize do fatiamento para imprimir somente os elementos de índice 2, 3 e 4
    de lista_1;
    Adicione o seguinte valor ao final de lista_1: 'Academy'. Imprima lista_1;
    Remova os items referentes aos valores 'Kenzie' e 'Academy' de lista_1;
    Crie e imprima uma nova lista ordenada inversamente (lista_2) com base em
    lista_1, sem ordenar de fato a lista_1. Imprima lista_1 e lista_2;
    Imprima o tamanho de lista_1 e lista_2;
    Retire o último item de lista_1 e lista_2. Imprima lista_1 e lista_2;
    Retire todos os elementos tanto de lista_1 quanto de lista_2, imprima-as;
"""

list1 = []
list2 = []


def exercitando_listas():
    for i in range(6, 21):
        list1.append(i)

    print(list1)
    print(list1[-1])

    list1[1] = "Kenzie"

    print(list1)
    print(list1[2:5])

    list1[-1] = "Academy"

    print(list1)
    list1.remove("Kenzie")
    list1.remove("Academy")

    list2 = list1[::-1]

    print(list1)
    print(list2)
    print(len(list1))
    print(len(list2))

    list1.pop(-1)
    list2.pop(-1)

    print(list1)
    print(list2)

    list1.clear()
    list2.clear()

    print(list1)
    print(list2)


exercitando_listas()
