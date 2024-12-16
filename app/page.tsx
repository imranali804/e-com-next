import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-100 rounded-lg p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to E-Shop!
          </h1>
          <p className="text-gray-700 text-lg">
            Discover amazing deals on the best products.
          </p>
          <a
            href="/shop"
            className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
          >
            Shop Now
          </a>
        </section>

        {/* Featured Products Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <ProductGrid />
        </section>

        {/* About Section */}
        <section className="bg-blue-50 rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700">
            At E-Shop, we’re dedicated to providing you with top-quality
            products and exceptional customer service. Learn more about our
            mission and values.
          </p>
          <a
            href="/about"
            className="inline-block mt-4 text-blue-500 hover:underline"
          >
            Learn More
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
