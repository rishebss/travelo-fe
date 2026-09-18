import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "One of the best experiences we've ever had! The team at Explore Wings knows exactly how to make guests feel special. The Munnar resort was a dream.",
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Aravind Menon',
    role: 'Munnar Stay',
  },
  {
    text: 'Truly unforgettable! From check-in to check-out, the staff treated us like family. Beautiful rooms, great food, and perfect location.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Devi Pillai',
    role: 'Family Trip',
  },
  {
    text: 'Explore Wings made our Kerala trip smooth and memorable. Cozy, clean, and surrounded by nature. We will definitely come back!',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Krishna Kumar',
    role: 'Couple Getaway',
  },
  {
    text: 'If you are looking for comfort, nature, and genuine hospitality – Explore Wings is it. Blown away by the views and the friendly team.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Meera Nair',
    role: 'Nature Lover',
  },
  {
    text: 'Such an amazing stay! Clean rooms, delicious food, and staff always ready to help. Best holiday in Kerala.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    name: 'Suresh Warrier',
    role: 'Family Trip',
  },
  {
    text: 'I have traveled across India, but Explore Wings stands out. Commendable hospitality, care, and professionalism.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Lakshmi Iyer',
    role: 'Solo Traveler',
  },
  {
    text: 'Peaceful environment, professional team, and amazing service. Perfect for family trips and couples.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Vishnu Nambiar',
    role: 'Couple Getaway',
  },
  {
    text: 'Woke up to misty mornings in Munnar and enjoyed evenings with delicious local food. Truly a home away from home!',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    name: 'Anjali Unni',
    role: 'Munnar Stay',
  },
  {
    text: 'From start to finish, a seamless experience. Not just a place to stay but a memorable story to tell.',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    name: 'Mohan Das',
    role: 'Group Tour',
  },
  {
    text: 'Kerala at its best! Stress-free and joyful trip. Breathtaking views and caring staff. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
    name: 'Sarika Kurup',
    role: 'Family Trip',
  },
];

const firstColumn = testimonials;
const firstRow = testimonials.slice(0, 5);
const secondRow = testimonials.slice(5, 10);

const TestimonialCard = ({ text, name }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.02, y: -5 }}
      className="p-6 rounded-2xl md:rounded-3xl bento-card w-[300px] md:w-[340px] flex-none cursor-default select-none list-none"
    >
      <blockquote className="m-0 p-0">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, s) => (
            <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-[#0d2a49]/70 text-sm leading-relaxed m-0 line-clamp-4">"{text}"</p>
        <footer className="flex items-center justify-end gap-3 mt-5">
          <div className="flex flex-col items-end text-right">
            <cite className="font-semibold not-italic tracking-tight leading-5 text-[#0d2a49] text-sm">{name}</cite>
          </div>
        </footer>
      </blockquote>
    </motion.li>
  );
};

const TestimonialsColumn = ({ className, testimonials, duration }) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: '-50%' }}
        transition={{ duration: duration || 10, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name }, i) => (
              <TestimonialCard key={`${index}-${i}`} text={text} name={name} />
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

const TestimonialsRow = ({ testimonials, duration, direction = 'left' }) => {
  return (
    <div className="overflow-hidden py-8 -my-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.ul
        animate={{ translateX: direction === 'right' ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: duration || 40, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex gap-6 pr-6 w-max list-none m-0 p-0 py-2"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name }, i) => (
              <TestimonialCard key={`${index}-${i}`} text={text} name={name} />
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="mb-12 flex justify-center md:justify-end">
          <a
            href="https://share.google/QRl2aN9FJyUUH4pNY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/60 shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:shadow-md"
          >
            <svg className="w-7 h-7 flex-none" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
              <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
            </svg>
            <div className="text-left">
              <p className="text-[#0d2a49] font-bold text-sm leading-tight">Add your review on Google</p>
              <p className="text-[#0d2a49]/50 text-[11px] leading-tight mt-0.5">Our happy clients say it best</p>
            </div>
          </a>
        </div>

        <div
          className="md:hidden flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[500px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={40} />
        </div>

        <div className="hidden md:block" role="region" aria-label="Scrolling Testimonials">
          <TestimonialsRow testimonials={firstRow} duration={45} direction="left" />
          <TestimonialsRow testimonials={secondRow} duration={55} direction="right" />
        </div>
      </div>

      <style>{`
        .bento-card {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 10%),
            linear-gradient(155deg, #fbfaf6 0%, #eef6f5 100%);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.85),
            inset 0 -3px 6px -3px rgba(13, 42, 73, 0.12),
            0 8px 8px rgba(13, 42, 73, 0.10),
            0 16px 14px rgba(13, 42, 73, 0.08);
        }
      `}</style>
    </section>
  );
}
