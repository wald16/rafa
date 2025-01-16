import './globals.css';

export const metadata = {
  title: 'My Company',
  description: 'Providing great services to our clients',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-400">My Company</a>
            <nav className="flex space-x-4">
              <a href="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Home</a>
              <a href="/about" className="text-gray-300 hover:text-blue-400 transition-all duration-300">About Us</a>
              <a href="/services" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Services</a>
              <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Contact Us</a>
            </nav>
          </div>
        </header>


        <main className="flex-grow container mx-auto px-4 py-8 transition-opacity duration-700 ease-in-out">
          {children}
        </main>


        <footer className="bg-gray-800 text-gray-400 py-4">
          <div className="container mx-auto text-center">
            © 2025 My Company. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
