"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage() {
  const params = useParams();
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryData() {
      if (!params?.id) return;

      const id = Array.isArray(params.id) ? params.id[0] : params.id;

      try {
        const res = await fetch("http://localhost:3001/categories", { cache: "no-store" });

        if (!res.ok) {
          setCategory(null);
          return;
        }

        const categories = await res.json();
        const foundCategory = categories.find(
          (cat: any) => typeof cat.id === "string" && cat.id.toLowerCase() === id?.toLowerCase()
        );

        setCategory(foundCategory || null);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setCategory(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryData();
  }, [params?.id]);

  if (loading) {
    return (
      <main className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-brown-800 dark:text-brown-200 mb-6">Loading...</h1>
      </main>
    );
  }

  if (!category) {
    return (
      <main className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-red-500">Category Not Found</h1>
      </main>
    );
  }

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
          {category.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
