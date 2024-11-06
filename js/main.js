function addToCart(productName) {
    const cartList = document.getElementById('cart-list');
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    cartList.appendChild(listItem);
}

function toggleCartVisibility() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems.classList.contains('hidden')) {
        cartItems.classList.remove('hidden');
    } else {
        cartItems.classList.add('hidden');
    }
}