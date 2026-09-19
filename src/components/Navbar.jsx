import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Transparent over the hero (no border); glass + border once scrolled past it
  useEffect(() => {
    const onScroll = () => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      setIsScrolled(y > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Packages', to: '/Packages' },
    { name: 'Resorts', to: '/Resorts' },
    { name: 'About', to: '/About' },
    { name: 'Contact', to: '/Contact' }
  ]

  const navClasses = 'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b'

  const navStyle = {
    background: isScrolled
      ? '#e8f3ef'
      : '#fbfaf6',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
    boxShadow: isScrolled
      ? '0 4px 12px -4px rgba(13,42,73,0.16)'
      : 'none',
    borderBottom: '1px solid transparent',
  }

  const linkColor = isScrolled ? 'text-[#0d2a49]' : 'text-[#0d2a49]'
  const logoColor = isScrolled ? 'text-[#1791ab]' : 'text-[#1791ab]'
  const taglineColor = isScrolled ? 'text-[#0d2a49]/55' : 'text-[#0d2a49]/55'
  const hamburgerColor = isScrolled ? 'text-[#0d2a49]' : 'text-[#0d2a49]'

  return (
    <>
      {/* Slim full-width navbar, attached to the top edge — light glass to match the hero */}
      <nav className={navClasses} style={navStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-16">

            {/* Logo — left */}
            <Link to="/" className="col-start-1 row-start-1 justify-self-start flex items-center gap-2.5">
             
<div className="leading-tight">
                 <p className={`text-3xl lg:text-3xl tracking-wide nav-logo-text transition-colors duration-300 ${logoColor}`}>Travelo</p>
                 <p className={`hidden sm:block text-[10px] transition-colors duration-300 ${taglineColor}`}>Wander Beyond Boundaries</p>
               </div>
            </Link>

            {/* Nav links — center (desktop only) */}
            <div className="hidden lg:flex col-start-2 row-start-1 items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${linkColor}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right column: socials (desktop) + hamburger (mobile) */}
            <div className="col-start-2 row-start-1 lg:col-start-3 justify-self-end flex items-center gap-1">
              {/* Socials — desktop only */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid place-items-center nav-icon-badge"
                >
                  <img src="/images/instagram.svg" alt="" aria-hidden="true" className="w-[28px] h-[28px]" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid place-items-center nav-icon-badge"
                >
                  <img src="/images/facebook.svg" alt="" aria-hidden="true" className="w-[22px] h-[22px]" />
                </a>
              </div>

              {/* Mobile hamburger — bare icon (no circle) when scrolled */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className={`lg:hidden grid place-items-center rounded-full transition-all duration-300 active:scale-95 ${isScrolled
                  ? 'w-[34px] h-[34px] text-[#1791ab]'
                  : 'nav-icon-badge'}`}
              >
                {isMobileMenuOpen ? (
                  <X className={`transition-all duration-300 ${isScrolled ? 'w-7 h-7' : 'w-6 h-6'}`} />
                ) : (
                  <img
                    src="/images/plane.svg"
                    alt=""
                    aria-hidden="true"
                    className={`rotate-45 transition-all duration-300 ${isScrolled ? 'w-7 h-7' : 'w-5 h-5'}`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — slide-up drawer from the bottom */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 mt-16 ${
        isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0 bg-[#0d2a49]/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-[0_-8px_30px_rgba(13,42,73,0.18)] border-t border-[#0d2a49]/10 transition-transform duration-300 ease-out ${
          isMobileMenuOpen
            ? 'translate-y-0'
            : 'translate-y-full'
        }`}>
          <div className="flex justify-center pt-3 pb-1">
            <span className="h-1.5 w-12 rounded-full bg-[#0d2a49]/15" />
          </div>

          <div className="px-5 pb-6 pt-2 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-[#0d2a49] font-medium text-base rounded-xl ${isMobileMenuOpen ? 'nav-drawer-item' : 'opacity-0 translate-x-8'}`}
                style={{ animationDelay: (index * 90) + 'ms' }}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-[#0d2a49] font-medium text-base rounded-xl ${isMobileMenuOpen ? 'nav-drawer-item' : 'opacity-0 translate-x-8'}`}
              style={{ animationDelay: (navItems.length * 90) + 'ms' }}
            >
              <img src="/images/instagram-wordmark.svg" alt="Instagram" className="h-6 w-auto" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-[#0d2a49] font-medium text-base rounded-xl ${isMobileMenuOpen ? 'nav-drawer-item' : 'opacity-0 translate-x-8'}`}
              style={{ animationDelay: ((navItems.length + 1) * 90) + 'ms' }}
            >
              <img src="/images/facebook-wordmark.svg" alt="Facebook" className="h-4 w-auto" />
            </a>
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

        .nav-logo-text {
          font-family: "Cream Cake", "Caveat", "Segoe Script", cursive;
          font-weight: normal;
        }

        .nav-icon-badge {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          color: #1791ab;
          background: linear-gradient(155deg, rgba(255,255,255,0.9), rgba(220,240,245,0.7));
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.9),
            inset 0 -2px 4px -2px rgba(13, 42, 73, 0.14),
            0 2px 6px rgba(13, 42, 73, 0.18);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .nav-icon-badge:active {
          transform: scale(0.94);
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }

        @keyframes drawer-item-in {
          0% {
            opacity: 0;
            transform: translateX(48px) scale(0.96);
          }
          70% {
            opacity: 1;
            transform: translateX(-6px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .nav-drawer-item {
          animation: drawer-item-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </>
  )
}
export default Navbar
