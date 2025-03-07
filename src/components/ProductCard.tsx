import Image from 'next/image';
import Link from 'next/link';

// Define Product Type
interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

// Add type annotation to the prop
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-brown-100 dark:bg-brown-800 shadow-lg dark:shadow-brown-950 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-brown-700">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full h-56">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover rounded-t-xl transition-transform duration-300 hover:scale-110" 
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-brown-900 dark:text-brown-100">
            {product.name}
          </h3>
          <p className="text-sm text-brown-700 dark:text-brown-300 mt-2">
            {product.description.substring(0, 60)}...
          </p>
          <p className="mt-3 text-xl font-bold text-brown-800 dark:text-brown-200">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}
