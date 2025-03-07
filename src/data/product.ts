export interface Product {
    id: string;
    name: string;
    category: 'Beans' | 'Equipment' | 'Accessories';
    price: number;
    description: string;
    features: string[];
    rating: number;
    image: string;
    inStock: boolean;
    origin?: string;
    roastLevel?: 'light' | 'medium' | 'dark' | 'espresso';
    weight?: number;
  }
  
  export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
  }
  
  export const categories: Category[] = [
    {
      id: 'Beans',
      name: 'Coffee Beans',
      description: 'Freshly roasted premium coffee beans from around the world.',
      image: '/coffee-beans.png'
    },
    {
      id: 'Equipment',
      name: 'Brewing Equipment',
      description: 'Essential tools for crafting the perfect cup of coffee.',
      image: '/brewing.png'
    },
    {
      id: 'Accessories',
      name: 'Accessories',
      description: 'Enhance your coffee experience with our quality accessories.',
      image: '/accessory.png'
    }
  ];
  
  export const products: Product[] = [
    {
      id: 'barako',
      name: 'Classic Barako',
      category: 'Beans',
      price: 649,
      description: 'A bold and intense coffee with a smoky, woody aroma and hints of dark chocolate and nuts. This strong, full-bodied roast is a staple of Filipino coffee culture, known for its rich heritage and energizing kick.',
      features: [
        'Strong, bold, and smoky flavor with a floral aroma',
        'High Caffeine Content',
        'Often enjoyed black or with sugar'
        
      ],
      rating: 4.8,
      image: '/barako.jpg',
      inStock: true,
      origin: 'Philippines',
      roastLevel: 'dark',
      weight: 16
    },
    {
      id: 'arabica',
      name: 'Premium Arabica',
      category: 'Beans',
      price: 749,
      description: 'A smooth and well-balanced coffee with caramel sweetness, citrusy brightness, and a hint of nuttiness. Sourced from the highlands of Benguet, Philippines, this Arabica variety delivers a refined and naturally sweet cup with a clean finish.',
      features: [
        'Smooth, mild flavor with caramel and citrus notes',
        'Lower caffeine content compared to Barako',
        'Often enjoyed black or with milk for a balanced taste',
     
      ],
      rating: 4.5,
      image: '/arabica.jpg',
      inStock: true,
      origin: 'Philippines',
      roastLevel: 'medium',
      weight: 16
    },
    {
      id: 'french-press',
      name: 'Classic French Press',
      category: 'Equipment',
      price: 1749,
      description: 'A high-quality French press designed for rich, full-bodied coffee. Made with durable, heat-resistant borosilicate glass and a stainless steel plunger, it ensures smooth and flavorful brews every time.',
      features: [
        'Capacity: 1L (8 cups)',
        'Heat-resistant glass',
        'Stainless steel double mesh filtration system',
        'Easy to clean and dishwasher safe'
      ],
      rating: 4.6,
      image: '/classic-fp.png',
      inStock: true
    },
    {
      id: 'espresso-machine',
      name: 'Espresso Machine',
      category: 'Equipment',
      price: 5499,
      description: 'An affordable and compact espresso machine designed for home use. Delivers rich espresso shots with a simple one-touch operation, perfect for beginners and casual coffee lovers.',
      features: [
        '3.5-bar pressure system for espresso brewing',
        'Built-in steam wand for frothing milk',
        'Compact and lightweight design for small spaces',
        'Easy-to-use controls for beginners'
      ],
      rating: 4.9,
      image: '/espresso-machine.png',
      inStock: true
    },
    {
      id: 'coffee-tamper',
      name: 'Coffee Tamper',
      category: 'Accessories',
      price: 899,
      description: 'A high-quality stainless steel coffee tamper designed for baristas and home espresso enthusiasts. Ensures even compression of coffee grounds for better extraction and rich espresso flavor.',
      features: [
        'Flat stainless steel base for uniform tamping',
        'Ergonomic wooden handle for comfortable grip',
        'Durable and rust-resistant materials'
      ],
      rating: 4.7,
      image: '/coffee-tamper.png',
      inStock: true
    },
    {
      id: 'espresso-cup',
      name: 'Classic Espresso Cup',
      category: 'Accessories',
      price: 249,
      description: 'A simple and elegant ceramic espresso cup designed for enjoying rich, bold espresso shots. Perfect for home or café use.',
      features: [
        'Capacity: 2 oz (60 ml)',
        'Classic design with a comfortable handle',
        'Dishwasher and microwave safe'
      ],
      rating: 4.6,
      image: '/espresso-cup.png',
      inStock: true
    },
    {
      id: 'knock-box',
      name: 'Detachable Knock Box',
      category: 'Accessories',
      price: 799,
      description: 'A durable and compact knock box with a detachable knock bar, making it easy to dispose of used espresso grounds while keeping your coffee station clean.',
      features: [
        'Detachable knock bar for easy cleaning',
        'Non-slip rubber base for stability',
        'Compact design for home or café use'
      ],
      rating: 4.8,
      image: '/knock-box.png',
      inStock: true
    }

    // Add more products if necessary...

  ];
  
  export const getProductsByCategory = (category: 'Beans' | 'Equipment' | 'Accessories') => {
    return products.filter(product => product.category === category);
  };
  
  export const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };
  
  export const getFeaturedProducts = (count: number = 3) => {
    return products
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count);
  };