import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-8 overflow-hidden">
      {/* Subtle decorative elements */}
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Image Section - Left */}
          <div className="w-full lg:w-[45%] relative group">
            <div className="relative overflow-hidden rounded-3xl transform transition-all duration-700 group-hover:scale-[1.02] max-w-full lg:max-w-[75%] mx-auto">
              <div className="relative rounded-3xl p-1">
                <img 
                  src="/images/prop.svg" 
                  alt="Travel adventure" 
                  className="w-full h-full object-cover aspect-[4/3] rounded-3xl relative z-10"
                />
                
                
              </div>
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="w-full lg:w-[55%]">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-4xl sm:text-6xl lg:text-6xl leading-[1.05] tracking-tight text-[#0d2a49] mb-8">
                We Craft{' '}
                <span className="text-[#1791ab]">Unforgettable</span>
                <br />Travel Experiences
              </h2>
              
              <p className="text-xl text-[#0d2a49]/70 mb-8 leading-relaxed">
                Founded in 2024, we've been transforming travel dreams into reality for over a decade. Our team of passionate explorers and local experts create journeys that go beyond the ordinary.
              </p>
              

              
              <div className="mt-7">
                <Link
                  to="/About"
                  className="group inline-flex items-center gap-2 md:gap-3 transition-all duration-300"
                >
                  <span className="text-4xl md:text-5xl tracking-wide text-[#1791ab] transition-colors duration-300" style={{ fontFamily: '"Cream Cake", "Caveat", "Segoe Script", cursive' }}>
                    About Us
                  </span>
                  <img src="/images/right-arrow.svg" alt="" className="w-12 h-12 md:w-14 md:h-14 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;