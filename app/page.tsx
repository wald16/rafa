export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-blue-400">Welcome to Our Company</h1>
      <p className="text-lg mt-4 text-gray-400">
        We are dedicated to providing top-notch services to our clients.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <a href="/about" className="bg-blue-600 text-gray-100 py-2 px-4 rounded hover:bg-blue-700">
          Learn More
        </a>
        <a href="/services" className="border border-blue-600 text-blue-400 py-2 px-4 rounded hover:bg-blue-600 hover:text-gray-100">
          Our Services
        </a>
      </div>
    </div>
  );
}
