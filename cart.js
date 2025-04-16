// Cart functionality for the modest women's clothing brand website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart from localStorage if available
    initializeCart();
    
    // Set up event listeners for add to cart buttons
    setupCartButtons();
    
    // Update cart count display
    updateCartCount();
});

// Initialize cart from localStorage
function initializeCart() {
    if (!localStorage.getItem('modesta_cart')) {
        localStorage.setItem('modesta_cart', JSON.stringify([]));
    }
}

// Get cart items from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('modesta_cart') || '[]');
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('modesta_cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId, quantity = 1, color = null, size = null) {
    const cart = getCart();
    const product = window.products.find(p => p.id === productId);
    
    if (!product) return false;
    
    // Check if product already exists in cart with same options
    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.color === color && 
        item.size === size
    );
    
    if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: productId,
            name: product.name,
            price: product.salePrice || product.price,
            image: product.image,
            quantity: quantity,
            color: color,
            size: size
        });
    }
    
    // Save updated cart
    saveCart(cart);
    
    // Update cart count display
    updateCartCount();
    
    return true;
}

// Remove item from cart
function removeFromCart(index) {
    const cart = getCart();
    
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart(cart);
        updateCartCount();
        return true;
    }
    
    return false;
}

// Update item quantity in cart
function updateCartItemQuantity(index, quantity) {
    const cart = getCart();
    
    if (index >= 0 && index < cart.length && quantity > 0) {
        cart[index].quantity = quantity;
        saveCart(cart);
        updateCartCount();
        return true;
    }
    
    return false;
}

// Calculate cart total
function calculateCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart count display in header
function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    
    // Update all cart count elements
    const cartCountElements = document.querySelectorAll('.count');
    cartCountElements.forEach(element => {
        if (element.closest('.icon-link') && element.closest('.icon-link').querySelector('.fa-shopping-bag')) {
            element.textContent = cartCount;
        }
    });
}

// Set up event listeners for add to cart buttons
function setupCartButtons() {
    // Quick add to cart buttons
    document.addEventListener('click', function(e) {
        // Check if clicked element is an add to cart button or its child
        const addToCartBtn = e.target.closest('.add-to-cart');
        
        if (addToCartBtn) {
            e.preventDefault();
            
            const productCard = addToCartBtn.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.getAttribute('data-product-id'));
                
                // Add to cart with default options
                if (addToCart(productId)) {
                    // Show success message
                    showNotification('Product added to cart!', 'success');
                } else {
                    // Show error message
                    showNotification('Failed to add product to cart.', 'error');
                }
            }
        }
    });
}

// Show notification message
function showNotification(message, type = 'info') {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    // Set notification content and type
    notification.textContent = message;
    notification.className = `notification ${type}`;
    
    // Show notification
    notification.classList.add('show');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Render cart items in cart page or mini cart
function renderCartItems(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const cart = getCart();
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p><a href="shop.html" class="btn primary-btn">Continue Shopping</a></div>';
        return;
    }
    
    let cartHtml = '<div class="cart-items">';
    
    cart.forEach((item, index) => {
        cartHtml += `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-image">
                    <img src="images/${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-options">
                        ${item.color ? `<span class="cart-item-color">Color: ${item.color}</span>` : ''}
                        ${item.size ? `<span class="cart-item-size">Size: ${item.size}</span>` : ''}
                    </div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease">-</button>
                    <input type="number" value="${item.quantity}" min="1" max="99">
                    <button class="quantity-btn increase">+</button>
                </div>
                <div class="cart-item-subtotal">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="remove-item-btn"><i class="fas fa-times"></i></button>
            </div>
        `;
    });
    
    cartHtml += '</div>';
    
    // Add cart summary
    const subtotal = calculateCartTotal();
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + shipping;
    
    cartHtml += `
        <div class="cart-summary">
            <h3>Cart Summary</h3>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <a href="checkout.html" class="btn primary-btn checkout-btn">Proceed to Checkout</a>
        </div>
    `;
    
    container.innerHTML = cartHtml;
    
    // Set up event listeners for cart item interactions
    setupCartItemEvents(containerId);
}

// Set up event listeners for cart item interactions
function setupCartItemEvents(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Quantity change buttons
    container.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            const index = parseInt(cartItem.getAttribute('data-index'));
            const quantityInput = cartItem.querySelector('input[type="number"]');
            let quantity = parseInt(quantityInput.value);
            
            if (this.classList.contains('decrease')) {
                quantity = Math.max(1, quantity - 1);
            } else if (this.classList.contains('increase')) {
                quantity = Math.min(99, quantity + 1);
            }
            
            quantityInput.value = quantity;
            updateCartItemQuantity(index, quantity);
            
            // Update display
            renderCartItems(containerId);
        });
    });
    
    // Quantity input change
    container.querySelectorAll('.cart-item-quantity input').forEach(input => {
        input.addEventListener('change', function() {
            const cartItem = this.closest('.cart-item');
            const index = parseInt(cartItem.getAttribute('data-index'));
            const quantity = parseInt(this.value);
            
            if (quantity > 0) {
                updateCartItemQuantity(index, quantity);
                
                // Update display
                renderCartItems(containerId);
            }
        });
    });
    
    // Remove item buttons
    container.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            const index = parseInt(cartItem.getAttribute('data-index'));
            
            if (removeFromCart(index)) {
                // Update display
                renderCartItems(containerId);
            }
        });
    });
}

// Make cart functions globally available
window.cartFunctions = {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    getCart,
    calculateCartTotal,
    renderCartItems
};
