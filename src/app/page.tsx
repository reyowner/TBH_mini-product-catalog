import ProductCard from "@/components/ProductCard";
import Footer from "@/components/footer";

export default async function HomePage() {
  // Fetch all categories (Server Component behavior)
  const res = await fetch("http://localhost:3001/categories", { cache: "no-store" });

  if (!res.ok) {
    return (
      <main className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-red-500">Failed to load products</h1>
      </main>
    );
  }

  const categories = await res.json();

  // Extract all products from each category
  const allProducts = categories.flatMap((category: any) => category.products.map((product: any) => ({
    ...product,
    categoryId: category.id, // Keep track of the category ID
  })));

  // Select top-rated products
  const topRatedProducts = allProducts
    .filter((product: any) => product.rating !== undefined) // Ensure product has a rating
    .sort((a: any, b: any) => b.rating - a.rating) // Sort from highest to lowest rating
    .slice(0, 4); // Take only the top 4 products

  return (
    <>
      {/* Main Content */}
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
            Featured Products (Top Rated)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {topRatedProducts.length > 0 ? (
              topRatedProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-300">
                No featured products available.
              </p>
            )}
          </div>
        </section>
      </main>

      {/*Footer */}
      <Footer />
    </>
  );
}
