import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import Logo from './Logo';
import { Menu, X, ChevronDown } from "lucide-react";
import { useScrollHeader } from '@/hooks/useScrollHeader';

export default function Header() {
  const isScrolled = useScrollHeader(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#mobileMenu') && !target.closest('#mobileMenuButton')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => window.location.href = '/'} 
              className="flex items-center bg-transparent p-0 border-0 cursor-pointer"
            >
              <Logo />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className={`font-medium hover:text-primary transition-colors ${location === '/' ? 'text-primary' : 'text-dark'}`}>Home</a>
            </Link>
            <Link href="/services">
              <a className={`font-medium hover:text-primary transition-colors ${location === '/services' ? 'text-primary' : 'text-dark'}`}>Services</a>
            </Link>
            <Link href="/solutions">
              <a className={`font-medium hover:text-primary transition-colors ${location === '/solutions' ? 'text-primary' : 'text-dark'}`}>Solutions</a>
            </Link>
            <Link href="/portfolio">
              <a className={`font-medium hover:text-primary transition-colors ${location === '/portfolio' ? 'text-primary' : 'text-dark'}`}>Portfolio</a>
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="font-medium text-dark hover:text-primary transition-colors flex items-center">
                More
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/about">
                  <a className={`block px-4 py-2 text-sm hover:bg-gray-100 ${location === '/about' ? 'text-primary' : 'text-dark'}`}>Despre Noi</a>
                </Link>
                <Link href="/blog">
                  <a className={`block px-4 py-2 text-sm hover:bg-gray-100 ${location === '/blog' ? 'text-primary' : 'text-dark'}`}>Blog</a>
                </Link>
                <Link href="/careers">
                  <a className={`block px-4 py-2 text-sm hover:bg-gray-100 ${location === '/careers' ? 'text-primary' : 'text-dark'}`}>Careers</a>
                </Link>
              </div>
            </div>
            
            <Link href="/contact">
              <a className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">Contact Us</a>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark focus:outline-none" 
            id="mobileMenuButton"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md shadow-lg py-2 px-4" id="mobileMenu">
            <Link href="/">
              <a className={`block py-2 hover:text-primary ${location === '/' ? 'text-primary' : 'text-dark'}`}>Home</a>
            </Link>
            <Link href="/services">
              <a className={`block py-2 hover:text-primary ${location === '/services' ? 'text-primary' : 'text-dark'}`}>Services</a>
            </Link>
            <Link href="/solutions">
              <a className={`block py-2 hover:text-primary ${location === '/solutions' ? 'text-primary' : 'text-dark'}`}>Solutions</a>
            </Link>
            <Link href="/portfolio">
              <a className={`block py-2 hover:text-primary ${location === '/portfolio' ? 'text-primary' : 'text-dark'}`}>Portfolio</a>
            </Link>
            <button 
              className="block w-full text-left py-2 text-dark hover:text-primary flex items-center"
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              More
              <ChevronDown className="h-4 w-4 ml-1 inline" />
            </button>
            {mobileMoreOpen && (
              <div className="pl-4">
                <Link href="/about">
                  <a className={`block py-2 hover:text-primary ${location === '/about' ? 'text-primary' : 'text-dark'}`}>Despre Noi</a>
                </Link>
                <Link href="/blog">
                  <a className={`block py-2 hover:text-primary ${location === '/blog' ? 'text-primary' : 'text-dark'}`}>Blog</a>
                </Link>
                <Link href="/careers">
                  <a className={`block py-2 hover:text-primary ${location === '/careers' ? 'text-primary' : 'text-dark'}`}>Careers</a>
                </Link>
              </div>
            )}
            <Link href="/contact">
              <a className="block mt-2 bg-primary text-white px-4 py-2 rounded-md text-center font-medium hover:bg-opacity-90">Contact Us</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
