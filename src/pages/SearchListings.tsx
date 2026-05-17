import { useState, useMemo } from "react";
import { Filter, Search as SearchIcon, ArrowDownUp, LayoutGrid, List, Fuel, Zap, MapPin, Check, Heart } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { mockVehicles, trendingBrands, categories } from "../data/mockData";
import { motion } from "motion/react";
import { cn, formatPrice } from "../lib/utils";
import { useAppContext } from "../context/AppContext";

export function SearchListings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { currency, toggleFavorite, favorites } = useAppContext();

  // Read initial states from URL params or set default
  const paramBrand = searchParams.get("brand");
  const paramType = searchParams.get("type");
  const paramMaxPrice = searchParams.get("maxPrice");

  const [selectedBrands, setSelectedBrands] = useState<string[]>(paramBrand ? [paramBrand] : []);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>(paramMaxPrice || "");
  const [selectedTypes, setSelectedTypes] = useState<string[]>(paramType ? [paramType] : []);
  const [sortBy, setSortBy] = useState<string>("newest");

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const filteredAndSortedVehicles = useMemo(() => {
    let result = [...mockVehicles];

    if (selectedBrands.length > 0) {
      result = result.filter(v => selectedBrands.includes(v.brand));
    }

    if (selectedTypes.length > 0) {
      result = result.filter(v => selectedTypes.includes(v.bodyType));
    }

    if (minPrice) {
      result = result.filter(v => v.price >= parseInt(minPrice));
    }

    if (maxPrice) {
      result = result.filter(v => v.price <= parseInt(maxPrice));
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
      case "newest":
      default:
        // Mock data doesn't have listDate, so keep as is
        break;
    }

    return result;
  }, [selectedBrands, selectedTypes, minPrice, maxPrice, sortBy]);

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 lg:w-72 shrink-0 space-y-8 h-fit sticky top-24">
        <div>
          <h2 className="text-xl font-display font-bold text-white mb-6">Filters</h2>
          
          <div className="space-y-6">
            {/* Make */}
            <div>
              <h3 className="text-sm font-medium text-white mb-3">Make</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-hide">
                {trendingBrands.map((brand) => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div 
                      onClick={() => toggleBrand(brand)}
                      className={cn("w-5 h-5 rounded border border-white/20 bg-transparent flex items-center justify-center transition-colors", selectedBrands.includes(brand) && "bg-white border-white")}
                    >
                      {selectedBrands.includes(brand) && <Check className="w-3.5 h-3.5 text-black" />}
                    </div>
                    <span onClick={() => toggleBrand(brand)} className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors select-none">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-sm font-medium text-white mb-3">Price Range (USD)</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  placeholder="Min" 
                  className="w-full bg-apex-surface border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-apex-accent-cyan" 
                />
                <span className="text-gray-500">-</span>
                <input 
                  type="number" 
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  placeholder="Max" 
                  className="w-full bg-apex-surface border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-apex-accent-cyan" 
                />
              </div>
            </div>

            {/* Body Type */}
            <div>
              <h3 className="text-sm font-medium text-white mb-3">Body Type</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat.name} 
                    onClick={() => toggleType(cat.name)}
                    className={cn(
                      "px-3 py-1.5 rounded-full border text-xs transition-colors",
                      selectedTypes.includes(cat.name) ? "bg-white text-black border-white" : "bg-apex-surface border-white/10 text-gray-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Header / Active Filters / Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-display font-bold text-white">Vehicles for Sale</h1>
            <p className="text-sm text-gray-400 mt-1">{filteredAndSortedVehicles.length} results found</p>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-48">
              <select 
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full appearance-none bg-apex-surface border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-apex-accent-cyan cursor-pointer"
              >
                <option value="newest">Newest Listed</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="mileage-asc">Mileage: Low to High</option>
              </select>
              <ArrowDownUp className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            
            <div className="flex items-center bg-apex-surface border border-white/10 rounded-lg p-1">
              <button 
                onClick={() => setViewMode("grid")}
                className={cn("p-1.5 rounded-md transition-colors", viewMode === "grid" ? "bg-white/10 text-white" : "text-gray-500 hover:text-white")}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={cn("p-1.5 rounded-md transition-colors", viewMode === "list" ? "bg-white/10 text-white" : "text-gray-500 hover:text-white")}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Listings Grid/List */}
        <div className={cn(
          "gap-6",
          viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col"
        )}>
          {filteredAndSortedVehicles.map((vehicle, i) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "group bg-apex-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all hover:shadow-2xl flex relative",
                viewMode === "grid" ? "flex-col" : "flex-col sm:flex-row h-auto sm:h-56"
              )}
            >
              <button 
                onClick={(e) => { e.preventDefault(); toggleFavorite(vehicle.id); }}
                className={cn(
                  "absolute top-4 right-4 z-10 p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors",
                  favorites.includes(vehicle.id) ? "bg-apex-accent-cyan/20 text-apex-accent-cyan backdrop-blur-md" : "bg-black/50 backdrop-blur-md text-white hover:bg-black"
                )}
              >
                <Heart className={cn("w-5 h-5", favorites.includes(vehicle.id) && "fill-apex-accent-cyan")} />
              </button>

              <Link to={`/vehicle/${vehicle.id}`} className={cn("relative overflow-hidden shrink-0 block", viewMode === "grid" ? "aspect-[4/3] w-full" : "w-full sm:w-72 h-48 sm:h-full")}>
                <img 
                  src={vehicle.images[0] === 'resim' ? 'https://images.unsplash.com/photo-1492144534655-ae79c964bc9d?q=80&w=2066&auto=format&fit=crop' : vehicle.images[0]} 
                  alt={`${vehicle.brand} ${vehicle.model}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>
              <div className={cn("p-5 flex flex-col flex-1", viewMode === "list" && "justify-between")}>
                <div className="flex justify-between items-start gap-4">
                  <Link to={`/vehicle/${vehicle.id}`}>
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-apex-accent-cyan transition-colors">{vehicle.brand} {vehicle.model}</h3>
                    <p className="text-sm text-gray-400">{vehicle.year} • {vehicle.mileage.toLocaleString()} mi</p>
                  </Link>
                  <div className="text-xl font-display font-bold text-apex-accent-cyan shrink-0">
                    {formatPrice(vehicle.price, currency)}
                  </div>
                </div>
                
                <div className={cn("grid gap-3 text-xs text-gray-400", viewMode === "grid" ? "grid-cols-2 mt-5 mb-5" : "grid-cols-3 my-4")}>
                  <div className="flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5" /> {vehicle.fuel}</div>
                  <div className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> {vehicle.transmission}</div>
                  {viewMode === "list" && <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {vehicle.location}</div>}
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  {vehicle.seller.type === "Dealer" ? (
                    <div className="text-xs font-medium text-black bg-apex-accent-cyan px-2 py-1 rounded">Dealer</div>
                  ) : (
                    <div className="text-xs text-gray-500">Private Seller</div>
                  )}
                  {viewMode === "grid" && <div className="text-xs text-gray-500 truncate ml-2"><MapPin className="w-3 h-3 inline mr-1 -mt-0.5"/>{vehicle.location}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
