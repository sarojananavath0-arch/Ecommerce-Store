let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total = total + price;

    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent =
        "Total: ₹" + total;
}