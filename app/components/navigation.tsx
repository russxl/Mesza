"use client";

import Image from 'next/image';
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface NavigationProps {
    textColor?: 'white' | 'black';
}

export default function Navigation({ textColor = 'white' }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const router = useRouter();
    
    const textColorClass = `text-${textColor}`;
    const hoverColorClass = `hover:text-${textColor === 'white' ? 'gray-300' : 'gray-600'}`;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const handleNavigation = (path: string) => {
        setIsMenuOpen(false);
        router.push(path);
    };

    const navigationItems = [
        { path: '/', label: 'Home' },
        { path: '/desk', label: 'Desk' },
        { path: '/faq', label: "FAQ's"},
        { path: '/contact', label: 'Contact' },
    ];

    return (    
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ${
            visible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Cart Icon - Left Side (Mobile) */}
                    <div className="md:hidden">
                        <a href="#" className={`${textColorClass} ${hoverColorClass} transition-colors`}>
                            <FiShoppingCart className="h-6 w-6" />
                        </a>
                    </div>

                    {/* Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
                        <Image
                            src="/next.svg"
                            alt="Logo"
                            width={80}
                            height={16}
                            className={`${textColor === 'black' ? '' : 'dark:invert'} w-[80px] md:w-[100px]`}
                        />
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex space-x-8">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`${textColorClass} ${hoverColorClass} transition-colors text-base lg:text-lg`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center">
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden ${textColorClass} ${hoverColorClass} transition-colors p-2`}
                            aria-label="Menu"
                        >
                            <FiMenu className="h-6 w-6" />
                        </button>

                        {/* Desktop Icons */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#" className={`${textColorClass} ${hoverColorClass} transition-colors`}>
                                <FiShoppingCart className="h-6 w-6" />
                            </a>
                            <a href="#" className={`${textColorClass} ${hoverColorClass} transition-colors`}>
                                <FiUser className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Updated */}
                {isMenuOpen && (
                    <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/40 backdrop-blur-md z-50" style={{ height: '100vh' }}>
                        <div className="h-full flex flex-col items-center justify-center">
                            {/* Close Button */}
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-5 right-5 text-white opacity-60 hover:opacity-100 transition-opacity p-2"
                                aria-label="Close menu"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            {/* Navigation Links */}
                            <div className="flex flex-col items-center justify-center space-y-8 w-full px-6">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.path}
                                        onClick={() => handleNavigation(item.path)}
                                        className="text-white hover:text-gray-300 transition-colors text-3xl sm:text-4xl font-light tracking-wide"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                
                                {/* Additional Navigation Items */}
                                <div className="pt-8 flex items-center space-x-8">
                                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                        <FiShoppingCart className="h-8 w-8" />
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                        <FiUser className="h-8 w-8" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
