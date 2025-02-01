// pages/index.tsx (Updated with Hero Section and Featured Products)
'use client'

import { useState, useEffect } from 'react';
import { Product } from '@/types/types';
import { fetchProducts } from '@/utils/api';
import ProductCard from '@/components/ProductCard';
import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import LoadingSkeleton from '@/components/LoadingSkeleton';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data: Product[] = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Discover Amazing Products</h1>
          <div className="max-w-2xl mx-auto relative">
            <FiSearch className="absolute left-4 top-4 text-xl text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </motion.section>

      {/* Product Grid */}
      <section className="container mx-auto py-12 px-4">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => <LoadingSkeleton key={i} />)}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </section>
    </Layout>
  );
}