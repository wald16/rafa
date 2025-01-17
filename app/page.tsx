// page.tsx (Updated with more playful and visually appealing styles)
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-30 bg-pattern-red" />
        <div className="container mx-auto z-10 relative">
          <h1 className="text-6xl font-extrabold text-white animate-fadeInDown">
            Bienvenidos a C&R Advertising Group
          </h1>
          <p className="text-gray-300 mt-6 text-lg">
            Líderes en soluciones publicitarias y marketing digital.
          </p>
          <div className="mt-10 flex justify-center flex-wrap gap-4">
            <a
              href="/services"
              className="bg-white font-bold text-red-600 py-3 px-6 rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-110 shadow-md"
            >
              Nuestros Servicios
            </a>
            <a
              href="/contact"
              className="border border-white text-white py-3 px-6 rounded-lg hover:bg-red-700 hover:border-red-700 transition-transform transform hover:scale-110"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-10">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovación", desc: "Soluciones creativas y modernas para destacar tu negocio." },
              { title: "Calidad", desc: "Garantizamos resultados de excelencia en cada proyecto." },
              { title: "Compromiso", desc: "Trabajamos de la mano contigo para lograr tus objetivos." },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all"
              >
                <h3 className="text-2xl font-semibold text-red-500">{feature.title}</h3>
                <p className="text-gray-300 mt-4">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-red-600 py-20 text-center relative">
        <div className="absolute inset-0 bg-opacity-10 bg-pattern-light" />
        <div className="container mx-auto z-10 relative">
          <h2 className="text-4xl font-bold text-white animate-bounce">
            ¡Lleva tu marca al siguiente nivel!
          </h2>
          <p className="text-gray-100 mt-6">
            Contáctanos y descubre cómo podemos ayudarte a alcanzar tus metas.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-block bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            Empieza Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
