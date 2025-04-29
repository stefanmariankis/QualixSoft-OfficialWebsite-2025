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

  // Determine if current path is active
  const isActive = (path: string) => {
    return location === getLocalizedPath(path);
  };

  return (
    <header className={`fixed w-full z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <LocalizedLink 
              to="/" 
              className="flex items-center"
            >
              <Logo />
            </LocalizedLink>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <LocalizedLink 
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              {t('nav.home')}
            </LocalizedLink>
            <LocalizedLink 
              to="/services"
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
            >
              {t('nav.services')}
            </LocalizedLink>
            <LocalizedLink 
              to="/solutions"
              className={`nav-link ${isActive('/solutions') ? 'active' : ''}`}
            >
              {t('nav.solutions')}
            </LocalizedLink>
            <LocalizedLink 
              to="/portfolio"
              className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
            >
              {t('nav.portfolio')}
            </LocalizedLink>
            
            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="nav-link flex items-center">
                More
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <LocalizedLink
                  to="/about"
                  className={`block px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary w-full text-left transition-colors ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
                >
                  {t('nav.about')}
                </LocalizedLink>
                <LocalizedLink
                  to="/blog"
                  className={`block px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary w-full text-left transition-colors ${isActive('/blog') ? 'text-primary' : 'text-foreground'}`}
                >
                  Blog
                </LocalizedLink>
                <LocalizedLink
                  to="/careers"
                  className={`block px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary w-full text-left transition-colors ${isActive('/careers') ? 'text-primary' : 'text-foreground'}`}
                >
                  Careers
                </LocalizedLink>
              </div>
            </div>
            
            <LocalizedLink
              to="/contact"
              className="btn-primary"
            >
              {t('nav.contact')}
            </LocalizedLink>
            
            {/* Language Switcher */}
            <LanguageSwitcher className="ml-4" />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary focus:outline-none transition-colors" 
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
              className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              {t('nav.home')}
            </LocalizedLink>
            <LocalizedLink 
              to="/services"
              className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              {t('nav.services')}
            </LocalizedLink>
            <LocalizedLink 
              to="/solutions"
              className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive('/solutions') ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              {t('nav.solutions')}
            </LocalizedLink>
            <LocalizedLink 
              to="/portfolio"
              className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive('/portfolio') ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              {t('nav.portfolio')}
            </LocalizedLink>
            <button 
              className="block w-full text-left py-2 text-foreground hover:text-primary flex items-center bg-transparent border-0 cursor-pointer transition-colors"
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              More
              <ChevronDown className={`h-4 w-4 ml-1 inline transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileMoreOpen && (
              <div className="pl-4 border-l-2 border-primary/10 ml-2">
                <LocalizedLink
                  to="/about"
                  className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground'}`}
                >
                  {t('nav.about')}
                </LocalizedLink>
                <LocalizedLink
                  to="/blog"
                  className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive('/blog') ? 'text-primary font-medium' : 'text-foreground'}`}
                >
                  Blog
                </LocalizedLink>
                <LocalizedLink
                  to="/careers"
                  className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive('/careers') ? 'text-primary font-medium' : 'text-foreground'}`}
                >
                  Careers
                </LocalizedLink>
              </div>
            )}
            <LocalizedLink
              to="/contact"
              className="btn-primary block w-full mt-4 text-center"
            >
              {t('nav.contact')}
            </LocalizedLink>
            
            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-primary/10">
              <LanguageSwitcher className="w-full" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
