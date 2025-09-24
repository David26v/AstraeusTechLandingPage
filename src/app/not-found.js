// app/not-found.js
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { Home, ArrowLeft, Mail, AlertTriangle, ExternalLink } from "lucide-react";

const NotFoundPage = () => {
  const router = useRouter();

  // Optional: Auto-redirect after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  const helpLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/#projects", icon: ExternalLink },
    { name: "About", href: "/#about", icon: ExternalLink },
    { name: "Contact", href: "/#contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header with Logo */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={180}
          height={45}
          className="h-10 w-auto"
          priority
        />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold text-red-700">
              Page Not Found
            </span>
          </div>

          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            The page you're looking for might have been removed, had its name changed, 
            or is temporarily unavailable. Don't worry, we'll help you get back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => router.push("/")}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Go to Homepage
            </button>
            <button
              onClick={() => router.back()}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </div>

        {/* Help Links Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <div
                  key={index}
                  onClick={() => router.push(link.href)}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-600 transform hover:-translate-y-2 border border-gray-100 cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {link.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Still Need Help?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our support team is here to assist you. Get in touch and we'll help you find what you're looking for.
              </p>
              <a
                href="mailto:support@yourcompany.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold group"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Your Company Name. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting to homepage in 10 seconds...
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;