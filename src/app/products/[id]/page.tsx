import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id?: string }> }) {
  const resolvedParams = await params;
  if (!resolvedParams?.id) return notFound();

  const id = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id;

  // Fetch categories
  const res = await fetch("http://localhost:3001/categories", { cache: "no-store" });

  if (!res.ok) return notFound();

  const categories = await res.json();
  let product: any = null;
  let categoryName: string | null = null;
  let categoryId: string | null = null;

  // Find product in categories
  for (const category of categories) {
    const foundProduct = category.products.find((p: any) => p.id === id);
    if (foundProduct) {
      product = foundProduct;
      categoryName = category.name;
      categoryId = category.id;
      break;
    }
  }

  if (!product) return notFound();

  return (
    <div className="bg-gray-200 dark:bg-gray-900 rounded-xl shadow-2xl p-8 md:p-10 transition-all duration-300 border border-gray-400 dark:border-gray-800">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:w-1/3 mb-6 md:mb-0 flex items-center justify-center">
          <Image
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg shadow-lg dark:shadow-2xl hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-2/3 md:pl-10">
          <h1 className="text-4xl font-bold text-brown-900 dark:text-brown-300 mb-4">{product.name}</h1>

          {/* Product Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-400 dark:text-gray-600"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-brown-700 dark:text-brown-400">{product.rating.toFixed(1)}</span>
          </div>

          {/* Product Price */}
          <p className="text-3xl font-bold text-brown-900 dark:text-brown-300 mb-4">
            ₱{product.price.toFixed(2)}
          </p>

          {/* Stock Status & Category */}
          <div className="mb-4 flex items-center space-x-3">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              product.inStock ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>

            <Link href={`/category/${categoryId}`}>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-brown-400 dark:bg-brown-700 text-brown-900 dark:text-brown-200">
                {categoryName}
              </span>
            </Link>
          </div>

          {/* Product Description */}
          <p className="text-brown-800 dark:text-brown-400 mb-6 leading-relaxed">{product.description}</p>

          {/* Optional Product Details */}
          {product.origin && (
            <div className="mb-4">
              <span className="font-medium text-brown-900 dark:text-brown-300">Origin:</span> {product.origin}
            </div>
          )}

          {product.roastLevel && (
            <div className="mb-4">
              <span className="font-medium text-brown-900 dark:text-brown-300">Roast Level:</span>
              {product.roastLevel.charAt(0).toUpperCase() + product.roastLevel.slice(1)}
            </div>
          )}

          {product.weight && (
            <div className="mb-6">
              <span className="font-medium text-brown-900 dark:text-brown-300">Weight:</span> {product.weight} oz
            </div>
          )}
        </div>
      </div>

      {/* Features List */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-brown-900 dark:text-brown-300 mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-brown-800 dark:text-brown-400">
          {product.features.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
