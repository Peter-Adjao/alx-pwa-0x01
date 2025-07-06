import { useState } from "react";
import Link from "next/link";
import Button from "../commons/Button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#171D22] text-white px-4 md:px-16 lg:px-44">
      <div className="h-28 flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl font-semibold">
          Cine<span className="text-[#E2D609]">Seek</span>
        </h2>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/" className="hover:text-[#E2D609] px-4 md:px-8 text-xl font-semibold transition-colors duration-300">Home</Link>
          <Link href="/movies" className="hover:text-[#E2D609] px-4 md:px-8 text-xl font-semibold transition-colors duration-300">Movies</Link>
          <Link href="/contact" className="hover:text-[#E2D609] px-4 md:px-8 text-xl font-semibold transition-colors duration-300">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Sign In Button (Always visible) */}
        <div className="flex">
          <Button title="Sign in" />
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-start space-y-4 mt-4 px-2 pb-4 border-t border-gray-700">
          <Link href="/" className="text-lg font-semibold hover:text-[#E2D609]" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/movies" className="text-lg font-semibold hover:text-[#E2D609]" onClick={() => setIsMenuOpen(false)}>Movies</Link>
          <Link href="/contact" className="text-lg font-semibold hover:text-[#E2D609]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
