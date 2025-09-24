"use client";

import React, { useState } from 'react';
import { Phone, Mail, Clock, Sparkles, Send, CheckCircle, ArrowRight, Zap, Shield, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: ''
        });
      }, 3000);
    }, 2000);
  };

  const services = [
    'Web Development',
    'E-commerce Solutions', 
    'Mobile App Development',
    'Digital Marketing',
    'Custom Software',
    'Other'
  ];

  const benefits = [
    { icon: Zap, title: "Lightning Fast", desc: "48-hour project kickoff guarantee" },
    { icon: Shield, title: "100% Secure", desc: "Bank-grade security & data protection" },
    { icon: Trophy, title: "Award Winning", desc: "Top-rated by Philippine businesses" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* SEO optimized heading structure */}
      <div className="text-center mb-16">
        <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 mr-2" />
          #1 Web Development Company in Philippines
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Turn Your Vision Into Reality
        </h2>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed max-w-4xl mx-auto">
          Join 500+ successful Philippine businesses who chose Astraeus Tech to 
          <span className="font-semibold text-white"> dominate their market online</span>
        </p>
        
        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
          From startups to enterprises - we build digital solutions that generate real ROI. 
          Your competitors are already online. Don't get left behind.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Sales Pitch & Contact Info */}
        <div className="space-y-8">
          {/* Value Propositions */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Philippine Businesses Choose Us
              </h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-blue-100 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 p-4 bg-white/20 backdrop-blur-sm rounded-lg border-l-4 border-yellow-400">
                <p className="text-sm text-blue-100">
                  <strong className="text-yellow-400">Limited Time:</strong> Get 30% off your first project + FREE hosting for 6 months. 
                  <span className="font-semibold text-white"> Only 5 slots left this month!</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch Today</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10">
                  <Phone className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-medium text-white">+63 976 259 4374</p>
                    <p className="text-sm text-blue-100">Free consultation call</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10">
                  <Mail className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-medium text-white">astraeus.tech.ph@gmail.com</p>
                    <p className="text-sm text-blue-100">24-hour response guarantee</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10">
                  <Clock className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-medium text-white">Mon-Sat 9AM-6PM PHT</p>
                    <p className="text-sm text-blue-100">Emergency support available</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now - It's Free
                </Button>
                <Button className="flex-1 bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Contact Form */}
        <Card className="bg-white/95 backdrop-blur-md border-white/30 shadow-2xl sticky top-8">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Get Your Free Quote
              </h3>
              <p className="text-gray-600">
                Tell us about your project and get a detailed proposal within 24 hours
              </p>
            </div>

            {isSubmitted ? (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Success!</strong> Your message has been sent. Our team will contact you within 2 hours during business hours.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Juan Dela Cruz"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/90"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+63 912 345 6789"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/90"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juan@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/90"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white/90"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/90"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project requirements, timeline, and budget range..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none bg-white/90"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-6 text-lg font-semibold shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get My Free Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-gray-500">
                  By submitting this form, you agree to receive communications from Astraeus Tech. 
                  We respect your privacy and won't spam you.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Trust Signals */}
      <div className="mt-16 text-center">
        <p className="text-sm text-blue-200 mb-6">Trusted by leading Philippine companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-lg font-bold text-white">200+ Projects</div>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-lg font-bold text-white">98% Success Rate</div>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-lg font-bold text-white">5-Star Reviews</div>
          </div>
          <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-lg font-bold text-white">24/7 Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;