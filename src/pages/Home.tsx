import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Smartphone, MessageCircle, Send } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
      title: 'Expert Team',
      description: 'Our skilled professionals deliver exceptional results with years of experience.'
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or attention to detail.'
    },
    {
      icon: <Award className="h-6 w-6 text-violet-500" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control ensure premium results every time.'
    },
    {
      icon: <Users className="h-6 w-6 text-rose-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-800/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
          <div className="text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              Welcome to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 animate-pulse">
                CasriDev Technologies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Transforming ideas into digital reality through innovative web development, 
              stunning design, mobile apps, and comprehensive IT solutions in Somaliland and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <Link
                to="/services"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 animate-bounce-gentle"
              >
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6 animate-pulse" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up animation-delay-800">
              <a
                href="https://wa.me/252654740397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="https://t.me/ahmedgadhle78"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Telegram
              </a>
            </div>
          </div>
        </div>
        {/* Floating elements with enhanced animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-float animation-delay-700"></div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive digital solutions tailored to elevate your business to new heights in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies.',
                gradient: 'from-blue-500 via-blue-600 to-indigo-600',
                image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🌐',
                delay: '0'
              },
              {
                title: 'App Development',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
                image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '📱',
                delay: '100'
              },
              {
                title: 'Graphic Design',
                description: 'Creative visual solutions that make your brand stand out.',
                gradient: 'from-purple-500 via-violet-600 to-purple-600',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🎨',
                delay: '200'
              },
              {
                title: 'IT Support',
                description: 'Reliable technical support to keep your systems running smoothly.',
                gradient: 'from-orange-500 via-red-500 to-pink-600',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: '🛠️',
                delay: '300'
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100 animate-slide-in-up`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl animate-bounce-gentle">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 font-bold text-xl group transition-all duration-300 animate-pulse-gentle"
            >
              View All Services
              <ArrowRight className="ml-3 h-6 w-6 text-indigo-600 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose CasriDev */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"> CasriDev?</span>
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              We combine technical expertise with creative innovation to deliver solutions that exceed expectations in Somaliland and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-in-left`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-indigo-100 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed', gradient: 'from-cyan-400 to-blue-500', delay: '0' },
              { number: '50+', label: 'Happy Clients', gradient: 'from-emerald-400 to-teal-500', delay: '200' },
              { number: '5+', label: 'Years Experience', gradient: 'from-pink-400 to-violet-500', delay: '400' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-scale-in`}
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className={`text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 animate-count-up`}>
                  {stat.number}
                </div>
                <div className="text-indigo-100 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Technology workspace"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Digital Presence?</h2>
          <p className="text-2xl text-cyan-100 mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            Let's discuss your project and create something amazing together. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
            <a
              href="https://wa.me/252654740397"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 animate-bounce-gentle"
            >
              Get Started Today
            </a>
            <Link
              to="/services"
              className="border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;