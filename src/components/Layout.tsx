import { Link, Outlet, useLocation } from "react-router-dom";
import { Search, User, Menu, Heart, Bell, ArrowUp, LogOut } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { AuthModal } from "./AuthModal";
import { motion, AnimatePresence } from "motion/react";
import { useAppContext, Currency } from "../context/AppContext";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isLoggedIn, logout, currency, setCurrency } = useAppContext();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAccountClick = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-apex-bg text-white">
      <header className="h-16 px-8 flex items-center justify-between border-b border-white/10 bg-apex-bg/80 backdrop-blur-xl z-50">
          <div className="flex items-center space-x-12">
            <Link to="/" className="text-2xl font-bold tracking-tighter italic text-apex-accent-cyan">
              ZUMTORCARS
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
              <Link to="/search" className="hover:text-white transition-colors">Marketplace</Link>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <Link to="/import-request" className="hover:text-white transition-colors">Import Request</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-transparent text-gray-400 text-sm font-medium border-none outline-none focus:ring-0 cursor-pointer hover:text-white uppercase transition-colors appearance-none"
            >
              <option value="USD" className="bg-apex-bg text-white">USD</option>
              <option value="EUR" className="bg-apex-bg text-white">EUR</option>
              <option value="TRY" className="bg-apex-bg text-white">TRY</option>
            </select>
            <Link to="/sell" className="text-sm font-medium border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">Sell Vehicle</Link>
            
            <Link to="/search" className="text-gray-400 hover:text-white transition-colors"><Search className="w-5 h-5" /></Link>
            <Link to="/favorites" className="text-gray-400 hover:text-white transition-colors"><Heart className="w-5 h-5" /></Link>
            
            <Link 
              to="/dashboard" 
              onClick={handleAccountClick}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-apex-accent-cyan to-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase"
              title={isLoggedIn ? "Account" : "Sign In"}
            >
              JD
            </Link>

            {isLoggedIn && (
              <button onClick={logout} className="text-gray-400 hover:text-red-500 transition-colors ml-2" title="Sign Out">
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </div>

          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-apex-surface z-40 border-b border-white/10 pb-4">
          <nav className="px-4 pt-2">
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-300">
              <li><Link to="/search" onClick={() => setMobileMenuOpen(false)}>Marketplace</Link></li>
              <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link to="/import-request" onClick={() => setMobileMenuOpen(false)}>Import Request</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              <li>
                <Link 
                  to="/dashboard" 
                  onClick={(e) => { setMobileMenuOpen(false); handleAccountClick(e); }}
                >
                  {isLoggedIn ? "Account" : "Sign In"}
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <button onClick={() => { setMobileMenuOpen(false); logout(); }} className="text-red-500 w-full text-left">
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="h-16 px-8 flex items-center justify-end border-t border-white/5 bg-[#080808] mt-auto hidden md:flex shrink-0">
        <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <a href="https://www.instagram.com/zumtorcars/" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram
          </a>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 z-50 p-4 bg-apex-accent-cyan text-black rounded-full shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:scale-105 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </div>
  );
}
