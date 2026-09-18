import React, { useState, useEffect } from 'react';
import { Star, X, Phone } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { fetchPackages } from '../lib/api';
import Footer from '../components/Footer';

const Packages = () => {
  const [activeTab, setActiveTab] = useState('International');
  const [searchQuery, setSearchQuery] = useState('');
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: 'International', label: 'International' },
    { id: 'Kerala', label: 'Kerala' },
    { id: 'NorthEast', label: 'North East' },
  ];

  // Fetch packages when tab changes
  useEffect(() => {
    const loadPackages = async () => {
      setLoading(true);
      try {
        const data = await fetchPackages(activeTab);

        // Transform data to match UI structure
        const formattedData = data.map(pkg => ({
          id: pkg.id,
          title: pkg.location,
          duration: `${pkg.totalDays} Days`,
          price: `₹${Number(pkg.price).toLocaleString('en-IN')}`,
          image: pkg.image1 || 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1000',
          image2: pkg.image2 || pkg.image1 || 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1000',
          image3: pkg.image3 || pkg.image1 || 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1000',
          description: pkg.description,
          rating: pkg.ratings || 4.5,
          reviews: Math.floor(Math.random() * 2000) + 500,
          total_days: pkg.totalDays,
          price_value: pkg.price,
          category: pkg.category
        }));

        setPackages(formattedData);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPackages();
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchQuery('');
  };

  const handleViewNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  // Close drawer with Escape key + lock body scroll while open
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const filteredPackages = packages.filter(pkg =>
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Travel <span className="text-[#1791ab]">Packages</span>
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
              placeholder="Search packages..."
              className="w-full px-4 py-3 pl-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 text-[#0d2a49] placeholder-[#0d2a49]/40 shadow-[0_8px_8px_rgba(13,42,73,0.06)] focus:outline-none focus:ring-2 focus:ring-[#1791ab] focus:border-[#1791ab] transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0d2a49]/40 text-xl" />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-3 md:gap-6 mb-8 md:mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative px-4 md:px-8 py-3 md:py-4 text-xs md:text-sm transition-all duration-300 whitespace-nowrap leading-[1.05] tracking-tight ${
                activeTab === tab.id
                  ? 'text-[#1791ab]'
                  : 'text-[#0d2a49]/60 hover:text-[#0d2a49]'
              }`}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <span>{tab.label}</span>
              </div>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1791ab]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Package Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-5 px-4"
          >
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-md bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_10%),linear-gradient(155deg,#fbfaf6_0%,#eef6f5_100%)] border border-white/70 p-6 h-[500px] animate-pulse shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_8px_8px_rgba(13,42,73,0.10),0_16px_14px_rgba(13,42,73,0.08)]"
                >
                  <div className="h-48 mb-6 rounded-2xl bg-[#0d2a49]/10"></div>
                  <div className="h-6 w-3/4 bg-[#0d2a49]/10 rounded mb-4"></div>
                  <div className="h-4 w-full bg-[#0d2a49]/10 rounded mb-2"></div>
                  <div className="h-4 w-2/3 bg-[#0d2a49]/10 rounded mb-6"></div>
                  <div className="h-4 w-1/4 bg-[#0d2a49]/10 rounded"></div>
                </motion.div>
              ))
            ) : filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-md bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_10%),linear-gradient(155deg,#fbfaf6_0%,#eef6f5_100%)] border border-white/70 p-4 md:p-6 transition-all duration-500 cursor-pointer shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),inset_0_-3px_6px_-3px_rgba(13,42,73,0.12),0_8px_8px_rgba(13,42,73,0.10),0_16px_14px_rgba(13,42,73,0.08)] hover:shadow-[inset_0_1.5px_0_rgba(255,255,255,0.85),0_10px_10px_rgba(13,42,73,0.14),0_22px_20px_rgba(13,42,73,0.12)] hover:-translate-y-1.5 hover:scale-[1.03]"
                >
                  <div className="relative h-48 mb-6">
                    <div className="h-48 rounded-md overflow-hidden border border-white/70 shadow-[0_6px_6px_rgba(13,42,73,0.08)]">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Duration badge — top-right corner tab */}
                    <div className="absolute top-0 right-0 z-10 bg-[#fbfaf6] pl-3 pr-2.5 py-1.5 rounded-bl-md">
                      <span className="text-sm font-semibold text-[#0d2a49]">{pkg.duration}</span>
                    </div>
                    {/* Rating badge — bottom-left corner tab */}
                    <div className="absolute bottom-0 left-0 z-10 flex items-center gap-1.5 bg-[#fbfaf6] pl-3 pr-2.5 py-1.5 rounded-tr-md shadow-[0_-2px_6px_rgba(13,42,73,0.10)]">
                      <Star className="w-4 h-4 text-[#f2b84b] fill-[#f2b84b] flex-shrink-0" />
                      <span className="text-sm font-semibold text-[#0d2a49]">{pkg.rating}</span>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3 min-h-[3rem]">
                      <h3 className="flex-1 min-w-0 truncate text-lg text-[#0d2a49] group-hover:text-[#0d2a49]/90 transition-colors duration-300 leading-[1.05] tracking-tight">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl text-[#1791ab] leading-[1.05] tracking-tight">
                        {pkg.price}
                      </span>
                      <button 
                        onClick={() => handleViewNow(pkg)}
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
                  {searchQuery 
                    ? `No packages found for "${searchQuery}"` 
                    : 'No packages available in this category'}
                </h3>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Package Details Drawer */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
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
              className="fixed top-0 right-0 h-full w-full sm:w-[480px] md:w-[520px] overflow-y-auto bg-[linear-gradient(to_bottom,#fbfaf6_0%,#eef6f5_100%)] border-l border-white/70 shadow-[-16px_0_40px_rgba(13,42,73,0.18)]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
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
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={selectedPackage.image}
                        alt={selectedPackage.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={selectedPackage.image2}
                        alt={selectedPackage.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative h-full">
                      <img
                        src={selectedPackage.image3}
                        alt={selectedPackage.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* Rating Badge — bottom-left corner of image */}
                <div className="absolute bottom-0 left-0 z-10 flex items-center gap-1.5 bg-[#fbfaf6] pl-3 pr-2.5 py-1.5 rounded-tr-md shadow-[0_-2px_6px_rgba(13,42,73,0.10)]">
                  <Star className="w-4 h-4 text-[#f2b84b] fill-[#f2b84b] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#0d2a49]">{selectedPackage.rating}</span>
                </div>
              </div>

              {/* Navigation + Price Row */}
              <div className="flex items-center justify-between px-5 sm:px-6 pt-4">
                <div className="text-left">
                  <span className="block text-2xl text-[#1791ab] leading-[1.05] tracking-tight">
                    {selectedPackage.price} <span className="text-sm text-[#0d2a49]/60">/ couple</span>
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
              <div className="px-5 sm:px-6 mt-4">
                <h2 className="text-xl md:text-2xl text-[#0d2a49] leading-[1.05] tracking-tight">{selectedPackage.title}</h2>
              </div>

              {/* Meta (duration · category) */}
              <div className="px-5 sm:px-6 mt-1.5 flex items-center gap-2 text-sm text-[#0d2a49]/60">
                <span className="leading-tight">{selectedPackage.duration}</span>
                <span className="text-[#0d2a49]/25">·</span>
                <span className="leading-tight">{selectedPackage.category}</span>
              </div>

              {/* Content */}
              <div className="p-5 md:p-7 pb-28">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl text-[#0d2a49] mb-4 leading-[1.05] tracking-tight">
                    About This Package
                  </h3>
                  <div className="border-t border-[#0d2a49]/10 mb-4"></div>
                  <p className="text-[#0d2a49]/70 leading-relaxed text-base">
                    {selectedPackage.description}
                  </p>
                </div>
              </div>

                {/* Sticky Action Footer */}
              <div className="fixed bottom-0 right-0 w-full sm:w-[480px] md:w-[520px] z-40 bg-[linear-gradient(to_bottom,#fbfaf6_0%,#eef6f5_100%)]/90 backdrop-blur-xl border-t border-[#0d2a49]/10 px-5 sm:px-6 py-4 flex gap-3">
                <button
                  onClick={() => {
                    const message = `Hi! I'm interested in booking the ${selectedPackage.title} package for ${selectedPackage.price}. Can you please provide more details?`;
                    const whatsappUrl = `https://wa.me/917994631745?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="group flex-1 relative overflow-hidden bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white py-3 rounded-md border border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)] transition-all duration-300 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center leading-[1.05] tracking-tight">
                    Book through WhatsApp
                  </span>
                </button>
                <button
                  onClick={() => {
                    window.open('tel:+917994631745', '_blank');
                  }}
                  aria-label="Call us"
                  className="flex-none relative overflow-hidden bg-[rgba(23,145,171,0.62)] backdrop-blur-[10px] text-white w-[52px] self-stretch rounded-md border border-white/40 shadow-[0_8px_24px_rgba(13,42,73,0.25)] transition-all duration-300 active:scale-95 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5" />
                </button>
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
      `}</style>
    </section>
  );
};

export default Packages;