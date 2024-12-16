import React from "react";
import Image from "next/image";

const products = [
  { id: "1", name: "Product 1", price: "29.99", image: "/product_1.jpg" },
  { id: "2", name: "Product 2", price: "49.99", image: "/product_2.jpg" },
  { id: "3", name: "Product 3", price: "19.99", image: "/product_3.jpg" },
  { id: "4", name: "Product 4", price: "24.99", image: "/product_4.jpg" },
  { id: "5", name: "Product 5", price: "39.99", image: "/product_5.jpg" },
  { id: "6", name: "Product 6", price: "59.99", image: "/product_6.jpg" },
  { id: "7", name: "Product 7", price: "14.99", image: "/product_7.jpg" },
  { id: "8", name: "Product 8", price: "34.99", image: "/product_8.jpg" },
  { id: "9", name: "Product 9", price: "44.99", image: "/product_9.jpg" },
  { id: "10", name: "Product 10", price: "19.99", image: "/product_10.jpg" },
  { id: "11", name: "Product 11", price: "29.99", image: "/product_11.jpg" },
  { id: "12", name: "Product 12", price: "39.99", image: "/product_12.jpg" },
  { id: "13", name: "Product 13", price: "59.99", image: "/product_13.jpg" },
  { id: "14", name: "Product 14", price: "24.99", image: "/product_14.jpg" },
  { id: "15", name: "Product 15", price: "49.99", image: "/product_15.jpg" },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow hover:shadow-lg">
          {/* Image */}
          <div className="relative w-full h-64">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          {/* Details */}
          <div className="p-4">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-700 mt-2">${product.price}</p>
            <a
              href={`/product/${product.id}`}
              className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
