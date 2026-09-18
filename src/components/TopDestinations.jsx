import React from 'react';

import { Link } from 'react-router-dom';
import AccordionGallery from './AccordionGallery';

const destinations = [
  {
    id: 1,
    name: "Kochi, Kerala",
    image: "https://i.pinimg.com/736x/9c/64/0a/9c640aa74980dad3ccea92afee1893ff.jpg",
    description: "Tropical paradise with stunning beaches and rich culture",
    link: "#"
  },
  {
    id: 2,
    name: "Kovalam, Kerala",
    image: "https://i.pinimg.com/736x/01/b5/17/01b517f92a5d3f9542aba237e9674af7.jpg",
    description: "Iconic buildings and breathtaking sunsets",
    link: "#"
  },
  {
    id: 3,
    name: "Shimla, Himachal Pradesh",
    image: "https://i.pinimg.com/736x/8b/32/56/8b3256fc93ae69b399c69d67ef42a3e4.jpg",
    description: "Majestic temples and world-class skiing destinations",
    link: "#"
  },
  {
    id: 4,
    name: "Hyderabad, Telangana",
    image: "https://i.pinimg.com/736x/32/95/de/3295de38423d9f941b925289ada91c47.jpg",
    description: "Historic city of pearls, biryani, and magnificent Qutb Shahi heritage",
    link: "#"
  },
  {
    id: 5,
    name: "Anjuna, Goa",
    image: "https://i.pinimg.com/736x/ef/d7/9e/efd79e11ed693ec29d0dc4e25ee365e0.jpg",
    description: "Best party point in india",
    link: "#"
  }
];

const TopDestinations = () => {
  return (
    <section className="relative mt-12 md:mt-0 pt-1 pb-16 md:pt-6 md:pb-24 lg:pt-8 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-4 md:mb-6 lg:mb-8 flex justify-start">
          <img
            src="/images/coastdrawer.svg"
            alt=""
            className="h-24 md:h-24 lg:h-32 w-auto flex-shrink-0"
            style={{ filter: 'invert(43%) sepia(48%) saturate(611%) hue-rotate(154deg) brightness(96%) contrast(91%)' }}
            aria-hidden="true"
          />
        </div>

        {/* Accordion Gallery */}
        <AccordionGallery
          items={destinations.map(d => ({
            image: d.image,
            label: d.name,
            link: d.link
          }))}
          defaultIndex={0}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#1791ab"
          overlayColor="#0d2a49"
          textColor="#ffffff"

          showLabels
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
        />

        {/* View All Link */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-12">
          <Link
            to="/Packages"
            className="group inline-flex items-center gap-2 md:gap-3 transition-all duration-300"
          >
            <span className="text-4xl md:text-5xl tracking-wide text-[#1791ab] transition-colors duration-300" style={{ fontFamily: '"Cream Cake", "Caveat", "Segoe Script", cursive' }}>
              <span className="md:hidden">All Packages</span>
              <span className="hidden md:inline">View All Packages</span>
            </span>
            <img src="/images/right-arrow.svg" alt="" className="w-12 h-12 md:w-14 md:h-14 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style>{`
        @font-face {
          font-family: "Cream Cake";
          src: url("/Cream%20Cake.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* CTA button — glass pill */
        .destination-cta {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);

          box-shadow: 0 8px 32px rgba(13, 42, 73, 0.12);

          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          will-change: transform;
        }
        .destination-cta:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(13, 42, 73, 0.18);
        }
      `}</style>
    </section>
  );
};

export default TopDestinations;