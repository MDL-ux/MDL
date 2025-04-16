/* Mobile responsiveness enhancements for the modest women's clothing brand website */

/* Base responsive styles - already in main stylesheet */
@media (max-width: 1200px) {
  .container {
    max-width: 960px;
  }
  
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 720px;
  }
  
  .header-container {
    padding: 0 1rem;
  }
  
  .main-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .mobile-menu.active {
    display: block;
  }
  
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .checkout-container {
    flex-direction: column;
  }
  
  .checkout-summary {
    position: static;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 540px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr;
  }
  
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .instagram-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .shop-container {
    flex-direction: column;
  }
  
  .shop-sidebar {
    width: 100%;
    margin-bottom: 2rem;
    position: static;
    display: none;
  }
  
  .shop-sidebar.active {
    display: block;
  }
  
  .filter-toggle {
    display: flex;
  }
  
  .shop-main {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .header-icons .icon-link span.icon-text {
    display: none;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form input {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 4px;
  }
  
  .newsletter-form button {
    width: 100%;
    border-radius: 4px;
  }
  
  .product-details-container {
    flex-direction: column;
  }
  
  .product-gallery {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .product-info {
    width: 100%;
  }
  
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .cart-item-image {
    margin-bottom: 1rem;
  }
  
  .cart-item-quantity {
    margin: 1rem 0;
  }
  
  .cart-summary {
    width: 100%;
  }
}

/* Additional mobile enhancements */
@media (max-width: 480px) {
  .logo h1 {
    font-size: 1.5rem;
  }
  
  .header-icons {
    gap: 0.5rem;
  }
  
  .header-icons .icon-link {
    font-size: 1rem;
    width: 30px;
    height: 30px;
  }
  
  .hero-content {
    padding: 2rem 1rem;
  }
  
  .hero-content h1 {
    font-size: 1.75rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .product-card .product-name {
    font-size: 1rem;
  }
  
  .product-card .product-price {
    font-size: 0.9rem;
  }
  
  .pagination {
    gap: 0.25rem;
  }
  
  .pagination-item {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }
  
  .checkout-form {
    padding: 1rem;
  }
  
  .form-group label {
    font-size: 0.9rem;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
  
  .payment-method {
    padding: 0.75rem;
  }
  
  .payment-method-title {
    font-size: 0.9rem;
  }
  
  .payment-method-description {
    font-size: 0.8rem;
  }
  
  .order-summary-title {
    font-size: 1.25rem;
  }
  
  .order-item-name {
    font-size: 0.9rem;
  }
  
  .order-item-options {
    font-size: 0.8rem;
  }
  
  .place-order-btn {
    padding: 0.75rem;
    font-size: 1rem;
  }
}

/* Touch-friendly enhancements for mobile */
@media (max-width: 992px) {
  /* Increase touch target sizes */
  .btn,
  .icon-link,
  .nav-link,
  select,
  input[type="checkbox"] + label,
  input[type="radio"] + label,
  .product-card .btn,
  .quantity-btn,
  .pagination-item {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Add more spacing between interactive elements */
  .footer-column ul li {
    margin-bottom: 0.75rem;
  }
  
  .filter-options label {
    padding: 0.5rem 0;
  }
  
  /* Improve form usability on touch devices */
  input, 
  select, 
  textarea {
    font-size: 16px; /* Prevents iOS zoom on focus */
  }
  
  /* Enhance mobile navigation */
  .mobile-menu {
    padding: 1rem;
  }
  
  .mobile-menu ul li {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-light-gray);
  }
  
  .mobile-menu ul li:last-child {
    border-bottom: none;
  }
  
  /* Improve mobile cart experience */
  .cart-item {
    padding: 1rem;
  }
  
  .remove-item-btn {
    padding: 0.5rem;
  }
  
  /* Better mobile filters */
  .filter-toggle {
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
  }
  
  /* Sticky mobile header for better navigation */
  header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: var(--color-white);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Hide announcement bar on small screens to save space */
  @media (max-width: 576px) {
    .announcement-bar {
      display: none;
    }
    
    body {
      padding-top: 0;
    }
  }
}

/* Specific fixes for product grid on different devices */
@media (min-width: 577px) and (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1201px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Mobile menu functionality */
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
      if (window.innerWidth > 992) {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.querySelector('i').classList.add('fa-bars');
        mobileMenuToggle.querySelector('i').classList.remove('fa-times');
      }
    });
  }
});
