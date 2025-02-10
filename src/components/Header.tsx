// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
};

export default Header;
