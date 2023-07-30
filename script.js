// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
cartList.innerHTML = ""; // Clear the existing cart list

  const cartItems = getCartItems();

  cartItems.forEach((itemId) => {
    const product = getProductById(itemId);
    if (product) {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="remove-from-cart-btn" data-id="${product.id}">Remove</button>`;
      cartList.appendChild(li);
    }
  });
}

// Add item to cart
function addToCart(productId) {
	const cartItems = getCartItems();

  if (!cartItems.includes(productId)) {
    cartItems.push(productId);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart();
  }
}

// Remove item from cart
function removeFromCart(productId) {
	const cartItems = getCartItems();
  const index = cartItems.indexOf(productId);

  if (index !== -1) {
    cartItems.splice(index, 1);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart();
  }
}

// Clear cart
function clearCart() {
	sessionStorage.removeItem("cartItems");
  renderCart();
}

// Initial render
renderProducts();
renderCart();
