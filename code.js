let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.textContent = 'No items in cart';
    } else {
        cartItems.textContent = `Items in cart: ${cart.length}`;
    }
}

function checkout() {
    alert('Checkout functionality is not implemented in this demo.');
}
