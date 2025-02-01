// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">NextShop</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2023 NextShop. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }