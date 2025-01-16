'use client';

import { useState } from 'react';

export default function MobileMenu() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
                {isMobileMenuOpen ? '✖' : '☰'}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-black bg-opacity-95 text-white">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li><a href="#" className="block hover:text-gray-300 transition-colors">Home</a></li>
                        <li><a href="#about" className="block hover:text-gray-300 transition-colors">About</a></li>
                        <li><a href="#services" className="block hover:text-gray-300 transition-colors">Services</a></li>
                        <li><a href="#contact" className="block hover:text-gray-300 transition-colors">Contact</a></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
