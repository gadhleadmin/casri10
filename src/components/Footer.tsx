import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-3 rounded-2xl shadow-lg">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CasriDev
                </h3>
                <p className="text-sm text-indigo-200">Technologies</p>
              </div>
            </div>
            <p className="text-indigo-100 leading-relaxed">
              Empowering businesses with cutting-edge web development, mobile apps, design, and IT solutions that drive success in the digital age.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600', link: '#' },
                { icon: Twitter, color: 'hover:bg-sky-500', link: '#' },
                { icon: Linkedin, color: 'hover:bg-blue-700', link: '#' },
                { icon: Instagram, color: 'hover:bg-pink-600', link: '#' },
                { icon: Youtube, color: 'hover:bg-red-600', link: '#' },
                { icon: MessageCircle, color: 'hover:bg-green-600', link: 'https://wa.me/252654740397' },
                { icon: Send, color: 'hover:bg-blue-500', link: 'https://t.me/ahmedgadhle78' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/10 backdrop-blur-sm p-3 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 border border-white/20`}
                  aria-label={social.icon.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'News & Events', path: '/news' },
                { name: 'About Us', path: '/about' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-indigo-200 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'App Development',
                'Graphic Design',
                'IT Support'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-2 transform inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="mailto:info@casriev.com"
                  className="text-indigo-200 group-hover:text-white transition-colors duration-300"
                >
                  info@casriev.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="https://wa.me/252654740397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-200 group-hover:text-white transition-colors duration-300"
                >
                  WhatsApp: +252 65 474 0397
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Send className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="https://t.me/ahmedgadhle78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-200 group-hover:text-white transition-colors duration-300"
                >
                  Telegram
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-r from-pink-500 to-violet-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-indigo-200 group-hover:text-white transition-colors duration-300">
                  Hargeisa, Somaliland
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-indigo-200">
              Copyright © {currentYear} CasriDev Technologies. All rights reserved.
            </p>
            <p className="text-indigo-200">
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">CasriDev</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;