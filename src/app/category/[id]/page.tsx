import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";

// ✅ Define type for page props (Fixed)
interface PageProps {
  params: Promise<{ id?: string }>;
}

// ✅ Define Category & Product Types
interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

// ✅ API Base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://mock-api:8000";

// ✅ Fetch category data
async function getCategoryData(id: string): Promise<Category | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, { cache: "no-store" });

    if (!res.ok) return null;

    const categories: Category[] = await res.json();
    return categories.find((cat) => cat.id.toLowerCase() === id.toLowerCase()) || null;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}

// ✅ Main Page Component (Fixed)
export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params; // Fix to match Product Page pattern
  if (!resolvedParams?.id) return notFound();

  const id = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id;
  const category = await getCategoryData(id);
  if (!category) return notFound();

  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-brown-800 dark:text-brown-200 mb-6">
        {category.name}
      </h1>
      <p className="text-lg text-brown-600 dark:text-brown-300 mb-6">{category.description}</p>

      {category.products.length === 0 ? (
        <h2 className="text-2xl font-bold text-center text-brown-700 dark:text-brown-300">
          No products found in this category.
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
