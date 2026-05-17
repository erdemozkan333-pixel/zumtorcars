import { Heart, CarFront, Fuel, Zap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { mockVehicles } from "../data/mockData";
import { useAppContext } from "../context/AppContext";
import { formatPrice } from "../lib/utils";
import { motion } from "motion/react";

export function Favorites() {
  const { isLoggedIn, favorites, toggleFavorite, currency } = useAppContext();

  if (!isLoggedIn) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <Heart className="w-16 h-16 text-gray-600 mx-auto mb-6" />
        <h1 className="text-3xl font-display font-bold text-white mb-4">Saved Vehicles</h1>
        <p className="text-gray-400 mb-8">Please log in to view and manage your saved vehicles.</p>
      </div>
    );
  }

  const favoriteVehicles = mockVehicles.filter(v => favorites.includes(v.id));

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-display font-bold text-white mb-2">Saved Vehicles</h1>
      <p className="text-gray-400 mb-8">{favoriteVehicles.length} vehicles saved</p>

      {favoriteVehicles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteVehicles.map((vehicle, i) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-apex-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all hover:shadow-2xl flex flex-col relative"
            >
              <button 
                onClick={(e) => { e.preventDefault(); toggleFavorite(vehicle.id); }}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Remove from favorites"
              >
                <Heart className="w-5 h-5 fill-white text-white" />
              </button>
              
              <Link to={`/vehicle/${vehicle.id}`} className="relative overflow-hidden shrink-0 aspect-[4/3] w-full">
                <img 
                  src={vehicle.images[0] === 'resim' ? 'https://images.unsplash.com/photo-1492144534655-ae79c964bc9d?q=80&w=2066&auto=format&fit=crop' : vehicle.images[0]} 
                  alt={`${vehicle.brand} ${vehicle.model}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4">
                  <Link to={`/vehicle/${vehicle.id}`}>
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-apex-accent-cyan transition-colors">{vehicle.brand} {vehicle.model}</h3>
                    <p className="text-sm text-gray-400">{vehicle.year} • {vehicle.mileage.toLocaleString()} mi</p>
                  </Link>
                  <div className="text-xl font-display font-bold text-apex-accent-cyan shrink-0">
                    {formatPrice(vehicle.price, currency)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-400 mt-5 mb-5">
                  <div className="flex items-center gap-1.5"><Fuel className="w-3.5 h-3.5" /> {vehicle.fuel}</div>
                  <div className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> {vehicle.transmission}</div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  {vehicle.seller.type === "Dealer" ? (
                    <div className="text-xs font-medium text-black px-2 py-1 bg-apex-accent-cyan rounded">Dealer</div>
                  ) : (
                    <div className="text-xs text-gray-500">Private Seller</div>
                  )}
                  <div className="text-xs text-gray-500 truncate ml-2"><MapPin className="w-3 h-3 inline mr-1 -mt-0.5"/>{vehicle.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center flex flex-col items-center bg-apex-surface rounded-3xl border border-white/5">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No Favorites Yet</h3>
          <p className="text-gray-400 mb-6 max-w-sm mx-auto">You haven't saved any vehicles to your favorites. Explore our marketplace to find your dream car.</p>
          <Link to="/search" className="bg-apex-accent-cyan text-black px-6 py-2.5 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
            Browse Marketplace
          </Link>
        </div>
      )}
    </div>
  );
}
