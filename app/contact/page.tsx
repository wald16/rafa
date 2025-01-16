// Redesigned Contact Page
'use client'; // Required for handling client-side interactivity

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-600 to-black py-20 px-6 text-center">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-extrabold text-white animate-fadeInDown">Contáctanos</h1>
                    <p className="text-gray-300 mt-6 text-lg">
                        Estamos aquí para ayudarte. Llena el formulario y nos pondremos en contacto contigo.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-gray-800 py-20 px-6">
                <div className="container mx-auto md:flex md:space-x-12">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-red-600 mb-6">Cómo Contactarnos</h2>
                        <p className="text-gray-300 mb-4">
                            Si tienes preguntas, necesitas ayuda o quieres saber más sobre nuestros servicios, no dudes en escribirnos.
                        </p>
                        <ul className="text-gray-400 space-y-2">
                            <li><strong>Teléfono:</strong> +54 123 456 789</li>
                            <li><strong>Email:</strong> contacto@crgroup.com</li>
                            <li><strong>Dirección:</strong> Calle Falsa 123, Ciudad</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-0">
                        <form className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all" onSubmit={handleSubmit}>
                            <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Envíanos un Mensaje</h2>

                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600 hover:scale-105 transition-transform"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600 hover:scale-105 transition-transform"
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600 hover:scale-105 transition-transform"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-gray-100 py-3 rounded-lg hover:bg-red-700 hover:scale-105 transition-transform"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>

                            {/* Feedback Messages */}
                            {status === 'success' && (
                                <p className="text-green-400 mt-4 text-center">¡Tu mensaje ha sido enviado exitosamente!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 mt-4 text-center">Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.</p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
