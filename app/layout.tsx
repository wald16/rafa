// Global imports
import './globals.css';

export const metadata = {
  title: 'C&R Advertising Group',
  description: 'Publicidad y marketing de alto nivel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("RootLayout rendered"); // Debugging: Confirm that RootLayout is rendering

  return (
    <html lang="es">
      <body className="bg-black text-gray-100 font-sans">
        <header className="bg-gradient-to-r from-black via-gray-800 to-black shadow py-4">
          <div className="mx-auto px-6 flex justify-between items-center">

            <nav className="flex space-x-6">
              <a href="/" className="logo">
                <img src="/images/CR_GROUP.png" alt="Logo C&R" className="h-10" />
                <span className="text-red-600 text-lg font-bold">C&R Advertising</span>
              </a>
              <a
                href="/"
                className="hover:text-red-600 relative group transition-all"
              >
                Inicio
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="/about"
                className="hover:text-red-600 relative group transition-all"
              >
                Sobre Nosotros
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="/services"
                className="hover:text-red-600 relative group transition-all"
              >
                Servicios
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
              </a>
              <a
                href="/contact"
                className="hover:text-red-600 relative group transition-all"
              >
                Contacto
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
              </a>
            </nav>

          </div>
        </header>

        <main className="mx-auto py-10">
          <div className="transition-opacity duration-700 ease-in-out">
            {children}
          </div>
        </main>

        <footer className="bg-gray-800 py-6">
          <div className="container mx-auto text-center text-gray-400">
            <p>&copy; 2025 C&R Advertising Group. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}