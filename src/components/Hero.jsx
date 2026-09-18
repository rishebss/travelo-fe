import React, { useEffect, useState } from 'react'
import { Sun } from 'lucide-react'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative flex min-h-screen w-full items-end md:items-center overflow-hidden pt-24 sm:pt-24 lg:pt-28 pb-10 sm:pb-20 lg:pb-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-28">

          {/* Left: headline + subtitle + CTA — bottom-aligned vertically on desktop */}
          <div
            className={`md:col-span-7 order-2 md:order-1 flex flex-col justify-end md:-mt-10 md:justify-end md:h-full mt-8 md:mt-0 transition-all duration-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <h1 className="text-4xl leading-[1.05] tracking-tight text-[#0d2a49] sm:text-6xl lg:text-6xl">
              Wander Beyond
              <br />
              Boundaries with <span className="text-[#1791ab]">Travelo</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#0d2a49]/60 sm:text-lg">
              From breathtaking and vibrant cultures, we craft unforgettable journeys for you.
            </p>

            {/* Category preview cards — below heading, hidden on mobile */}
            <div className="hidden sm:flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 mt-8 sm:mt-10">
              <Link to="/Resorts" className="hero-card w-full sm:w-auto">
                <div className="hero-card-inner">
                  <span className="hero-card-sheen"></span>
                  <span className="hero-card-dot top left"></span>
                  <span className="hero-card-dot top right"></span>
                  <div className="hero-card-top">
                    <span className="hero-card-label">Resorts</span>
                    <span className="hero-card-icon-wrap">
                      <Sun className="hero-card-icon" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="hero-card-img-wrap">
                    <img
                      src="/images/illu1.svg"
                      alt="Resorts beach getaway"
                      className="hero-card-img"
                    />
                  </div>
                </div>
              </Link>

              <Link to="/Packages" className="hero-card w-full sm:w-auto">
                <div className="hero-card-inner">
                  <span className="hero-card-sheen"></span>
                  <span className="hero-card-dot top left"></span>
                  <span className="hero-card-dot top right"></span>
                  <div className="hero-card-top">
                    <span className="hero-card-label">Packages</span>
                    <span className="hero-card-icon-wrap">
                      <GiEarthAfricaEurope className="hero-card-icon" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="hero-card-img-wrap">
                    <img
                      src="/images/illu3.svg"
                      alt="Packages mountain adventure"
                      className="hero-card-img"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: stacked photo collage — image on top in mobile */}
          <div
            className={`relative block md:col-span-5 order-1 md:order-2 transition-all duration-500 delay-100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="relative h-[300px] sm:h-[460px] md:h-[500px]">

              {/* Background illustration — blob, leaves, clouds, sun, plane, droplets */}
              <img
                src="/images/illu25.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-contain scale-[1.2]"
              />
            </div>
          </div>
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

        /* ---------- Hero category cards (Resorts / Packages) — skeuomorphic glass ---------- */
        .hero-card {
          display: inline-block;
          text-decoration: none;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.4s ease;
          filter: drop-shadow(0 10px 8px rgba(13, 42, 73, 0.12))
                  drop-shadow(0 22px 18px rgba(13, 42, 73, 0.10));
          will-change: transform;
        }
        .hero-card:hover {
          transform: translateY(-6px) rotate(0deg) scale(1.03);
          filter: drop-shadow(0 16px 12px rgba(13, 42, 73, 0.16))
                  drop-shadow(0 30px 24px rgba(13, 42, 73, 0.14));
        }

        .hero-card-inner {
          --card-line: #0d2a4933;
          --card-dot-size: 8px;

          position: relative;
          width: 100%;
          height: auto;
          min-height: 168px;
          overflow: hidden;
          border-radius: 14px;

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
            inset -2px 0 5px -4px rgba(13, 42, 73, 0.1);
        }
        @media (min-width: 640px) {
          .hero-card-inner {
            width: 268px;
            height: 188px;
            border-radius: 16px;
          }        }

        .hero-card-sheen {
          position: absolute;
          top: -50%;
          left: -25%;
          width: 45%;
          height: 220%;
          background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.55) 45%,
            rgba(255, 255, 255, 0.08) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(8deg);
          pointer-events: none;
          z-index: 4;
          transition: left 0.6s ease;
        }
        .hero-card:hover .hero-card-sheen {
          left: 90%;
        }

        .hero-card-dot {
          position: absolute;
          width: var(--card-dot-size, 8px);
          aspect-ratio: 1;
          border-radius: 25%;
          border: solid 1px var(--card-line, #0d2a4933);
          background-color: #ffffff;
          background-image: radial-gradient(circle at 50% 120%, rgba(13, 42, 73, 0.2), #ffffff);
          z-index: 5;
        }
        .hero-card-dot.top   { top: calc(var(--card-dot-size, 8px) * -0.5); }
        .hero-card-dot.left  { left: calc(var(--card-dot-size, 8px) * -0.5); }
        .hero-card-dot.right { right: calc(var(--card-dot-size, 8px) * -0.5); }

        .hero-card-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem 0.6rem;
        }
        @media (min-width: 640px) {
          .hero-card-top {
            padding: 1rem 1.15rem 0.7rem;
          }
        }

        .hero-card-label {
          font-weight: normal;
          font-size: 1.55rem;
          line-height: 1;
          letter-spacing: 0.01em;
          font-family: "Cream Cake", "Caveat", "Segoe Script", cursive;
          color: #1791ab;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
        }
        @media (min-width: 640px) {
          .hero-card-label {
            font-size: 1.95rem;
          }
        }

        .hero-card-icon-wrap {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: linear-gradient(155deg, rgba(255,255,255,0.9), rgba(220,240,245,0.7));
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.9),
            inset 0 -1px 2px rgba(13, 42, 73, 0.12),
            0 1px 3px rgba(13, 42, 73, 0.15);
        }
        @media (min-width: 640px) {
          .hero-card-icon-wrap {
            width: 40px;
            height: 40px;
          }
        }

        .hero-card-icon {
          width: 18px;
          height: 18px;
          color: #1791ab;
          stroke-width: 2;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .hero-card-icon {
            width: 21px;
            height: 21px;
          }
        }

        .hero-card-img-wrap {
          position: relative;
          bottom: 0;
          left: 0;
          right: 0;
          height: auto;
          width: 100%;
          z-index: 1;
        }
        @media (min-width: 640px) {
          .hero-card-img-wrap {
            position: absolute;
            height: 56%;
          }
        }

        .hero-card-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: center bottom;
          display: block;
        }
        @media (min-width: 640px) {
          .hero-card-img {
            height: 100%;
          }
        }

        /* ---------- Stacked polaroid collage ---------- */
        .collage-stack {
          position: absolute;
          inset: 0;
        }

        /* Plain white polaroid frame, natural paper shadow — no glass treatment */
        .polaroid {
          position: absolute;
          background: #ffffff;
          padding: 10px 10px 10px;
          border-radius: 4px;
          box-shadow:
            0 18px 30px -10px rgba(13, 42, 73, 0.28),
            0 6px 12px -4px rgba(13, 42, 73, 0.16);
        }

        .polaroid-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 1px;
        }

        .polaroid-top {
          left: 50%;
          top: 8px;
          width: 166px;
          height: 198px;
          transform: translateX(-50%) rotate(-1deg);
          z-index: 3;
        }
        .polaroid-left {
          left: 44px;
          bottom: 48px;
          width: 136px;
          height: 158px;
          transform: rotate(-4deg);
          z-index: 2;
        }
        .polaroid-right {
          right: 44px;
          bottom: 70px;
          width: 150px;
          height: 172px;
          transform: rotate(2deg);
          z-index: 4;
        }
        @media (min-width: 640px) {
          .polaroid-top   { width: 190px; height: 226px; }
          .polaroid-left  { width: 154px; height: 180px; }
          .polaroid-right { width: 170px; height: 196px; }
        }
        @media (min-width: 768px) {
          .polaroid-top   { width: 206px; height: 246px; }
          .polaroid-left  { width: 166px; height: 196px; }
          .polaroid-right { width: 186px; height: 212px; }
        }

        /* Torn-paper sticky note */
        .torn-note {
          position: absolute;
          left: 42%;
          bottom: -38px;
          z-index: 5;
          transform: translateX(-50%) rotate(-3deg);
          width: 168px;

          background: #ffffff;
          padding: 0.6rem 0.9rem 0.7rem;
          font-family: "Cream Cake", "Caveat", "Segoe Script", cursive;
          font-size: 1.1rem;
          line-height: 1.25;
          color: #0d2a49;

          clip-path: polygon(
            2% 8%, 10% 2%, 22% 6%, 34% 1%, 46% 5%, 58% 0%, 70% 4%, 82% 1%, 94% 6%, 100% 2%,
            98% 92%, 88% 98%, 76% 94%, 64% 99%, 52% 95%, 40% 100%, 28% 96%, 16% 99%, 6% 94%, 0% 98%
          );

          box-shadow:
            0 10px 18px -6px rgba(13, 42, 73, 0.24),
            0 3px 6px -2px rgba(13, 42, 73, 0.15);
        }
        @media (min-width: 640px) {
          .torn-note {
            bottom: -10px;
            width: 190px;
            font-size: 1.3rem;
            padding: 0.7rem 1.1rem 0.8rem;
          }
        }

        .torn-note-underline {
          width: 70px;
          height: 8px;
          margin-top: 2px;
          color: #1791ab;
          display: block;
        }
      `}</style>
    </section>
  )
}

export default Hero