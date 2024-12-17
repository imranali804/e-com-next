import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const mockProducts = [
  { id: "1", name: "Product 1", price: "29.99", image: "/assets/images/product_1.jpg" },
  { id: "2", name: "Product 2", price: "49.99", image: "/assets/images/product_2.jpg" },
  { id: "3", name: "Product 3", price: "19.99", image: "/assets/images/product_3.jpg" },
  { id: "4", name: "Product 4", price: "24.99", image: "/assets/images/product_4.jpg" },
  // Add more products as needed
];

const ProductPage = () => {
  const { query } = useRouter();
  const { id } = query;

  // Find the product with the matching ID
  const product = mockProducts.find((p) => p.id === id);

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={500} // Set the desired width
                height={500} // Set the desired height
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-gray-700 mb-6">This is a description of the product.</p>
              <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
            <p className="text-gray-700 mt-4">We couldn’t find the product you’re looking for.</p>
            <a
              href="/shop"
              className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
            >
              Go to Shop
            </a>
          </div>
        )}
      </main>
    </>
  );
};

export default ProductPage;
