import ProductCard from "@/components/ProductCard";
import Footer from "@/components/footer";

// Ensure API URL is defined
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://mock-api:8000";

export default async function HomePage() {
  try {
    // Ensure fetch works even if API is temporarily unavailable
    const res = await fetch(`${API_BASE_URL}/categories`, { 
      cache: "no-store",
      next: { revalidate: 10 }, // Prevent caching issues
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const categories = await res.json();

    const allProducts = categories.flatMap((category: any) => 
      category.products?.map((product: any) => ({
        ...product,
        categoryId: category.id, 
      })) ?? []
    );

    const topRatedProducts = allProducts
      .filter((product: any) => product.rating !== undefined)
      .sort((a: any, b: any) => b.rating - a.rating)
      .slice(0, 4);

    return (
      <>
        <main className="container mx-auto px-6 py-10 bg-white dark:bg-brown-900 transition-colors duration-300">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brown-800 dark:text-brown-200">
              Welcome to <span className="text-brown-600 dark:text-brown-400">The Barista Hub!</span>
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Your destination for premium coffee and expert brewing essentials.
            </p>
          </div>

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

        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return (
      <main className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-red-500">
          Failed to load products. Please try again later.
        </h1>
      </main>
    );
  }
}
