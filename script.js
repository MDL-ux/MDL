// Update script.js to include product data initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('header');
    
    if (mobileMenuToggle && header) {
        // Create mobile menu if it doesn't exist
        let mobileMenu = document.querySelector('.mobile-menu');
        
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            
            // Clone navigation from main nav
            const mainNav = document.querySelector('.main-nav');
            if (mainNav) {
                mobileMenu.innerHTML = mainNav.innerHTML;
            }
            
            // Insert after header
            header.parentNode.insertBefore(mobileMenu, header.nextSibling);
        }
        
        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    }
    
    // Initialize product data if on homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        // Make sure products are available globally
        if (typeof window.products === 'undefined' && typeof products !== 'undefined') {
            window.products = products;
        }
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            }
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                // Show success message
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Initialize product quick view
    const quickViewButtons = document.querySelectorAll('.action-btn[title="Quick View"]');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.getAttribute('data-product-id'));
                // In a real implementation, this would open a quick view modal
                alert('Quick view for product ID: ' + productId);
            }
        });
    });
    
    // Initialize wishlist functionality
    const wishlistButtons = document.querySelectorAll('.action-btn[title="Add to Wishlist"]');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            if (productCard) {
                const productId = parseInt(productCard.getAttribute('data-product-id'));
                // In a real implementation, this would add to wishlist
                alert('Added to wishlist: Product ID ' + productId);
            }
        });
    });
    
    // Update cart count display
    if (typeof window.cartFunctions !== 'undefined' && typeof window.cartFunctions.updateCartCount === 'function') {
        window.cartFunctions.updateCartCount();
    }
});
