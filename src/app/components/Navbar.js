import React from 'react'
import { Logo } from './Logo'
import { Menu, X, MapPin } from 'lucide-react'

const Navbar = (props) => {
    
    const { isMenuOpen,setIsMenuOpen,scrollY} = props


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/80 backdrop-blur-sm'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Logo size="w-12 h-12" />
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-transparent">Astraeus Tech</span>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Philippines
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
              Get Quote
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
        <div className="px-4 py-6 space-y-3">
          <a href="#home" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Home</a>
          <a href="#services" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Services</a>
          <a href="#projects" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Projects</a>
          <a href="#testimonials" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Testimonials</a>
          <a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">About</a>
          <a href="#contact" className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-center font-semibold">Get Quote</a>
        </div>
      </div>
    )}
  </nav>

  )
}

export default Navbar
