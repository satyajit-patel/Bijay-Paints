import React, { useState } from 'react';
import { Phone, MapPin, Clock, Palette, Shield, Users, Star, ChevronRight, Menu, X } from 'lucide-react';

export default function BijayPaintsWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Finishes",
      description: "Professional custom paint finishes tailored to your unique style and preferences"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Paint Restoration",
      description: "Expert restoration services to bring back the original beauty of your painted surfaces"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Color Consultation",
      description: "Professional color advice to help you choose the perfect palette for your space"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Surface Preparation",
      description: "Thorough surface preparation ensuring long-lasting and flawless paint application"
    }
  ];

  const features = [
    "Premium Berger Paints",
    "Professional Installation",
    "Color Matching Service",
    "Quality Guarantee",
    "Experienced Team",
    "Competitive Pricing"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">BIJAY PAINTS</h1>
                <p className="text-sm text-gray-600">Since 1960 • Paint your imagination</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Save Up To 15%
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Transform your house into a 
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> home</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With our professional house painting services, we bring quality, creativity, and excellence to every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Get Free Quote
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-pink-600 hover:text-pink-600 transition-colors">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Paint Store</h3>
                    <p className="text-gray-600">Your trusted painting partner</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-600">Projects Done</div>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600">15%</div>
                      <div className="text-sm text-gray-600">Max Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive painting solutions with the highest quality materials and expert craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:border-pink-200">
                <div className="text-pink-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Bijay Paints?</h2>
              <p className="text-xl text-gray-600 mb-8">
                With decades of experience and commitment to excellence, we deliver superior painting solutions for all your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Special Offer
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Save Up To 15%</h3>
                <p className="text-gray-600">On all premium paint collections</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">Interior Painting</span>
                  <span className="text-pink-600 font-semibold">15% OFF</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">Exterior Painting</span>
                  <span className="text-pink-600 font-semibold">12% OFF</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Commercial Projects</span>
                  <span className="text-pink-600 font-semibold">10% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Bijay Paints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established with a vision to transform spaces through quality painting solutions, we have been serving the community with dedication and expertise for years.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600">We use only premium Berger paints and maintain the highest quality standards</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our skilled professionals bring years of experience to every project</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We ensure complete customer satisfaction with every project we undertake</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your space? Contact us for a free consultation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                  <p className="text-gray-600">9437133343</p>
                  <p className="text-gray-600">9040503671</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-600">Near NTPC Medical College,</p>
                  <p className="text-gray-600">Banadurga Vihar, Sundargarh - 770020</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Request a Quote</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Phone Number" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Commercial Painting</option>
                    <option>Color Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" rows={4} placeholder="Tell us about your project"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BIJAY PAINTS</h3>
                  <p className="text-sm text-gray-400">Since 1960</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for all painting needs. Quality, reliability, and excellence in every project.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Interior Painting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Exterior Painting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Commercial Painting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Color Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-pink-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-pink-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>9437133343</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>9040503671</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Near NTPC Medical College, Banadurga Vihar, Sundargarh - 770020</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bijay Paints. All rights reserved. | Designed with care for quality painting solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}