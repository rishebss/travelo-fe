import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="bg-[linear-gradient(to_bottom,#fbfaf6_0%,#eef6f5_100%)] min-h-screen overflow-x-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-10 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#0d2a49] mb-8">
              About <span className="text-[#1791ab]">Travelo</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0d2a49]/70 leading-relaxed max-w-3xl">
              Redefining travel and tourism through innovation and excellence since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pb-16 md:pb-24 pt-0">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#0d2a49]/70 leading-relaxed mb-6">
                Travelo began its journey in 2024 with a vision to redefine travel and tourism through innovation and excellence. What started as a passion project has now grown into a trusted name in both the tourism and digital marketing industries.
              </p>
              <p className="text-[#0d2a49]/70 leading-relaxed mb-6">
                Over the years, we've proudly served 10+ lakh happy customers, offering unforgettable travel experiences across Kerala. Today, we manage and operate 10 unique resorts in some of the most scenic destinations, delivering comfort, adventure, and memorable moments to every guest.
              </p>
              <p className="text-[#0d2a49]/70 leading-relaxed">
                But our journey doesn't stop there. As a growing brand-building and resort management company, we focus on expanding and elevating hospitality brands through strategic digital marketing, branding, and operational excellence.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-md order-1 md:order-2">
              <img
                src="/images/Traveling-rafiki.svg"
                alt="Travelers exploring destinations with Travelo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-16 md:pb-24 pt-0">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
         

          {/* Tourism Services */}
          <div className="mb-20">
            <div className="flex items-center mb-14">
              <div className="bg-[linear-gradient(155deg,rgba(255,255,255,0.9),rgba(220,240,245,0.7))] p-3 rounded-full mr-4 text-[#1791ab] border border-white/70 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_4px_8px_rgba(13,42,73,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0d2a49] leading-[1.05] tracking-tight">Tourism & Hospitality Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Resort Management: Operating and managing 10+ unique resorts across Kerala with a focus on quality, comfort, and customer satisfaction.",
                "Customized Tour Packages: Curated travel experiences for families, couples, groups, and solo travelers.",
                "Adventure Tourism: Activities like trekking, skydiving, camping, and more to add thrill to your journeys.",
              ].map((service, index) => (
                <div key={index} className="bg-[linear-gradient(155deg,#fbfaf6_0%,#eef6f5_100%)] p-6 rounded-md border border-white/70 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_6px_6px_rgba(13,42,73,0.08)] hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2 text-[#0d2a49]">{service.split(':')[0]}</h4>
                  <p className="text-[#0d2a49]/60">{service.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div>
            <div className="flex items-center mb-14">
              <div className="bg-[linear-gradient(155deg,rgba(255,255,255,0.9),rgba(220,240,245,0.7))] p-3 rounded-full mr-4 text-[#1791ab] border border-white/70 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_4px_8px_rgba(13,42,73,0.15)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0d2a49] leading-[1.05] tracking-tight">Digital Marketing & Branding Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Social Media Management: Strategy, content creation, and account handling for Instagram, Facebook, and more.",
                "Meta Advertising: High-performance ad campaigns on Facebook and Instagram to boost visibility and bookings.",
                "Poster & Video Creation: Engaging visual content tailored for promotions and storytelling.",
                "Website Development: Fast, modern websites built for resorts, hotels, and tourism businesses.",
                "Branding & Identity: Logo design, brand strategy, and creative identity development for hospitality businesses.",
                "Influencer Marketing: Collaboration with travel influencers to expand brand reach."
              ].map((service, index) => (
                <div key={index} className="bg-[linear-gradient(155deg,#fbfaf6_0%,#eef6f5_100%)] p-6 rounded-md border border-white/70 shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_6px_6px_rgba(13,42,73,0.08)] hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2 text-[#0d2a49]">{service.split(':')[0]}</h4>
                  <p className="text-[#0d2a49]/60">{service.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Footer />

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </motion.div>
  );
};

export default About;