import React from "react";
import { Wrench, Car, Shield, Play } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Premium Auto Services</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          At ZUMTORCARS, we don't just sell luxury vehicles. We offer world-class maintenance, styling, and aftercare to keep your premium car in pristine condition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Service 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-apex-surface border border-white/5 rounded-3xl p-8 hover:border-apex-accent-cyan/50 transition-colors group"
        >
          <div className="w-14 h-14 bg-apex-accent-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-apex-accent-cyan group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Car Painting & Wrap</h3>
          <p className="text-gray-400 mb-6">
            From factory-finish resprays to custom vinyl wraps and PPF (Paint Protection Film) application. Protect and personalize your vehicle's aesthetic.
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">• <span className="text-gray-400">Custom Vinyl Wraps</span></li>
            <li className="flex items-center gap-2">• <span className="text-gray-400">Paint Protection Film (PPF)</span></li>
            <li className="flex items-center gap-2">• <span className="text-gray-400">Ceramic Coating</span></li>
          </ul>
        </motion.div>

        {/* Service 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-apex-surface border border-white/5 rounded-3xl p-8 hover:border-apex-accent-cyan/50 transition-colors group"
        >
          <div className="w-14 h-14 bg-apex-accent-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-apex-accent-cyan group-hover:scale-110 transition-transform">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Car Maintenance</h3>
          <p className="text-gray-400 mb-6">
            Expert mechanics specializing in exotic, high-performance, and luxury vehicles. We use exclusively OEM parts and meticulous diagnostics.
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">• <span className="text-gray-400">Performance Tuning</span></li>
            <li className="flex items-center gap-2">• <span className="text-gray-400">Scheduled Servicing</span></li>
            <li className="flex items-center gap-2">• <span className="text-gray-400">Advanced Diagnostics</span></li>
          </ul>
        </motion.div>

        {/* Service 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-apex-surface border border-white/5 rounded-3xl p-8 hover:border-apex-accent-cyan/50 transition-colors group"
        >
          <div className="w-14 h-14 bg-apex-accent-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-apex-accent-cyan group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Premium Car Wash</h3>
          <p className="text-gray-400 mb-6">
            Touchless exterior washing, precision paint decontamination, and interior deep detailing to keep your vehicle showroom-ready.
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">• <span className="text-gray-400">Interior Detailing</span></li>
            <li className="flex items-center gap-2">• <span className="text-gray-400">Leather Restoration</span></li>
            <li className="flex items-center gap-2">• <span className="text-gray-400">Odor Removal</span></li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
