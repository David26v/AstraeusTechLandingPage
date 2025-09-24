"use client";
import React from "react";
import {  Shield, CheckCircle, Database, Layers, Settings, MapPin,} from 'lucide-react';
import { Logo } from "../components/Logo";


const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              Proudly Philippine Company
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-transparent">
              About Astreus Tech
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong>Astreus Tech</strong> is a pioneering Philippine startup
            company that has been delivering innovative software solutions since
            early 2025. Based in the heart of the Philippines, we understand the
            unique needs of Filipino businesses and organizations.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We specialize in creating cutting-edge applications using the latest
            frameworks and technologies. Our recent developments include fully
            centralized systems with simple yet powerful management platforms,
            all designed with Philippine businesses in mind.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8 border-l-4 border-blue-600">
            <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Why Choose a Philippine-Based Tech Partner?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Local understanding of Philippine business requirements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Support for local payment gateways (GCash, PayMaya, PayMongo)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  Compliance with Philippine regulations and standards
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Same timezone support and communication</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            {[
              "Modern framework implementations",
              "Easy integration architecture",
              "Centralized management systems",
              "Philippine payment gateway integration",
              "24/7 technical support in Filipino & English",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 border-2 border-blue-200 shadow-2xl">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow">
                <Database className="w-10 h-10 text-blue-600 mb-2" />
                <span className="text-sm font-semibold text-gray-700">
                  Database
                </span>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow">
                <Layers className="w-10 h-10 text-cyan-500 mb-2" />
                <span className="text-sm font-semibold text-gray-700">
                  Scalable
                </span>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow">
                <Settings className="w-10 h-10 text-purple-600 mb-2" />
                <span className="text-sm font-semibold text-gray-700">
                  Customizable
                </span>
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow">
                <Shield className="w-10 h-10 text-green-500 mb-2" />
                <span className="text-sm font-semibold text-gray-700">
                  Secure
                </span>
              </div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6">
              <Logo size="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Centralized System
              </h3>
              <p className="text-gray-600">
                Unified management platform for Philippine enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
