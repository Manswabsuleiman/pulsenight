import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Movies from "./pages/Movies";
import Anime from "./pages/Anime";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import FantasyDetails from "./pages/FantasyDetails";
import SitcomDetails from "./pages/SitcomDetails";
import DramaDetails from "./pages/DramaDetails";
import RomanceDetails from "./pages/RomanceDetails";
import SpidermanDetails from "./pages/SpidermanDetails";
import GuardianDetails from "./pages/GuardianDetails";
import AvatarDetails from "./pages/AvatarDetails";
import VenomDetails from "./pages/VenomDetails";
import BuyTickets from "./pages/BuyTickets";
import Payment from "./pages/Payment";
import Layout from "../../Admin/Layout";
import SignIn from "./components/SignIn";

const App = () => {
  const location = useLocation();

  // ✅ Hide Navbar on admin routes
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <div>
      {/* ✅ Conditionally render Navbar */}
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/fantasy-details" element={<FantasyDetails />} />
        <Route path="/sitcom-details" element={<SitcomDetails />} />
        <Route path="/drama-details" element={<DramaDetails />} />
        <Route path="/romance-details" element={<RomanceDetails />} />
        <Route path="/spiderman-details" element={<SpidermanDetails />} />
        <Route path="/guardian-details" element={<GuardianDetails />} />
        <Route path="/avatar-details" element={<AvatarDetails />} />
        <Route path="/venom-details" element={<VenomDetails />} />
        <Route path="/buy-tickets/:title" element={<BuyTickets />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Layout />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
