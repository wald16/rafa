// Redesigned About Page
export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-600 to-black py-20 px-6 text-center md:text-left md:flex items-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white animate-fadeInDown">Sobre Nosotros</h1>
                        <p className="text-gray-300 mt-6 text-lg">
                            Transformamos ideas en realidades. Nuestro compromiso es ayudarte a alcanzar el éxito.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img
                            src="/images/about-illustration.png"
                            alt="About us"
                            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="bg-gray-800 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-red-600 mb-10 text-center">Nuestra Misión y Visión</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:scale-105 transition-all">
                            <h3 className="text-2xl font-semibold text-red-500">Misión</h3>
                            <p className="text-gray-300 mt-4">
                                Ofrecer soluciones publicitarias innovadoras y accesibles, ayudando a empresas de todos los tamaños a alcanzar su máximo potencial.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:scale-105 transition-all">
                            <h3 className="text-2xl font-semibold text-red-500">Visión</h3>
                            <p className="text-gray-300 mt-4">
                                Ser líderes en la industria publicitaria, destacándonos por nuestra calidad, creatividad y compromiso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-gray-900 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-red-600 mb-10 text-center">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovación", desc: "Soluciones creativas y modernas." },
                            { title: "Calidad", desc: "Excelencia en cada proyecto." },
                            { title: "Compromiso", desc: "Logramos tus objetivos contigo." },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:rotate-1 hover:scale-105 transition-transform"
                            >
                                <h3 className="text-xl font-semibold text-red-500">{value.title}</h3>
                                <p className="text-gray-300 mt-4">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-red-600 py-20 px-6 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-100">Únete a Nuestra Familia</h2>
                    <p className="text-gray-200 mt-6">
                        Contáctanos para saber más sobre cómo podemos ayudarte a alcanzar tus metas.
                    </p>
                    <a
                        href="/contact"
                        className="mt-10 inline-block bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-110"
                    >
                        Contáctanos
                    </a>
                </div>
            </section>
        </div>
    );
}
