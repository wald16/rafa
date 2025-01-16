export default function Services() {
    return (
        <div className="bg-gray-800 shadow rounded p-6">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Our Services</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
                We offer a wide range of professional services tailored to meet your needs.
                Explore the options below to learn more about how we can help your business succeed.
            </p>

            {/* List of Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-4 rounded hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-blue-400">Consulting</h3>
                    <p className="text-gray-400 mt-2">
                        Expert advice and strategies to take your business to the next level.
                    </p>
                </div>

                <div className="bg-gray-900 p-4 rounded hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-blue-400">Web Development</h3>
                    <p className="text-gray-400 mt-2">
                        Modern, responsive websites built with the latest technologies.
                    </p>
                </div>

                <div className="bg-gray-900 p-4 rounded hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-blue-400">Digital Marketing</h3>
                    <p className="text-gray-400 mt-2">
                        Strategies to grow your brand and reach a wider audience.
                    </p>
                </div>

                <div className="bg-gray-900 p-4 rounded hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-blue-400">Support & Maintenance</h3>
                    <p className="text-gray-400 mt-2">
                        Reliable support to ensure your systems run smoothly.
                    </p>
                </div>
            </div>
        </div>
    );
}
