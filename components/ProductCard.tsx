import React from "react";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg">
      {/* Replace <img> with Next.js <Image> */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-700 mt-2">${price}</p>
        <a
          href={`/product/${id}`}
          className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
