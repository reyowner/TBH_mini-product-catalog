import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/product";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  // Get featured products (first 3 for now)
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="container mx-auto px-6 py-10 bg-white dark:bg-brown-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brown-800 dark:text-brown-200">
          Welcome to <span className="text-brown-600 dark:text-brown-400">The Barista Hub!</span>
        </h1>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
          Your destination for premium coffee and expert brewing essentials.
        </p>
      </div>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-2xl font-semibold text-brown-800 dark:text-brown-200 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
