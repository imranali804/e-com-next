import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Welcome to E-Shop! We are a customer-focused online store dedicated to providing you with the best products at great prices.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our mission is to make shopping simple, enjoyable, and affordable. From electronics to fashion, we carefully curate our collection to meet your needs.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Thank you for choosing E-Shop. We look forward to serving you!
        </p>
      </main>
    </>
  );
};

export default About;
