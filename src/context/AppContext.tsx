import React, { createContext, useContext, useState } from 'react';

export type Currency = 'USD' | 'EUR' | 'TRY';

interface AppContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [favorites, setFavorites] = useState<string[]>([]);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, login, logout, currency, setCurrency, favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
