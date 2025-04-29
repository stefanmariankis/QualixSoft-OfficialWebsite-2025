import React from 'react';
import { Link } from 'wouter';
import { useLocalization } from '../hooks/useLocalization';

interface LocalizedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function LocalizedLink({ to, children, className = '', onClick }: LocalizedLinkProps) {
  const { getLocalizedPath } = useLocalization();
  const localizedPath = getLocalizedPath(to);
  
  return (
    <Link 
      to={localizedPath} 
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}