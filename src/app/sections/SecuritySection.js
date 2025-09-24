import React from 'react'
import { Lock, Shield, CheckCircle, Eye, Award, Settings } from 'lucide-react';

const SecuritySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-2xl">
        <Shield className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Security at Our Core
      </h2>
      <p className="text-xl text-blue-200 max-w-3xl mx-auto">
        Every line of code is crafted with security-first principles, ensuring your digital assets remain protected.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: <Lock className="w-8 h-8" />, title: "End-to-End Encryption", desc: "Military-grade encryption for all data transmission" },
        { icon: <Shield className="w-8 h-8" />, title: "Zero-Trust Architecture", desc: "Never trust, always verify security model" },
        { icon: <CheckCircle className="w-8 h-8" />, title: "Multi-Factor Authentication", desc: "Advanced MFA implementation for all systems" },
        { icon: <Eye className="w-8 h-8" />, title: "Real-Time Monitoring", desc: "24/7 threat detection and response" },
        { icon: <Award className="w-8 h-8" />, title: "Compliance Ready", desc: "Meet Philippine and international standards" },
        { icon: <Settings className="w-8 h-8" />, title: "Regular Updates", desc: "Continuous security patches and improvements" }
      ].map((item, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105">
          <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-blue-200">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default SecuritySection
