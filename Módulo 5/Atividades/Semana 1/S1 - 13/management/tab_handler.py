from menu import products


def calculate_tab(table: list) -> dict:
    price_total = 0

    for char in table:
        product = [item for item in products if item["_id"] == char["_id"]]
        price_total += product[0]["price"] * char["amount"]

    message = {"subtotal": f"${round(price_total, 2)}"}

    return message
