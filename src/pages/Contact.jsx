import React, { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

const PHONE = '+917994631745'
const PHONE_DISPLAY = '+91 79946 31745'
const EMAIL = 'info@explorewings.com'
const WHATSAPP = `https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent(
  'Hello Explore Wings! I would like to know more about your travel packages.'
)}`

const methods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Dhanya Rd, Nettoor, Maradu, Ernakulam, Kochi, Kerala 682040',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat · 9:00 AM – 6:30 PM',
  },
]

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 pb-20 md:pb-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`max-w-3xl transition-all duration-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-sm md:text-base text-[#0d2a49]/60 tracking-wide">
            We'd love to hear from you
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#0d2a49]">
            Get in <span className="text-[#1791ab]">Touch</span>
          </h1>
          <p className="mt-5 text-lg text-[#0d2a49]/70 leading-relaxed">
            Questions about a resort, a package, or planning your next getaway? Our team is just a message away.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact methods */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {methods.map((m, index) => {
              const Tag = m.href ? 'a' : 'div'
              return (
                <Tag
                  key={m.label}
                  {...(m.href
                    ? { href: m.href, target: m.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
                    : {})}
                  className={`contact-card group transition-all duration-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  } ${m.href ? 'hover:-translate-y-1.5' : ''}`}
                  style={{ transitionDelay: `${120 + index * 80}ms` }}
                >
                  <span className="contact-icon-badge">
                    <m.icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-[#0d2a49]/50">
                    {m.label}
                  </p>
                  <p className="mt-1.5 text-base md:text-lg leading-snug text-[#0d2a49]">
                    {m.value}
                  </p>
                </Tag>
              )
            })}
          </div>

          {/* CTA card */}
          <div
            className={`lg:col-span-2 contact-card flex flex-col transition-all duration-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '440ms' }}
          >
            <h2 className="text-2xl md:text-3xl leading-[1.05] tracking-tight text-[#0d2a49]">
              Ready to plan your <span className="text-[#1791ab]">next adventure?</span>
            </h2>
            <p className="mt-3 text-[#0d2a49]/70 leading-relaxed">
              Chat with us on WhatsApp or give us a call — we usually reply within a few hours.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta mt-6 flex items-center justify-center gap-2.5 w-full text-white font-semibold rounded-xl py-3.5 transition-transform duration-200 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="contact-cta-outline mt-3 flex items-center justify-center gap-2.5 w-full font-semibold rounded-xl py-3.5 transition-transform duration-200 active:scale-95"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>

            {/* Socials */}
            <div className="mt-7 pt-6 border-t border-[#0d2a49]/10">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#0d2a49]/50 mb-4">
                Follow us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="contact-social"
                >
                  <img src="/images/instagram.svg" alt="" aria-hidden="true" className="w-[26px] h-[26px]" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="contact-social"
                >
                  <img src="/images/facebook.svg" alt="" aria-hidden="true" className="w-[21px] h-[21px]" />
                </a>
              </div>
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

        .contact-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 16px;
          display: block;
          text-decoration: none;

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
            0 8px 8px rgba(13, 42, 73, 0.10),
            0 16px 14px rgba(13, 42, 73, 0.08);
        }

        .contact-icon-badge {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          color: #1791ab;
          background: linear-gradient(155deg, rgba(255,255,255,0.9), rgba(220,240,245,0.7));
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.9),
            inset 0 -2px 4px -2px rgba(13, 42, 73, 0.14),
            0 2px 6px rgba(13, 42, 73, 0.18);
        }

        .contact-cta {
          background: rgba(23, 145, 171, 0.62);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 24px rgba(13, 42, 73, 0.25);
        }
        .contact-cta:hover {
          background: rgba(23, 145, 171, 0.78);
        }

        .contact-cta-outline {
          color: #0d2a49;
          border: 1px solid rgba(13, 42, 73, 0.18);
          background: rgba(255, 255, 255, 0.5);
        }
        .contact-cta-outline:hover {
          background: rgba(255, 255, 255, 0.85);
          color: #1791ab;
        }

        .contact-social {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
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
        .contact-social:hover {
          transform: translateY(-2px);
        }
        .contact-social:active {
          transform: scale(0.94);
        }
      `}</style>
    </section>
  )
}

export default Contact
