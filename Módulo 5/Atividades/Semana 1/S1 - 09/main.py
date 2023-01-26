"""
    Crie um conjunto conjunto_1 com os seguintes valores: 1, 1, 'Kenzie', 'Academy', 'Kenzie', 10. Imprima conjunto_1;
    Imprima o tamanho de conjunto_1;
    Adicione o elemento 'Novo Elemento' ao conjunto_1, imprima conjunto_1;
    Remova o elemento 'Novo Elemento' do conjunto_1, utilizando o método que não gera erros se o elemento não existir;
    Por último, limpe todos os itens do conjunto_1.
"""


conjunto_1 = {1, 1, 'Kenzie', 'Academy', 'Kenzie', 10}

print(conjunto_1)
print(len(conjunto_1))

conjunto_1.add("Novo Elemento")

print(conjunto_1)

conjunto_1.discard("Novo Elemento")

print(conjunto_1)

conjunto_1.clear()

print(conjunto_1)
