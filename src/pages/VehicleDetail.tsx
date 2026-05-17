import { useParams, Link } from "react-router-dom";
import { mockVehicles } from "../data/mockData";
import { ChevronRight, Fuel, MapPin, ShieldCheck, Zap, Heart, Share, Calendar, Gauge, PaintBucket, AlertCircle, FileText, ChevronLeft, X } from "lucide-react";
import React, { useState } from "react";
import { cn, formatPrice } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { FinanceCalculator } from "../components/FinanceCalculator";
import { useAppContext } from "../context/AppContext";

export function VehicleDetail() {
  const { id } = useParams();
  const vehicle = mockVehicles.find(v => v.id === id) || mockVehicles[0];
  const { currency, toggleFavorite, favorites } = useAppContext();
  const [activeImg, setActiveImg] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [offerAmount, setOfferAmount] = useState<string>("");

  if (!vehicle) return <div className="p-8 text-center text-white">Vehicle not found</div>;

  const isFavorite = favorites.includes(vehicle.id);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/search?brand=${vehicle.brand}`} className="hover:text-white transition-colors">{vehicle.brand}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-300">{vehicle.model}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Col - Gallery & Details */}
        <div className="flex-1 min-w-0">
          {/* Main Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-apex-surface border border-white/5">
              <img 
                src={vehicle.images[activeImg] === 'resim' ? 'https://images.unsplash.com/photo-1492144534655-ae79c964bc9d?q=80&w=2066&auto=format&fit=crop' : vehicle.images[activeImg]} 
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={(e) => { e.preventDefault(); toggleFavorite(vehicle.id); }}
                className={cn(
                  "absolute top-4 right-4 p-2 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center transition-colors",
                  isFavorite ? "bg-apex-accent-cyan/20 text-apex-accent-cyan" : "bg-black/50 text-white hover:bg-black"
                )}
              >
                <Heart className={cn("w-5 h-5", isFavorite && "fill-apex-accent-cyan")} />
              </button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {vehicle.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={cn(
                    "relative w-24 sm:w-32 aspect-video rounded-lg overflow-hidden shrink-0 border-2 transition-colors duration-200",
                    activeImg === idx ? "border-white" : "border-transparent hover:border-white/50"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  {activeImg !== idx && <div className="absolute inset-0 bg-black/40"></div>}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-12">
            {/* Overview Specs */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6">Vehicle Overview</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-apex-surface p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Year</span>
                  <span className="font-medium text-white">{vehicle.year}</span>
                </div>
                <div className="bg-apex-surface p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                  <Gauge className="w-5 h-5 text-gray-400" />
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Mileage</span>
                  <span className="font-medium text-white">{vehicle.mileage.toLocaleString()} mi</span>
                </div>
                <div className="bg-apex-surface p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                  <Fuel className="w-5 h-5 text-gray-400" />
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Fuel Type</span>
                  <span className="font-medium text-white">{vehicle.fuel}</span>
                </div>
                <div className="bg-apex-surface p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                  <Zap className="w-5 h-5 text-gray-400" />
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Transmission</span>
                  <span className="font-medium text-white">{vehicle.transmission}</span>
                </div>
              </div>
            </section>

            {/* Detailed Specs */}
            <section>
              <h2 className="text-xl font-bold text-white mb-6">Specifications</h2>
              <div className="bg-apex-surface border border-white/5 rounded-2xl overflow-hidden">
                <div className="divide-y divide-white/5">
                  <div className="flex justify-between p-4">
                    <span className="text-gray-400">Body Type</span>
                    <span className="text-white font-medium">{vehicle.bodyType}</span>
                  </div>
                  <div className="flex justify-between p-4">
                    <span className="text-gray-400">Exterior Color</span>
                    <span className="text-white font-medium flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500 border border-white/20"></div>
                      {vehicle.color}
                    </span>
                  </div>
                  <div className="flex justify-between p-4">
                    <span className="text-gray-400">Damage History</span>
                    <span className="text-white font-medium">{vehicle.damage}</span>
                  </div>
                  <div className="flex justify-between p-4">
                    <span className="text-gray-400">Ownership</span>
                    <span className="text-white font-medium">{vehicle.owner}</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-6">Description</h2>
              <div className="prose prose-invert prose-p:text-gray-400 max-w-none">
                <p>
                  Immaculate {vehicle.year} {vehicle.brand} {vehicle.model} finished in beautiful {vehicle.color}. 
                  This pristine example has been meticulously maintained and comes with a full service history. 
                  Loaded with premium options and ready for its next discerning owner.
                </p>
                <p>
                  Features include premium audio system, advanced driver assistance package, panoramic roof, 
                  and exclusive interior trim. Paint is flawless and interior shows zero wear. 
                  Clean title, no accidents, always garage kept.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Right Col - Sticky Actions */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-24 space-y-6">
            
            {/* Pricing Card */}
            <div className="bg-apex-surface border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-apex-accent/10 blur-3xl rounded-full"></div>
              
              <div className="relative">
                <h1 className="text-2xl font-bold text-white mb-2 leading-tight">{vehicle.brand} {vehicle.model}</h1>
                <p className="text-sm text-gray-400 mb-6 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {vehicle.location}
                </p>
                
                <div className="text-4xl font-display font-bold text-white mb-8">
                  {formatPrice(vehicle.price, currency)}
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Contact Seller
                  </button>
                  <button 
                    onClick={() => setIsOfferModalOpen(true)}
                    className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
                  >
                    Make an Offer
                  </button>
                </div>
              </div>
            </div>

            {/* Seller Profile */}
            <div className="bg-apex-surface border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold text-white shrink-0">
                  {vehicle.seller.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-white flex items-center gap-2">
                    {vehicle.seller.name}
                    {vehicle.seller.verified && <ShieldCheck className="w-4 h-4 text-apex-accent-cyan" />}
                  </h3>
                  <p className="text-sm text-gray-400">{vehicle.seller.type} • {vehicle.seller.rating} ★</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" /> Based in {vehicle.location}
              </div>
            </div>

            <FinanceCalculator price={vehicle.price} />

          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsContactModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-apex-surface border border-white/10 rounded-3xl p-8 w-full max-w-lg z-10">
              <button onClick={() => setIsContactModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white"><X className="w-5 h-5"/></button>
              <h2 className="text-2xl font-bold text-white mb-2">Contact {vehicle.seller.name}</h2>
              <p className="text-gray-400 mb-6 text-sm">Inquire about the {vehicle.year} {vehicle.brand} {vehicle.model}</p>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" />
                <textarea rows={4} placeholder="I'm interested in this vehicle..." className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors resize-none"></textarea>
                <button type="button" onClick={() => setIsContactModalOpen(false)} className="w-full bg-apex-accent-cyan text-black font-bold h-12 rounded-xl hover:bg-opacity-90 transition-colors mt-2">Send Message</button>
              </form>
            </motion.div>
          </div>
        )}

        {isOfferModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOfferModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-apex-surface border border-white/10 rounded-3xl p-8 w-full max-w-md z-10">
              <button onClick={() => setIsOfferModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white"><X className="w-5 h-5"/></button>
              <h2 className="text-2xl font-bold text-white mb-2">Make an Offer</h2>
              <p className="text-gray-400 mb-6 text-sm">Asking Price: {formatPrice(vehicle.price, currency)}</p>
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input 
                    type="number" 
                    value={offerAmount}
                    onChange={(e) => setOfferAmount(e.target.value)}
                    placeholder="Enter offer amount" 
                    className="w-full bg-apex-bg border border-white/10 rounded-xl pl-8 pr-4 py-4 text-xl text-white font-bold focus:outline-none focus:border-apex-accent-cyan transition-colors" 
                  />
                </div>
                <textarea rows={3} placeholder="Add a note to the seller (optional)" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors resize-none"></textarea>
                <button type="button" onClick={() => setIsOfferModalOpen(false)} className="w-full bg-white text-black font-bold h-12 rounded-xl hover:bg-gray-200 transition-colors mt-2">Submit Offer</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
