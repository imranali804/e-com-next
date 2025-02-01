// components/ProductCard.tsx (Enhanced with Animations)
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Product } from '@/utils/api';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

export default function ProductCard({ product }: { product: Product }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/product/${product.id}`} className="block relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`} className="group">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        </Link>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-purple-600">${product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}