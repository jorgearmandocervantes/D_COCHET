/*function addToCart(productName, productPrice) {
    alert(`Has añadido el ${productName} al carrito por $${productPrice.toFixed(2)}.`);
}
let cart = [];

// Función para añadir un producto al carrito
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }

    alert(`Has añadido el ${productName} al carrito.`);
    displayCart();
}

// Función para mostrar los artículos del carrito
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
            <button onclick="addMoreToCart('${item.name}', ${item.price})">Agregar más</button>
        `;
        cartContainer.appendChild(itemElement);
    });
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    alert('Producto eliminado del carrito.');
    displayCart();
}

// Función para agregar más cantidad de un producto específico
function addMoreToCart(productName, productPrice) {
    addToCart(productName, productPrice);
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    alert('El carrito ha sido vaciado.');
    displayCart();
}
