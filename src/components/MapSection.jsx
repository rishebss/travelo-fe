import React from 'react';

const MapSection = () => {
  return (
    <section className="relative py-16 md:py-16 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto">
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#0d2a49] mb-4">
            Visit <span className="text-[#1791ab]">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-[#0d2a49]/70 max-w-3xl leading-relaxed">
            Find your next adventure with us. Visit our office
            at Dhanya Rd, Nettoor, Maradu, Ernakulam, Kochi, Kerala 682040.
          </p>
        </div>
        <div className="h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-[0_10px_8px_rgba(13,42,73,0.12),0_22px_18px_rgba(13,42,73,0.10)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.076767599269!2d76.3155304!3d9.927564700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087254ef827b75%3A0xf703f9b9c2ef085d!2sDhanya%20Rd%2C%20Nettoor%2C%20Maradu%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682040!5e0!3m2!1sen!2sin!4v1789561116474!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Explore Wings office location"
            className="w-full h-full"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
