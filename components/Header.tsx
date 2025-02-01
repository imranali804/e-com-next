// components/Header.tsx (Enhanced Navigation)
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Header() {

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
          NextShop
        </Link>
        
      </nav>
    </header>
  );
}