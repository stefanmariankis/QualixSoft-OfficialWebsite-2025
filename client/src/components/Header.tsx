import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Logo from './Logo';
import { Menu, X, ChevronDown } from "lucide-react";
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import LocalizedLink from './LocalizedLink';
import { useLocalization } from '../hooks/useLocalization';

export default function Header() {
  const isScrolled = useScrollHeader(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalization();

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
            <LocalizedLink 
              to="/"
              className={`font-medium hover:text-primary transition-colors ${location === getLocalizedPath('/') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.home')}
            </LocalizedLink>
            <LocalizedLink 
              to="/services"
              className={`font-medium hover:text-primary transition-colors ${location === getLocalizedPath('/services') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.services')}
            </LocalizedLink>
            <LocalizedLink 
              to="/solutions"
              className={`font-medium hover:text-primary transition-colors ${location === getLocalizedPath('/solutions') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.solutions')}
            </LocalizedLink>
            <LocalizedLink 
              to="/portfolio"
              className={`font-medium hover:text-primary transition-colors ${location === getLocalizedPath('/portfolio') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.portfolio')}
            </LocalizedLink>
            
            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="font-medium text-dark hover:text-primary transition-colors flex items-center">
                More
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <LocalizedLink
                  to="/about"
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left ${location === getLocalizedPath('/about') ? 'text-primary' : 'text-dark'}`}
                >
                  {t('nav.about')}
                </LocalizedLink>
                <button
                  onClick={() => window.location.href = '/blog'} 
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 bg-transparent border-0 cursor-pointer w-full text-left ${location === '/blog' ? 'text-primary' : 'text-dark'}`}
                >
                  Blog
                </button>
                <button
                  onClick={() => window.location.href = '/careers'} 
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 bg-transparent border-0 cursor-pointer w-full text-left ${location === '/careers' ? 'text-primary' : 'text-dark'}`}
                >
                  Careers
                </button>
              </div>
            </div>
            
            <LocalizedLink
              to="/contact"
              className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              {t('nav.contact')}
            </LocalizedLink>
            
            {/* Language Switcher */}
            <LanguageSwitcher className="ml-4" />
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
            <LocalizedLink 
              to="/"
              className={`block w-full text-left py-2 hover:text-primary ${location === getLocalizedPath('/') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.home')}
            </LocalizedLink>
            <LocalizedLink 
              to="/services"
              className={`block w-full text-left py-2 hover:text-primary ${location === getLocalizedPath('/services') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.services')}
            </LocalizedLink>
            <LocalizedLink 
              to="/solutions"
              className={`block w-full text-left py-2 hover:text-primary ${location === getLocalizedPath('/solutions') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.solutions')}
            </LocalizedLink>
            <LocalizedLink 
              to="/portfolio"
              className={`block w-full text-left py-2 hover:text-primary ${location === getLocalizedPath('/portfolio') ? 'text-primary' : 'text-dark'}`}
            >
              {t('nav.portfolio')}
            </LocalizedLink>
            <button 
              className="block w-full text-left py-2 text-dark hover:text-primary flex items-center bg-transparent border-0 cursor-pointer"
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              More
              <ChevronDown className="h-4 w-4 ml-1 inline" />
            </button>
            {mobileMoreOpen && (
              <div className="pl-4">
                <LocalizedLink
                  to="/about"
                  className={`block w-full text-left py-2 hover:text-primary ${location === getLocalizedPath('/about') ? 'text-primary' : 'text-dark'}`}
                >
                  {t('nav.about')}
                </LocalizedLink>
                <button
                  onClick={() => window.location.href = '/blog'} 
                  className={`block w-full text-left py-2 hover:text-primary bg-transparent border-0 cursor-pointer ${location === '/blog' ? 'text-primary' : 'text-dark'}`}
                >
                  Blog
                </button>
                <button
                  onClick={() => window.location.href = '/careers'} 
                  className={`block w-full text-left py-2 hover:text-primary bg-transparent border-0 cursor-pointer ${location === '/careers' ? 'text-primary' : 'text-dark'}`}
                >
                  Careers
                </button>
              </div>
            )}
            <LocalizedLink
              to="/contact"
              className="block w-full mt-2 bg-primary text-white px-4 py-2 rounded-md text-center font-medium hover:bg-opacity-90"
            >
              {t('nav.contact')}
            </LocalizedLink>
            
            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <LanguageSwitcher className="w-full" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
