'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">MT</span>
                            </div>
                            <span className="hidden sm:inline text-xl font-bold text-gray-900"> MedicalTourism </span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#treatments" className="text-gray-700 hover:text-green-600 transition-colors"> Treatments </Link>
                        <Link href="#doctors" className="text-gray-700 hover:text-green-600 transition-colors"> Doctors </Link>
                        <Link href="#hospitals" className="text-gray-700 hover:text-green-600 transition-colors"> Hospitals </Link>
                        <Link href="#travel" className="text-gray-700 hover:text-green-600 transition-colors"> Travel </Link>
                        <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors"> About </Link>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/consultation" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"> Book Consultation </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none" aria-label="Toggle menu">
                            <svg className={`w-6 h-6 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden pb-4 space-y-2">
                        <Link href="#treatments" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(false)}> Treatments </Link>
                        <Link href="#doctors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(false)}> Doctors </Link>
                        <Link href="#hospitals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(false)}> Hospitals </Link>
                        <Link href="#travel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(false)}> Travel </Link>
                        <Link href="/consultation" className="block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-center" onClick={() => setIsMenuOpen(false)}> Book Consultation </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}