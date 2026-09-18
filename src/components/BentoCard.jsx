import React from 'react';
import { Globe, Target, Eye } from 'lucide-react';

const BentoCard = () => {
  const cards = [
    {
      title: "Services",
      description: "Discover our range of travel experiences and personalized journeys crafted just for you. From luxury getaways to adventure tours, we've got you covered.",
      icon: Globe,
      span: "col-span-full md:col-span-2 row-span-1"
    },
    {
      title: "About Us",
      image: "/images/traveler10.svg",
      span: "col-span-full md:col-span-1 md:row-span-2"
    },
    {
      title: "Mission",
      description: "Our commitment to exceptional travel experiences that go beyond the ordinary. We strive to create meaningful connections through travel.",
      icon: Target,
      span: "col-span-full sm:col-span-1 row-span-1"
    },
    {
      title: "Vision",
      description: "Shaping the future of travel with innovative experiences and sustainable practices. We envision a world where travel enriches lives.",
      icon: Eye,
      span: "col-span-full sm:col-span-1 row-span-1"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-left mb-12 md:mb-16 lg:mb-20">
          <p className="text-sm md:text-base text-[#0d2a49]/60 tracking-wide">What we offer</p>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#0d2a49]">
            Crafted for <span className="text-[#1791ab]">Every Journey</span>
          </h2>
          
        </div>

        {/* Mobile traveler — above cards */}
        <div className="mb-6 flex justify-center md:hidden">
          <img
            src="/images/traveler.svg"
            alt="Traveler"
            className="block w-[92%] max-w-[420px] h-auto object-contain !p-0 !m-0"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 md:gap-y-7 gap-x-4 md:gap-x-4 auto-rows-[220px] md:auto-rows-[210px]">
          {cards.map((card, index) => {
            if (card.image) {
              return (
                <div
                  key={index}
                  className={`${card.span} min-h-0 min-w-0 h-full w-full overflow-visible hidden md:flex items-center justify-center md:-translate-x-3`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="block w-full h-full object-contain !p-0 !m-0 scale-[1.1] md:scale-[1.15] origin-center"
                  />
                </div>
              );
            }
            return (
            <div
              key={index}
              className={`${card.span} ${card.title === "Services" ? "hidden md:block" : ""} relative overflow-hidden rounded-2xl md:rounded-3xl bento-card h-full min-h-0`}
              style={{ animationDelay: (index * 80) + 'ms' }}
            >
              {/* Corner dots — skeuomorphic screws */}
              <span className="bento-card-dot top left" aria-hidden="true"></span>
              <span className="bento-card-dot top right" aria-hidden="true"></span>
              <span className="bento-card-dot bottom left" aria-hidden="true"></span>
              <span className="bento-card-dot bottom right" aria-hidden="true"></span>

              <div className="relative z-10 h-full flex flex-col p-0">
                    <div className="flex items-center gap-4 md:gap-5 mb-3 md:mb-4 p-6 md:p-8 pb-0 md:pb-0">
                      <div className="bento-icon-badge shrink-0">
                        <card.icon className="w-5 h-5 md:w-6 md:h-6 bento-icon" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl md:text-3xl bento-card-title text-[#1791ab]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-[#0d2a49]/70 text-sm md:text-base leading-relaxed flex-grow line-clamp-4 md:line-clamp-none px-6 md:px-8 pb-6 md:pb-8">
                      {card.description}
                    </p>
              </div>
            </div>
            );
          })}
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

        /* ---------- Bento cards — skeuomorphic glass (matches hero cards) ---------- */
        .bento-card {
          --card-line: #0d2a4933;
          --card-dot-size: 8px;

          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 10%),
            linear-gradient(155deg, #fbfaf6 0%, #eef6f5 100%);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);

          border: 1px solid rgba(255, 255, 255, 0.7);
          border-bottom: 1px solid rgba(13, 42, 73, 0.18);

          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.85),
            inset 0 -3px 6px -3px rgba(13, 42, 73, 0.12),
            inset 2px 0 5px -4px rgba(255, 255, 255, 0.5),
            inset -2px 0 5px -4px rgba(13, 42, 73, 0.1),
            0 8px 8px rgba(13, 42, 73, 0.10),
            0 16px 14px rgba(13, 42, 73, 0.08);
        }

        /* Corner dots — skeuomorphic screws */
        .bento-card-dot {
          position: absolute;
          width: var(--card-dot-size, 8px);
          aspect-ratio: 1;
          border-radius: 25%;
          border: solid 1px var(--card-line, #0d2a4933);
          background-color: #ffffff;
          background-image: radial-gradient(circle at 50% 120%, rgba(13, 42, 73, 0.2), #ffffff);
          z-index: 5;
        }
        .bento-card-dot.top    { top: calc(var(--card-dot-size, 8px) * -0.5); }
        .bento-card-dot.bottom { bottom: calc(var(--card-dot-size, 8px) * -0.5); }
        .bento-card-dot.left   { left: calc(var(--card-dot-size, 8px) * -0.5); }
        .bento-card-dot.right  { right: calc(var(--card-dot-size, 8px) * -0.5); }

        /* Icon badge — circular glass (matches nav-icon-badge) */
        .bento-icon-badge {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: linear-gradient(155deg, rgba(255,255,255,0.9), rgba(220,240,245,0.7));
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.9),
            inset 0 -2px 4px -2px rgba(13, 42, 73, 0.14),
            0 2px 6px rgba(13, 42, 73, 0.18);
        }

        .bento-icon {
          color: #1791ab;
          stroke-width: 2;
          flex-shrink: 0;
        }

        /* Card title — Cream Cake display font */
        .bento-card-title {
          font-family: "Cream Cake", "Caveat", "Segoe Script", cursive;
          font-weight: normal;
          line-height: 1;
          letter-spacing: 0.01em;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
};

export default BentoCard;