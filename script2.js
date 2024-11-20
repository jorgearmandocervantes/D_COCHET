/* Funciones de foto: Inicio */
const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}
/* Funciones de foto: Fin */
let cart = []; 
function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);

    if (product) {
        product.quantity++; 
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 }); 
    }

    alert(`${productName} ha sido agregado al carrito.`);
    displayCart(); 
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cartContainer.innerHTML = cart.map((item, index) => `
            <div>
                <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Eliminar</button>
                <button onclick="addMoreToCart(${index})">Agregar más</button>
            </div>
        `).join('');

        cartContainer.innerHTML += `
            <div style="margin-top: 20px;">
                <button onclick="checkout()">Pagar</button>
            </div>
        `;
    }

    document.getElementById('cart-items').style.textAlign = 'center';  
}


function removeFromCart(index) {
    cart.splice(index, 1); 
    alert('Producto eliminado del carrito.');
    displayCart(); 
}

function addMoreToCart(index) {
    cart[index].quantity++; 
    displayCart(); 
}

function clearCart() {
    cart = []; 
    alert('El carrito ha sido vaciado.');
    displayCart(); 
}
displayCart();

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío. Añade productos antes de proceder al pago.');
        return;
    } else {
        let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`El total de tu compra es: $${total.toFixed(2)}.`);
        cart = [];
        displayCart();
        alert(`Gracias por tu compra.`)
    }
}
