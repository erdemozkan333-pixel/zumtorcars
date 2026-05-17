import { ArrowRight, Fuel, Zap } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { mockVehicles, trendingBrands, categories } from "../data/mockData";
import { useAppContext } from "../context/AppContext";
import { formatPrice } from "../lib/utils";

export function Home() {
  const navigate = useNavigate();
  const { currency } = useAppContext();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const [searchBrand, setSearchBrand] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  const featuredVehicles = mockVehicles.filter(v => {
    if (!v.featured) return false;
    if (selectedBrand && v.brand !== selectedBrand) return false;
    return true;
  }).slice(0, 7);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchBrand) params.append("brand", searchBrand);
    if (searchType) params.append("type", searchType);
    if (searchPrice) params.append("maxPrice", searchPrice);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full flex-grow flex flex-col p-8 gap-8 max-w-[1400px] mx-auto">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-3xl overflow-hidden border border-white/5 bg-[#111111]">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964bc9d?q=80&w=2066&auto=format&fit=crop" 
            alt="Premium Hero" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[0.9] mb-4">
              PRECISION <br/> <span className="text-apex-accent-cyan">IN MOTION.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mb-8">
              Discover the world's most exclusive automotive collection with verified history and seamless logistics.
            </p>

            {/* Smart Search Bar */}
            <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-2xl border border-white/20 p-2 rounded-2xl w-full max-w-2xl gap-2 md:gap-0">
              <div className="flex-1 px-4 border-r border-white/10 w-full md:w-auto relative group">
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Make & Model</div>
                <select 
                  value={searchBrand}
                  onChange={(e) => setSearchBrand(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" className="bg-black">Any Brand</option>
                  {trendingBrands.map(b => (
                    <option key={b} value={b} className="bg-black">{b}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 px-4 border-r border-white/10 w-full md:w-auto relative group">
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Body Style</div>
                <select 
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" className="bg-black">All Styles</option>
                  {categories.map(c => (
                    <option key={c.name} value={c.name} className="bg-black">{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 px-4 border-r md:border-r-0 border-white/10 w-full md:w-auto relative group">
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Budget</div>
                <select 
                  value={searchPrice}
                  onChange={(e) => setSearchPrice(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-apex-accent-cyan focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" className="bg-black">Any Budget</option>
                  <option value="50000" className="bg-black">{formatPrice(50000, currency)}</option>
                  <option value="100000" className="bg-black">{formatPrice(100000, currency)}</option>
                  <option value="200000" className="bg-black">{formatPrice(200000, currency)}</option>
                  <option value="300000" className="bg-black">{formatPrice(300000, currency)}</option>
                </select>
              </div>
              <button onClick={handleSearch} className="bg-apex-accent-cyan text-black font-bold h-12 px-8 rounded-xl hover:scale-[1.02] active:scale-95 transition-transform w-full md:w-auto mt-2 md:mt-0">
                FIND MATCH
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Filter */}
      <section className="py-8 border-y border-white/5 bg-apex-surface-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Trending Brands</h3>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setSelectedBrand(null)}
                  className={`px-5 py-2.5 rounded-full border transition-all text-sm ${!selectedBrand ? 'bg-apex-accent-cyan text-black border-apex-accent-cyan font-bold' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'}`}
                >
                  All Brands
                </button>
                {trendingBrands.map(brand => (
                  <button 
                    key={brand} 
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-5 py-2.5 rounded-full border transition-all text-sm ${selectedBrand === brand ? 'bg-apex-accent-cyan text-black border-apex-accent-cyan font-bold' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-bold tracking-tight flex items-center text-white">
            CURATED PICKS
            <span className="ml-4 px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-500">40 RESULTS</span>
          </h2>
          <div className="flex space-x-2">
             <Link to="/search" className="text-[10px] font-bold uppercase text-gray-500 hover:text-white flex items-center transition-colors">
               View All <ArrowRight className="w-3 h-3 ml-1" />
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.length > 0 ? featuredVehicles.map((vehicle, i) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-[#181818] border border-white/5 rounded-2xl overflow-hidden p-4 group cursor-pointer ${i === 1 ? 'border-l-2 border-l-apex-accent-cyan/40' : ''}`}
            >
              <Link to={`/vehicle/${vehicle.id}`}>
                <div className="relative h-40 bg-[#222] rounded-xl mb-4 overflow-hidden">
                  <img 
                    src={vehicle.images[0] === 'resim' ? 'https://images.unsplash.com/photo-1492144534655-ae79c964bc9d?q=80&w=2066&auto=format&fit=crop' : vehicle.images[0]} 
                    alt={`${vehicle.brand} ${vehicle.model}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                  />
                  {vehicle.seller.type === "Dealer" && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-bold text-apex-accent-cyan tracking-tighter uppercase">
                      Verified Dealer
                    </div>
                  )}
                  {i === 1 && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-apex-accent-cyan text-black rounded text-[10px] font-bold tracking-tighter uppercase">
                      Trending
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div className="pr-2">
                    <h3 className="font-bold text-base mb-1 text-white truncate">{vehicle.year} {vehicle.brand} {vehicle.model}</h3>
                    <div className="flex space-x-2 text-[11px] text-gray-500 font-medium">
                      <span>{vehicle.mileage.toLocaleString()} mi</span>
                      <span>•</span>
                      <span>{vehicle.fuel}</span>
                      <span>•</span>
                      <span className="truncate">{vehicle.location.split(',')[0]}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-apex-accent-cyan font-bold text-lg">{formatPrice(vehicle.price, currency)}</div>
                    <div className="text-[10px] text-gray-600">Est. {formatPrice((vehicle.price * 0.8) / 60, currency)}/mo</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )) : (
            <div className="col-span-4 py-12 text-center text-gray-500">
              No featured vehicles found for this brand.
            </div>
          )}
        </div>
      </section>

      {/* Info / Detail text */}
      <section className="py-12 mt-12 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h4 className="text-apex-accent-cyan font-bold text-xs tracking-widest uppercase mb-4">ZUMTORCARS Premium Experience</h4>
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            ZUMTORCARS is the premier marketplace for luxury, high-performance, and exotic vehicles. 
            We provide exclusive access to the world's most sought-after cars with unparalleled service and verified provenance. 
            From seamless international acquisitions to expert maintenance and styling, experience automotive perfection tailored to discerning drivers.
          </p>
        </div>
      </section>
    </div>
  );
}
