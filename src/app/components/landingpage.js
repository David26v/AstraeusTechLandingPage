'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Cpu, Globe, ArrowRight, Menu, X, Star, Users, Trophy, Zap, Lightbulb, Shield, CheckCircle, Lock, Eye, ShoppingCart, Database, Layers, Settings, MapPin, Phone, Mail, Clock, ExternalLink, Award, Sparkles, TrendingUp, Heart } from 'lucide-react';
import { projects } from '../data/project';
import { testimonials } from '../data/testimonials';
import { Logo } from './Logo';
import Footer from './Footer';
import AboutSection from '../sections/AboutSection';
import ProjectSection from '../sections/ProjectSection';
import ContactUs from '../sections/ContactUs';
import Navbar from './Navbar';
import Testimonials from '../sections/Testimonials';
import ServiceSection from '../sections/ServiceSection';
import SecuritySection from '../sections/SecuritySection';
import { services } from '../data/services';
import HeroSection from '../sections/HeroSection';
import ProjectSectionFeatured from '../sections/ProjectSection';

export default function AstreusTechLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 overflow-hidden">
      {/* Navigation */}

      <Navbar
        isMenuOpen = {isMenuOpen }
        setIsMenuOpen = {setIsMenuOpen}
        scrollY ={scrollY}
      />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>


        <HeroSection/>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-600" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <ServiceSection
          services = {services}
        />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <ProjectSectionFeatured
          projects ={projects}
        />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500">
        <Testimonials 
          testimonials ={testimonials}
          activeTestimonial={activeTestimonial}
        />
      </section>

  

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
       <AboutSection/>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
       <SecuritySection/>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500">
        <ContactUs/>
      </section>

      <Footer/>
    </div>
  );
}