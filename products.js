// Product data for the modest women's clothing brand website
const products = [
  {
    id: 1,
    name: "Essential Everyday Abaya",
    category: "Abayas",
    price: 85.00,
    salePrice: null,
    isNew: true,
    isSale: false,
    colors: ["Black", "Navy", "Dark Green", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "product-1.jpg",
    description: "Our Essential Everyday Abaya is designed for comfort and versatility. Made from premium breathable fabric, this abaya features a simple, elegant cut that's perfect for daily wear. The lightweight material ensures comfort throughout the day, while the classic design pairs easily with any accessories.",
    details: [
      "Material: 95% Premium Cotton, 5% Elastane",
      "Relaxed fit with side pockets",
      "Button closure at wrists",
      "Machine washable on gentle cycle",
      "Model is 5'8\" and wears size M"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Celestial Evening Dress",
    category: "Dresses",
    price: 120.00,
    salePrice: null,
    isNew: true,
    isSale: true,
    colors: ["Dusty Rose", "Sage Green", "Navy", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "product-2.jpg",
    description: "Make a statement with our Celestial Evening Dress, perfect for special occasions. This floor-length dress features elegant draping and subtle embellishments that catch the light beautifully. The modest cut with long sleeves and high neckline ensures you look sophisticated while feeling comfortable.",
    details: [
      "Material: Premium Crepe with Chiffon overlay",
      "Floor-length with subtle train",
      "Hidden side zipper",
      "Lined for opacity",
      "Dry clean only",
      "Model is 5'9\" and wears size S"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Timeless Coat - Teal",
    category: "Coats",
    price: 150.00,
    salePrice: null,
    isNew: true,
    isSale: false,
    colors: ["Teal", "Camel", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    image: "product-3.jpg",
    description: "Our Timeless Coat is a wardrobe essential that transcends seasons. Crafted from premium wool blend, this coat offers warmth without bulk. The clean lines and classic silhouette make it versatile enough to wear with both casual and formal outfits.",
    details: [
      "Material: 70% Wool, 30% Polyester",
      "Full lining for comfort and warmth",
      "Button closure with hidden placket",
      "Two side pockets and one interior pocket",
      "Dry clean only",
      "Model is 5'7\" and wears size M"
    ],
    featured: true
  },
  {
    id: 4,
    name: "Everyday Elegance Top",
    category: "Tops",
    price: 65.00,
    salePrice: null,
    isNew: true,
    isSale: false,
    colors: ["White", "Black", "Blush", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "product-4.jpg",
    description: "The Everyday Elegance Top combines comfort with sophistication. This versatile piece features a modest neckline and full-length sleeves with subtle details at the cuffs. The lightweight fabric drapes beautifully, making this top perfect for layering or wearing on its own.",
    details: [
      "Material: 100% Premium Viscose",
      "Relaxed fit with slightly longer back hem",
      "Button detail at cuffs",
      "Machine washable on gentle cycle",
      "Model is 5'6\" and wears size S"
    ],
    featured: true
  },
  {
    id: 5,
    name: "Flowing Maxi Skirt",
    category: "Bottoms",
    price: 75.00,
    salePrice: null,
    isNew: false,
    isSale: false,
    colors: ["Black", "Navy", "Olive", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "product-5.jpg",
    description: "Our Flowing Maxi Skirt offers effortless elegance for any occasion. The A-line silhouette provides modest coverage while the premium fabric ensures a beautiful drape. An elastic waistband offers comfort without compromising on style.",
    details: [
      "Material: Premium Crepe",
      "A-line silhouette with full length",
      "Elastic waistband with belt loops",
      "Side pockets",
      "Machine washable on gentle cycle",
      "Model is 5'8\" and wears size M"
    ],
    featured: false
  },
  {
    id: 6,
    name: "Coordinated Ensemble",
    category: "Sets",
    price: 180.00,
    salePrice: 145.00,
    isNew: false,
    isSale: true,
    colors: ["Teal/Cream", "Navy/Blush", "Black/Gray"],
    sizes: ["S", "M", "L", "XL"],
    image: "product-6.jpg",
    description: "Our Coordinated Ensemble takes the guesswork out of styling. This two-piece set includes a long tunic top and wide-leg pants in complementary colors. The clean lines and modern silhouette create a polished look that transitions seamlessly from day to evening.",
    details: [
      "Material: 95% Premium Viscose, 5% Elastane",
      "Tunic length top with side slits",
      "Wide-leg pants with elastic waistband",
      "Machine washable on gentle cycle",
      "Model is 5'9\" and wears size M"
    ],
    featured: false
  },
  {
    id: 7,
    name: "Premium Cotton Hijab",
    category: "Hijabs",
    price: 35.00,
    salePrice: null,
    isNew: false,
    isSale: false,
    colors: ["White", "Black", "Blush", "Sage", "Navy", "Burgundy", "Mustard"],
    sizes: ["Standard"],
    image: "product-7.jpg",
    description: "Our Premium Cotton Hijab offers the perfect balance of comfort and style. Made from high-quality cotton with a touch of stretch, this hijab drapes beautifully and stays in place throughout the day. The generous size allows for various styling options.",
    details: [
      "Material: 95% Premium Cotton, 5% Elastane",
      "Dimensions: 75\" x 30\"",
      "Lightweight with slight stretch",
      "Machine washable on gentle cycle",
      "Iron on low heat if needed"
    ],
    featured: false
  },
  {
    id: 8,
    name: "Elegant Hijab Pin Set",
    category: "Accessories",
    price: 25.00,
    salePrice: null,
    isNew: false,
    isSale: false,
    colors: ["Gold", "Silver", "Rose Gold"],
    sizes: ["One Size"],
    image: "product-8.jpg",
    description: "Our Elegant Hijab Pin Set includes five coordinated pins in a beautiful gift box. Each pin features a minimalist design with a secure clasp that holds your hijab in place without damaging the fabric. The perfect finishing touch for any outfit.",
    details: [
      "Material: Nickel-free metal",
      "Set includes 5 pins in different designs",
      "Secure magnetic clasp",
      "Comes in a gift box",
      "Wipe clean with soft cloth"
    ],
    featured: false
  },
  {
    id: 9,
    name: "Wide-Leg Trousers",
    category: "Bottoms",
    price: 85.00,
    salePrice: null,
    isNew: false,
    isSale: false,
    colors: ["Black", "Navy", "Camel", "Olive"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "product-9.jpg",
    description: "Our Wide-Leg Trousers combine comfort with sophistication. The high waist and flowing wide legs create a flattering silhouette while ensuring modest coverage. Perfect for both professional settings and casual outings.",
    details: [
      "Material: Premium Crepe",
      "High waist with belt loops",
      "Wide leg silhouette",
      "Side pockets and back welt pockets",
      "Machine washable on gentle cycle",
      "Model is 5'7\" and wears size M"
    ],
    featured: false
  }
];

// Export the products array for use in other scripts
if (typeof module !== 'undefined') {
  module.exports = { products };
}
