'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky-top shadow-sm">
      <nav className="container-xl flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">ONE-HOME</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden tablet:flex items-center space-x-8">
          <Link href="/browse" className="text-neutral-900 hover:text-primary transition">
            Browse
          </Link>
          <Link href="/how-it-works" className="text-neutral-900 hover:text-primary transition">
            How It Works
          </Link>
          <Link href="/about" className="text-neutral-900 hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="text-neutral-900 hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* Auth Buttons & User Menu */}
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-primary font-semibold hover:text-blue-700">
            Sign In
          </Link>
          <Link href="/signup" className="btn-primary text-sm">
            Sign Up
          </Link>

          {/* User Avatar (when logged in) */}
          <div className="relative group hidden tablet:block">
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-700">
              <FiUser size={20} />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
              <Link href="/dashboard" className="block px-4 py-2 text-neutral-900 hover:bg-gray-100">
                My Profile
              </Link>
              <Link href="/dashboard/bookings" className="block px-4 py-2 text-neutral-900 hover:bg-gray-100">
                My Bookings
              </Link>
              <Link href="/dashboard/wishlist" className="block px-4 py-2 text-neutral-900 hover:bg-gray-100">
                My Wishlist
              </Link>
              <Link href="/messages" className="block px-4 py-2 text-neutral-900 hover:bg-gray-100">
                Messages
              </Link>
              <hr className="my-2" />
              <button className="block w-full text-left px-4 py-2 text-danger hover:bg-gray-100">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="tablet:hidden text-neutral-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="tablet:hidden bg-white border-t border-gray-200">
          <div className="container-xl py-4 space-y-4">
            <Link href="/browse" className="block text-neutral-900 hover:text-primary">
              Browse
            </Link>
            <Link href="/how-it-works" className="block text-neutral-900 hover:text-primary">
              How It Works
            </Link>
            <Link href="/about" className="block text-neutral-900 hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="block text-neutral-900 hover:text-primary">
              Contact
            </Link>
            <hr className="my-4" />
            <Link href="/dashboard" className="block text-neutral-900 hover:text-primary">
              My Profile
            </Link>
            <Link href="/messages" className="block text-neutral-900 hover:text-primary">
              Messages
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
