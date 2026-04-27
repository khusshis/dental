import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, Calendar, MapPin, Shield, Users, Award, Smile, 
  Menu, X, ChevronDown, Activity, Stethoscope, Syringe, 
  Sparkles, Baby, Heart, Star, ArrowUp
} from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, fakeBefore = false }: { beforeImage: string, afterImage: string, fakeBefore?: boolean }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-[5/4] overflow-hidden group bg-gray-100">
      {/* After Image */}
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className={`absolute inset-0 w-full h-full object-cover ${fakeBefore ? 'sepia-[.3] brightness-[0.85]' : ''}`} 
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100">
          <div className="flex gap-0.5">
            <ChevronDown className="w-4 h-4 text-gray-400 rotate-90" />
            <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
          </div>
        </div>
      </div>

      {/* Invisible Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">Before</div>
      <div className="absolute top-4 right-4 bg-[#3b82f6]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">After</div>
    </div>
  );
};

const SkeletonLoader = () => (
  <div className="min-h-screen bg-[#f8fafc] w-full animate-pulse overflow-hidden">
    {/* Header Skeleton */}
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center h-16 bg-white/50 rounded-full px-6 shadow-sm">
        <div className="w-32 h-8 bg-blue-100 rounded-full"></div>
        <div className="hidden lg:flex gap-6">
          <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
        </div>
        <div className="w-32 h-10 bg-blue-100 rounded-full hidden lg:block"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-full lg:hidden"></div>
      </div>
    </div>

    {/* Hero Skeleton */}
    <div className="max-w-[1400px] mx-auto px-4 pt-40 pb-20 grid lg:grid-cols-2 gap-12">
      <div className="space-y-6 pt-10">
        <div className="w-48 h-8 bg-blue-100 rounded-full"></div>
        <div className="w-3/4 h-16 bg-gray-200 rounded-2xl"></div>
        <div className="w-2/3 h-16 bg-gray-200 rounded-2xl"></div>
        <div className="w-full h-4 bg-gray-200 rounded-full mt-6"></div>
        <div className="w-5/6 h-4 bg-gray-200 rounded-full"></div>
        <div className="flex gap-4 mt-8">
          <div className="w-40 h-14 bg-blue-100 rounded-full"></div>
          <div className="w-40 h-14 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md h-[500px] bg-white rounded-sm shadow-sm border border-gray-100 p-8">
          <div className="w-full h-12 bg-gray-100 rounded-md mb-6"></div>
          <div className="w-full h-12 bg-gray-100 rounded-md mb-6"></div>
          <div className="w-full h-12 bg-gray-100 rounded-md mb-6"></div>
          <div className="w-full h-12 bg-gray-100 rounded-md mb-6"></div>
          <div className="w-full h-14 bg-blue-100 rounded-md mt-8"></div>
        </div>
      </div>
    </div>

    {/* Stats Marquee Skeleton */}
    <div className="w-full h-24 bg-blue-50/50 border-y border-blue-100/30 flex items-center justify-around px-10">
      <div className="w-32 h-8 bg-blue-100/50 rounded-full"></div>
      <div className="w-40 h-8 bg-blue-100/50 rounded-full hidden md:block"></div>
      <div className="w-36 h-8 bg-blue-100/50 rounded-full hidden lg:block"></div>
      <div className="w-48 h-8 bg-blue-100/50 rounded-full hidden xl:block"></div>
    </div>

    {/* Treatments Skeleton */}
    <div className="max-w-[1400px] mx-auto px-4 py-24">
      <div className="flex flex-col items-center mb-16">
        <div className="w-32 h-6 bg-blue-100 rounded-full mb-4"></div>
        <div className="w-64 h-10 bg-gray-200 rounded-2xl"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-72 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl mb-6"></div>
            <div className="w-3/4 h-6 bg-gray-200 rounded-full mb-4"></div>
            <div className="w-full h-3 bg-gray-100 rounded-full mb-2"></div>
            <div className="w-5/6 h-3 bg-gray-100 rounded-full mb-6"></div>
            <div className="mt-auto w-24 h-4 bg-blue-50 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
  const [phoneError, setPhoneError] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [showAllTreatments, setShowAllTreatments] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      setPhoneError("Enter a valid 10-digit number");
      return;
    }
    setPhoneError("");
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: '', phone: '', date: '' });
      setSelectedService("");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsNavVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        setIsNavVisible(true); // Always keep navigation visible
      }
      
      if (currentScrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // GSAP animations for other elements can go here
    
  }, []);

  const stats = [
    { icon: <Smile className="w-6 h-6" />, value: "30L+", label: "Happy Patients" },
    { icon: <Stethoscope className="w-6 h-6" />, value: "1700+", label: "Dentists" },
    { icon: <MapPin className="w-6 h-6" />, value: "715+", label: "Clinics" },
    { icon: <Calendar className="w-6 h-6" />, value: "7 Days", label: "Open" },
    { icon: <Syringe className="w-6 h-6" />, value: "55K+", label: "Implants" },
    { icon: <Smile className="w-6 h-6" />, value: "7.8K+", label: "Dentures" },
    { icon: <Award className="w-6 h-6" />, value: "2L+", label: "Crowns" },
  ];

  const treatments = [
    { icon: <Activity className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Root Canal\nTreatment (RCT)" },
    { icon: <Shield className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Dental Crowns" },
    { icon: <Sparkles className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Laser Dentistry" },
    { icon: <Smile className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Clear Aligners /\nInvisible Braces" },
    { icon: <Heart className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Dental Fillings /\nTeeth Fillings" },
    { icon: <Activity className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Wisdom Teeth\nRemoval" },
    { icon: <Smile className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Dental Braces &\nAligners" },
    { icon: <Syringe className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Dental Implants /\nTeeth Implants" },
    { icon: <Smile className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Dentures" },
    { icon: <Baby className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Kids Dentistry" },
    { icon: <Activity className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Mouth Ulcers" },
    { icon: <Shield className="w-8 h-8 text-[#3b82f6] stroke-[1.5]" />, name: "Advanced Gum\nTreatment" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#333] font-sans pb-20 md:pb-0">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-sm border-b border-blue-200/50 pointer-events-auto"
        animate={{ 
          y: isMobile ? (isNavVisible ? 0 : -100) : 0,
          backgroundColor: ["rgba(240, 249, 255, 0.9)", "rgba(224, 242, 254, 0.9)", "rgba(219, 234, 254, 0.9)", "rgba(240, 249, 255, 0.9)"]
        }}
        transition={{ 
          y: { duration: 0.3, ease: "easeInOut" },
          backgroundColor: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-full">
          <div 
            ref={navRef}
            className="max-w-[1400px] mx-auto flex justify-between items-center w-full px-4 md:px-6 py-2 md:py-3"
          >
            {/* Logo */}
            <div className="flex items-center cursor-pointer hover:scale-105 transition-transform z-10 h-14 md:h-16">
              <img src="/logo.png" alt="RK Logo" className="h-full w-auto object-contain drop-shadow-sm" />
            </div>
            
            {/* Desktop Nav & Buttons */}
            <div className="hidden lg:flex items-center gap-6 z-10">
              <nav className="flex items-center gap-2 text-[15px] font-bold text-[#1e3a8a]">
                <a href="#" className="relative px-5 py-2.5 rounded-full hover:bg-blue-100/50 hover:text-[#3b82f6] transition-all duration-300 inline-block after:content-[''] after:absolute after:bottom-1 after:left-5 after:right-5 after:h-[2px] after:bg-[#3b82f6] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">Home</a>
                <a href="#" className="relative px-5 py-2.5 rounded-full hover:bg-blue-100/50 hover:text-[#3b82f6] transition-all duration-300 inline-block after:content-[''] after:absolute after:bottom-1 after:left-5 after:right-5 after:h-[2px] after:bg-[#3b82f6] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">Treatment</a>
                <a href="#" className="relative px-5 py-2.5 rounded-full hover:bg-blue-100/50 hover:text-[#3b82f6] transition-all duration-300 inline-block after:content-[''] after:absolute after:bottom-1 after:left-5 after:right-5 after:h-[2px] after:bg-[#3b82f6] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">About Us</a>
                <a href="#" className="relative px-5 py-2.5 rounded-full hover:bg-blue-100/50 hover:text-[#3b82f6] transition-all duration-300 inline-block after:content-[''] after:absolute after:bottom-1 after:left-5 after:right-5 after:h-[2px] after:bg-[#3b82f6] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out">Contact Us</a>
              </nav>
              <button className="bg-[#3b82f6] text-white px-8 py-3 font-bold rounded-full flex items-center gap-2 hover:bg-[#2563eb] hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_rgba(59,130,246,0.3)]">
                <Phone size={18} /> Call Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-[#1e3a8a] bg-white/50 rounded-full hover:bg-white/80 hover:scale-105 transition-all z-10 pointer-events-auto shadow-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && isMobile && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100 p-6 pt-4 flex flex-col gap-2 font-bold text-gray-800 pointer-events-auto origin-top z-40"
              >
                <a href="#" onClick={() => setIsMenuOpen(false)} className="p-3 text-lg hover:text-[#3b82f6] hover:bg-blue-50/50 rounded-xl transition-all border-b border-gray-50">Home</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="p-3 text-lg hover:text-[#3b82f6] hover:bg-blue-50/50 rounded-xl transition-all border-b border-gray-50">Treatment</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="p-3 text-lg hover:text-[#3b82f6] hover:bg-blue-50/50 rounded-xl transition-all border-b border-gray-50">About Us</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="p-3 text-lg hover:text-[#3b82f6] hover:bg-blue-50/50 rounded-xl transition-all border-b border-gray-50">Contact Us</a>
                <button className="bg-[#3b82f6]/15 text-[#1e3a8a] px-6 py-4 text-lg font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#3b82f6]/25 hover:scale-[1.02] transition-all mt-4 shadow-[0_4px_14px_rgba(59,130,246,0.1)] border border-[#3b82f6]/20">
                  <Phone size={20} /> Call Now
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative bg-[#f0f9ff] overflow-hidden pt-28">
        <div className="max-w-[1400px] mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 pr-4 lg:pr-12">
            <div className="inline-flex items-center gap-2.5 px-1.5 py-1.5 pr-4 rounded-full border border-blue-200 bg-white text-xs font-bold mb-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#3b82f6] text-white p-1.5 rounded-full flex items-center justify-center shadow-sm">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide flex items-center">
                <span className="text-[#3b82f6] text-sm mr-1">100%</span> 
                <span className="text-gray-700">Dental Care Guaranteed</span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Transforming the Future of Dentistry with <span className="text-[#3b82f6]">rkclinic</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Book appointments, track your dental wellness, and stay connected with expert care — all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button className="bg-[#3b82f6]/15 backdrop-blur-md border border-[#3b82f6]/30 text-[#1e3a8a] px-8 py-3.5 font-bold rounded-full hover:bg-[#3b82f6]/25 hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_rgba(59,130,246,0.1)] flex items-center gap-2">
                <Phone size={20} className="text-[#3b82f6]" /> Call Us
              </button>
              <button className="bg-white/40 backdrop-blur-md border border-white/60 text-[#1e3a8a] px-8 py-3.5 font-bold rounded-full hover:bg-white/60 hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex items-center gap-2">
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg> WhatsApp Us
              </button>
            </div>
            
            {/* Reviews */}
            <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 inline-flex">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <span className="text-sm font-bold text-gray-700">Rated 4.9/5 <span className="font-normal text-gray-500">From over 950 reviews</span></span>
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm z-20">
                  <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm z-10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#d32323"><path d="M21.216 11.073l-6.14-2.81c-.443-.203-.94-.035-1.185.402l-.544 1.002c-.244.437-.083.978.36 1.18l6.14 2.81c.443.203.94.035 1.185-.402l.544-1.002c.244-.437.083-.978-.36-1.18zm-11.66-6.31l2.81 6.14c.203.443.035.94-.402 1.185l-1.002.544c-.437.244-.978.083-1.18-.36l-2.81-6.14c-.203-.443-.035-.94.402-1.185l1.002-.544c.437-.244.978-.083 1.18.36zm-3.246 11.66l6.14-2.81c.443-.203.94-.035 1.185.402l.544 1.002c.244.437.083.978-.36 1.18l-6.14 2.81c-.443.203-.94.035-1.185-.402l-.544-1.002c-.244-.437-.083-.978.36-1.18z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative w-full flex justify-end perspective-1000">
            <motion.div 
              initial={{ rotate: -2, y: -20, opacity: 0 }}
              animate={{ rotate: [-0.5, 0.5, -0.5], y: 0, opacity: 1 }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
                y: { duration: 0.8, type: "spring", bounce: 0.4 },
                opacity: { duration: 0.8 }
              }}
              style={{ transformOrigin: 'top center' }}
              className="w-full max-w-md relative z-10 bg-[#fefdfa] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.15),_0_0_4px_rgba(0,0,0,0.05)] rounded-sm border border-gray-200/60"
            >
              {/* Realistic Blue Pushpin */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-[0_12px_10px_rgba(0,0,0,0.2)] rotate-[15deg] scale-[0.8]">
                <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Needle */}
                  <path d="M28 46 L29 62 L31 62 L32 46 Z" fill="url(#needleGrad)" />
                  
                  {/* Body & Neck Combined */}
                  <path d="M22 18 L18 28 C12 36, 16 46, 30 46 C44 46, 48 36, 42 28 L38 18 Z" fill="url(#bodyGrad)" />
                  
                  {/* Body Highlight Left */}
                  <path d="M17 32 C 17 24, 24 20, 24 20 C 19 23, 16 32, 17 32 Z" fill="white" opacity="0.6" />
                  
                  {/* Top Cap Base (Thickness) */}
                  <path d="M14 13 L14 18 C14 24, 46 24, 46 18 L46 13 Z" fill="#1d4ed8" />
                  
                  {/* Top Cap Top */}
                  <ellipse cx="30" cy="13" rx="16" ry="6" fill="url(#capGrad)" />
                  
                  {/* Top Cap Highlight */}
                  <ellipse cx="27" cy="11" rx="10" ry="3" fill="white" opacity="0.9" />
                  
                  <defs>
                    <linearGradient id="needleGrad" x1="28" y1="46" x2="32" y2="46">
                      <stop offset="0%" stopColor="#9ca3af" />
                      <stop offset="30%" stopColor="#f3f4f6" />
                      <stop offset="70%" stopColor="#d1d5db" />
                      <stop offset="100%" stopColor="#6b7280" />
                    </linearGradient>
                    <radialGradient id="bodyGrad" cx="35%" cy="30%" r="65%">
                      <stop offset="0%" stopColor="#eff6ff" />
                      <stop offset="15%" stopColor="#bfdbfe" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="90%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </radialGradient>
                    <linearGradient id="capGrad" x1="14" y1="7" x2="46" y2="19">
                      <stop offset="0%" stopColor="#eff6ff" />
                      <stop offset="30%" stopColor="#93c5fd" />
                      <stop offset="80%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
                <Stethoscope className="w-64 h-64 text-[#1e3a8a]" />
              </div>

              {/* Prescription Header */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-between items-start mb-6 border-b-2 border-[#1e3a8a] pb-4 relative z-20"
              >
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-serif italic text-[#1e3a8a] leading-none">Rx</span>
                </div>
                <div className="text-right">
                  <h2 className="text-xl font-bold text-[#1e3a8a] uppercase tracking-widest">rkclinic</h2>
                  <p className="text-[10px] text-gray-500 font-medium tracking-wider mt-1">123 Dental Street, City</p>
                  <p className="text-[10px] text-gray-500 font-medium tracking-wider">+91 98765 43210</p>
                </div>
              </motion.div>

              <form className="flex flex-col gap-5 relative z-20" onSubmit={handleFormSubmit}>
                {/* Full Name */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                  className="relative group"
                >
                  <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider mb-1 block transition-colors group-focus-within:text-[#3b82f6]">Full Name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, originX: 0 }}
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-0 py-1 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-[#3b82f6] focus:ring-0 transition-all text-blue-950 font-medium"
                    required
                  />
                </motion.div>
                
                {/* Mobile Number */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  className="relative group"
                >
                  <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider mb-1 block transition-colors group-focus-within:text-[#3b82f6]">Mobile Number</label>
                  <motion.div whileFocus={{ scale: 1.01, originX: 0 }} className="flex gap-2 relative">
                    <span className="py-1 text-gray-500 border-b border-gray-300 text-sm">+91</span>
                    <input 
                      type="tel" 
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setFormData({...formData, phone: val});
                        if (val.length === 10) setPhoneError("");
                      }}
                      className="w-full px-0 py-1 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-[#3b82f6] focus:ring-0 transition-all text-blue-950 font-medium"
                      required
                    />
                  </motion.div>
                  <AnimatePresence>
                    {phoneError && (
                      <motion.span 
                        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="text-[10px] text-red-500 absolute -bottom-4 left-0 font-medium"
                      >
                        {phoneError}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Service Required (Custom Dropdown) */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                  className="relative mt-2"
                >
                  <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider mb-1 block">Service Required</label>
                  <motion.div 
                    whileHover={{ scale: 1.01, originX: 0 }}
                    className="w-full px-0 py-1 bg-transparent border-b border-gray-300 cursor-pointer flex justify-between items-center text-black font-medium hover:border-[#3b82f6] transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className={selectedService ? "text-black" : "text-gray-400"}>
                      {selectedService || "Select Treatment"}
                    </span>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.div>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white/80 backdrop-blur-md border border-white/50 shadow-xl rounded-lg overflow-hidden z-50 origin-top"
                      >
                        {["Root Canal Treatment", "Dental Implants", "Braces & Aligners", "Teeth Whitening", "Other"].map((service) => (
                          <div 
                            key={service}
                            className="px-4 py-2.5 text-sm text-black hover:bg-gray-200/80 hover:text-black cursor-pointer transition-colors"
                            onClick={() => {
                              setSelectedService(service);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {service}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Preferred Date */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                  className="relative group"
                >
                  <label className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider mb-1 block transition-colors group-focus-within:text-[#3b82f6]">Preferred Date</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, originX: 0 }}
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-0 py-1 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-[#3b82f6] focus:ring-0 transition-all text-blue-950 font-medium cursor-pointer"
                    required
                  />
                </motion.div>

                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 58, 138, 0.85)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#3b82f6]/15 backdrop-blur-md border border-[#3b82f6]/30 text-[#1e3a8a] font-bold py-3.5 rounded mt-4 transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_8px_32px_rgba(59,130,246,0.1)] hover:bg-[#3b82f6]/25 hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)] relative overflow-hidden"
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Processing...
                    </span>
                  ) : formStatus === "success" ? (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2 text-green-300">
                      <Shield className="w-4 h-4" /> Confirmed
                    </motion.span>
                  ) : (
                    "Submit Enquiry"
                  )}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar (Marquee) */}
      <section className="bg-[#f0f9ff] py-5 overflow-hidden flex">
        <div className="flex w-max animate-marquee">
          {/* First Group */}
          <div className="flex items-center gap-16 px-8">
            {stats.map((stat, idx) => (
              <div key={`stat-1-${idx}`} className="flex items-center gap-3 whitespace-nowrap">
                <div className="text-[#1e3a8a]">{stat.icon}</div>
                <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                  <span className="font-bold text-[#3b82f6] text-xl">{stat.value}</span>
                  <span className="text-gray-800 font-semibold text-base">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Second Group (Duplicate for seamless loop) */}
          <div className="flex items-center gap-16 px-8">
            {stats.map((stat, idx) => (
              <div key={`stat-2-${idx}`} className="flex items-center gap-3 whitespace-nowrap">
                <div className="text-[#1e3a8a]">{stat.icon}</div>
                <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                  <span className="font-bold text-[#3b82f6] text-xl">{stat.value}</span>
                  <span className="text-gray-800 font-semibold text-base">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-[#f0f9ff] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl"></div>
          <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Treatments at <span className="text-[#3b82f6]">rkclinic</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Comprehensive dental care tailored to your unique smile, using state-of-the-art technology and expert precision.
            </p>
          </div>
          
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <AnimatePresence>
              {treatments.map((treatment, idx) => {
                if (isMobile && !showAllTreatments && idx >= 4) return null;
                return (
                  <motion.div 
                    layout
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_32px_rgba(30,58,138,0.05)] border border-white/60 flex flex-col items-center text-center group cursor-pointer hover:bg-white/80 hover:shadow-[0_8px_32px_rgba(30,58,138,0.1)] hover:-translate-y-1"
                  >
                    <div className="mb-5 p-4 bg-white/80 rounded-2xl group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300 text-[#3b82f6] shadow-sm">
                      {treatment.icon}
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-800 whitespace-pre-line leading-snug group-hover:text-[#3b82f6] transition-colors">
                      {treatment.name}
                    </h3>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* View More Button for Mobile */}
          {isMobile && (
            <motion.div layout className="mt-8 flex justify-center md:hidden">
              <button 
                onClick={() => setShowAllTreatments(!showAllTreatments)}
                className="bg-[#3b82f6]/15 backdrop-blur-md border border-[#3b82f6]/30 text-[#1e3a8a] px-8 py-3.5 font-bold rounded-full hover:bg-[#3b82f6]/25 hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_rgba(59,130,246,0.1)] flex items-center gap-2"
              >
                {showAllTreatments ? "View Less" : "View All Treatments"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllTreatments ? 'rotate-180' : ''}`} />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Meet Your Dentist Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -right-20 top-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-1/2 relative max-w-md mx-auto md:max-w-none"
            >
              {/* Creative Frame Background */}
              <div className="absolute top-4 -right-4 w-full h-full rounded-[2.5rem] border-2 border-blue-200 bg-[#f0f9ff] -z-10 transition-transform duration-500 hover:translate-x-2 hover:-translate-y-2"></div>
              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 aspect-[4/5] bg-white border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Dr. Sarah Mitchell" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <div className="mb-4">
                <span className="text-sm font-bold tracking-widest text-[#3b82f6] uppercase">Meet Your Dentist</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-5 tracking-tight leading-tight">
                Dr. Sarah Mitchell, DDS
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-[15px] text-gray-500 mb-6 font-medium">
                <span>Graduate of UT Austin Dental School</span>
                <span className="text-blue-200">•</span>
                <span>Member of ADA</span>
                <span className="text-blue-200">•</span>
                <span>Invisalign Certified Provider</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Dr. Mitchell has been transforming smiles for over 15 years. Her gentle approach and passion for patient comfort have made <span className="font-semibold text-[#3b82f6]">rkclinic</span> one of the most trusted dental practices.
              </p>
              <div className="mt-8">
                <span 
                  className="text-4xl md:text-5xl text-[#3b82f6] opacity-90 tracking-wider"
                  style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Great Vibes', cursive" }}
                >
                  Sarah Mitchell
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smile Gallery Section */}
      <section className="py-20 bg-[#f8fafc] relative overflow-hidden border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center mb-16 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] tracking-tight mb-6"
            >
              Transforming Smiles, <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-cyan-400">Changing Lives</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Don't just take our word for it. Slide the images below to see the actual, life-changing results we've achieved for our patients.
            </motion.p>
          </div>

          {/* Mobile: Flex overflow, Desktop: Grid */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-[85vw] shrink-0 md:w-auto snap-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(30,58,138,0.08)] border border-blue-50 flex flex-col overflow-hidden group"
            >
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                fakeBefore={true}
              />
              <div className="p-6 md:p-8 text-center bg-gradient-to-b from-white to-blue-50/30">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Teeth Whitening</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Professional laser whitening treatment completed in a single 45-minute session.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-[85vw] shrink-0 md:w-auto snap-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(30,58,138,0.08)] border border-blue-50 flex flex-col overflow-hidden group"
            >
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                afterImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                fakeBefore={true}
              />
              <div className="p-6 md:p-8 text-center bg-gradient-to-b from-white to-blue-50/30">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Porcelain Veneers</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Custom-crafted porcelain veneers to correct chipping, gaps, and discoloration.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-[85vw] shrink-0 md:w-auto snap-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(30,58,138,0.08)] border border-blue-50 flex flex-col overflow-hidden group"
            >
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&q=80&w=800"
                afterImage="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?auto=format&fit=crop&q=80&w=800"
                fakeBefore={true}
              />
              <div className="p-6 md:p-8 text-center bg-gradient-to-b from-white to-blue-50/30">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">Invisalign Aligners</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Complete smile realignment over 12 months using clear, removable aligners.</p>
              </div>
            </motion.div>

          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex justify-center items-center gap-2 text-gray-400 text-sm mt-2 mb-8">
            <ChevronDown className="w-4 h-4 rotate-90" />
            <span>Swipe for more</span>
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0b1120] text-white pt-20 pb-28 md:pb-12 relative overflow-hidden">
        {/* Animated Gradient Border Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-[#3b82f6] to-purple-500"></div>

        {/* Animated decorative subtle pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#3b82f6] blur-[120px]"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[120px]"
          ></motion.div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md w-max px-6 py-3 rounded-2xl mb-8 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">rkclinic</span>
              </div>
              <p className="text-blue-200/80 text-[15px] leading-relaxed mb-8">
                Transforming smiles with advanced dental care, state-of-the-art technology, and a commitment to your ultimate comfort.
              </p>
              <div className="flex gap-4">
                <motion.a whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href="#" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all border border-white/10">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href="#" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all border border-white/10">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} href="#" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all border border-white/10">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> Quick Links
              </h4>
              <ul className="space-y-4">
                {['Home', 'About Clinic', 'Treatments', 'Patient Reviews', 'Contact Us'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a href="#" className="text-blue-200/80 hover:text-cyan-400 transition-colors flex items-center gap-3 text-[15px]">
                      <span className="text-[#3b82f6] text-lg">›</span> {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Treatments */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> Top Treatments
              </h4>
              <ul className="space-y-4">
                {['Root Canal Treatment', 'Dental Implants', 'Invisalign Aligners', 'Teeth Whitening', 'Kids Dentistry'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a href="#" className="text-blue-200/80 hover:text-cyan-400 transition-colors flex items-center gap-3 text-[15px]">
                      <span className="text-[#3b82f6] text-lg">›</span> {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> Contact Us
              </h4>
              <ul className="space-y-6">
                <motion.li whileHover={{ x: 5 }} className="flex items-start gap-4 text-blue-200/80 text-[15px] group">
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#3b82f6]/20 transition-colors border border-white/10 mt-0.5">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="pt-2 leading-relaxed">123 Dental Care Avenue, Medical District, City - 400001</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center gap-4 text-blue-200/80 text-[15px] group">
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#3b82f6]/20 transition-colors border border-white/10">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="pt-1">+91 98765 43210</span>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="flex items-center gap-4 text-blue-200/80 text-[15px] group">
                  <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#3b82f6]/20 transition-colors border border-white/10">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="pt-1">Mon - Sun: 9:00 AM - 9:00 PM</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-blue-200/60 text-[15px]">© 2026 rkclinic. All rights reserved.</p>
            <div className="flex gap-6 text-[15px] text-blue-200/60">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </footer>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#f0f9ff] border-t border-gray-200 flex justify-around items-center p-1.5 z-50 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center p-2 text-gray-700 hover:text-[#3b82f6] flex-1">
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-[11px] font-semibold text-center leading-tight">Book<br/>Appointment</span>
        </button>
        <div className="w-px h-10 bg-gray-300"></div>
        <button className="flex flex-col items-center p-2 text-gray-700 hover:text-[#3b82f6] flex-1">
          <MapPin className="w-6 h-6 mb-1" />
          <span className="text-[11px] font-semibold text-center leading-tight">Find<br/>Clinics</span>
        </button>
        <div className="w-px h-10 bg-gray-300"></div>
        <button className="flex flex-col items-center p-2 text-[#3b82f6] flex-1">
          <Shield className="w-6 h-6 mb-1" />
          <span className="text-[11px] font-semibold text-center leading-tight">Dental<br/>Health Plan</span>
        </button>
        <div className="w-px h-10 bg-gray-300"></div>
        <button className="flex flex-col items-center p-2 text-gray-700 hover:text-[#3b82f6] flex-1">
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-[11px] font-semibold text-center leading-tight">Instant<br/>Callback</span>
        </button>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-8 right-6 z-40 bg-[#3b82f6] text-white p-3 rounded-full shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:bg-[#2563eb] hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
