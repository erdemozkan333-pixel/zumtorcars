import { Plus, Settings, FileText, Heart, Activity, CarFront, MessageSquare, LogOut } from "lucide-react";
import { mockVehicles } from "../data/mockData";
import { Link } from "react-router-dom";

export function Dashboard() {
  const activeListings = mockVehicles.slice(0, 2); // Mock some owned listings

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8">
      {/* Sidebar Nav */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-apex-surface border border-white/5 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-lg font-bold text-white shrink-0">
              JD
            </div>
            <div>
              <h3 className="font-medium text-white">John Doe</h3>
              <p className="text-xs text-gray-500">Private Seller</p>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Heart className="w-4 h-4" /> Saved Searches
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-red-500 hover:bg-red-500/10 transition-colors mt-4">
            <LogOut className="w-4 h-4" /> Sign Out
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 space-y-8">
        
        {/* Welcome Section */}
        <div className="bg-apex-surface p-12 text-center rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
          <p className="text-gray-400">Your dashboard is currently empty. Explore our marketplace and save your favorite vehicles.</p>
          <div className="mt-8">
            <Link to="/search" className="bg-apex-accent-cyan text-black px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
              Browse Vehicles
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
