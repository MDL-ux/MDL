// Script to load and display products on the shop page
document.addEventListener('DOMContentLoaded', function() {
    // Load products from products.js
    // In a real implementation, this would fetch from a database
    
    // Display products in the product grid
    displayProducts(products);
    
    // Set up event listeners for filtering and sorting
    setupFilters();
    setupSorting();
});

// Function to display products in the product grid
function displayProducts(productsToShow) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;
    
    // Clear existing products
    productGrid.innerHTML = '';
    
    // Add products to the grid
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
    
    // Update product count
    updateProductCount(productsToShow.length);
}

// Function to create a product card element
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-product-id', product.id);
    
    // Create product tags (New, Sale)
    let tagsHtml = '';
    if (product.isNew) {
        tagsHtml += '<span class="tag new">New</span>';
    }
    if (product.isSale) {
        tagsHtml += '<span class="tag sale">Sale</span>';
    }
    
    // Create price display (regular or sale)
    let priceHtml = '';
    if (product.salePrice) {
        priceHtml = `<span class="product-price"><del>$${product.price.toFixed(2)}</del> $${product.salePrice.toFixed(2)}</span>`;
    } else {
        priceHtml = `<span class="product-price">$${product.price.toFixed(2)}</span>`;
    }
    
    // Populate the product card with product information
    productCard.innerHTML = `
        <div class="product-image">
            <img src="images/${product.image}" alt="${product.name}">
            <div class="product-tags">
                ${tagsHtml}
            </div>
            <div class="product-actions">
                <button class="action-btn" title="Add to Wishlist"><i class="fas fa-heart"></i></button>
                <button class="action-btn" title="Quick View"><i class="fas fa-eye"></i></button>
            </div>
        </div>
        <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            ${priceHtml}
            <a href="product-detail.html?id=${product.id}" class="btn secondary-btn">Select Options</a>
        </div>
    `;
    
    return productCard;
}

// Function to update the product count display
function updateProductCount(count) {
    const productCountElement = document.querySelector('.shop-title p');
    if (productCountElement) {
        const totalCount = window.products ? window.products.length : 0;
        productCountElement.textContent = `Showing 1-${count} of ${totalCount} products`;
    }
}

// Function to set up category and collection filters
function setupFilters() {
    // Category filters
    const categoryCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            applyFilters();
        });
    });
    
    // Price range filter
    const priceApplyButton = document.querySelector('.price-range + button');
    if (priceApplyButton) {
        priceApplyButton.addEventListener('click', function() {
            applyFilters();
        });
    }
}

// Function to apply all active filters
function applyFilters() {
    // Get all products
    let filteredProducts = window.products ? [...window.products] : [];
    
    // Get selected categories
    const selectedCategories = [];
    document.querySelectorAll('.filter-options input[type="checkbox"]:checked').forEach(checkbox => {
        selectedCategories.push(checkbox.parentElement.textContent.trim());
    });
    
    // Filter by category if any selected
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }
    
    // Filter by price range
    const minPrice = parseFloat(document.querySelector('.price-range input:first-child').value);
    const maxPrice = parseFloat(document.querySelector('.price-range input:last-child').value);
    
    if (!isNaN(minPrice)) {
        filteredProducts = filteredProducts.filter(product => 
            (product.salePrice || product.price) >= minPrice
        );
    }
    
    if (!isNaN(maxPrice)) {
        filteredProducts = filteredProducts.filter(product => 
            (product.salePrice || product.price) <= maxPrice
        );
    }
    
    // Display filtered products
    displayProducts(filteredProducts);
}

// Function to set up sorting
function setupSorting() {
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortOption = this.value;
            sortProducts(sortOption);
        });
    }
}

// Function to sort products based on selected option
function sortProducts(sortOption) {
    // Get current filtered products
    let productsToSort = document.querySelectorAll('.product-card');
    let productsArray = Array.from(productsToSort);
    
    // Convert NodeList to array of product objects
    const productObjects = productsArray.map(card => {
        const id = parseInt(card.getAttribute('data-product-id'));
        return window.products.find(p => p.id === id);
    });
    
    // Sort based on selected option
    switch(sortOption) {
        case 'Sort by latest':
            productObjects.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
            break;
        case 'Sort by price: low to high':
            productObjects.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
            break;
        case 'Sort by price: high to low':
            productObjects.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
            break;
        case 'Sort by popularity':
        default:
            productObjects.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? 1 : -1);
            break;
    }
    
    // Display sorted products
    displayProducts(productObjects);
}

// Function to handle mobile filter toggle
document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.querySelector('.filter-toggle');
    const shopSidebar = document.querySelector('.shop-sidebar');
    
    if (filterToggle && shopSidebar) {
        filterToggle.addEventListener('click', function() {
            shopSidebar.classList.toggle('active');
            this.textContent = shopSidebar.classList.contains('active') 
                ? '✕ Close Filters' 
                : '☰ Filter Products';
        });
    }
    
    // View options
    const viewOptions = document.querySelectorAll('.view-option');
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            viewOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Change product grid layout
            const productGrid = document.querySelector('.product-grid');
            if (productGrid) {
                // Remove existing column classes
                productGrid.classList.remove('two-columns', 'three-columns', 'four-columns', 'list-view');
                
                // Add new class based on selected view
                if (this.title === 'List View') {
                    productGrid.classList.add('list-view');
                } else if (this.title === '2 Columns') {
                    productGrid.classList.add('two-columns');
                } else if (this.title === '3 Columns') {
                    productGrid.classList.add('three-columns');
                } else if (this.title === '4 Columns') {
                    productGrid.classList.add('four-columns');
                }
            }
        });
    });
    
    // Pagination
    const paginationItems = document.querySelectorAll('.pagination-item');
    paginationItems.forEach(item => {
        item.addEventListener('click', function() {
            paginationItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // In a real implementation, this would load the next page of products
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});

// Make products globally available
window.products = products;
