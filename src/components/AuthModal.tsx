import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const { login } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md"
          >
            <div className="bg-apex-surface border border-white/10 rounded-3xl p-8 shadow-2xl m-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-apex-accent/10 blur-3xl rounded-full"></div>
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  {mode === "login" ? "Welcome back" : "Create an account"}
                </h2>
                <p className="text-sm text-gray-400">
                  {mode === "login" ? "Sign in to access your saved vehicles and messages." : "Join APEX to buy, sell, and connect."}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-3 rounded-xl hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-[#000000] border border-white/20 text-white font-medium py-3 rounded-xl hover:bg-white/5 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.34-.84 3.65-.77 2 .05 3.36.96 4.21 2.22-3.32 1.95-2.73 6.2.5 7.42-.71 1.58-1.58 3.35-3.44 3.3zM12.03 7.25c-.15-2.22 1.63-4.08 3.86-4.25.26 2.39-1.9 4.31-3.86 4.25z"/>
                  </svg>
                  Continue with Apple
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-apex-surface px-4 text-gray-500">Or continue with email</span>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {mode === "register" && (
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors placeholder:text-gray-600" 
                    />
                  </div>
                )}
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors placeholder:text-gray-600" 
                  />
                </div>
                <div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full bg-apex-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apex-accent-cyan transition-colors placeholder:text-gray-600" 
                  />
                </div>
                <button type="submit" className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-gray-200 transition-colors mt-2">
                  {mode === "login" ? "Sign In" : "Create Account"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                {mode === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button onClick={() => setMode("register")} className="text-white hover:underline">Sign up</button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button onClick={() => setMode("login")} className="text-white hover:underline">Sign in</button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
