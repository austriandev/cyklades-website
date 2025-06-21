"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Music, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/artists", label: "ARTISTS" },
    { href: "/uploads", label: "RELEASES" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-8 left-8 z-50">
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white hover:text-gray-400 transition-colors text-sm tracking-widest font-light ${
                pathname === item.href ? "opacity-100" : "opacity-60"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col space-y-4 mt-8 pt-8 border-t border-white/20">
            <a
              href="https://instagram.com/cyklades_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors opacity-60"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://soundcloud.com/cyklades"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="5 5 18 18"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.8 10.7c-.5 0-.9.1-1.3.3-.2-2.5-2.3-4.5-4.9-4.5-1.1 0-2 .4-2.8 1.1-.5.5-.9 1-1.1 1.7h-.1c-1.7 0-3 1.4-3 3s1.3 3 3 3h10.2c1.3 0 2.4-1.1 2.4-2.5s-1.1-2.5-2.4-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="fixed top-6 right-6 z-50 text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-white hover:text-gray-400 transition-colors text-lg tracking-widest font-light ${
                    pathname === item.href ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex space-x-8 mt-8 pt-8 border-t border-white/20">
                <a
                  href="https://instagram.com/cyklades_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors opacity-60"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://soundcloud.com/cyklades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors opacity-60"
                >
                  <Music size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
