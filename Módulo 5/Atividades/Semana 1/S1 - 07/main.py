"""
        Crie um dicionário d1 com a seguinte combinação de chave/valor,
        imprima d1:

    "nome"/"Kenzinho"
    "cidade"/"Curitiba"
    "modulo"/"M5"

        Imprima o valor da chave "nome" de d1;
        Imprima o valor da chave "cidade" de d1;
        Imprima o valor da chave "modulo" de d1;
        Tente imprimir o valor da chave "telefone" de d1, e caso ela não
        exista, imprima "a chave telefone não existe";
        Imprima somente as chaves de d1 (Pode ser no formato dict_keys);
        Imprima somente os valores de d1 (Pode ser no formato dict_values);
        A partir das seguintes listas, crie um dicionário d2 em que lista_1
        sejam suas chaves e lista_2 sejam seus valores, na mesma ordem.
        Imprima d2;

    lista_1 = ["telefone", "casado", "idade"]
    lista_2 = ["999-999-999", False, 28]

        Atualize o dicionário d1 com o conteúdo do dicionário d2. Imprima d1;
        Delete a chave "casado" de d1;
        Remova e imprima o valor da chave "idade" de d1. Imprima d1;
        Remova todos items do dicionário d1. Imprima d1;
"""

d1 = {"nome": "Kenzinho", "cidade": "Curitiba", "modulo": "M5"}
d2 = {}
lista_1 = ["telefone", "casado", "idade"]
lista_2 = ["999-999-999", False, 28]


def exercitando_dicionarios():
    print(d1["nome"])
    print(d1["cidade"])
    print(d1["modulo"])
    print(d1.get("telefone", "a chave telefone não existe"))

    for keys in d1.keys():
        print(keys)

    for keys in d1.values():
        print(keys)

    for i, el in enumerate(lista_1):
        d2[el] = lista_2[i]

    print(d2)

    d1.update(d2)

    print(d1)

    d1.pop("casado")
    d1.pop("idade")

    print(d1)

    d1.clear()

    print(d1)


exercitando_dicionarios()
