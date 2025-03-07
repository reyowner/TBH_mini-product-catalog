import Link from 'next/link';
import { products } from '@/data/product';
import ProductCard from '@/components/ProductCard';

interface CategoryPageProps {
  params: { id: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Await params to ensure it's resolved
  const { id } = await params;
  const category = decodeURIComponent(id);
  
  // Filtering products on the server
  const filteredProducts = products
    .filter((p) => p.category.toLowerCase() === category.toLowerCase())
    .map((product) => ({
      ...product,
      features: product.features || [], // Ensure features is always an array
      rating: product.rating ?? 0, // Ensure rating is always a number
    }));

  if (!filteredProducts.length) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold">No Products Found</h1>
        <Link href="/" className="text-blue-500 mt-4 inline-block">Go Back Home</Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-6">
      <Link href="/" className="text-blue-500 mb-4 inline-block">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-6">{category} Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
