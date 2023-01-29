from statistics import mode
from menu import products


def get_product_by_id(product_id) -> dict:
    if not type(product_id) == int:
        raise TypeError("product id must be an int")

    product = [char for char in products if char["_id"] == product_id]

    if not product:
        return {}

    return product[0]


def get_products_by_type(product_type) -> list:
    if not type(product_type) == str:
        raise TypeError("product type must be a str")

    product = [char for char in products if char["type"] == product_type]

    return product


def add_product(menu: list, **kwargs) -> dict:
    new_id = len(menu) + 1
    kwargs["_id"] = new_id
    menu.append(kwargs)

    return kwargs


def menu_report() -> str:
    price_total = 0
    type_list = []

    for char in products:
        price_total += char["price"]
        type_list.append(char["type"])

    price_avg = round(price_total / len(products), 2)
    product_total = len(products)
    common_type = mode(type_list)

    return f"Products Count: {product_total} - Average Price: ${price_avg} - Most Common Type: {common_type}"


def add_product_extra(menu, *args, **kwargs) -> dict:
    product_validated = {}

    for i in args:
        if i not in kwargs.keys():
            raise KeyError(f"field {i} is required")

        product_validated.update({i: kwargs[i]})

    product_new = add_product(menu, **dict(product_validated))

    return product_new
