import React from 'react'
import { Logo } from '../components/Logo'
import { ArrowRight, Eye, Lightbulb, Code, Shield, MapPin, Sparkles } from 'lucide-react';


const HeroSection = () => {
  return (
    
    <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Logo Animation */}
    <div className="mb-8 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <Logo size="w-32 h-32" />
      </div>
    </div>

    {/* Philippine Flag Colors Badge */}
    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
      <div className="flex gap-1">
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
      </div>
      <span className="text-sm font-semibold text-gray-700">Proudly Philippine-Based</span>
      <MapPin className="w-4 h-4 text-blue-600" />
    </div>

    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
        Innovation Meets
      </span>
      <br />
      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
        Security & Excellence
      </span>
    </h1>
    
    <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
      Pioneering custom software solutions for Philippine businesses. 
      We transform your vision into bulletproof digital innovations with world-class technology.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2">
        <Sparkles className="w-5 h-5" />
        Start Your Project
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="group border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2">
        <Eye className="w-5 h-5" />
        View Live Demos
      </button>
    </div>

    {/* Key Features Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">Innovation First</h3>
        <p className="text-gray-600 text-sm">Cutting-edge solutions with modern frameworks</p>
      </div>
      <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
          <Code className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">Easy Integration</h3>
        <p className="text-gray-600 text-sm">Seamless integration with existing systems</p>
      </div>
      <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
        <div className="bg-gradient-to-br from-green-500 to-teal-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">Enterprise Security</h3>
        <p className="text-gray-600 text-sm">Military-grade protection for your data</p>
      </div>
    </div>
  </div>

  )
}

export default HeroSection
