import React from 'react';
import { IoMailUnread } from 'react-icons/io5';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Packages', to: '/Packages' },
    { name: 'Resorts', to: '/Resorts' },
    { name: 'About', to: '/About' },
    { name: 'Contact', to: '/Contact' },
  ];

  const socialLinks = [
    { icon: '/images/instagram.svg', href: 'https://instagram.com', name: 'Instagram', imgClass: 'w-8 h-8' },
    { icon: '/images/facebook.svg', href: 'https://facebook.com', name: 'Facebook', imgClass: 'w-6 h-6' },
    { icon: '/images/x.svg', href: 'https://x.com', name: 'X (Twitter)', imgClass: 'w-4 h-4' },
  ];

  return (
    <footer className="relative bg-[#fbfaf6]/70 backdrop-blur-md border-t border-[#0d2a49]/10 text-[#0d2a49] pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#eef6f5]/80 via-transparent to-transparent"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-[#1791ab]/10 via-[#eef6f5]/50 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-[#1791ab]/10 via-[#eef6f5]/50 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/travelologo.svg" alt="Travelo Logo" className="w-16 h-12 mt-1" />
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl text-[#1791ab] tracking-wide font-['Cream_Cake',cursive] leading-tight">Travelo</h2>
                <p className="text-xs text-[#0d2a49]/55 leading-tight">Wander Beyond Boundaries</p>
              </div>
            </div>
            <p className="text-[#0d2a49]/60 leading-relaxed">
              Crafting unforgettable travel experiences since 2010. Let's explore the world together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-[#0d2a49]">Quick Links</h3>
            <span className="block h-0.5 w-10 rounded-full bg-[#1791ab]/60 mb-6 mt-2"></span>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.to} className="text-[#0d2a49]/75 hover:text-[#1791ab] transition-colors duration-300 flex items-center">
                    <img src="/images/right-arrow.svg" alt="" aria-hidden="true" className="w-8 h-8 mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-[#0d2a49]">Contact Us</h3>
            <span className="block h-0.5 w-10 rounded-full bg-[#1791ab]/60 mb-6 mt-2"></span>
            <ul className="space-y-4 text-[#0d2a49]/75">
              <li className="flex items-start">
                <FaMapLocationDot className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[#1791ab]" />
                <span>Dhanya Rd, Nettoor, Maradu, Ernakulam, Kochi, Kerala 682040</span>
              </li>
              <li className="flex items-center">
                <IoMailUnread className="w-5 h-5 mr-3 text-[#1791ab]" />
                <a href="mailto:info@travelo.com" className="hover:text-[#1791ab] transition-colors duration-300">info@travelo.com</a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3 text-[#1791ab]" />
                <a href="tel:+917994631745" className="hover:text-[#1791ab] transition-colors duration-300">+91 79946 31745</a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-[#0d2a49]">Stay Connected</h3>
            <span className="block h-0.5 w-10 rounded-full bg-[#1791ab]/60 mb-6 mt-2"></span>
            
           
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="grid place-items-center w-[38px] h-[38px] rounded-full text-[#1791ab] bg-gradient-to-br from-white/90 to-[#dcf0f5]/70 border border-white/70 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.9),inset_0_-2px_4px_-2px_rgba(13,42,73,0.14),0_2px_6px_rgba(13,42,73,0.18)] hover:scale-110 active:scale-95 transition-transform duration-300"
                >
                  <img src={social.icon} alt="" aria-hidden="true" className={social.imgClass} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#0d2a49]/10 text-center text-[#0d2a49]/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Travelo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
