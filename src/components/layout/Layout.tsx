import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronRight, Globe, Phone, Mail, Search, ChevronDown, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import AIAssistant from "../AIAssistant";

const languages = [
  { code: "en", name: "English" },
  { code: "mr", name: "मराठी" },
  { code: "hi", name: "हिन्दी" },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState<string | null>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLangCode = i18n.language?.substring(0, 2) || 'en';
  const currentLang = languages.find(l => l.code === currentLangCode) || languages[0];

  const navGroups = [
    {
      name: t('nav.about_us'),
      items: [
        { name: t('nav.our_story'), path: "/about" },
        { name: t('nav.leadership'), path: "/leadership" },
        { name: t('nav.financials'), path: "/financials" },
      ]
    },
    {
      name: t('nav.our_work'),
      items: [
        { name: t('nav.diseases'), path: "/diseases" },
        { name: t('nav.programs'), path: "/programs" },
        { name: t('nav.impact'), path: "/impact" },
      ]
    },
    {
      name: t('nav.get_involved'),
      items: [
        { name: t('nav.volunteer'), path: "/volunteer" },
        { name: t('nav.events'), path: "/events" },
      ]
    },
    { name: t('nav.testimonials'), path: "/testimonials" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileGroup(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300">
        {/* Top Bar - Corporate Style */}
        <div className={cn(
          "bg-gray-900 text-white transition-all duration-300 overflow-hidden",
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        )}>
          <div className="w-full max-w-[1920px] h-full mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center text-xs font-medium tracking-wide">
            <div className="flex items-center gap-6">
              <a href="tel:+919112006844" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                <Phone className="w-3 h-3" /> +91 9112006844
              </a>
              <a href="mailto:info@aibdf.in" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                <Mail className="w-3 h-3" /> info@aibdf.in
              </a>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/faq" className="hover:text-brand-primary transition-colors">{t('nav.faq')}</Link>
              <Link to="/doctors" className="hover:text-brand-primary transition-colors">{t('nav.find_doctor')}</Link>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe className="w-3 h-3" />
                <select 
                  value={currentLangCode}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-transparent border-none outline-none text-white cursor-pointer hover:text-brand-primary transition-colors"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code} className="text-gray-900">{lang.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div
          className={cn(
            "w-full transition-all duration-300 border-b border-transparent bg-white",
            isScrolled ? "shadow-soft border-gray-200 py-3" : "py-5"
          )}
        >
          <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="https://res.cloudinary.com/dtm0v42aw/image/upload/v1775735525/AIBDF_Logo_oo3vit.png" 
                alt="AIBDF Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navGroups.map((group) => (
                <div 
                  key={group.name}
                  className="relative group/nav"
                  onMouseEnter={() => setActiveDropdown(group.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {group.items ? (
                    <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-brand-primary transition-colors py-2">
                      {group.name}
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === group.name ? "rotate-180" : "")} />
                    </button>
                  ) : (
                    <Link
                      to={group.path!}
                      className={cn(
                        "text-sm font-semibold transition-colors hover:text-brand-primary py-2",
                        location.pathname === group.path ? "text-brand-primary" : "text-gray-700"
                      )}
                    >
                      {group.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {group.items && (
                    <AnimatePresence>
                      {activeDropdown === group.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, rotateX: -15 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          exit={{ opacity: 0, y: 10, rotateX: -15 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden origin-top"
                        >
                          <div className="py-2">
                            {group.items.map(item => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-5 py-2.5 text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-primary-soft transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-5">
              <button className="text-gray-600 hover:text-brand-primary transition-colors p-2">
                <Search className="w-5 h-5" />
              </button>
              
              <div className="w-px h-6 bg-gray-200"></div>

              <Link
                to="/donate"
                className="text-sm font-semibold text-gray-700 hover:text-brand-primary flex items-center gap-2 transition-colors"
              >
                <Heart className="w-4 h-4 text-brand-accent" /> {t('nav.donate')}
              </Link>
              <Link
                to="/get-help"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-btn text-sm font-semibold transition-colors shadow-btn"
              >
                {t('nav.get_help')}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {/* Mobile Language Switcher */}
              <div className="flex gap-2 p-3 bg-gray-50 rounded-lg mb-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "flex-1 py-2 text-sm font-medium rounded-md transition-colors",
                      currentLang.code === lang.code ? "bg-white shadow-sm text-brand-primary" : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>

              {navGroups.map((group) => (
                <div key={group.name} className="flex flex-col">
                  {group.items ? (
                    <>
                      <button
                        onClick={() => setExpandedMobileGroup(expandedMobileGroup === group.name ? null : group.name)}
                        className="text-lg font-medium p-3 rounded-lg flex items-center justify-between text-gray-700 hover:bg-gray-50"
                      >
                        {group.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform", expandedMobileGroup === group.name ? "rotate-180" : "rotate-0")} />
                      </button>
                      <AnimatePresence>
                        {expandedMobileGroup === group.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col pl-4"
                          >
                            {group.items.map(item => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className={cn(
                                  "text-base font-medium p-3 rounded-lg flex items-center justify-between",
                                  location.pathname === item.path
                                    ? "bg-brand-primary-soft text-brand-primary"
                                    : "text-gray-600 hover:bg-gray-50"
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={group.path!}
                      className={cn(
                        "text-lg font-medium p-3 rounded-lg flex items-center justify-between",
                        location.pathname === group.path
                          ? "bg-brand-primary-soft text-brand-primary"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {group.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="h-px bg-gray-200 my-2" />
              <Link
                to="/donate"
                className="text-lg font-medium p-3 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <Heart className="w-5 h-5 text-brand-accent" /> {t('nav.donate')}
              </Link>
              <Link
                to="/get-help"
                className="mt-4 bg-brand-primary text-white p-4 rounded-btn text-center font-medium text-lg shadow-btn"
              >
                {t('nav.get_help_now')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>

      {/* Footer - Bento Style */}
      <footer className="bg-white pt-24 pb-12 mt-auto">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
          
          {/* Bento Grid Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            
            {/* Box 1: CTA & Newsletter (Large) */}
            <div className="lg:col-span-2 bg-gray-900 text-white rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-3xl rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150" />
              <div className="relative z-10 mb-12">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">{t('footer.cta_title')}</h2>
                <p className="text-gray-400 text-lg max-w-md">{t('footer.cta_desc')}</p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder={t('footer.email_placeholder')}
                  className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white/15 transition-all w-full sm:w-80 text-white placeholder:text-gray-400"
                />
                <button className="px-8 py-4 bg-brand-primary text-white font-medium rounded-2xl hover:bg-brand-primary-hover transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-brand-primary/20">
                  {t('footer.subscribe')} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Box 2: Logo & About */}
            <div className="bg-gray-50 rounded-[2rem] p-10 flex flex-col justify-between border border-gray-100">
              <Link to="/" className="inline-block mb-6">
                <img 
                  src="https://res.cloudinary.com/dtm0v42aw/image/upload/v1775735525/AIBDF_Logo_oo3vit.png" 
                  alt="AIBDF Logo" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {t('footer.about_text')}
              </p>
            </div>

            {/* Box 3: Socials & Donate */}
            <div className="bg-brand-primary rounded-[2rem] p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 text-white/10 pointer-events-none">
                <Heart className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white/90">Connect</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all backdrop-blur-sm"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all backdrop-blur-sm"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all backdrop-blur-sm"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all backdrop-blur-sm"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
              <Link
                to="/donate"
                className="relative z-10 w-full py-4 bg-white text-brand-primary font-bold rounded-2xl text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Heart className="w-4 h-4" /> {t('nav.make_donation')}
              </Link>
            </div>

          </div>

          {/* Bento Grid Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            
            {/* Box 4: Quick Links */}
            <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100">
              <h3 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">{t('nav.quick_links')}</h3>
              <ul className="space-y-4 font-medium">
                <li><Link to="/about" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.about_us')}</Link></li>
                <li><Link to="/diseases" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.diseases')}</Link></li>
                <li><Link to="/doctors" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.find_doctor')}</Link></li>
                <li><Link to="/programs" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.programs')}</Link></li>
              </ul>
            </div>

            {/* Box 5: Support Links */}
            <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-100">
              <h3 className="text-gray-900 font-bold mb-6 text-sm uppercase tracking-wider">{t('nav.support')}</h3>
              <ul className="space-y-4 font-medium">
                <li><Link to="/get-help" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.get_help')}</Link></li>
                <li><Link to="/faq" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.faq')}</Link></li>
                <li><Link to="/contact" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.contact')}</Link></li>
                <li><Link to="/volunteer" className="text-gray-500 hover:text-brand-primary hover:translate-x-1 inline-block transition-transform duration-300">{t('nav.volunteer')}</Link></li>
              </ul>
            </div>

            {/* Box 6: Contact Info (Spans 2) */}
            <div className="lg:col-span-2 bg-brand-primary-soft rounded-[2rem] p-10 flex flex-col justify-center">
              <h3 className="text-brand-primary font-bold mb-8 text-sm uppercase tracking-wider">{t('nav.contact')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-primary shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <a href="tel:9112006844" className="text-gray-900 font-medium hover:text-brand-primary transition-colors block mb-1">+91 9112006844</a>
                      <a href="tel:9341800200" className="text-gray-900 font-medium hover:text-brand-primary transition-colors block">+91 9341800200</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-primary shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a href="mailto:info@aibdf.in" className="text-gray-900 font-medium hover:text-brand-primary transition-colors">info@aibdf.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-primary shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="pt-1 text-gray-900 font-medium leading-relaxed">502 Surad Apartment<br/>106/13 Erandwane<br/>Pune 411004, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <p className="text-gray-400 text-sm font-medium">&copy; {new Date().getFullYear()} AIBDF. All rights reserved.</p>
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              <Link to="/privacy" className="hover:text-gray-900 transition-colors">{t('nav.privacy')}</Link>
              <Link to="/terms" className="hover:text-gray-900 transition-colors">{t('nav.terms')}</Link>
            </div>
          </div>
        </div>
      </footer>
      
      <AIAssistant />
    </div>
  );
}
