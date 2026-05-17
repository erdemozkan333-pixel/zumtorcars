import React from "react";
import { Ship, Globe, FileCheck, Info } from "lucide-react";
import { motion } from "motion/react";

export function ImportRequest() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Custom Vehicle Import Request</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Can't find your dream car in our local inventory? Let ZUMTORCARS source it globally and handle the complete import process to Turkey.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-[2] bg-apex-surface border border-white/5 rounded-3xl p-8 relative overflow-hidden"
        >
          {isSuccess ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-apex-surface z-10 text-center px-8">
               <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                 <FileCheck className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
               <p className="text-gray-400">Our import specialists will contact you shortly to confirm the details.</p>
             </div>
          ) : null}

          <h2 className="text-xl font-bold text-white mb-6">Vehicle Requirements</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Make (Brand)</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. Porsche, Ferrari" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Model</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. 911 GT3 RS" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Year Preference</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. 2022 - 2024" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget (EUR/USD)</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. 250,000 EUR" />
              </div>
            </div>
            
            <div className="h-px bg-white/10 w-full my-6"></div>
            
            <h2 className="text-xl font-bold text-white mb-6">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="+90 555 555 5555" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Additional Notes / Ideal Specs</label>
              <textarea rows={4} className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors resize-none" placeholder="Prefer PTS colors, ceramic brakes, bucket seats..."></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-apex-accent-cyan text-black font-bold h-12 px-8 rounded-xl hover:bg-opacity-90 transition-colors w-full mt-4 disabled:opacity-50">
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </motion.div>

        {/* Info Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div className="bg-apex-surface-light border border-white/5 rounded-3xl p-6">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-apex-accent-cyan" />
            </div>
            <h3 className="font-bold text-white mb-2">Global Sourcing</h3>
            <p className="text-sm text-gray-400">We have partnered with elite dealers in Germany, UAE, and the USA to find exclusive allocations.</p>
          </div>
          
          <div className="bg-apex-surface-light border border-white/5 rounded-3xl p-6">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-apex-accent-cyan" />
            </div>
            <h3 className="font-bold text-white mb-2">Customs & Tax Handling</h3>
            <p className="text-sm text-gray-400">Our logistics team manages all ÖTV, KDV, and customs paperwork securely.</p>
          </div>
          
          <div className="bg-apex-surface-light border border-white/5 rounded-3xl p-6">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
              <Ship className="w-6 h-6 text-apex-accent-cyan" />
            </div>
            <h3 className="font-bold text-white mb-2">Secure Transit</h3>
            <p className="text-sm text-gray-400">Fully insured, enclosed trailer tracking from origin directly to your doorstep in Turkey.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
