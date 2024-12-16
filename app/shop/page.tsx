import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

const Shop = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
        <ProductGrid />
      </main>
    </>
  );
};

export default Shop;
