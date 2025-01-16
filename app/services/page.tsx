// Redesigned Services Page
export default function Services() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-600 to-black py-20 px-6 text-center">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-extrabold text-white animate-fadeInDown">Nuestros Servicios</h1>
                    <p className="text-gray-300 mt-6 text-lg">
                        Ofrecemos soluciones completas para transformar tu negocio y hacerlo destacar.
                    </p>
                </div>
            </section>

            {/* Services List Section */}
            <section className="bg-gray-800 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-red-600 mb-10 text-center">
                        Lo Que Ofrecemos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {["Consultoría", "Desarrollo Web", "Marketing Digital", "Branding", "Soporte Técnico", "Análisis de Datos"].map((service, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-900 rounded-lg shadow-lg text-center hover:scale-105 hover:rotate-1 transition-transform"
                            >
                                <h3 className="text-xl font-semibold text-red-500">{service}</h3>
                                <p className="text-gray-300 mt-4">
                                    {service === "Consultoría" ? "Estrategias personalizadas para optimizar el rendimiento de tu negocio." :
                                        service === "Desarrollo Web" ? "Diseñamos sitios web modernos y funcionales para impulsar tu presencia en línea." :
                                            service === "Marketing Digital" ? "Estrategias innovadoras para llegar a tu audiencia ideal." :
                                                service === "Branding" ? "Creamos identidades visuales que hacen destacar a tu marca." :
                                                    service === "Soporte Técnico" ? "Aseguramos que tus sistemas funcionen de manera eficiente." :
                                                        "Utilizamos datos para tomar decisiones estratégicas."}
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={`/images/${service.toLowerCase().replace(/ /g, '-')}.png`}
                                        alt={`${service} illustration`}
                                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-red-600 py-20 px-6 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-gray-100">
                        Trabajemos Juntos
                    </h2>
                    <p className="text-gray-200 mt-6">
                        Contáctanos para comenzar a trabajar en tus objetivos y llevar tu marca al próximo nivel.
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
