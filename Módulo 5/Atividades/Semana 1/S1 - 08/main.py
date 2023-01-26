"""
    Crie uma tupla tupla_1 com os seguintes valores: 'Valor_1', 2, 3.1, 'Kenzie Academy', ['Elemento1', 'Elemento2'], 'Kenzie Academy'. Imprima tupla_1;
    Imprima o último elemento da tupla_1;
    Imprima o tamanho de tupla_1;
    Imprima a contagem de elementos 'Kenzie Academy' da tupla_1;
    Imprima o índice do elemento 3.1 da tupla_1;
    Por último, tente alterar o último elemento da tupla_1 para 'Ultimo Elemento', observe a mensagem de erro que aparecerá.
"""

tupla_1 = ('Valor_1', 2, 3.1, 'Kenzie Academy', [
           'Elemento1', 'Elemento2'], 'Kenzie Academy')

print(tupla_1)
print(tupla_1[-1])
print(len(tupla_1))
print(tupla_1.count(2))
print(tupla_1.index(3.1))

tupla_1[-1] = "Ultimo elemento."
