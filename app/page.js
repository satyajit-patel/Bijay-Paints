'use client'
import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Palette, Shield, Users, Star, ChevronRight, Menu, X, Award, CheckCircle, Sparkles, ArrowRight, Mail } from 'lucide-react';

export default function BijayPaintsWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const paintColors = [
    { name: "Royal Blue", color: "#1E40AF", price: "₹850", category: "Premium" },
    { name: "Ocean Teal", color: "#0891B2", price: "₹780", category: "Standard" },
    { name: "Rose Pink", color: "#EC4899", price: "₹920", category: "Premium" },
    { name: "Sunset Orange", color: "#F97316", price: "₹680", category: "Standard" },
    { name: "Forest Green", color: "#059669", price: "₹750", category: "Standard" },
    { name: "Pure White", color: "#FFFFFF", price: "₹650", category: "Basic" },
    { name: "Charcoal Gray", color: "#374151", price: "₹720", category: "Standard" },
    { name: "Lavender Purple", color: "#8B5CF6", price: "₹890", category: "Premium" },
    { name: "Golden Yellow", color: "#F59E0B", price: "₹710", category: "Standard" },
    { name: "Deep Red", color: "#DC2626", price: "₹800", category: "Premium" },
    { name: "Sky Blue", color: "#3B82F6", price: "₹760", category: "Standard" },
    { name: "Mint Green", color: "#10B981", price: "₹690", category: "Standard" }
  ];

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Finishes",
      description: "Professional custom paint finishes tailored to your unique style and preferences",
      features: ["Texture Painting", "Designer Walls", "Artistic Finishes"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Paint Restoration",
      description: "Expert restoration services to bring back the original beauty of your painted surfaces",
      features: ["Surface Repair", "Color Matching", "Protective Coating"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Color Consultation",
      description: "Professional color advice to help you choose the perfect palette for your space",
      features: ["Color Psychology", "Trend Analysis", "Custom Palettes"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Surface Preparation",
      description: "Thorough surface preparation ensuring long-lasting and flawless paint application",
      features: ["Prime Coating", "Surface Cleaning", "Quality Check"]
    }
  ];

  const features = [
    { icon: <Award className="w-5 h-5" />, text: "Premium Berger Paints" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Professional Installation" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Color Matching Service" },
    { icon: <Shield className="w-5 h-5" />, text: "Quality Guarantee" },
    { icon: <Users className="w-5 h-5" />, text: "Experienced Team" },
    { icon: <Star className="w-5 h-5" />, text: "Competitive Pricing" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "15%", label: "Max Savings", icon: <Star className="w-6 h-6" /> },
    { number: "60+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "Satisfaction Rate", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const details = formData.get('details');
    
    const subject = `Quote Request from ${name}`;
    const body = `Hello,

I would like to request a quote for painting services.

Name: ${name}
Phone: ${phone}
Service Required: ${service}
Project Details: ${details}

Please contact me at your earliest convenience.

Thank you!`;

    const mailtoLink = `mailto:satyajitpatel770001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  BIJAY PAINTS
                </h1>
                <p className="text-sm text-gray-400">Since 1960 • Paint your imagination</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  className={`capitalize font-medium transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-pink-400 border-b-2 border-pink-400' 
                      : 'text-gray-300 hover:text-pink-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <button 
              className="md:hidden text-gray-300 hover:text-pink-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700 bg-slate-800/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item}`} 
                    className="capitalize text-gray-300 hover:text-pink-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Save Up To 15% This Month
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transform your house into a 
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> home</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With our professional house painting services, we bring quality, creativity, and excellence to every project. Trusted since 1960.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <a href="#contact" className="flex items-center">
                    Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </button>
                <a href="https://wa.me/919040503671" target="_blank" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center">
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 shadow-2xl border border-slate-600">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Paint Store</h3>
                  <p className="text-gray-400">Your trusted painting partner since 1960</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 p-4 rounded-xl text-center border border-slate-500">
                      <div className="text-pink-400 mb-2 flex justify-center">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Colors Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-slate-800 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Premium Paint Collection</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our extensive range of premium colors from Berger Paints with competitive pricing and professional quality
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {paintColors.map((paint, index) => (
              <div key={index} className="bg-slate-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-600">
                <div 
                  className="h-32 w-full relative"
                  style={{ backgroundColor: paint.color }}
                >
                  {paint.color === "#FFFFFF" && (
                    <div className="absolute inset-0 border-2 border-gray-300"></div>
                  )}
                  <div className="absolute top-2 right-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                      paint.category === 'Premium' ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' :
                      paint.category === 'Standard' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                    }`}>
                      {paint.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2">{paint.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Per Liter</span>
                    <span className="text-lg font-bold text-pink-400">{paint.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold shadow-xl">
              <Star className="w-5 h-5 mr-2" />
              Special Bulk Pricing Available - Contact Us for Details
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive painting solutions with the highest quality materials and expert craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-500 group hover:border-pink-400">
                <div className="text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Bijay Paints?</h2>
              <p className="text-xl text-gray-400 mb-8">
                With over 60 years of experience and commitment to excellence, we deliver superior painting solutions for all your needs.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                    <div className="text-pink-400">{feature.icon}</div>
                    <span className="text-gray-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-2xl shadow-2xl border border-slate-500">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Limited Time Offer
                </div>
                <h3 className="text-3xl font-bold text-white">Save Up To 15%</h3>
                <p className="text-gray-400">On all premium paint collections</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Interior Painting</span>
                  <span className="text-pink-400 font-bold text-lg">15% OFF</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-600">
                  <span className="text-gray-300 font-medium">Exterior Painting</span>
                  <span className="text-pink-400 font-bold text-lg">12% OFF</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-300 font-medium">Commercial Projects</span>
                  <span className="text-pink-400 font-bold text-lg">10% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Bijay Paints</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Established in 1960 with a vision to transform spaces through quality painting solutions, we have been serving the community with dedication and expertise for over six decades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl shadow-xl border border-slate-500">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quality Assured</h3>
              <p className="text-gray-400 leading-relaxed">We use only premium Berger paints and maintain the highest quality standards in every project we undertake.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl shadow-xl border border-slate-500">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-400 leading-relaxed">Our skilled professionals bring over 60 years of combined experience to deliver exceptional results for every client.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl shadow-xl border border-slate-500">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Satisfaction Guaranteed</h3>
              <p className="text-gray-400 leading-relaxed">We ensure complete customer satisfaction with quality workmanship and comprehensive warranty on all our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-gray-400">Ready to transform your space? Let's discuss your painting needs and provide you with a customized solution.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:satyajitpatel770001@gmail.com" 
                className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                satyajitpatel770001@gmail.com
              </a>
              <span className="text-gray-500 hidden sm:block">|</span>
              <a 
                href="https://wa.me/919040503671" 
                target="_blank"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: 9040503671
              </a>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-2xl shadow-2xl border border-slate-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">Service Required</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" 
                  required
                >
                  <option value="">Select a service</option>
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Commercial Painting</option>
                  <option>Color Consultation</option>
                  <option>Paint Restoration</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">Project Details</label>
                <textarea
                  name="details"
                  rows="4"
                  placeholder="Tell us about your project, preferred colors, timeline, etc."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                ></textarea>
              </div>
              
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Send Quote Request via Email
                </button>
                <p className="text-center text-sm text-gray-400">
                  We'll get back to you within 24 hours with a detailed quote. No hidden charges!
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-16 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl shadow-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    BIJAY PAINTS
                  </h3>
                  <p className="text-sm text-gray-400">Since 1960</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for all painting needs. Quality, reliability, and excellence in every project for over 60 years.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Interior Painting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Exterior Painting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Commercial Painting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Color Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Home</a></li>
                <li><a href="#services" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Services</a></li>
                <li><a href="#gallery" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Gallery</a></li>
                <li><a href="#about" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />About Us</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" />Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                  <Phone className="w-5 h-5 text-pink-400" />
                  <div>
                    <div className="font-medium text-white">9437133343</div>
                    <div className="text-sm">Primary Contact</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                  <Phone className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="font-medium text-white">9040503671</div>
                    <div className="text-sm">Alternative Contact</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-slate-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <div className="font-medium text-white">Our Location</div>
                    <div className="text-sm">Near NTPC Medical College, Banadurga Vihar, Sundargarh - 770020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2025 Bijay Paints. All rights reserved.</p>
                <p className="text-sm">Designed with care for quality painting solutions.</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://wa.me/9040503671" target="_blank" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#contact" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}