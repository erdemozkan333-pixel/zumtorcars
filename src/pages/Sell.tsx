import React from "react";
import { Camera, Check, CarFront } from "lucide-react";
import { motion } from "motion/react";

export function Sell() {
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
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Sell Your Vehicle</h1>
        <p className="text-gray-400 text-lg">List your premium vehicle on ZUMTORCARS and reach thousands of discerning buyers.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-apex-surface border border-white/5 rounded-3xl p-8 relative overflow-hidden"
      >
        {isSuccess ? (
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-apex-surface z-10 text-center px-8">
             <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
               <Check className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Listing Submitted!</h3>
             <p className="text-gray-400">Your vehicle is now pending review. You'll be notified once it's live.</p>
           </div>
        ) : null}

        <form className="space-y-8" onSubmit={handleSubmit}>
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CarFront className="w-5 h-5 text-apex-accent-cyan" /> 
              Vehicle Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Make</label>
                <select className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors">
                  <option value="">Select Make</option>
                  <option value="Porsche">Porsche</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Audi">Audi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Model</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. 911 Carrera S" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Year</label>
                <input type="number" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. 2023" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mileage</label>
                <input type="number" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. 15000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Price (USD)</label>
                <input type="number" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. 120000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="e.g. Mersin, Yenişehir" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-apex-accent-cyan" /> 
              Photos
            </h2>
            <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-apex-accent-cyan/50 transition-colors cursor-pointer bg-apex-bg/50">
              <Camera className="w-8 h-8 text-gray-500 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">Click to upload photos</p>
              <p className="text-sm text-gray-500">or drag and drop them here. High quality images are recommended.</p>
            </div>
          </section>

          <div className="pt-4">
            <button type="submit" disabled={isSubmitting} className="w-full bg-apex-accent-cyan text-black font-bold h-14 rounded-xl hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-50">
              <Check className="w-5 h-5" /> {isSubmitting ? "Submitting..." : "Submit Listing"}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              By submitting this listing, you agree to our terms of service and seller policies.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
