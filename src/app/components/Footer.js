import React from 'react'
import { Logo } from './Logo'
import { MapPin, Phone, Mail, Clock } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Logo size="w-12 h-12" />
                <div>
                  <span className="text-2xl font-bold text-white">Astreus Tech</span>
                  <div className="text-xs text-gray-400">Innovation Meets Security</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneering software solutions for Philippine businesses. We transform visions into secure digital realities with world-class technology and local expertise.
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Quezon City, Metro Manila, Philippines</span>
              </div>
              
              {/* Social Media Links */}
              <div className="flex gap-4">
                <a href="https://facebook.com/astreustech" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/astreustech" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/astreustech" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+63 917 123 4567</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>hello@astreustech.ph</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Mon-Sat 9AM-6PM PHT</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Astreus Tech. All rights reserved. 
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer