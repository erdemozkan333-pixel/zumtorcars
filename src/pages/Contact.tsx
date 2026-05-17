import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
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
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact ZUMTORCARS</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get in touch with our team for inquiries, viewing appointments, or service bookings.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-apex-surface border border-white/5 rounded-3xl p-8 relative overflow-hidden"
        >
          {isSuccess ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-apex-surface z-10 text-center px-8">
               <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                 <Send className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
               <p className="text-gray-400">Thank you for contacting us. We'll get back to you shortly.</p>
             </div>
          ) : null}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                <input type="text" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input type="email" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
              <input type="tel" className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors" placeholder="+90 555 555 5555" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-apex-accent-cyan text-black font-bold h-12 w-full rounded-xl hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
              <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-apex-surface border border-white/5 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-apex-accent-cyan/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-apex-accent-cyan" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Our Location</h4>
                <p className="text-gray-400 text-sm">Mersin, Turkey</p>
              </div>
            </div>
            <div className="bg-apex-surface border border-white/5 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-apex-accent-cyan/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-apex-accent-cyan" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email Us</h4>
                <p className="text-gray-400 text-sm">info@zumtorcars.com</p>
              </div>
            </div>
          </div>

          <div className="bg-apex-surface border border-white/5 rounded-3xl overflow-hidden h-[400px] flex flex-col items-center justify-center p-8 text-center relative group cursor-pointer" onClick={() => window.open('https://maps.google.com/?q=Mersin,Turkey', '_blank')}>
            <div className="absolute inset-0 bg-[#080808] z-0">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
            </div>
            <div className="relative z-10 w-16 h-16 bg-apex-accent-cyan/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-apex-accent-cyan" />
            </div>
            <h3 className="relative z-10 font-bold text-white mb-2">View on Google Maps</h3>
            <p className="relative z-10 text-gray-400 text-sm">Mersin, Turkey</p>
            <div className="relative z-10 mt-6 px-6 py-2 border border-white/10 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
              Open Map
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
