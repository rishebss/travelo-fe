import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, X, Phone } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { fetchResorts } from '../lib/api';
import Footer from '../components/Footer';

const CONTACT_PHONE = '917994631745';

const Resorts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [resorts, setResorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedResort, setSelectedResort] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 12;
  const closeButtonRef = useRef(null);

  // Debounce the search box so we don't hit the API on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery.trim()), 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Reset to first page when the search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery]);

  // Fetch resorts from backend API (server-side pagination + search)
  useEffect(() => {
    const loadResorts = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchResorts(currentPage, cardsPerPage, debouncedQuery);

        // Transform data to match UI structure
        const formattedData = result.data.map(resort => ({
          id: resort.id,
          title: resort.location ?? 'Resort',
          price: `₹${Number(resort.price).toLocaleString('en-IN')}`,
          image: resort.image1 || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000',
          images: [resort.image1, resort.image2, resort.image3].filter(Boolean),
          description: resort.description ?? '',
          rating: resort.ratings || 4.5,
          price_value: resort.price
        }));

        setResorts(formattedData);
        setTotalPages(result.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching resorts:', error);
        setError('We could not load resorts right now. Please try again.');
        setResorts([]);
      } finally {
        setLoading(false);
      }
    };

    loadResorts();
  }, [currentPage, debouncedQuery]);

  const handleViewNow = (resort) => {
    setSelectedResort(resort);
    setIsModalOpen(true);
  };

  // Scroll to top when the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedResort(null);
  }, []);

  // Close drawer with Escape key, lock body scroll, and move focus into the drawer
  useEffect(() => {
    if (!isModalOpen) return undefined;

    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);

    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [isModalOpen, closeModal]);

  // Search is applied server-side, so the fetched page is the display page
  const currentResorts = resorts;

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-[linear-gradient(to_bottom,#fbfaf6_0%,#eef6f5_100%)]">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-[#1791ab]/10 via-[#eef6f5]/50 to-transparent rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-[#1791ab]/10 via-[#eef6f5]/50 to-transparent rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#1791ab]/5 via-[#fbfaf6]/50 to-transparent rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-8xl py-12 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 mt-20 text-[#0d2a49]">
            Our <span className="text-[#1791ab]">Resorts</span>
          </h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto mb-8 md:mb-12 px-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search resorts..."
              aria-label="Search resorts"
              className="w-full px-4 py-3 pl-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 text-[#0d2a49] placeholder-[#0d2a49]/40 shadow-[0_8px_8px_rgba(13,42,73,0.06)] focus:outline-none focus:ring-2 focus:ring-[#1791ab] focus:border-[#1791ab] transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0d2a49]/40 text-xl" />
          </div>
        </motion.div>

        {/* Resort Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-5 px-4"
          >
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-md bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_10%),linear-gradient(155deg,#fbfaf6_0%,#eef6f5_100%)] border border-white/70 p-4 md:p-6 animate-pulse shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_8px_8px_rgba(13,42,73,0.10),0_16px_14px_rgba(13,42,73,0.08)]"
                >
                  <div className="h-48 mb-6 rounded-md bg-[#0d2a49]/10"></div>
                  <div className="h-6 w-3/4 bg-[#0d2a49]/10 rounded mb-3"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-7 w-1/3 bg-[#0d2a49]/10 rounded"></div>
                    <div className="h-9 w-20 bg-[#0d2a49]/10 rounded-md"></div>
                  </div>
                </motion.div>
              ))
            ) : currentResorts.length > 0 ? (
              currentResorts.map((resort) => (
                <motion.div
                  key={resort.id}
                  variants={itemVariants}
                  onClick={() => handleViewNow(resort)}
                  className="group relative overflow-hidden rounded-md bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_10%),linear-gradient(155deg,#fbfaf6_0%,#eef6f5_100%)] border border-white/70 p-4 md:p-6 transition-all duration-500 cursor-pointer shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),inset_0_-3px_6px_-3px_rgba(13,42,73,0.12),0_8px_8px_rgba(13,42,73,0.10),0_16px_14px_rgba(13,42,73,0.08)] hover:shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_10px_10px_rgba(13,42,73,0.14),0_22px_20px_rgba(13,42,73,0.12)] hover:-translate-y-1.5 hover:scale-[1.03]"
                >
                  <div className="relative h-48 mb-6">
                    <div className="h-48 rounded-md overflow-hidden border border-white/70 shadow-[0_6px_6px_rgba(13,42,73,0.08)]">
                      <img
                        src={resort.image}
                        alt={resort.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute top-0 right-0 z-10 flex items-center gap-1.5 bg-[#fbfaf6] pl-3 pr-2.5 py-1.5 rounded-bl-md">
                      <Star className="w-4 h-4 text-[#f2b84b] fill-[#f2b84b] flex-shrink-0" />
                      <span className="text-sm font-semibold text-[#0d2a49]">{resort.rating}</span>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3 min-h-[3rem]">
                      <h3 className="flex-1 min-w-0 truncate text-lg text-[#0d2a49] group-hover:text-[#0d2a49]/90 transition-colors duration-300 leading-[1.05] tracking-tight">
                        {resort.title}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl text-[#1791ab] leading-[1.05] tracking-tight">
                        {resort.price}
                      </span>
                      <button
                        type="button"
                        aria-label={`View details for ${resort.title}`}
                        className="group relative overflow-hidden bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white font-bold py-2 px-4 rounded-md border border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)] transition-all duration-300 active:scale-95"
                      >
                        <span className="relative z-10 flex items-center">
                          View
                          <MdOutlineDoubleArrow className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-12"
              >
                <h3 className="text-xl text-[#0d2a49]/60">
                  {error
                    ? error
                    : debouncedQuery
                      ? `No resorts found for "${debouncedQuery}"`
                      : 'No resorts available'}
                </h3>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center items-center gap-3 mt-20"
            role="navigation"
            aria-label="Resort pages"
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`group flex-none items-center gap-2 py-2.5 px-4 rounded-md font-semibold text-sm transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-white/50 text-[#0d2a49]/30 cursor-not-allowed border border-white/60'
                  : 'bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white border border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)] hover:scale-105 active:scale-95'
              }`}
            >
              <MdOutlineDoubleArrow className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Previous</span>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === currentPage;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => handlePageChange(pageNumber)}
                  aria-label={`Go to page ${pageNumber}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex-none w-11 h-[42px] rounded-md font-bold text-base border transition-all duration-300 ${
                    isActive
                      ? 'bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)]'
                      : 'bg-white/50 text-[#0d2a49]/70 border-white/60 hover:bg-white/80 hover:scale-105 active:scale-95'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={`group flex-none items-center gap-2 py-2.5 px-4 rounded-md font-semibold text-sm transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-white/50 text-[#0d2a49]/30 cursor-not-allowed border border-white/60'
                  : 'bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white border border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)] hover:scale-105 active:scale-95'
              }`}
            >
              <span>Next</span>
              <MdOutlineDoubleArrow className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Resort Details Drawer */}
      <AnimatePresence>
        {isModalOpen && selectedResort && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d2a49]/20 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedResort.title} details`}
              className="fixed top-0 right-0 h-full w-full sm:w-[480px] md:w-[520px] overflow-y-auto bg-[linear-gradient(to_bottom,#fbfaf6_0%,#eef6f5_100%)] border-l border-white/70 shadow-[-16px_0_40px_rgba(13,42,73,0.18)]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                aria-label="Close details"
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-[#fbfaf6] text-[#0d2a49] hover:bg-[#0d2a49]/10 transition-all duration-300 hover:scale-110 border border-white/70 shadow-[0_3px_5px_rgba(13,42,73,0.10)] active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image Swiper */}
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="h-full"
                >
                  {(selectedResort.images.length > 0 ? selectedResort.images : [selectedResort.image]).map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full">
                        <img
                          src={image}
                          alt={`${selectedResort.title} photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Rating Badge — bottom-left corner of image */}
                <div className="absolute bottom-0 left-0 z-10 flex items-center gap-1.5 bg-[#fbfaf6] pl-3 pr-2.5 py-1.5 rounded-tr-md shadow-[0_-2px_6px_rgba(13,42,73,0.10)]">
                  <Star className="w-4 h-4 text-[#f2b84b] fill-[#f2b84b] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#0d2a49]">{selectedResort.rating}</span>
                </div>
              </div>

              {/* Navigation + Price Row */}
              <div className="flex items-center justify-between px-5 sm:px-6 pt-4">
                <div className="text-left">
                  <span className="block text-2xl text-[#1791ab] leading-[1.05] tracking-tight">
                    {selectedResort.price} <span className="text-sm text-[#0d2a49]/60">/ night</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="swiper-button-prev resort-nav-btn" aria-label="Previous image"></button>
                  <button className="swiper-button-next resort-nav-btn" aria-label="Next image"></button>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-5 sm:mx-6 mt-5 border-t border-[#0d2a49]/10"></div>

              {/* Title */}
              <div className="px-5 sm:px-6 mt-4 mb-7">
                <h2 className="text-xl md:text-2xl text-[#0d2a49] leading-[1.05] tracking-tight">{selectedResort.title}</h2>
              </div>

              {/* Content */}
              <div className="p-5 md:p-7 pb-28">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl text-[#0d2a49] mb-4 leading-[1.05] tracking-tight">
                    About This Resort
                  </h3>
                  <div className="border-t border-[#0d2a49]/10 mb-4"></div>
                  <p className="text-[#0d2a49]/70 leading-relaxed text-base">
                    {selectedResort.description || 'Details coming soon.'}
                  </p>
                </div>

              {/* Sticky Action Footer */}
              <div className="fixed bottom-0 right-0 w-full sm:w-[480px] md:w-[520px] z-40 bg-[rgba(251,250,246,0.9)] backdrop-blur-xl border-t border-[#0d2a49]/10 px-5 sm:px-6 py-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const message = `Hi! I'm interested in booking the ${selectedResort.title} resort for ${selectedResort.price}. Can you please provide more details?`;
                    const whatsappUrl = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="group flex-1 relative overflow-hidden bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white py-3 rounded-md border border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)] transition-all duration-300 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center leading-[1.05] tracking-tight">
                    Book through WhatsApp
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    window.open(`tel:+${CONTACT_PHONE}`, '_blank');
                  }}
                  aria-label="Call us"
                  className="flex-none relative overflow-hidden bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white w-[52px] self-stretch rounded-md border border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)] transition-all duration-300 active:scale-95 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5" />
                </button>
              </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      <style>{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.7) !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #1791ab !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffffff;
        }

        /* Skeuomorphic circular nav buttons for drawer swiper */
        .resort-nav-btn {
          position: static !important;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          margin: 0 !important;
          border-radius: 999px;
          background-image: none !important;
          background: linear-gradient(155deg, rgba(255, 255, 255, 0.9), rgba(220, 240, 245, 0.7));
          border: 1px solid rgba(255, 255, 255, 0.7);
          color: #1791ab !important;
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.85),
            0 4px 8px rgba(13, 42, 73, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          overflow: hidden;
        }
        .resort-nav-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            inset 0 1.5px 0 rgba(255, 255, 255, 0.85),
            0 8px 14px rgba(13, 42, 73, 0.20);
        }
        .resort-nav-btn:active {
          transform: scale(0.94);
        }
        .resort-nav-btn::after {
          font-size: 15px !important;
          font-weight: 800;
        }
        .resort-nav-btn.swiper-button-disabled {
          opacity: 0.35 !important;
          cursor: not-allowed;
          transform: none;
        }

        /* Hide the drawer scrollbar in WebKit browsers too */
        aside[role='dialog']::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Resorts;
