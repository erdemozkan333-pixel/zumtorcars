/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SearchListings } from "./pages/SearchListings";
import { VehicleDetail } from "./pages/VehicleDetail";
import { Dashboard } from "./pages/Dashboard";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { ImportRequest } from "./pages/ImportRequest";
import { Favorites } from "./pages/Favorites";
import { Sell } from "./pages/Sell";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<SearchListings />} />
            <Route path="vehicle/:id" element={<VehicleDetail />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="import-request" element={<ImportRequest />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="sell" element={<Sell />} />
            {/* Fallbacks */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
